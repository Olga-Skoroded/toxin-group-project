import { boundMethod } from 'autobind-decorator';

import { HOME_PAGE } from 'shared/constants';
import { getAvatarByGender } from 'shared/helpers';

import {
  Authentication,
  UserCredential,
  Unsubscribe,
  User,
} from '../Firebase/modules/Authentication';
import { Database, CollectionReference } from '../Firebase/modules/Database';
import apiErrors from './errors/apiErrors';
import { AuthError } from './errors/AuthError';
import { ProfileData, AdditionalUserInformation } from './model';

class Auth {
  private readonly actions: Authentication;
  private readonly database: Database;
  private readonly reference: CollectionReference;

  constructor(actions: Authentication, database: Database) {
    this.actions = actions;
    this.database = database;
    this.reference = this.database.ref().collection('users');
  }

  @boundMethod
  public async signUp({
    name,
    surname,
    email,
    password,
    gender,
    birthDate,
    avatar,
  }: ProfileData): Promise<UserCredential> {
    let credential: UserCredential;

    try {
      credential = await this.actions.createUser(email, password);
    } catch ({ code }) {
      switch (code) {
        case 'auth/email-already-in-use':
          throw apiErrors.trigger('email-already-in-use');
        case 'auth/invalid-email':
          throw apiErrors.trigger('auth/invalid-email');
        case 'auth/weak-password':
          throw apiErrors.trigger('auth/weak-password');
        default:
          throw new AuthError();
      }
    }

    const { user } = credential;
    const photoURL = avatar && (await this.getPhotoURL(user.uid, avatar));

    user.updateProfile({
      displayName: `${name} ${surname}`,
      photoURL: photoURL || getAvatarByGender(gender),
    });

    await this.addAdditionalUserInformation(user.uid, { gender, birthDate });

    user.sendEmailVerification({ url: HOME_PAGE });

    return credential;
  }

  @boundMethod
  public async signIn(email: string, password: string): Promise<UserCredential> {
    let credential: UserCredential;

    try {
      credential = await this.actions.signIn(email, password);
    } catch ({ code }) {
      switch (code) {
        case 'auth/invalid-email':
          throw apiErrors.trigger('auth/invalid-email');
        case 'auth/user-disabled':
          throw apiErrors.trigger('auth/user-disabled');
        case 'auth/user-not-found':
          throw apiErrors.trigger('auth/user-not-found');
        case 'auth/wrong-password':
          throw apiErrors.trigger('auth/wrong-password');
        default:
          throw new AuthError();
      }
    }

    return credential;
  }

  @boundMethod
  public async signOut(): Promise<void> {
    return this.actions.signOut();
  }

  @boundMethod
  public async signInWithGoogle(): Promise<UserCredential> {
    return this.actions.signInWithGoogle();
  }

  @boundMethod
  public async resetPassword(email: string): Promise<void> {
    let resetPassword: void;

    try {
      resetPassword = await this.actions.resetPassword(email, { url: `${HOME_PAGE}/auth/login` });
    } catch ({ code }) {
      switch (code) {
        case 'auth/user-not-found':
          throw apiErrors.trigger('auth/user-not-found');
        case 'auth/invalid-email':
          throw apiErrors.trigger('auth/invalid-email');
        default:
          throw new AuthError();
      }
    }

    return resetPassword;
  }

  @boundMethod
  public async addAdditionalUserInformation(
    uid: string,
    data: AdditionalUserInformation,
  ): Promise<void> {
    this.database.post({ ref: this.reference, doc: uid, data });
  }

  @boundMethod
  public async updateAdditionalUserInformation(
    uid: string,
    data: AdditionalUserInformation,
  ): Promise<void> {
    this.database.update(this.reference.doc(uid), data);
  }

  @boundMethod
  public async getAdditionalUserInformation(uid: string): Promise<AdditionalUserInformation> {
    return this.database.getDocument(this.reference, uid);
  }

  @boundMethod
  public async getPhotoURL(uid: string, photo: ArrayBuffer | Blob | Uint8Array): Promise<string> {
    let photoURL: string;

    try {
      photoURL = await this.actions.setUserAvatar(uid, photo).then((url) => {
        return url;
      });
    } catch (err) {
      throw new AuthError();
    }

    return photoURL;
  }

  @boundMethod
  public async removeUserAvatar(uid: string): Promise<void> {
    try {
      this.actions.removeUserAvatar(uid);
    } catch (err) {
      throw new AuthError();
    }
  }

  @boundMethod
  public onStateChanged(fn: (user: User) => unknown): Unsubscribe {
    return this.actions.onAuthStateChanged(fn);
  }

  @boundMethod
  public async fetchSignInMethodsForEmail(email: string): Promise<string[]> {
    return this.actions.fetchSignInMethodsForEmail(email);
  }
}

export { Auth };

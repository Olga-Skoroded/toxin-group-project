import { boundMethod } from 'autobind-decorator';
import firebase from 'firebase';

import { Storage } from '../Storage';
import { Auth, UserCredential, User, Unsubscribe } from './model';

class Authentication {
  private readonly auth: Auth;
  private readonly storage: Storage;

  constructor(module: Auth, storage: Storage) {
    this.auth = module;
    this.storage = storage;
  }

  @boundMethod
  public async createUser(email: string, password: string): Promise<UserCredential> {
    return this.auth.createUserWithEmailAndPassword(email, password);
  }

  @boundMethod
  public async signIn(email: string, password: string): Promise<UserCredential> {
    return this.auth.app
      .auth()
      .setPersistence(firebase.auth.Auth.Persistence.LOCAL)
      .then(() => {
        return this.auth.signInWithEmailAndPassword(email, password);
      });
  }

  @boundMethod
  public async setUserAvatar(uid: string, file: ArrayBuffer | Blob | Uint8Array): Promise<string> {
    const filePath = `users/${uid}/profilePicture/${uid}-avatar`;
    const photoURL = await this.storage
      .childRef(filePath)
      .put(file)
      .then((fileSnapshot) => {
        return fileSnapshot.ref.getDownloadURL().then((url) => {
          return url;
        });
      });
    return photoURL;
  }

  @boundMethod
  public signInWithGoogle(): Promise<UserCredential> {
    const provider = new firebase.auth.GoogleAuthProvider();
    return this.auth.signInWithPopup(provider);
  }

  @boundMethod
  public async signOut(): Promise<void> {
    return this.auth.signOut();
  }

  @boundMethod
  public async resetPassword(email: string): Promise<void> {
    return this.auth.sendPasswordResetEmail(email);
  }

  @boundMethod
  public getCurrentUser(): User {
    return this.auth.currentUser;
  }

  @boundMethod
  public onAuthStateChanged(fn: (user: User) => unknown): Unsubscribe {
    return this.auth.onAuthStateChanged(fn);
  }

  @boundMethod
  public async fetchSignInMethodsForEmail(email: string): Promise<string[]> {
    return this.auth.fetchSignInMethodsForEmail(email);
  }
}

export { Authentication };

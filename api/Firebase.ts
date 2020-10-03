import { boundMethod } from 'autobind-decorator';
import * as firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

import { Authentication } from './modules/Authentication';
import {
  FirebaseApplication,
  DocumentReference,
  Post,
  DocumentData,
  CollectionReference,
  DB,
  IConfig,
} from './types';

class Firebase {
  public authentication: Authentication;
  private app: FirebaseApplication;
  private database: DB;

  constructor() {
    this.init();
  }

  @boundMethod
  public ref(): DB {
    return this.database;
  }

  @boundMethod
  public async getCollection(collection: CollectionReference): Promise<unknown> {
    const result: { [k: string]: unknown } = {};

    await collection.get().then((snapshot) =>
      snapshot.forEach((doc) => {
        result[doc.id] = doc.data();
      }),
    );

    return result;
  }

  @boundMethod
  public async getDocument(
    collection: CollectionReference,
    document: string,
  ): Promise<DocumentData> {
    const response = await collection.doc(document).get();
    return response.data();
  }

  @boundMethod
  public post(options: Post): void {
    const { ref, data } = options;

    if (options.doc) ref.doc(options.doc).set(data, { merge: options.merge });
    else ref.add(data);
  }

  @boundMethod
  public update(ref: DocumentReference, data: { [k: string]: unknown }): void {
    ref.update(data);
  }

  @boundMethod
  public removeDocument(ref: DocumentReference): void {
    ref.delete();
  }

  @boundMethod
  public removeFields(ref: DocumentReference, fields: string[]): void {
    const result: { [k: string]: unknown } = {};

    fields.forEach((value) => {
      result[value] = firebase.firestore.FieldValue.delete();
    });

    ref.update(result);
  }

  private init(): void {
    this.app = !firebase.apps.length ? firebase.initializeApp(this.getConfig()) : firebase.app();
    this.authentication = new Authentication(this.app.auth());
    this.database = this.app.firestore();
  }

  private getConfig(): IConfig {
    return {
      apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
      authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
      databaseURL: process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL,
      projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
      storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
      messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
      appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
    };
  }
}

export default Firebase;

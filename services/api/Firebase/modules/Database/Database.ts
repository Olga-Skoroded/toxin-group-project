import { boundMethod } from 'autobind-decorator';
import * as firebase from 'firebase/app';

import { DB, Post, DocumentReference, CollectionReference } from './model';

class Database {
  private readonly database: DB;

  constructor(db: DB) {
    this.database = db;
  }

  @boundMethod
  public ref(): DB {
    return this.database;
  }

  @boundMethod
  public async getCollection<T extends { [k: string]: unknown }>(
    collection: CollectionReference,
  ): Promise<T> {
    const result: { [k: string]: unknown } = {};

    await collection.get().then((snapshot) =>
      snapshot.forEach((doc) => {
        result[doc.id] = doc.data();
      }),
    );

    return result as T;
  }

  @boundMethod
  public async getDocument<T extends { [k: string]: unknown }>(
    collection: CollectionReference,
    document: string,
  ): Promise<T> {
    const response = await collection.doc(document).get();
    return response.data() as T;
  }

  @boundMethod
  public post({ ref, data, doc, merge }: Post): void {
    doc ? ref.doc(doc).set(data, { merge }) : ref.add(data);
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
}

export { Database };

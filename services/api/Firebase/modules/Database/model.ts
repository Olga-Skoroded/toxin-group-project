export type DB = firebase.firestore.Firestore;
export type DocumentData = firebase.firestore.DocumentData;
export type CollectionReference = firebase.firestore.CollectionReference<DocumentData>;
export type DocumentReference = firebase.firestore.DocumentReference<DocumentData>;
export type QuerySnapshot = firebase.firestore.QuerySnapshot<DocumentData>;
export type Timestamp = firebase.firestore.Timestamp;

type PostToNonExistedDocument = {
  ref: CollectionReference;
  doc?: null;
  merge?: null;
  data: { [k: string]: unknown };
};

type PostToExistedDocument = {
  ref: CollectionReference;
  doc: string;
  merge?: boolean;
  data: { [k: string]: unknown };
};

export type Post = PostToNonExistedDocument | PostToExistedDocument;

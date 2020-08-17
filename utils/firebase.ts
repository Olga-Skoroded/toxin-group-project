import * as fb from 'firebase/app';
import 'firebase/database';
import { FirebaseOptions } from '@firebase/app-types';
import { Database, DataSnapshot } from '@firebase/database-types';

class Firebase {
  public firebase: fb.app.App;

  public database: Database;

  constructor() {
    this.getData = this.getData.bind(this);
    this.init();
  }

  public getData(
    value: string,
    callback: (a: DataSnapshot, b?: string) => any,
    watch = true,
  ): ((a: DataSnapshot, b?: string) => any) | Promise<DataSnapshot> {
    const ref = this.firebase.database().ref(value);
    const method = watch ? 'on' : 'once';

    return ref[method]('value', callback);
  }

  private init(): void {
    this.firebase = !fb.apps.length
      ? fb.initializeApp(this.getConfig())
      : fb.app();

    this.database = (this.firebase as any).database();
  }

  private getConfig(): FirebaseOptions {
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

const { firebase, database, getData } = new Firebase();
export { firebase, database, getData };

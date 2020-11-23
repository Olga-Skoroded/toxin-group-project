import * as firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/storage';

import { config } from './config';
import { FirebaseApplication } from './model';
import { Authentication } from './modules/Authentication';
import { Database } from './modules/Database';
import { Storage } from './modules/Storage';

class Firebase {
  public readonly database: Database;
  public readonly authentication: Authentication;
  private readonly app: FirebaseApplication;
  private readonly storage: Storage;

  constructor() {
    this.app = !firebase.apps.length ? firebase.initializeApp(config) : firebase.app();
    this.database = new Database(this.app.firestore());
    this.storage = new Storage(this.app.storage());
    this.authentication = new Authentication(this.app.auth(), this.storage);
  }
}

export { Firebase };

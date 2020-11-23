import { boundMethod } from 'autobind-decorator';

import { Store, StorageReference } from './model';

class Storage {
  private readonly storage: Store;

  constructor(storage: Store) {
    this.storage = storage;
  }

  @boundMethod
  public ref(): StorageReference {
    return this.storage.ref();
  }

  @boundMethod
  public childRef(path: string): StorageReference {
    return this.storage.ref().child(path);
  }
}

export { Storage };

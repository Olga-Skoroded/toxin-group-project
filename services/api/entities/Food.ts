import { boundMethod } from 'autobind-decorator';

import { CollectionReference, Database } from '../Firebase/modules/Database';
import { FoodData } from './model';

class Food {
  private readonly actions: Database;
  private readonly reference: CollectionReference;

  constructor(actions: Database) {
    this.actions = actions;
    this.reference = this.actions.ref().collection('food');
  }

  @boundMethod
  public async add(id: string, data: FoodData): Promise<void> {
    this.actions.post({ ref: this.reference, doc: id, data });
  }

  @boundMethod
  public async update(id: string, data: FoodData): Promise<void> {
    this.actions.update(this.reference.doc(id), data);
  }

  @boundMethod
  public async load(): Promise<FoodData> {
    return this.actions.getCollection(this.reference);
  }
}

export { Food };

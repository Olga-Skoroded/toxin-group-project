import { boundMethod } from 'autobind-decorator';

import { CollectionReference, Database } from '../Firebase/modules/Database';
import { FoodOrderData, FoodData } from './model';

class Food {
  private readonly actions: Database;
  private readonly foodData: CollectionReference;
  private readonly foodOrder: CollectionReference;

  constructor(actions: Database) {
    this.actions = actions;
    this.foodData = this.actions.ref().collection('food');
    this.foodOrder = this.actions.ref().collection('food-order');
  }

  @boundMethod
  public async add(id: string, data: FoodData): Promise<void> {
    this.actions.post({ ref: this.foodData, doc: id, data });
  }

  @boundMethod
  public async update(id: string, data: FoodData): Promise<void> {
    this.actions.update(this.foodData.doc(id), data);
  }

  @boundMethod
  public async load(): Promise<FoodData> {
    return this.actions.getCollection(this.foodData);
  }

  @boundMethod
  public async order(data: FoodOrderData): Promise<void> {
    this.actions.post({ ref: this.foodOrder, data });
  }
}

export { Food };

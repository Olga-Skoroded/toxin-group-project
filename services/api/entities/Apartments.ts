import { boundMethod } from 'autobind-decorator';

import { Database, CollectionReference } from '../Firebase/modules/Database';
import { Apartment, Review } from './model';

class Apartments {
  private readonly actions: Database;
  private readonly reference: CollectionReference;

  constructor(actions: Database) {
    this.actions = actions;
    this.reference = this.actions.ref().collection('apartments');
  }

  @boundMethod
  public async add(data: Apartment): Promise<void> {
    this.actions.post({ ref: this.reference, doc: String(data.id), data });
  }

  @boundMethod
  public async remove(id: Apartment['id']): Promise<void> {
    this.actions.removeDocument(this.reference.doc(String(id)));
  }

  @boundMethod
  public update(id: Apartment['id'], data: Partial<Apartment>): void {
    this.actions.update(this.reference.doc(String(id)), data);
  }

  @boundMethod
  public async load(id: Apartment['id']): Promise<Apartment> {
    return this.actions.getDocument(this.reference, String(id));
  }

  @boundMethod
  public async setReviewLike(roomId: string, reviews: Review[]): Promise<void> {
    this.reference.doc(String(roomId)).update({ reviews });
  }
}

export { Apartments };

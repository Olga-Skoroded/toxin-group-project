import { boundMethod } from 'autobind-decorator';

import { CollectionReference, Database } from '../Firebase/modules/Database';
import { ContactUsData } from './model';

class ContactUs {
  private readonly actions: Database;
  private readonly reference: CollectionReference;

  constructor(actions: Database) {
    this.actions = actions;
    this.reference = this.actions.ref().collection('contact-us');
  }

  @boundMethod
  public async add(data: ContactUsData): Promise<void> {
    this.actions.post({ ref: this.reference, data });
  }
}

export { ContactUs };

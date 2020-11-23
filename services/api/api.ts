import { Auth, Apartments, Booking, Subscriptions } from './entities';
import { Firebase } from './Firebase';

export class Api {
  public readonly auth: Auth;
  public readonly booking: Booking;
  public readonly apartments: Apartments;
  public readonly subscriptions: Subscriptions;

  constructor() {
    const { authentication, database } = new Firebase();
    this.auth = new Auth(authentication, database);
    this.booking = new Booking(database);
    this.apartments = new Apartments(database);
    this.subscriptions = new Subscriptions(database);
  }
}

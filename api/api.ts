import { Auth, Apartments, Booking } from './entities';
import { Firebase } from './Firebase';

class Api {
  public readonly auth: Auth;
  public readonly booking: Booking;
  public readonly apartments: Apartments;

  constructor() {
    const { authentication, database } = new Firebase();
    this.auth = new Auth(authentication, database);
    this.booking = new Booking(database);
    this.apartments = new Apartments(database);
  }
}

export default new Api();

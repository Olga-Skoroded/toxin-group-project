import { Apartments, Auth, Booking, Food, Subscriptions } from './entities';
import { Firebase } from './Firebase';

export class Api {
  public readonly apartments: Apartments;
  public readonly auth: Auth;
  public readonly booking: Booking;
  public readonly food: Food;
  public readonly subscriptions: Subscriptions;

  constructor() {
    const { authentication, database } = new Firebase();
    this.apartments = new Apartments(database);
    this.auth = new Auth(authentication, database);
    this.booking = new Booking(database);
    this.food = new Food(database);
    this.subscriptions = new Subscriptions(database);
  }
}

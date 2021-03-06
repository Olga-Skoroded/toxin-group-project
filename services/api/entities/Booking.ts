import { boundMethod } from 'autobind-decorator';
import { nanoid } from 'nanoid';

import { defaultFilters } from 'features/Rooms/SearchRoomForm/SearchRoomForm.fixture';
import { BookingData as ClientBookingData } from 'shared/model';
import { matchObjects } from 'utils/object.utils';

import { Database, CollectionReference, QuerySnapshot } from '../Firebase/modules/Database';
import { BookingData, Apartment, Filters, BookedRoom, BookedRoomsHistory } from './model';

class Booking {
  private readonly actions: Database;
  private readonly booked: CollectionReference;
  private readonly apartments: CollectionReference;

  constructor(actions: Database) {
    this.actions = actions;
    this.booked = this.actions.ref().collection('booked');
    this.apartments = this.actions.ref().collection('apartments');
  }

  @boundMethod
  public add(data: BookingData): void {
    const uniqueId = nanoid();
    this.actions.post({
      ref: this.booked,
      doc: uniqueId,
      data: { ...data, id: uniqueId },
    });
  }

  @boundMethod
  public remove(id: number): void {
    this.actions.removeDocument(this.booked.doc(String(id)));
  }

  @boundMethod
  public update(id: number, data: Partial<BookingData>): void {
    this.actions.update(this.booked.doc(String(id)), data);
  }

  @boundMethod
  public async getAllRooms(): Promise<Apartment[]> {
    return this.apartments.get().then((snapshot) => this.addDataToStorage(snapshot, []));
  }

  @boundMethod
  public async filterRooms(options: Filters = defaultFilters): Promise<Apartment[]> {
    const { price, booked } = options;
    const availableClasses = Object.keys(options.class).filter(
      (elem) => options.class[elem] !== false,
    );
    const affordableRooms: Apartment[] = await this.apartments
      .where('price', '<=', price.to)
      .where('price', '>=', price.from)
      .get()
      .then((snapshot) => this.addDataToStorage(snapshot, []));

    const checkRoomClass = (checkableClass: string): boolean => {
      return availableClasses.some((roomClass) => roomClass === checkableClass);
    };

    const bookedRoomIDs = await this.getBooked(new Date(booked.from), new Date(booked.to));

    const availableRooms = affordableRooms.filter(
      (room) => !bookedRoomIDs.includes(room.id) && checkRoomClass(room.class),
    );

    const comparableOptions: (keyof Filters)[] = [
      'amenities',
      'additionalAmenities',
      'accessibility',
      'opportunities',
    ];

    return availableRooms.filter((room) =>
      comparableOptions.every((option) => this.areRequirementsMet(options[option], room[option])),
    );
  }

  @boundMethod
  public async getBookedHistory(email: string): Promise<Record<string, BookedRoom[]>> {
    const bookedRooms: BookingData[] = [];

    await this.booked
      .where('reservationBy', '==', email)
      .get()
      .then((snapshot) => {
        snapshot.forEach((item) => {
          const data: BookingData = <BookingData>item.data();
          bookedRooms.push(data);
        });
      });

    const result: BookedRoomsHistory = {
      current: [],
      history: [],
    };

    // eslint-disable-next-line no-restricted-syntax
    for await (const bookedRoom of bookedRooms) {
      await this.apartments
        .where('id', '==', bookedRoom.apartmentId)
        .get()
        .then((snapshot) => {
          snapshot.forEach((item) => {
            const roomData: Apartment = <Apartment>item.data();
            const dateFrom = bookedRoom.from.toDate();
            const dateTo = bookedRoom.to.toDate();

            if (dateTo.getTime() < Date.now()) {
              result.history.push({
                room: roomData,
                bookedData: { from: dateFrom, to: dateTo },
              });
            } else {
              result.current.push({
                room: roomData,
                bookedData: { from: dateFrom, to: dateTo },
              });
            }
          });
        });
    }

    return result;
  }

  @boundMethod
  public async cancelBooking({
    apartmentId,
    from,
    reservationBy,
  }: ClientBookingData): Promise<void> {
    this.booked
      .where('reservationBy', '==', reservationBy)
      .where('apartmentId', '==', apartmentId)
      .get()
      .then((snapshot) => {
        snapshot.docs.forEach((doc) => {
          const documentBookFrom = doc.data().from.toDate().toLocaleDateString();

          if (documentBookFrom === from.toLocaleDateString()) {
            this.actions.removeDocument(this.booked.doc(doc.id));
          }
        });
      });
  }

  @boundMethod
  public setBookedByUser(selectedBooking: ClientBookingData): void {
    this.booked.doc(String(Date.now())).set(selectedBooking);
  }

  @boundMethod
  public async getBooked(from: Date, to: Date): Promise<number[]> {
    function addIDsToStorage(snapshot: QuerySnapshot, storage: BookingData[]) {
      snapshot.forEach((doc) => storage.push(doc.data() as BookingData));
    }

    const bookedStorage: BookingData[] = [];
    const bookedBeforeTo = this.booked.where('from', '<=', to).get();
    await bookedBeforeTo.then((snapshot) => addIDsToStorage(snapshot, bookedStorage));

    const unbookedStorage: BookingData[] = [];
    const unbookedAfterFrom = this.booked.where('to', '>=', from).get();
    await unbookedAfterFrom.then((snapshot) => addIDsToStorage(snapshot, unbookedStorage));

    const result: Set<number> = new Set();

    bookedStorage.forEach((booked) => {
      unbookedStorage.forEach((unbooked) => {
        matchObjects(booked, unbooked) && result.add(booked.apartmentId);
      });
    });

    return Array.from(result);
  }

  // TODO: создать метод удаления просроченных полей

  private addDataToStorage<T extends BookingData | Apartment>(
    snapshot: QuerySnapshot,
    storage: T[],
  ) {
    snapshot.forEach((doc) => storage.push(doc.data() as T));
    return storage;
  }

  private areRequirementsMet<T extends { [k: string]: boolean | number }>(
    userOption: T,
    roomOption: T,
  ): boolean {
    return Object.keys(userOption).every((prop) => {
      const userValue = userOption[prop];
      const roomValue = roomOption[prop];

      return Number(roomValue) >= Number(userValue);
    });
  }
}

export { Booking };

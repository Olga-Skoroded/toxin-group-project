import { boundMethod } from 'autobind-decorator';

import { ApartmentsError } from './ApartmentsError';
import { AuthError } from './AuthError';
import { DatabaseError } from './DatabaseError';

type ErrorConstructor = ApartmentsError | AuthError | DatabaseError;

class ApiErrors {
  private list: { [k: string]: (...rest: unknown[]) => ErrorConstructor };

  constructor() {
    this.list = {};
    this.init();
  }

  @boundMethod
  public trigger(key: string, ...rest: unknown[]): ErrorConstructor {
    return this.list[key](...rest);
  }

  private init(): void {
    this.add(
      AuthError,
      'email-already-in-use',
      () => 'The user with the specified email address is already registered',
    );
    this.add(AuthError, 'auth/invalid-email', () => 'Invalid email address');
    this.add(AuthError, 'auth/user-disabled', () => 'The user is blocked');
    this.add(
      AuthError,
      'auth/weak-password',
      () => 'The password should be 6 characters long or more',
    );
    this.add(AuthError, 'auth/wrong-password', () => 'Wrong password');
    this.add(
      AuthError,
      'auth/user-not-found',
      () => 'The user with the specified email address is not registered',
    );
    this.add(
      ApartmentsError,
      'apartments/nothing-found',
      (path) => `Unfortunately nothing found at the path: '${path}'`,
    );
    this.add(DatabaseError, 'database/complete-clean-up', () => 'Trying to clean up the database');
  }

  private add(
    constructor: { new (param?: { [k: string]: unknown }): ErrorConstructor },
    key: string,
    handler: (...rest: unknown[]) => string,
  ): void {
    this.list[key] = (...rest: unknown[]) => new constructor({ key, message: handler(...rest) });
  }
}

export default new ApiErrors();

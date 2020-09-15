import ErrorsConstructor from './ErrorsConstructor';

type ApartmentsErrorTypes = {
  key?: string;
  message?: string;
}

class DatabaseError extends ErrorsConstructor {
  constructor({ key, message }: ApartmentsErrorTypes = {}) {
    super({ key, message, name: 'Database' });
  }
}

export default DatabaseError;

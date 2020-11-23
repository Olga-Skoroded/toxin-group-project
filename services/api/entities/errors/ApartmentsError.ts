import { ErrorsConstructor } from './ErrorsConstructor';

type ApartmentsErrorTypes = {
  key?: string;
  message?: string;
};

class ApartmentsError extends ErrorsConstructor {
  constructor({ key, message }: ApartmentsErrorTypes = {}) {
    super({
      key,
      message,
      name: 'Apartments',
    });
  }
}

export { ApartmentsError };

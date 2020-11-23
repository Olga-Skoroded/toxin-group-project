import { ErrorsConstructor } from './ErrorsConstructor';

type AuthErrorTypes = {
  key?: string;
  message?: string;
};

class AuthError extends ErrorsConstructor {
  constructor({ key, message }: AuthErrorTypes = {}) {
    super({ key, message, name: 'Authentication' });
  }
}

export { AuthError };

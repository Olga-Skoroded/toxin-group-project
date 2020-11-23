class ErrorsConstructor extends Error {
  public readonly name: string;
  public readonly message: string;
  public readonly key: string;

  constructor({ name = '', key = '', message = 'Unknown error' } = {}) {
    super(message);

    name && (this.name = name);
    key && (this.key = key);
    this.message = message;
  }
}

export { ErrorsConstructor };

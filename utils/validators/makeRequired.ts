const makeRequired = (value: string): string | null =>
  !value ? 'Please fill in this field' : null;

export { makeRequired };

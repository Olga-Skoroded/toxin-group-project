export type Validator = (value: string | number | readonly string[]) => string | null;

const composeValidators = (validators: Array<Validator>) => (
  value: string | number | readonly string[],
): string | Validator => validators.reduce((error, validator) => error || validator(value), null);

export { composeValidators };

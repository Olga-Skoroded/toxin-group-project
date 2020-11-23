export type WordForms = [string, string, string];

export type Item = {
  title: string;
  groupName?: string;
  wordForms?: WordForms;
  min?: number;
  max?: number;
  initialValue?: number;
  inputName?: string;
};

export type Group = {
  name: string;
  max?: number;
  min?: number;
  wordForms: WordForms;
};

export type DropdownProps = {
  items: Item[];
  placeholder: string;
  name: string;
  groups?: Group[];
  enableControls?: boolean;
  disabled?: boolean;
};

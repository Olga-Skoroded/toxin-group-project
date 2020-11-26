export type SliderProps = {
  value: number | number[];
  name: string;
  max?: number;
  min?: number;
  step?: number;
  onChange?: (value: number | number[]) => void;
  onPointerUp?: () => void;
};

export type StarProps = {
  iconName: string;
};

export type StarRatingProps = {
  name: string;
  disabled?: boolean;
  rating?: number;
  starCount?: number;
};

export type StarRatingKeywords = {
  [key: string]: string;
};

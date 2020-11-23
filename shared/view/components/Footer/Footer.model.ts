export type SubscriptionProps = {
  title: string;
  text: string;
};

export type LogoProps = {
  description: string;
};

export type CopyrightProps = {
  copyrightText: string;
};

export type SubscriptionBlockProps = {
  subscription?: SubscriptionProps;
};

export type FooterProps = Partial<SubscriptionBlockProps & CopyrightProps & LogoProps>;

export type NavItem = {
  href: string;
  text: string;
};

export type NavItemProps = {
  title: string;
  items: NavItem[];
};

export type NavProps = {
  items?: NavItemProps[];
};

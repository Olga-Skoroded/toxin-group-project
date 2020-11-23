export type NavSubMenu = { name: string; path: string };

export type NavMenuLink = {
  name: string;
  path: string;
  isActive?: boolean;
  subMenu?: NavSubMenu[];
};

export type NavMain = {
  menu: NavMenuLink[];
};

export type NavSubMenu = { name: string; path: string };

export type NavMenuLink = {
  name: string;
  path: string;
  subMenu?: NavSubMenu[];
};

export type NavMain = {
  menu: NavMenuLink[];
};

export type NavItem = {
  key: string;
  text: string;
  url: string;
};

export const navItems: NavItem[] = [
  { key: "about", text: "About", url: "/about" },
  { key: "works", text: "Works", url: "/works" },
  { key: "contact", text: "Contact", url: "/contact" },
];

interface SocialIcons {
  id?: number;
  icon: string;
  link: string;
}

export const SocialIcons: SocialIcons[] = [
  { id: 1, icon: '/icons/facebook.svg', link: "https://www.facebook.com/"},
  { id: 2, icon: '/icons/instagram.svg', link: "https://www.instagram.com/?hl=en" },
  { id: 3, icon: '/icons/tiktok.svg', link: "https://www.tiktok.com/" },
];


export interface NavLink {
  id?: number;
  title: string;
  links: string;
}

export const NavLinks: NavLink[] = [
  { id: 1, title: "Home", links: "/#" },
  { id: 2, title: "About us", links: "/#about" },
  { id: 3, title: "Gallery", links: "/#gallery" },
  { id: 4, title: "Contact", links: "/#contact" },
];
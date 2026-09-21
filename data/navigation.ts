export interface NavLink {
  label: string;
  href: string;
  children?: NavLink[];
}

export const mainNavLinks: NavLink[] = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  {
    label: 'Pages',
    href: '#',
    children: [
      { label: 'Our Team', href: '/team' },
      { label: 'Error Page', href: '/404' },
      { label: 'Blog', href: '/blog' },
      { label: 'Blog Grid', href: '/blog-grid' },
      { label: 'Case Studies 2', href: '/case-studies' },
    ],
  },
  { label: 'Contact', href: '/contact' },
];

export const footerCompanyLinks: NavLink[] = [
  { label: 'About Us', href: '/about' },
  { label: 'Our Team', href: '/team' },
  { label: 'Case Studies', href: '/case-studies' },
  { label: 'Contact Us', href: '/contact' },
];

export const footerQuickLinks: NavLink[] = [
  { label: 'Services', href: '/services' },
  { label: 'Blog', href: '/blog' },
  { label: 'Blog Grid', href: '/blog-grid' },
  { label: 'Error Page', href: '/404' },
];

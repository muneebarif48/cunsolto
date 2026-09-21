export interface ServiceItem {
  id: string;
  title: string;
  icon: string;
  description: string;
  href: string;
}

export const servicesData: ServiceItem[] = [
  {
    id: 'estate-planning',
    title: 'Estate Planning',
    icon: 'flaticon-presentation',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry simply dummy text typesetting.',
    href: '/services',
  },
  {
    id: 'insurance-retirement',
    title: 'Insurance & Retirement',
    icon: 'flaticon-cheque',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry simply dummy text typesetting.',
    href: '/services',
  },
  {
    id: 'finance-restructuring',
    title: 'Finance & Restructuring',
    icon: 'flaticon-safebox',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry simply dummy text typesetting.',
    href: '/services',
  },
  {
    id: 'strategy-planning',
    title: 'Strategy & Planning',
    icon: 'flaticon-graphics',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry simply dummy text typesetting.',
    href: '/services',
  },
  {
    id: 'taxes-efficiency',
    title: 'Taxes & Efficience',
    icon: 'flaticon-tax',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry simply dummy text typesetting.',
    href: '/services',
  },
  {
    id: 'audit-evaluation',
    title: 'Audit & Evaluation',
    icon: 'flaticon-search',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry simply dummy text typesetting.',
    href: '/services',
  },
];

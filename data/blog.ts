export interface BlogPost {
  id: string;
  title: string;
  date: string;
  image: string;
  categories: string[];
  summary: string;
  href: string;
}

export const blogData: BlogPost[] = [
  {
    id: 'role-of-finance',
    title: 'Role of Finance in a Business From Bronto',
    date: 'Jan 20, 2019',
    image: '/images/blog/01_blog.jpg',
    categories: ['Business Tips', 'Marketing'],
    summary: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusm tempor incididunt ut labore et dolore magna aliqua...',
    href: '/blog',
  },
  {
    id: 'household-spend',
    title: 'How does your household spend compare to the UK?',
    date: 'Jan 25, 2019',
    image: '/images/blog/02_blog.jpg',
    categories: ['Financial', 'Business Tips'],
    summary: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusm tempor incididunt ut labore et dolore magna aliqua...',
    href: '/blog',
  },
  {
    id: 'blue-monday',
    title: 'Four ways to cheer yourself up on Blue Monday!',
    date: 'Jan 30, 2019',
    image: '/images/blog/03_blog.jpg',
    categories: ['Investment tips', 'Consulting'],
    summary: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusm tempor incididunt ut labore et dolore magna aliqua...',
    href: '/blog',
  },
];

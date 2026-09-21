export interface CaseStudyItem {
  id: string;
  title: string;
  image: string;
  categoryTags: string[];
  filterCategory: 'business' | 'consulting' | 'finance' | 'investing';
  description: string;
  href: string;
}

export const caseStudiesData: CaseStudyItem[] = [
  {
    id: 'banking-consulting',
    title: 'Banking Consulting',
    image: '/images/case-study/01_case-study.jpg',
    categoryTags: ['Business Tips', 'Consulting'],
    filterCategory: 'consulting',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry simply dummy text typesetting.',
    href: '/case-studies',
  },
  {
    id: 'business-development',
    title: 'Business Development',
    image: '/images/case-study/02_case-study.jpg',
    categoryTags: ['Finance', 'Leasing'],
    filterCategory: 'finance',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry simply dummy text typesetting.',
    href: '/case-studies',
  },
  {
    id: 'merger-acquisition',
    title: 'Merger & Acquistion',
    image: '/images/case-study/03_case-study.jpg',
    categoryTags: ['Business Tips', 'Investing'],
    filterCategory: 'investing',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry simply dummy text typesetting.',
    href: '/case-studies',
  },
  {
    id: 'brand-strategy',
    title: 'Brand Strategy',
    image: '/images/case-study/04_case-study.jpg',
    categoryTags: ['Business Tips', 'Branding'],
    filterCategory: 'business',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry simply dummy text typesetting.',
    href: '/case-studies',
  },
  {
    id: 'investment-planning',
    title: 'Investment Planning',
    image: '/images/case-study/05_case-study.jpg',
    categoryTags: ['Business Tips', 'Investing'],
    filterCategory: 'investing',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry simply dummy text typesetting.',
    href: '/case-studies',
  },
  {
    id: 'financial-planning',
    title: 'Financial Planning',
    image: '/images/case-study/06_case-study.jpg',
    categoryTags: ['Marketing', 'Finance'],
    filterCategory: 'finance',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry simply dummy text typesetting.',
    href: '/case-studies',
  },
];

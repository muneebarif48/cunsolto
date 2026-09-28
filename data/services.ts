export interface ServiceItem {
  id: string;
  title: string;
  icon: string;
  description: string;
  href: string;
}

export const servicesData: ServiceItem[] = [
  {
    id: 'homework-help',
    title: 'Assignment Help',
    icon: 'fas fa-pencil-alt',
    description:
      'Get guidance on assignment requirements, topic understanding, planning and academic structure. We help students break complex tasks into manageable steps and develop stronger study habits.',
    href: '/services',
  },
  {
    id: 'research-work-support',
    title: 'Research Work Support',
    icon: 'fas fa-search',
    description:
      'Learn how to find credible sources, evaluate evidence and build stronger academic arguments. Research support helps students improve literature reviews, source selection and critical analysis.',
    href: '/services',
  },
  {
    id: 'case-study-assignment-help',
    title: 'Case Study Assignment Help',
    icon: 'fas fa-briefcase',
    description:
      'Receive support with case study analysis, theory application, problem identification and recommendation development. Learn how to structure case studies using academic frameworks and evidence-based reasoning.',
    href: '/services',
  },
  {
    id: 'dissertation-writing-support',
    title: 'Dissertation Writing Support',
    icon: 'fas fa-graduation-cap',
    description:
      'Support for dissertation planning, literature reviews, research methodology, chapter structure and academic development. Large research projects require clear planning and research direction.',
    href: '/services',
  },
  {
    id: 'powerpoint-presentation-support',
    title: 'PowerPoint Presentation Support',
    icon: 'fas fa-desktop',
    description:
      'Improve presentation structure, slide design, content organization and academic storytelling. Learn how to communicate ideas clearly and professionally.',
    href: '/services',
  },
  {
    id: 'business-plan-assignment-help',
    title: 'Business Plan Assignment Help',
    icon: 'fas fa-chart-line',
    description:
      'Develop stronger business plans through guidance on market research, business strategy, financial planning and professional presentation.',
    href: '/services',
  },
  {
    id: 'essay-writing-help',
    title: 'Essay Writing Help',
    icon: 'fas fa-feather-alt',
    description:
      'Improve essay planning, argument development, critical thinking and academic writing quality. Learn how to create evidence-based essays that address assignment objectives.',
    href: '/services',
  },
];

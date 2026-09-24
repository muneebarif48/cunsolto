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
    title: 'Homework Help',
    icon: 'fas fa-pencil-alt',
    description:
      'Get guidance on homework tasks, understanding requirements and developing well-structured academic responses.',
    href: '/services',
  },
  {
    id: 'research-work-support',
    title: 'Research Work Support',
    icon: 'fas fa-search',
    description:
      'Learn how to identify credible academic sources, structure research and develop stronger evidence-based arguments.',
    href: '/services',
  },
  {
    id: 'case-study-assignment-help',
    title: 'Case Study Assignment Help',
    icon: 'fas fa-briefcase',
    description:
      'Receive support with case study analysis, problem identification, recommendations and academic structure.',
    href: '/services',
  },
  {
    id: 'dissertation-writing-support',
    title: 'Dissertation Writing Support',
    icon: 'fas fa-graduation-cap',
    description:
      'Get assistance with topic selection, literature reviews, research planning, methodology and dissertation structure.',
    href: '/services',
  },
  {
    id: 'powerpoint-presentation-support',
    title: 'PowerPoint Presentation Support',
    icon: 'fas fa-desktop',
    description:
      'Create professional academic presentations with stronger content structure, visual organization and delivery planning.',
    href: '/services',
  },
  {
    id: 'business-plan-assignment-help',
    title: 'Business Plan Assignment Help',
    icon: 'fas fa-chart-line',
    description:
      'Develop clear business plans with guidance on market analysis, strategy, financial planning and presentation.',
    href: '/services',
  },
  {
    id: 'essay-writing-help',
    title: 'Essay Writing Help',
    icon: 'fas fa-feather-alt',
    description:
      'Improve essay structure, critical thinking, argument development and academic writing quality.',
    href: '/services',
  },
];

export interface StatItem {
  id: string;
  icon: string;
  value: string;
  label: string;
}

export const statsData: StatItem[] = [
  {
    id: 'students',
    icon: 'fas fa-user-graduate',
    value: '1000+',
    label: 'Students Supported',
  },
  {
    id: 'projects',
    icon: 'fas fa-project-diagram',
    value: '500+',
    label: 'Projects Guided',
  },
  {
    id: 'subjects',
    icon: 'fas fa-book-open',
    value: 'Multiple Subjects',
    label: 'Academic Support Available',
  },
];

export interface StatItem {
  id: string;
  icon: string;
  value: string;
  label: string;
}

export const statsData: StatItem[] = [
  {
    id: 'projects',
    icon: 'flaticon-finance',
    value: '7.165',
    label: 'Projects Completed',
  },
  {
    id: 'investment',
    icon: 'flaticon-line-graphic',
    value: '2.575',
    label: 'Successful Investment',
  },
  {
    id: 'growth',
    icon: 'flaticon-jar',
    value: '1.706',
    label: 'Business Growth',
  },
  {
    id: 'experience',
    icon: 'flaticon-summit',
    value: '40',
    label: 'Years Of Experience',
  },
];

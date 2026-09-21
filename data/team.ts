export interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
  socials: {
    facebook?: string;
    twitter?: string;
    instagram?: string;
    dribbble?: string;
    linkedin?: string;
  };
}

export const teamData: TeamMember[] = [
  {
    id: 'james-wane',
    name: 'James Wane',
    role: 'Marketing',
    image: '/images/team/01_team.jpg',
    socials: {
      facebook: '#',
      twitter: '#',
      instagram: '#',
      dribbble: '#',
    },
  },
  {
    id: 'marko-smith',
    name: 'Marko Smith',
    role: 'Consultant',
    image: '/images/team/02_team.jpg',
    socials: {
      facebook: '#',
      twitter: '#',
      instagram: '#',
      dribbble: '#',
    },
  },
  {
    id: 'john-tommy',
    name: 'John Tommy',
    role: 'Chief Executive Officer',
    image: '/images/team/03_team.jpg',
    socials: {
      facebook: '#',
      twitter: '#',
      instagram: '#',
      dribbble: '#',
    },
  },
];

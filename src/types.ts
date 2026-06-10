export interface Trek {
  id: string;
  name: string;
  difficulty: 'Easy' | 'Moderate' | 'Difficult' | 'Challenging';
  distance: string;
  duration: string;
  altitude: string;
  elevationGain: string;
  bestSeason: string;
  myRole: string;
  challengesFaced: string;
  leadershipResponsibilities: string[];
  lessonsLearned: string;
  experienceStory: string;
  description: string;
  imageUrl: string;
  gallery: string[];
}

export interface TimelineEvent {
  year: string;
  title: string;
  trekName: string;
  description: string;
  imageUrl: string;
  category: 'Milestone' | 'Trek' | 'Certification';
}

export interface LeadershipStory {
  id: string;
  title: string;
  problem: string;
  action: string;
  result: string;
  lesson: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  quote: string;
  rating: number;
  imageUrl: string;
  trekName: string;
}

export interface FitnessRoutine {
  id: string;
  title: string;
  description: string;
  duration: string;
  intensity: 'Medium' | 'High' | 'Extreme';
  benefits: string[];
}

export interface FutureGoal {
  year: string;
  title: string;
  description: string;
  milestones: string[];
}

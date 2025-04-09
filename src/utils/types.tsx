export type Project =
{
  src: any;
  link: string;
  heading: string;
  description: string;
  features: string;
  web: string;
  id: number;
  anchor: string;
};

  
  export type JourneyItem = {
    year: number;
    description: string;
    projectIds: string[]; // references to Project by ID
  };

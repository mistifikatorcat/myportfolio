export type Project = {
    id: string;
    name: string;
    anchor: string;
    // Optional extras:
    description?: string;
    technologies?: string[];
  };
  
  export type JourneyItem = {
    year: number;
    description: string;
    projectIds: string[]; // references to Project by ID
  };

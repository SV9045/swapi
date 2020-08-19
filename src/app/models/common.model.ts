export interface Person {
  birth_year: string;
  eye_color: string;
  films?: string[];
  hair_color: string;
  height: number;
  homeworld?: string;
  mass: number;
  name: string;
  skin_color: string;
  created?: string;
  edited?: string;
  url: string;
  species?: string[];
  vehicles?: string[];
  starships?: string[];
  gender: Gender;
}

export interface Planet {
  climate: string;
  created: string,
  edited: string;
  diameter: number;
  films?: string[];
  gravity: string;
  name: string;
  orbital_period: number;
  population: number;
  residents?: string[];
  rotation_period: number;
  surface_water: number;
  terrain: string;
  url: string;
}

export enum Gender{
  Female = 'female',
  Male = 'male',
  NA = 'n/a',
}

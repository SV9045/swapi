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
	gender: string;
}

export interface Planet {
	climate: string;
	created: string;
	edited: string;
	diameter: number;
	films?: string[];
	gravity: string;
	name: string;
	orbital_period: number;
	population: number;
	residents?: string[];
	rotation_period: number;
	surface_water: any;
	terrain: string;
	url: string;
}

export interface Movie {
  characters: string[];
  created: string;
  edited: string;
  episode_id: number;
  opening_crawl: string;
  producer: string;
  planets?: string[];
  release_date: Date;
  title: string;
  url: string;
  vehicles?: string[];
  starships: string[];
  specis: string[]
}

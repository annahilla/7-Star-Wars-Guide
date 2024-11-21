export interface Starship {
  name: string,
  model: string,
  cost_in_credits: string,
  max_atmosphering_speed: string,
  manufacturer: string,
  length: string,
  crew: string,
  url: string,
  pilots:string[],
  films: string[]
}

export interface Pilot {
  url: string,
  name: string,
}

export interface Film {
  url: string,
  title: string,
  director: string,
}
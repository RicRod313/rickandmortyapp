
export class Characters {

  info: Info;
  results: Result[];

  constructor(jsonResponse: any){
    this.info = jsonResponse.info;
    this.results = jsonResponse.results;
  }
}

class Origin {
  name: string | undefined;
  url: string | undefined;
}

class Location {
  name: string;
  url: string;

  constructor(location: any){
    this.name = location.name;
    this.url = location.url;
  }
}

class Result {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: Origin;
  location: Location;
  image: string;
  episode: string[];
  url: string;
  created: string;

  constructor(result: any){
    this.id = result.id;
    this.name = result.name;
    this.status = result.status;
    this.species = result.species;
    this.type = result.type;
    this.gender = result.gender;
    this.origin = result.origin;
    this.location = result.location;
    this.image = result.image;
    this.episode = result.episode;
    this.url = result.url;
    this.created = result.created;
  }
}

class Info {
  count: number;
  pages: number;
  next: string;
  prev: string;

  constructor(Info: any){
    this.count = Info.count;
    this.pages = Info.pages;
    this.next = Info.next;
    this.prev = Info.prev;
  }
}

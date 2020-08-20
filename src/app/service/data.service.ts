import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { Person, Planet } from 'src/app/models/common.model';

@Injectable({
	providedIn: 'root'
})
export class DataService {
  people: Person[];
  person: Person;
  planets: Planet[];
  planet: Planet;

  private peopleUrl = 'https://swapi.dev/api/people';
  private planetsUrl = 'https://swapi.dev/api/planets';
	constructor(private http: HttpClient) {}

  // Get people from STAR WARS API
	getPeople(): Observable<Person[]> {
		return this.http.get<Person[]>(this.peopleUrl).pipe(
			map((data) => this.people = data['results']));
  }

  // Get single person from the STAR WARS API.
  getPerson(id: number): Observable<Person> {
	  const personUrl = `https://swapi.dev/api/people/${id}`;
    return this.http.get<Person>(personUrl).pipe(
      map((data) => this.person = data)
    )
  }

  // Get all Planets from STAR WARS API.
  getPlanets(): Observable<Planet[]> {
    return this.http.get<Planet[]>(this.planetsUrl).pipe(
      map((data) => this.planets = (data['results']))
    )
  }

  getPalent(id: number) {
    const planetUrl = `https://swapi.dev/api/planets/${id}`;
    return this.http.get<Planet>(planetUrl).pipe(
      map((data) => this.planet = data)
    )
  }
}

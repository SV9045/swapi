import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Person } from 'src/app/models/common.model';

@Injectable({
	providedIn: 'root'
})
export class DataService {
  people: Person[];
  person: Person;

	private peopleUrl = 'https://swapi.dev/api/people';
	constructor(private http: HttpClient) {}

	getPeople(): Observable<Person[]> {
		return this.http.get<Person[]>(this.peopleUrl).pipe(
			map((data) => this.people = data['results']));
  }

  getPerson(id: number): Observable<Person> {
	  const personUrl = `https://swapi.dev/api/people/${id}`;
    return this.http.get<Person>(personUrl).pipe(
      map((data) => this.person = data)
    )
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Movie, Person, Planet } from 'src/app/models/common.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  people: Person[];

  planets: Planet[];

  Movies: Movie[];

  private peopleUrl = 'https://swapi.dev/api/people';
  private planetsUrl = 'https://swapi.dev/api/planets';
  private moviesUrl = 'https://swapi.dev/api/films';

  constructor(private http: HttpClient) {}

  // Get people from STAR WARS API
  getPeople(): Observable<Person[]> {
    return this.http
      .get<Person[]>(this.peopleUrl)
      .pipe(map((data) => (this.people = data['results'])));
  }

  // Get single person from the STAR WARS API.
  getPerson(id: number): Observable<Person> {
    const personUrl = `https://swapi.dev/api/people/${id}`;
    return this.http.get<Person>(personUrl).pipe(
      tap((data) => console.log(data)),
      catchError(this.handleError)
    );
  }

  // Get all Planets from STAR WARS API.
  getPlanets(): Observable<Planet[]> {
    return this.http.get<Planet[]>(this.planetsUrl).pipe(
      map((data) => (this.planets = data['results'])),
      catchError(this.handleError)
    );
  }

  // get single planet fro STAR WARS API
  getPlaent(id: number): Observable<Planet> {
    const planetUrl = `https://swapi.dev/api/planets/${id}`;
    return this.http.get<Planet>(planetUrl).pipe(
      tap((data) => console.log(data)),
      catchError(this.handleError)
    );
  }

  // get all movies from STAR WARS API
  getMovies(): Observable<Movie[]> {
    return this.http.get<Movie[]>(this.moviesUrl).pipe(
      map((data) => (this.Movies = data['results'])),
      catchError(this.handleError)
    );
  }

  // get single movie from STAR WARS API
  getMovie(id: number): Observable<Movie> {
    const movieUrl = `https://swapi.dev/api/films/${id}`;
    return this.http.get<Movie>(movieUrl).pipe(
      tap((data) => console.log(data)),
      catchError(this.handleError)
    );
  }

  private handleError(err): Observable<never> {
    // in a real world app, we may send the server to some remote logging infrastructure
    // instead of just logging it to the console
    let errorMessage: string;
    if (err.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      errorMessage = `An error occurred: ${err.message}`;
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      errorMessage = `Backend returned code ${err.status}: ${err.body.error}`;
    }
    return throwError(errorMessage);
  }
}

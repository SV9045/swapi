import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/data.service';
import { Movie } from 'src/app/models/common.model';
import { Observable } from 'rxjs';

@Component({
	selector: 'app-movie-list',
	templateUrl: './movie-list.component.html',
	styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
	movies: Observable<Movie[]>;

	constructor(private data: DataService) {}

	ngOnInit(): void {
		this.movies = this.getMovies();
		// console.log(this.people.forEach((el) => console.log(el[0].url)))
	}

	private getMovies(): Observable<Movie[]> {
		return this.data.getMovies();
	}
}

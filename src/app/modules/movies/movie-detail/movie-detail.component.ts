import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/models/common.model';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/service/data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {
	movie: Observable<Movie>;
  constructor(private route: ActivatedRoute,
              private data: DataService) { }

  ngOnInit(): void {
    const id = this.route.snapshot.url[0].path;
    console.log(id)
		if (id) {
      const movieId = +id;
      this.movie = this.getMovie(movieId);
		}
	}

	getMovie(id: number): Observable<Movie> {
		return this.data.getMovie(id);
	}

}

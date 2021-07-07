import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Movie } from 'src/app/models/common.model';
import { DataService } from 'src/app/service/data.service';

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
    this.route.paramMap.subscribe((params) => {
      const id = +params.get('id');
      this.movie = this.getMovie(id);
    });
	}

	getMovie(id: number): Observable<Movie> {
		return this.data.getMovie(id);
	}

}

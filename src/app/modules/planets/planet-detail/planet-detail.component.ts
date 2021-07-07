import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Planet } from 'src/app/models/common.model';
import { DataService } from 'src/app/service/data.service';

@Component({
	selector: 'app-planet-detail',
	templateUrl: './planet-detail.component.html',
	styleUrls: ['./planet-detail.component.css']
})
export class PlanetDetailComponent implements OnInit {
	planet: Observable<Planet>;
  constructor(private data: DataService,
              private route: ActivatedRoute) {}

	ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const id = +params.get('id');
      this.planet = this.getPlanet(id);
    });
	}

	getPlanet(id: number): Observable<Planet> {
		return this.data.getPlaent(id);
	}
}

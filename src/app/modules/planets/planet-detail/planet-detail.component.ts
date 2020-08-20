import { Component, OnInit } from '@angular/core';
import { Planet } from 'src/app/models/common.model';
import { DataService } from 'src/app/service/data.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

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
    const id = this.route.snapshot.url[0].path;
    // console.log(id)
		if (id) {
      const planetId = +id;
      this.planet = this.getPlanet(planetId);
		}
	}

	getPlanet(id: number): Observable<Planet> {
		return this.data.getPlaent(id);
	}
}

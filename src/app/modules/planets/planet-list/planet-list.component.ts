import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Planet } from 'src/app/models/common.model';
import { DataService } from 'src/app/service/data.service';

@Component({
	selector: 'app-planet-list',
	templateUrl: './planet-list.component.html',
	styleUrls: ['./planet-list.component.css']
})
export class PlanetListComponent implements OnInit {
	planets: Observable<Planet[]>;
	constructor(private data: DataService) {}

	ngOnInit(): void {
		this.planets = this.getPlanets();
		// console.log(this.planets.forEach((el) => console.log(el[0])));
	}

	private getPlanets(): Observable<Planet[]> {
		return this.data.getPlanets();
	}
}

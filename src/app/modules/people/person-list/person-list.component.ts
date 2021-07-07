import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Person } from 'src/app/models/common.model';
import { DataService } from 'src/app/service/data.service';

@Component({
	selector: 'app-person-list',
	templateUrl: './person-list.component.html',
	styleUrls: ['./person-list.component.css']
})
export class PersonListComponent implements OnInit {
	people: Observable<Person[]>;
	constructor(private data: DataService) {}

	ngOnInit(): void {
		this.people = this.getPeople();
	}

	private getPeople(): Observable<Person[]> {
		return this.data.getPeople();
	}
}

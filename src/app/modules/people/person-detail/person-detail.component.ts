import { Component, OnInit } from '@angular/core';
import { Person } from 'src/app/models/common.model';
import { DataService } from 'src/app/service/data.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
	selector: 'app-person-detail',
	templateUrl: './person-detail.component.html',
	styleUrls: ['./person-detail.component.css']
})
export class PersonDetailComponent implements OnInit {
	person: Observable<Person>;
  constructor(private data: DataService,
              private route: ActivatedRoute) {}

	ngOnInit(): void {
		const id = this.route.snapshot.url[0].path;
		if (id) {
			const personId = +id;
			// console.log(personId);
			this.person = this.getPerson(personId);
		}
	}

	getPerson(id: number): Observable<Person> {
		return this.data.getPerson(id);
	}
}

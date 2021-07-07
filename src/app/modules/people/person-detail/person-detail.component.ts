import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Person } from 'src/app/models/common.model';
import { DataService } from 'src/app/service/data.service';

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
    this.route.paramMap.subscribe((params) => {
      const id = +params.get('id');
      this.person = this.getPerson(id);
    });
	}

	getPerson(id: number): Observable<Person> {
		return this.data.getPerson(id);
	}
}

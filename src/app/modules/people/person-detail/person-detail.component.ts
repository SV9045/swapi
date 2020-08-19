import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/service/data.service';
import { Observable } from 'rxjs';
import { Person } from 'src/app/models/common.model';

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
	const id = this.route.snapshot.url[1].path;
    if(id) {
      const personId = +id;
      // console.log(personId);
      this.person = this.getPerson(personId);
    }
  }

  getPerson(id: number) {
    return this.data.getPerson(id);
  }
}

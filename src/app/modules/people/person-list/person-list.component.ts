import { Component, OnInit } from '@angular/core';
import { Person } from 'src/app/models/common.model';
import { DataService } from 'src/app/service/data.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.css']
})
export class PersonListComponent implements OnInit {
  people: Observable<Person[]>;
  constructor(private data: DataService,
              private router: Router) { }

  ngOnInit(): void {
    this.people = this.getPeople();
    console.log(this.people.forEach((el) => console.log(el[0].url)))
  }

  private getPeople(): Observable<Person[]> {
    return this.data.getPeople();
  }

}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PersonListComponent } from 'src/app/modules/people/person-list/person-list.component';
import { PersonDetailComponent } from 'src/app/modules/people/person-detail/person-detail.component';

const routes: Routes = [
  { path: '', component: PersonListComponent},
  { path: 'people/:id', component: PersonDetailComponent}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class PeopleRoutingModule {}

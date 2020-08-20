import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/material/material/material.module';
import { CoreModule } from 'src/app/core/core.module';
import { PeopleRoutingModule } from 'src/app/modules/people/people-routing.module';

import { PersonListComponent } from 'src/app/modules/people/person-list/person-list.component';
import { PersonDetailComponent } from 'src/app/modules/people/person-detail/person-detail.component';

@NgModule({
  declarations: [
    PersonDetailComponent,
    PersonListComponent],
	imports: [
    CommonModule,
    MaterialModule,
    CoreModule,
    PeopleRoutingModule
  ]
})
export class PeopleModule {}

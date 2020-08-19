import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/material/material/material.module';
import { CoreModule } from 'src/app/core/core.module';

import { PersonListComponent } from './person-list/person-list.component';
import { PersonDetailComponent } from './person-detail/person-detail.component';
import { PeopleRoutingModule } from 'src/app/modules/people/people-routing.module';

@NgModule({
	declarations: [PersonDetailComponent, PersonListComponent],
	imports: [CommonModule, MaterialModule, CoreModule, PeopleRoutingModule],
	exports: []
})
export class PeopleModule {}

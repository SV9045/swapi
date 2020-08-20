
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreModule } from 'src/app/core/core.module';
import { MaterialModule } from 'src/app/material/material/material.module';
import { PlanetRoutingModule } from 'src/app/modules/planets/planet-routing.module';

import { PlanetListComponent } from 'src/app/modules/planets/planet-list/planet-list.component';
import { PlanetDetailComponent } from 'src/app/modules/planets/planet-detail/planet-detail.component';

@NgModule({
  declarations: [
    PlanetListComponent,
    PlanetDetailComponent
  ],
  imports: [
    CommonModule,
    CoreModule,
    MaterialModule,
    PlanetRoutingModule
  ]
})
export class PlanetModule { }

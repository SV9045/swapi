import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlanetListComponent } from 'src/app/modules/planets/planet-list/planet-list.component';
import { PlanetDetailComponent } from 'src/app/modules/planets/planet-detail/planet-detail.component';

const routes: Routes = [
  { path: '', component: PlanetListComponent },
  { path: ':id', component: PlanetDetailComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlanetRoutingModule { }

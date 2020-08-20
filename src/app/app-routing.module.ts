import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from 'src/app/welcome/welcome.component';

const routes: Routes = [
  { path: 'welcome', component: WelcomeComponent },
  { path: '', redirectTo: 'welcome', pathMatch: 'full' },
  { path: 'people',
    loadChildren: () => import('src/app/modules/people/people.module').then((m) => m.PeopleModule) },
  { path: 'planets',
    loadChildren: () => import('src/app/modules/planets/planet.module').then((m) => m.PlanetModule) },
  { path: 'movies',
    loadChildren: () => import('src/app/modules/movies/movie.module').then((m) => m.MovieModule) }
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule {}

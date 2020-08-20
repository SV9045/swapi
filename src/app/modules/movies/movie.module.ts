import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreModule } from 'src/app/core/core.module';
import { MaterialModule } from 'src/app/material/material/material.module';
import { MovieRoutingModule } from 'src/app/modules/movies/movie-routing.module';

import { MovieListComponent } from 'src/app/modules/movies/movie-list/movie-list.component';
import { MovieDetailComponent } from 'src/app/modules/movies/movie-detail/movie-detail.component';


@NgModule({
  declarations: [
    MovieListComponent,
    MovieDetailComponent
  ],
  imports: [
    CommonModule,
    CoreModule,
    MaterialModule,
    MovieRoutingModule
  ]
})
export class MovieModule { }

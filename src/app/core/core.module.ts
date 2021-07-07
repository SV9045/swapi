import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HeaderComponent } from 'src/app/core/components/header/header.component';
import { MaterialModule } from 'src/app/material/material/material.module';

@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    HeaderComponent,
    MaterialModule
  ]
})
export class CoreModule { }

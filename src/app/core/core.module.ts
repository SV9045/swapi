import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HeaderComponent } from 'src/app/core/components/header/header.component';
import { WelcomeComponent } from 'src/app/core/components/welcome/welcome.component';
import { MaterialModule } from 'src/app/material/material/material.module';

@NgModule({
  declarations: [
    HeaderComponent,
    WelcomeComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    HeaderComponent,
    WelcomeComponent,
    MaterialModule
  ]
})
export class CoreModule { }

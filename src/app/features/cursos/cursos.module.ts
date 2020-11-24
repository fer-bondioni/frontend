import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CursosRoutingModule } from './cursos-routing.module';
import { CursosComponent } from './cursos.component';
import { AllComponent } from './pages/all/all.component';
import { SingleComponent } from './pages/single/single.component';


@NgModule({
  declarations: [CursosComponent, AllComponent, SingleComponent],
  imports: [
    CommonModule,
    CursosRoutingModule
  ]
})
export class CursosModule { }

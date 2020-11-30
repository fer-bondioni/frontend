import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CursosRoutingModule } from './cursos-routing.module';
import { CursosComponent } from './cursos.component';
import { AllComponent } from './pages/all/all.component';
import { SingleComponent } from './pages/single/single.component';
import { CreateComponent } from './pages/create/create.component';


@NgModule({
  declarations: [CursosComponent, AllComponent, SingleComponent, CreateComponent],
  imports: [
    CommonModule,
    CursosRoutingModule
  ],
  exports: [CursosComponent, AllComponent, SingleComponent,CreateComponent],
})
export class CursosModule { }

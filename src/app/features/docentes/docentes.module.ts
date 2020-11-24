import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DocentesRoutingModule } from './docentes-routing.module';
import { DocentesComponent } from './docentes.component';
import { AllComponent } from './pages/all/all.component';
import { CreateComponent } from './pages/create/create.component';


@NgModule({
  declarations: [DocentesComponent, AllComponent, CreateComponent],
  imports: [
    CommonModule,
    DocentesRoutingModule
  ]
})
export class DocentesModule { }

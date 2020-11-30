import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllComponent } from './pages/all/all.component';
import { SingleComponent } from './pages/single/single.component';
import { AuthGuard } from '../auth.guard';
import { CreateComponent } from '../docentes/pages/create/create.component';


const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'all',
        component: AllComponent,
      },
      {
        canActivateChild: [AuthGuard],
        path: ':id',
        component: SingleComponent,
      },
      {
        path:'create',
        component: CreateComponent,
      }
    ],
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CursosRoutingModule {}
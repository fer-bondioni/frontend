import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllComponent } from './pages/all/all.component';
import { SingleComponent } from './pages/single/single.component';
import { AuthGuard } from '../auth.guard';


const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'all',
        component: AllComponent,
      },
      {
        // canActivateChild: [AuthGuard],
        path: ':id',
        component: SingleComponent,
      },
    ],
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CursosRoutingModule {}
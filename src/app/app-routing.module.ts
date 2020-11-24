import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { AuthGuard } from './features/auth.guard';
const usersModule = () =>
  import('./features/users/users.module').then((m) => m.UsersModule);
const cursosModule = () =>
  import('./features/cursos/cursos.module').then((m) => m.CursosModule);
const docentesModule = () =>
  import('./features/docentes/docentes.module').then((m) => m.DocentesModule);
const pipesModule = () =>
  import('./features/pipes/pipes.module').then((m) => m.PipesModule);
// cuando se solicita una ruta -> módulo

// docentes
const routes: Routes = [
  {path: 'docentes', loadChildren: docentesModule },
  {path: 'cursos', loadChildren:cursosModule},
  {path: 'users', loadChildren:usersModule},
  {path: 'pipes', loadChildren: pipesModule },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '',loadChildren: () => import('../app/dashboard/dashboard.module').then(m => m.DashboardModule)},
  { path: 'search',loadChildren: () => import('../app/search/search.module').then(m => m.SearchModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

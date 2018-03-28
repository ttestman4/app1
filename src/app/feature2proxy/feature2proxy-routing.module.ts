import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Lib2Module, childRoutes } from '@ttestman4/lib2';

const routes: Routes = [{
  path: 'feature2comp',
  children: childRoutes
},
{ path: '', redirectTo: 'feature2comp', pathMatch: 'full' }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Feature2proxyRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {nonFunctionalRoutes } from '../non-functional/non-functional.module';


const routes: Routes = [
  // { path: 'root', loadChildren: '../non-functional/non-functional.module#NonFunctionalModule'  },
  { path: 'root', children: nonFunctionalRoutes },
  { path: 'feature1', loadChildren: '../feature1/feature1.module#Feature1Module'  },
  { path: '', redirectTo: 'root', pathMatch: 'full' },
  { path: '**', redirectTo: 'root', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Route1Component } from './route1/route1.component';
import { Route2Component } from './route2/route2.component';
import { Route5Component } from './route5/route5.component';
import { Route6Component } from './route6/route6.component';

const routes: Routes = [
    {
      path:'route1',
      component:Route1Component
    },
    {
      path:'route2',
      component:Route2Component
    },
    {
      path:'route3',
      loadChildren:()=>import('./timer/timer.module').then(m=>m.TimerModule)
    },
    {
      path:'route4',
      loadChildren:()=>import('./timer-using-service/timer-using-service.module').then(m=>m.TimerUsingServiceModule)
    },
    {
      path:'route5',
      component:Route5Component
    },
    {
      path:'route6',
      component:Route6Component
    },
    {
      path:'',
      redirectTo:'route1',
      pathMatch:'full'
  },
]
@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }

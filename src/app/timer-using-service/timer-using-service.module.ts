import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TimerUsingServiceRoutingModule } from './timer-using-service-routing.module';
import { CountdownComponent } from './countdown/countdown.component';
import { TimerControlsComponent } from './timer-controls/timer-controls.component';
import { TimerLoggerComponent } from './timer-logger/timer-logger.component';
import { ActionCountComponent } from './action-count/action-count.component';
import { ContainerComponent } from './container/container.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CountdownComponent,
    TimerControlsComponent,
    TimerLoggerComponent,
    ActionCountComponent,
    ContainerComponent
  ],
  imports: [
    CommonModule,
    TimerUsingServiceRoutingModule, FormsModule
  ]
})
export class TimerUsingServiceModule { }

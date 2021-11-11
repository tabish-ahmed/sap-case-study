import { Component, OnInit } from '@angular/core';
import { TimerService } from '../timer.service';

@Component({
  selector: 'app-timer-controls',
  templateUrl: './timer-controls.component.html',
  styleUrls: ['./timer-controls.component.css'],
})
export class TimerControlsComponent implements OnInit {
  time: number = 0;
  constructor(public timerService: TimerService) {}

  ngOnInit(): void {}

}

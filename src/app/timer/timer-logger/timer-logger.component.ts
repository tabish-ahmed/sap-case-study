import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-timer-logger',
  templateUrl: './timer-logger.component.html',
  styleUrls: ['./timer-logger.component.css']
})
export class TimerLoggerComponent implements OnInit {
@Input() logger:any;
  constructor() { }

  ngOnInit(): void {
  }

}

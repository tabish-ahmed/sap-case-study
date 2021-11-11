import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-timer-controls',
  templateUrl: './timer-controls.component.html',
  styleUrls: ['./timer-controls.component.css'],
})
export class TimerControlsComponent implements OnInit {
  time: number = 0;
  @Input() logger:any;
  @Output() start: EventEmitter<number> = new EventEmitter<number>();
  @Output() pause: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() reset: EventEmitter<any> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}
  startTimer() {
    this.start.emit(this.time);
    this.time=0
  }
  pauseTimer() {
    this.pause.emit(false)
  }
  resetTimer() {
    this.reset.emit(false)
    this.time=0
  }
}

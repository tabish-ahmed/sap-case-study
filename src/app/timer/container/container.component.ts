import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css'],
})
export class ContainerComponent implements OnInit {
  timeLeft: number = 0;
  interval: any;
  paused: number = 0;
  started: number = 0;
  logger:any=[]
  constructor() {}

  ngOnInit(): void {}
  action(value: number) {
    if (value && value > 0) {
      this.timeLeft = value;
      this.startTimer();
    }else if(this.timeLeft && !this.interval){
      this.startTimer();
    }
  }
  pause(val: boolean) {
    if(this.interval){
      clearInterval(this.interval);
      this.logger.push({type:'Paused', time:new Date(), timerVal:this.timeLeft})
      this.paused += 1;
      this.interval=undefined  
    }
  }
  reset(val: boolean) {
    clearInterval(this.interval);
    this.timeLeft = 0;
    this.paused = 0;
    this.started = 0;
    this.interval=undefined  
    this.logger.length=0
  }

  startTimer() {
    this.logger.push({type:'Started', time:new Date(), timerVal:this.timeLeft})
    this.started += 1;
    if (this.interval) {
      clearInterval(this.interval);
    }
    this.interval = setInterval(() => {
      if (this.timeLeft > 0) {
        this.timeLeft--;
      } else {
        clearInterval(this.interval);
      }
    }, 1000);
  }
}

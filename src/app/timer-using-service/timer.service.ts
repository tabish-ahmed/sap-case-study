import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TimerService {
  timeLeft: number = 0;
  interval: any;
  paused: number = 0;
  started: number = 0;
  logger:any=[]
  constructor() {}

  ngOnInit(): void {
    
  }
  action=(value: number)=> {
    if (value && value > 0) {
      this.timeLeft = value;
      this.startTimer();
    }else if(this.timeLeft && !this.interval){
      this.startTimer();
    }
  }
  pause=()=> {
    if(this.interval){
      clearInterval(this.interval);
      this.logger.push({type:'Paused', time:new Date(), timerVal:this.timeLeft})
      this.paused += 1;
      this.interval=undefined  
    }
  }
  reset=()=> {
    clearInterval(this.interval);
    this.timeLeft = 0;
    this.paused = 0;
    this.started = 0;
    this.interval=undefined  
    this.logger.length=0
  }

  startTimer=()=> {
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

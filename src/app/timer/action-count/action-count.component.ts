import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-action-count',
  templateUrl: './action-count.component.html',
  styleUrls: ['./action-count.component.css']
})
export class ActionCountComponent implements OnInit {
@Input() paused:number=0
@Input() started:number=0

  constructor() { }

  ngOnInit(): void {
  }

}

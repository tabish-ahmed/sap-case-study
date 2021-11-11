import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-route6',
  templateUrl: './route6.component.html',
  styleUrls: ['./route6.component.css'],
})
export class Route6Component implements OnInit {
  divCount:number = 15;
    
  @HostListener('window:scroll', [])
  onScroll(): void {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
      this.divCount += 5;
    }
  }
  constructor() {}

  ngOnInit(): void {}
  showAlert = (index: number) => {
    alert(`Button inside div ${index} clicked`);
  };
}

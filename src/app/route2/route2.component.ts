import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-route2',
  templateUrl: './route2.component.html',
  styleUrls: ['./route2.component.css']
})
export class Route2Component implements OnInit {
viewType='grid';
productData:any=[]
  constructor() { 

  }

  ngOnInit(): void {
    this.generateData()
  }
  sort(event:any){
    if(event.target.value  === 'asc'){
      this.productData.sort((a: any, b: any) => (a.price > b.price ? 1 : -1));      
    }else if(event.target.value  === 'desc') {
    this.productData.sort((a: any, b: any) => (a.price < b.price ? 1 : -1));
    }else {
      this.generateData()
    }

  }

  generateData(){
    this.productData.length=0
    for(let i=0; i< 40; i++){
      this.productData.push({name:'Product'+(i+1), price:Math.floor((Math.random() * 100) + 1)})
    }
  }
}

import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-route5',
  templateUrl: './route5.component.html',
  styleUrls: ['./route5.component.css'],
})
export class Route5Component implements OnInit {
  studentsData: any = [];
  headings: any = [];
  sortKey: string = '';
  order: number = 1;//Order=1 for Ascending, 2 for descending, 3 for Resetting the data
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.fetchData();
  }
  // Feting the data from JSON
  fetchData() {
    this.http.get('assets/students.json').subscribe((data: any) => {
      this.studentsData = data?.students;
      this.headings = Object.keys(this.studentsData[0]);
    });
  }
  // Sorting the data
  sort(key: string, order:number) {
    if(order === 1){
      this.studentsData.sort((a: any, b: any) => (a[key] > b[key] ? 1 : -1));
    }else if(order === 2) {
      this.studentsData.sort((a: any, b: any) => (a[key] < b[key] ? 1 : -1));
    }else {
      this.fetchData()
    }
    this.order > 2 ? this.order = 1 : this.order+=1;
    this.sortKey = key;
  }
}

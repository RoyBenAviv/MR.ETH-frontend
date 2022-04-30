import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  width:string =  '700px';
  height:string = '700px'

  constructor() { }

  ngOnInit(): void {
  }

}

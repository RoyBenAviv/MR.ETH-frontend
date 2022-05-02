import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'move-list',
  templateUrl: './move-list.component.html',
  styleUrls: ['./move-list.component.scss']
})
export class MoveListComponent implements OnInit {
@Input() moves: any[]
@Input() title: string
@Input() cmp: string
  constructor() { }

  ngOnInit(): void {
  }

}

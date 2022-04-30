import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  constructor(private userService: UserService) { }


  title = 'mr.ethereum';
  currPage: string = 'home'
  setRoute(page: string): void {
    this.currPage = page
  }

  ngOnInit(): void {
    this.userService.getUser()
  }
}

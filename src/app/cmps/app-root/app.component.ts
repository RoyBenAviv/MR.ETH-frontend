import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  constructor(private userService: UserService, private router: Router) { }


  title = 'mr.ethereum';
  currPage: string = 'home'


  logout() {
    this.userService.logout()
    this.router.navigateByUrl('/signup');
  }

  setRoute(page: string): void {
    this.currPage = page
  }

  ngOnInit(): void {
    this.userService.getUser()
  }
}

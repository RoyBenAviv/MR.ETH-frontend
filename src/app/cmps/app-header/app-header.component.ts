import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';
@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.scss']
})
export class AppHeaderComponent implements OnInit {

  constructor(private userService: UserService) { }

  lightmode = false;
  user$!: Observable<User>

  switchTheme() {
    this.lightmode = !this.lightmode
    if(this.lightmode) {
      document.querySelector('body').classList.add('light')
      document.querySelector('.header-logo').classList.add('light')
      document.querySelector('.user-profile').classList.add('light')
      document.querySelector('.navbar').classList.add('light')
    } else {
      document.querySelector('body').classList.remove('light')
      document.querySelector('.header-logo').classList.remove('light')
      document.querySelector('.user-profile').classList.remove('light')
      document.querySelector('.navbar').classList.remove('light')
    }
  }

  ngOnInit(): void {
    this.userService.getUser()
      this.user$ = this.userService.user$
  }

}

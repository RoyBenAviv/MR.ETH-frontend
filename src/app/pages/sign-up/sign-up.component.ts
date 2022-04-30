import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
@Component({
  selector: 'sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  options = {
    path: '../../../assets/animations/finance.json',
  }
  constructor(private userService: UserService, private router: Router) { }

  username: string = ''

  async signup() {
    await this.userService.signup(this.username).toPromise()
    this.router.navigateByUrl('')
  }


  ngOnInit(): void {
  }

}

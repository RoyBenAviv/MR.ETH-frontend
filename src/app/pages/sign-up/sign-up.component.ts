import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { lastValueFrom } from 'rxjs';
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
  error: boolean = false
  
  async signup(): Promise<any> {
    if(!this.username) {
      this.error = true
    setTimeout(() => {
      this.error = false
    }, 5000)
    return
    }

    await lastValueFrom(this.userService.signup(this.username))
    this.router.navigateByUrl('')
  }
  ngOnInit(): void {
  }

}

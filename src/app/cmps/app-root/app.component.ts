import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private userService: UserService, private router: Router) {}

  loadingAnimation = {
    path: '../../../assets/animations/loading.json',
  };

  doneAnimation = {
    path: '../../../assets/animations/done.json',
  };
  title: string = 'MR. ETH';
  currPage: string = 'home';
  amount: number;
  deposite: boolean = false;
  loading: boolean = false;
  done: boolean = false;

  logout(): void {
    this.userService.logout();
    this.router.navigateByUrl('/signup');
  }

  setRoute(page: string): void {
    this.currPage = page;
  }

  onDeposite() {
    this.loading = true;
    setTimeout(() => {
      this.done = true;
      this.loading = false;
      setTimeout(() => {
        this.done = false;
        this.deposite = false;
        this.userService.deposite(this.amount);
      }, 1500);
    }, 3000);
  }

  ngOnInit(): void {
    this.userService.getUser();
  }
}

import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';
import { darkmodeService } from 'src/app/services/darkmode.service.js';

@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.scss'],
})
export class AppHeaderComponent implements OnInit {
  constructor(private userService: UserService) {}

  lightmode: boolean = false;
  user$!: Observable<User>;
  @Output() switchTheme = new EventEmitter();

  onSwitchTheme(): void {
    this.lightmode = !this.lightmode;
    this.switchTheme.emit(this.lightmode);
  }

  ngOnInit(): void {
    this.userService.getUser();
    this.user$ = this.userService.user$;
    // this.lightmode = darkmodeService.getMode();
    if(darkmodeService.getMode()) this.onSwitchTheme()
  }
}

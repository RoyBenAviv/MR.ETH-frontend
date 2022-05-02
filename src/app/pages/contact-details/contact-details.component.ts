import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Contact } from 'src/app/models/contact.model';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';
@Component({
  selector: 'contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.scss'],
})
export class ContactDetailsComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private userService: UserService,
    private router: Router
  ) {}
  user: User;
  contact: Contact;
  title: string = 'Your trades:';

  ngOnInit(): void {
    this.route.data.subscribe((data) => {
      this.contact = data['contact'];
    });
    this.userService.user$.subscribe((user) => {
      this.user = user;
    });
  }
  onBack() {
    this.router.navigateByUrl('/contacts');
  }
  transferCoins(amount: number) {
    this.userService.addMove(this.contact, amount)
  }

  getContactMoves() {
    const contactMoves = this.user.moves.filter(
      (move) => move.toId === this.contact._id
    );
    return contactMoves;
  }
}

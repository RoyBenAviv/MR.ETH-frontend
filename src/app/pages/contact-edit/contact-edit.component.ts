import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Contact } from 'src/app/models/contact.model';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'contact-edit',
  templateUrl: './contact-edit.component.html',
  styleUrls: ['./contact-edit.component.scss'],
})
export class ContactEditComponent implements OnInit, OnDestroy {
  constructor(
    private contactService: ContactService,
    private router: Router,
    private route: ActivatedRoute
  ) {}
  // routeSubscription: Subscription
  // contactSubscription: Subscription
  contact: Contact;
  contacts: Contact[] = [];

  ngOnInit(): void {
    this.route.data.subscribe(({ contact }) => {
      this.contact = contact?._id
        ? contact
        : (this.contactService.getEmptyContact() as Contact);
    });
  }

  ngOnDestroy(): void {
    // this.routeSubscription.unsubscribe()
    // this.contactSubscription.unsubscribe()
  }

  onSaveContact() {
    this.contactService.saveContact({ ...this.contact })
    this.router.navigateByUrl('/contacts');
  }
}

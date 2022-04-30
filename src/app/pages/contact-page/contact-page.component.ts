import { Component, OnInit } from '@angular/core';
import { Contact } from 'src/app/models/contact.model';
import { ContactService } from 'src/app/services/contact.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.scss'],
})
export class ContactPageComponent implements OnInit {
  constructor(private contactService: ContactService) {}
  contacts: Contact[];
  contacts$: Observable<Contact[]>;
  ngOnInit(): void {
    this.contactService.loadContacts().subscribe(contacts => {
        this.contacts = contacts
        console.log('contacts',contacts);

    });
    // this.contacts$ = this.contactService.contacts$;
    // console.log('this.contacts$',this.contacts$);
  }

  onRemoveContact(contactId: string) {
    this.contactService.deleteContact(contactId)

}
}

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
  contacts: Contact[] = [];
  contacts$: Observable<Contact[]>;
  ngOnInit(): void {
    this.loadContacts()

  }

  loadContacts() {
    this.contactService.loadContacts()
    this.contactService.contacts$.subscribe(data =>{
      this.contacts = data
  });
  }

  onRemoveContact(contactId: string) {
    this.contactService.deleteContact(contactId)
}
}

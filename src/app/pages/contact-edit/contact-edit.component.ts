import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Contact } from 'src/app/models/contact.model';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'contact-edit',
  templateUrl: './contact-edit.component.html',
  styleUrls: ['./contact-edit.component.scss'],
})
export class ContactEditComponent implements OnInit {
  constructor(private contactService: ContactService, private router: Router, private route: ActivatedRoute) {}

  contact: Contact;

  ngOnInit(): void {
    this.route.data.subscribe(({ contact }) => {
      this.contact = contact?._id ? contact : this.contactService.getEmptyContact() as Contact
  })
  }

  async onSaveContact() {
    await this.contactService.saveContact({...this.contact}).toPromise()
    this.router.navigateByUrl('/contacts')
  }
}

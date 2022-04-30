import { Component, OnInit } from '@angular/core';
import { ContactFilter } from 'src/app/models/contact-filter.model';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'contact-filter',
  templateUrl: './contact-filter.component.html',
  styleUrls: ['./contact-filter.component.scss'],
})
export class ContactFilterComponent implements OnInit {
  constructor(private contactService: ContactService) {}
  filterBy: ContactFilter;

  ngOnInit(): void {
    this.contactService.filterBy$.subscribe((filterBy) => {
      this.filterBy = filterBy;
    });
  }

  onChangeFilter() {
    this.contactService.loadContacts(this.filterBy);
  }
}

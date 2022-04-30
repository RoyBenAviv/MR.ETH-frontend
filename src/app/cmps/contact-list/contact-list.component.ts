import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Contact } from 'src/app/models/contact.model';
import { ContactService } from 'src/app/services/contact.service';
@Component({
  selector: 'contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss']
})
export class ContactListComponent implements OnInit {
  @Input() contacts: Contact[]
  @Output('remove') onRemove = new EventEmitter<string>()
  constructor() { }

  ngOnInit(): void {
  }

}

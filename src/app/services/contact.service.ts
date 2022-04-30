import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject, of } from 'rxjs';
import { Contact } from '../models/contact.model';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import { ContactFilter } from '../models/contact-filter.model';
import { HttpClient } from '@angular/common/http';
const CONTACTS = [
  {
    "_id": "5a56640269f443a5d64b32ca",
    "name": "Neomi Buzaglo",
    "email": "neomi@gmail.com",
    "phone": "+1 (968) 593-3824"
  },
  {
    "_id": "5a5664025f6ae9aa24a99fde",
    "name": "Hallie Mclean",
    "email": "halliemclean@renovize.com",
    "phone": "+1 (948) 464-2888"
  },
  {
    "_id": "5a56640252d6acddd183d319",
    "name": "Parsons Norris",
    "email": "parsonsnorris@renovize.com",
    "phone": "+1 (958) 502-3495"
  },
  {
    "_id": "5a566402ed1cf349f0b47b4d",
    "name": "Rachel Lowe",
    "email": "rachellowe@renovize.com",
    "phone": "+1 (911) 475-2312"
  },
  {
    "_id": "5a566402abce24c6bfe4699d",
    "name": "Dominique Soto",
    "email": "dominiquesoto@renovize.com",
    "phone": "+1 (807) 551-3258"
  },
  {
    "_id": "5a566402a6499c1d4da9220a",
    "name": "Shana Pope",
    "email": "shanapope@renovize.com",
    "phone": "+1 (970) 527-3082"
  },
  {
    "_id": "5a566402f90ae30e97f990db",
    "name": "Faulkner Flores",
    "email": "faulknerflores@renovize.com",
    "phone": "+1 (952) 501-2678"
  },
  {
    "_id": "5a5664027bae84ef280ffbdf",
    "name": "Holder Bean",
    "email": "holderbean@renovize.com",
    "phone": "+1 (989) 503-2663"
  },
  {
    "_id": "5a566402e3b846c5f6aec652",
    "name": "Rosanne Shelton",
    "email": "rosanneshelton@renovize.com",
    "phone": "+1 (968) 454-3851"
  },
  {
    "_id": "5a56640272c7dcdf59c3d411",
    "name": "Pamela Nolan",
    "email": "pamelanolan@renovize.com",
    "phone": "+1 (986) 545-2166"
  },
  {
    "_id": "5a5664029a8dd82a6178b15f",
    "name": "Roy Cantu",
    "email": "roycantu@renovize.com",
    "phone": "+1 (929) 571-2295"
  },
  {
    "_id": "5a5664028c096d08eeb13a8a",
    "name": "Ollie Christian",
    "email": "olliechristian@renovize.com",
    "phone": "+1 (977) 419-3550"
  },
  // {
  //   "_id": "5a5664026c53582bb9ebe9d1",
  //   "name": "Nguyen Walls",
  //   "email": "nguyenwalls@renovize.com",
  //   "phone": "+1 (963) 471-3181"
  // },
  // {
  //   "_id": "5a56640298ab77236845b82b",

  //   "name": "Glenna Santana",
  //   "email": "glennasantana@renovize.com",
  //   "phone": "+1 (860) 467-2376"
  // },
  // {
  //   "_id": "5a56640208fba3e8ecb97305",
  //   "name": "Malone Clark",
  //   "email": "maloneclark@renovize.com",
  //   "phone": "+1 (818) 565-2557"
  // },
  // {
  //   "_id": "5a566402abb3146207bc4ec5",
  //   "name": "Floyd Rutledge",
  //   "email": "floydrutledge@renovize.com",
  //   "phone": "+1 (807) 597-3629"
  // },
  // {
  //   "_id": "5a56640298500fead8cb1ee5",
  //   "name": "Grace James",
  //   "email": "gracejames@renovize.com",
  //   "phone": "+1 (959) 525-2529"
  // },
  // {
  //   "_id": "5a56640243427b8f8445231e",
  //   "name": "Tanner Gates",
  //   "email": "tannergates@renovize.com",
  //   "phone": "+1 (978) 591-2291"
  // },
  // {
  //   "_id": "5a5664025c3abdad6f5e098c",
  //   "name": "Lilly Conner",
  //   "email": "lillyconner@renovize.com",
  //   "phone": "+1 (842) 587-3812"
  // }
];

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  //mock the server
  private _contactsDb: Contact[] = CONTACTS;

  private _contacts$ = new BehaviorSubject<Contact[]>([])
  public contacts$ = this._contacts$.asObservable()
  private _filterBy$ = new BehaviorSubject<ContactFilter>({ term: '' });
  public filterBy$ = this._filterBy$.asObservable()


  constructor(private http: HttpClient) {
  }


  public loadContacts(filterBy = null): any  {
    // let contacts: any = this.http.get<Contact[]>('http://localhost:3030/api/contact/');
    // if (filterBy && filterBy.term) {
    //   contacts = this._filter(contacts, filterBy.term)
    // }

    return this.http.get<Contact[]>('http://localhost:3030/api/contact/');
    // this._contacts$.next(contacts)
  }

  public getContactById(id: string): Observable<Contact> {
    //mock the server work
    const contact = this._contactsDb.find(contact => contact._id === id)

    //return an observable
    return contact ? of(contact) : Observable.throw(`Contact id ${id} not found!`)
  }

  public deleteContact(id: string) {
    //mock the server work
    this._contactsDb = this._contactsDb.filter(contact => contact._id !== id)

    // change the observable data in the service - let all the subscribers know
    this._contacts$.next(this._contactsDb)
  }

  public saveContact(contact: Contact) {
    return contact._id ? this._updateContact(contact) : this._addContact(contact)
  }

  private _updateContact(contact: Contact) {
    //mock the server work
    this._contactsDb = this._contactsDb.map(c => contact._id === c._id ? contact : c)
    // change the observable data in the service - let all the subscribers know
    this._contacts$.next(this._sort(this._contactsDb))
    return of(contact)
  }

  private _addContact(contact: Contact) {
    //mock the server work
    const newContact = new Contact(contact._id, contact.name, contact.email, contact.phone);
    newContact.setId!(this._makeId());
    this._contactsDb.push(newContact)
    this._contacts$.next(this._sort(this._contactsDb))
    return of(newContact)

  }

  private _sort(contacts: Contact[]): Contact[] {
    return contacts.sort((a, b) => {
      if (a.name.toLocaleLowerCase() < b.name.toLocaleLowerCase()) {
        return -1;
      }
      if (a.name.toLocaleLowerCase() > b.name.toLocaleLowerCase()) {
        return 1;
      }

      return 0;
    })
  }
  
  public getEmptyContact() {
    return {
      name: '',
      email: '',
      phone: ''
    }
  }
  private _filter(contacts, term) {
    term = term.toLocaleLowerCase()
    return contacts.filter(contact => {
      return contact.name.toLocaleLowerCase().includes(term) ||
        contact.phone.toLocaleLowerCase().includes(term) ||
        contact.email.toLocaleLowerCase().includes(term)
    })
  }

  private _makeId(length = 5) {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for (var i = 0; i < length; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
}
}
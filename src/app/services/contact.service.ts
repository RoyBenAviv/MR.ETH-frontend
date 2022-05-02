import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject, of, lastValueFrom } from 'rxjs';
import { Contact } from '../models/contact.model';
import { ContactFilter } from '../models/contact-filter.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { catchError, map, tap } from 'rxjs/operators';
import { HttpParams } from '@angular/common/http';

const BASE_URL = environment.production ? '/api/' : '//localhost:3030/api/';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      console.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }


  private _contacts$ = new BehaviorSubject<Contact[]>([]);
  public contacts$ = this._contacts$.asObservable();
  private _filterBy$ = new BehaviorSubject<ContactFilter>({ term: '' });
  public filterBy$ = this._filterBy$.asObservable();

  constructor(private http: HttpClient) {}

  public async loadContacts() {
    const filterBy: ContactFilter = this._filterBy$.getValue();
    const options = filterBy.term
      ? { params: new HttpParams().set('term', filterBy.term) }
      : {};
    const contacts = await lastValueFrom(this.http.get<Contact[]>(BASE_URL + 'contact/', options))
    this._contacts$.next(contacts);
  }
  
  public getContactById(id: string): Observable<Contact> {
    return this.http.get<Contact>(BASE_URL + `contact/${id}`);
  }

  public async deleteContact(id: string) {
    await lastValueFrom(this.http.delete(BASE_URL + `contact/${id}`))
    this.loadContacts()
  }

  public saveContact(contact: Contact): any {
    return contact._id
      ? this._updateContact(contact)
      : this._addContact(contact);
  }

  private async _updateContact(contact: Contact): Promise<any> {
      await lastValueFrom(this.http.put<Contact>(
      BASE_URL + `contact/${contact._id}`,
      contact,
      this.httpOptions
    ))
    this.loadContacts()
  }

  private async _addContact(contact: Contact): Promise<any> {
    await lastValueFrom(this.http.post<Contact>(
      BASE_URL + 'contact/',
      contact,
      this.httpOptions
    ))
    this.loadContacts()
  }

  public getEmptyContact(): Contact {
    return {
      name: '',
      email: '',
      phone: '',
    };
  }

  public setFilterBy(filterBy: ContactFilter) {
    this._filterBy$.next({ ...filterBy });
    this.loadContacts();
  }
}

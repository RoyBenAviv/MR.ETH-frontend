import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Contact } from '../models/contact.model';
import { ContactService } from './contact.service';

@Injectable({
    providedIn: 'root'
})
export class ContactResolverService implements Resolve<Promise<Contact>> {

    constructor(private contactService: ContactService) { }

    async resolve(route: ActivatedRouteSnapshot) {
        const { id } = route.params
        const contact = await this.contactService.getContactById(id).toPromise()
        return contact
    }
}

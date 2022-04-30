import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject, of } from 'rxjs';
import { User } from '../models/user.model';
import { storageService } from './storageService'

const USER_KEY = 'user'


@Injectable({
  providedIn: 'root'
})

export class UserService {
  private _userDb: User = storageService.load(USER_KEY)
  private _user$ = new BehaviorSubject<User>(<User>{})

  public user$ = this._user$.asObservable()

  public getUser() {
    
    this._user$.next(this._userDb);
    return of(this._userDb)
  }
  
  public signup(name: string) {
    const user: User = {
      name,
      coins: 100,
      moves: []
    }
    storageService.store(USER_KEY, user)
    this._user$.next(user);
    return of(user)
  }

  public addMove(contact, amount): any {
    const user =  storageService.load(USER_KEY)
    if(user.coins < amount || !amount) return
    user.coins -= amount
    const move = {
      toId: contact._id,
      to: contact.name,
      at: Date.now(),
      amount
    }
    user.moves.unshift(move)
    storageService.store(USER_KEY, user)
    this._userDb = user
    this._user$.next(user);
    return of(user)
  }
}



// private _updateContact(contact: Contact) {
//   //mock the server work
//   this._contactsDb = this._contactsDb.map(c => contact._id === c._id ? contact : c)
//   // change the observable data in the service - let all the subscribers know
//   this._contacts$.next(this._sort(this._contactsDb))
//   return of(contact)
// }


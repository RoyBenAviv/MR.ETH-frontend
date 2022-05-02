import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { Contact } from '../models/contact.model';
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

  public logout() {
    localStorage.removeItem(USER_KEY)
  }

  public addMove(contact: Contact, amount: number): Observable<any> | void {
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

  public deposite(amount: number) {
    const user =  storageService.load(USER_KEY)
    user.coins += amount
    storageService.store(USER_KEY, user)
    this._user$.next(user);
  }
}


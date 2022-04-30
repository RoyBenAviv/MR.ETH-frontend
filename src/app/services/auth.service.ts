import { Injectable } from '@angular/core';
import { storageService } from './storageService'

const USER_KEY = 'user'

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    constructor() { }
    
    checkIsLoggedIn(): boolean {
        const isLoggedIn = !!storageService.load(USER_KEY)
        return isLoggedIn
    }
}

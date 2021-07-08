import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  public roles: string[] = ['ANONYMOUS', 'USER', 'ADMIN'];
  public role: string = '';


  constructor() { }

  getRole(){
    return 'USER';
  }
}

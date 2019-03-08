import { Router } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private router: Router
  ) { }

  setTokenLocal(token){
    localStorage.setItem('token', token)
  }

  setTokenSession(token){
    sessionStorage.setItem('token', token)
  }

  getToken() {
    return sessionStorage.getItem('token') || localStorage.getItem('token')
  }

  checkIfToken(){
    return !!(sessionStorage.getItem('token') || localStorage.getItem('token'))
  }

  logOut(){
    sessionStorage.clear();
    localStorage.clear();

    this.router.navigate([''])
  }

}

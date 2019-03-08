import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(
    private http: HttpClient,
    private loginService: LoginService
  ) { }

  login(body) {
    return this.http.post('api/login', body)
  }

  getAllUsers() {

    // let head = {
    //   'token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InJhamF0LnlhZGF2QHplbndheXMuaW8iLCJuYW1lIjoiUmFqYXQiLCJpYXQiOjE1NDM2NTQxMDN9.VXh4s-N2qqxPTKHHqL7gPvfv8tqhELaD87PNqjg-5aY'
    // }

    let head = {
      'token' : this.loginService.getToken()
    }

    return this.http.get('api/allPersons', { headers: head })
  }

  adduser(body) {

    // let head = {
    //   'token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InJhamF0LnlhZGF2QHplbndheXMuaW8iLCJuYW1lIjoiUmFqYXQiLCJpYXQiOjE1NDM2NTQxMDN9.VXh4s-N2qqxPTKHHqL7gPvfv8tqhELaD87PNqjg-5aY'
    // }

    let head = {
      'token' : this.loginService.getToken()
    }

    return this.http.post('api/addPerson', body, { headers: head });
  }

  updateUser(body) {

    // let head = {
    //   'token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InJhamF0LnlhZGF2QHplbndheXMuaW8iLCJuYW1lIjoiUmFqYXQiLCJpYXQiOjE1NDM2NTQxMDN9.VXh4s-N2qqxPTKHHqL7gPvfv8tqhELaD87PNqjg-5aY'
    // }

    let head = {
      'token' : this.loginService.getToken()
    }

    return this.http.post('api/updatePerson', body, { headers: head });

  }

  registerUser(body){
    return this.http.post('api/register', body)
  }

}

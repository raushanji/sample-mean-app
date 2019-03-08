import { Router } from '@angular/router';
import { HttpService } from './../services/http.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-all-person',
  templateUrl: './all-person.component.html',
  styleUrls: ['./all-person.component.css']
})
export class AllPersonComponent implements OnInit {

  userArray =  []

  constructor(
    private router: Router,
    private httpService: HttpService
  ) { }

  ngOnInit() {
    this.callApi()
  }

  callApi(){
    this.httpService.getAllUsers().subscribe(
      (res : any) => {
        console.log(res);
        this.userArray = res.data
      },
      err => {
        console.log(err)
      }
    )
  }

  goToAddPerson(){
    this.router.navigate(['addPerson']);
  }

}

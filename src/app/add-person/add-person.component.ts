import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from '../services/http.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-add-person',
  templateUrl: './add-person.component.html',
  styleUrls: ['./add-person.component.css']
})
export class AddPersonComponent implements OnInit {

  addPerson: FormGroup;

  // Regex
  regexPhone = /^([6-9][0-9]*)$/;
  regexEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  regexWordsWithSpace = new RegExp('^[a-zA-Z][a-zA-Z ]*$');
  regexPincode = /^[1-9]{1}\d{5}$/
  intigers = new RegExp('^[1-9][0-9]*$');

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private httpService: HttpService,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit() {
    this.createForms()
  }

  createForms() {
    this.addPerson = this.fb.group({
      name: ['', [Validators.required, Validators.pattern(this.regexWordsWithSpace)]],
      age: ['', [Validators.required, Validators.pattern(this.intigers)]],
      fathersName: ['', [Validators.required, Validators.pattern(this.regexWordsWithSpace)]],
      phone: ['', [Validators.required, Validators.pattern(this.regexPhone)]],
      email: ['', [Validators.required, Validators.pattern(this.regexEmail)]],
      address: this.fb.group({
        line1: ['', [Validators.required]],
        line2: ['', [Validators.required]],
        city: ['', [Validators.required]],
        state: ['', [Validators.required]],
        pincode: ['', [Validators.required]],
        country: ['', [Validators.required]]
      })
    })
  }

  getDynamicErrors(controlName) {

    let control = this.addPerson.get(controlName)

    if (control.hasError('required')) {
      return 'This Field is required'
    } else if (control.hasError('pattern')) {
      return 'Invalid Value'
    }

  }

  getDinamicControl(controlName){
    return this.addPerson.get(`address.${controlName}`)
  }

  getDinamicGroupErrors(controlName){
    let control = this.addPerson.get(`address.${controlName}`)

    if (control.hasError('required')) {
      return 'This Field is required'
    } else if (control.hasError('pattern')) {
      return 'Invalid Value'
    }

  }

  addUser(){
    // console.log(this.addPerson.value);
    // this.router.navigate(['all'])

    this.httpService.adduser(this.addPerson.value).subscribe(
      (res : any) => {
        console.log(res)
        this.snackBar.open(res.msg, 'close', {duration : 2000});
        this.router.navigate(['all']);
      }, err => {
        console.log(err)
      }
    )

  }

}

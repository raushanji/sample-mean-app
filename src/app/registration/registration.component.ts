import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { HttpService } from './../services/http.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  registrationForm: FormGroup;
  emailPattern = /[a-z0-9\._%+!$&*=^|~#%'`?{}/\-]+@([a-z0-9\-]+\.){1,}([a-z]{2,16})/;
  regexWordsWithSpace = new RegExp('^[a-zA-Z][a-zA-Z ]*$');

  constructor(
    private fb: FormBuilder,
    private httpService: HttpService,
    private router: Router,
    private snackbar: MatSnackBar
  ) { }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.registrationForm = this.fb.group(
      {
        name: ['', [Validators.required, Validators.pattern(this.regexWordsWithSpace)]],
        email: ['', [Validators.required, Validators.pattern(this.emailPattern)]],
        password: ['', [Validators.required]],
        // confirmpassword : '',
      }
    )
  }

  register() {
    // console.log(this.registrationForm.value);

    this.httpService.registerUser(this.registrationForm.value).subscribe(
      (res : any) => {
        // console.log(res)

        if(res.success){
          this.snackbar.open(res.msg, 'close', {duration : 2000})
          this.router.navigate([''])
        }

      },
      err => {
        console.log(err)
      }
    )
  }

  getDynamicErrors(controlName) {

    let control = this.registrationForm.get(controlName)

    if (control.hasError('required')) {
      return 'This Field is required'
    } else if (control.hasError('pattern')) {
      return 'Invalid Value'
    }

  }

}

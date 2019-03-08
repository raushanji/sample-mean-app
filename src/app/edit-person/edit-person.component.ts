import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from '../services/http.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-edit-person',
  templateUrl: './edit-person.component.html',
  styleUrls: ['./edit-person.component.css']
})
export class EditPersonComponent implements OnInit {

  editForm: FormGroup;
  email;


  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private httpService: HttpService,
    private snackbar: MatSnackBar
  ) {

  }

  ngOnInit() {
    this.createForm();

    this.email = this.route.snapshot.params.userEmail;

    this.editForm.patchValue(this.route.snapshot.queryParams);
  }

  createForm(){
    this.editForm = this.fb.group({
      age : ['', Validators.required],
      pincode : ['', Validators.required]
    })
  }

  getDynamicErrors(controlName) {

    let control = this.editForm.get(controlName)

    if (control.hasError('required')) {
      return 'This Field is required'
    } else if (control.hasError('pattern')) {
      return 'Invalid Value'
    }

  }

  updateUser(){

    let body = { email : this.email, ...this.editForm.value }

    this.httpService.updateUser(body).subscribe(
      (res :any) => {
        // console.log((res))
        this.snackbar.open(res.msg, 'close', {duration : 2000});
        this.router.navigate(['all'])
      },
      err => {
        console.log(err)
      }
    )
  }

}

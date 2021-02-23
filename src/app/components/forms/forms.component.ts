import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  //styleUrls: ['./forms.component.scss']
})
export class FormsComponent implements OnInit {

  constructor(private fb: FormBuilder) { }

  angularForm = this.fb.group({
    fName:['', Validators.required],
    lName:['', Validators.required],
    address1:['', Validators.required],
    address2:[''], 
    city: ['', Validators.required],
    state:['', Validators.required],
    zip:['', Validators.required],
    email:['', [Validators.required, Validators.email]],
    password:['', [Validators.required, Validators.minLength(6)]],
    confirmPassword:['', Validators.required],
    terms:[false, Validators.required]
  });

  // convenience getter for easy access to form fields
  get f() { return this.angularForm.controls; }

ngOnInit() {
  }


}

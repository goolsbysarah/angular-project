import { UserRegistration } from '../models/user.model';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from "../services/user.service"
import { AnyCatcher } from 'rxjs/internal/AnyCatcher';

@Component({
  selector: 'user-registration',
  templateUrl: './userregistration.component.html',
  styleUrls: ['./userregistration.component.css']
})
export class UserRegistrationComponent implements OnInit {
  form!: FormGroup;
   confirmedPassword?: string;
  isRegistered: boolean = false;
  registerModel: any;
  registerForm?: any;
  constructor(private UserService: UserService, private formBuilder: FormBuilder, private router: Router, private route: ActivatedRoute) {}

  registerUser!: UserRegistration;
  ngOnInit() {
    this.form = this.formBuilder.group({
      Email: [''],
      Username: [''],
      Password: [''],
      confirmpassword: ['']
    });
  }
  get f() { return this.form.controls }

  Register() {
    const registerForm = new FormData();
    registerForm.append('Email', this.form.get('Email')?.value);
    registerForm.append('Username', this.form.get('Username')?.value);
    registerForm.append('Password', this.form.get('Password')?.value);
    registerForm.append('confirmpassword', this.form.get('confirmpassword')?.value);

    const registerModel = new UserRegistration();
    registerModel.Email = this.form.get('Email')?.value;
    registerModel.Username = this.form.get('Username')?.value;
    registerModel.Password = this.form.get('Password')?.value;
    this.confirmedPassword = this.form.get('confirmpassword')?.value;
//if the confirmed password is equal to the other password, then we create the user
    if(this.confirmedPassword == registerModel.Password){
      this.UserService.register(registerModel).subscribe((result: any) =>{
        if(result) {
          console.log("Registration was successful");
          this.goToLogin();
        }
      })
    }

  }
  goToLogin(){
    this.router.navigateByUrl('login');
  }

}

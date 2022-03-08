import { UserService } from '../services/user.service';
import { UserLogin, UserModel } from '../models/user.model';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './userlogin.component.html',
  styleUrls: ['./userlogin.component.css'],
  providers: [UserLogin, UserModel]
})
export class UserLoginComponent implements OnInit {
 loginModel: any;
 form: any;
 data: any;
 token?: string;
 error: any;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private snackBar: MatSnackBar,
    private UserService: UserService
    ) { }

  ngOnInit() {
    this.form = this.fb.group ({
      Email: [''],
      Password: ['']
    })
  }

  get f(){
    return this.form.controls;
  }


  onSubmit() {
    const loginModel = new FormData();
    loginModel.append('Email', this.form.get('Email').value);
    loginModel.append('Password', this.form.get('Password').value);

    const login = new UserLogin();
    login.Email = this.form.get('Email').value;
    login.Password = this.form.get('Password').value;

    this.UserService.login(login).subscribe((result) => {
      this.data = result;
      if (this.data) {
        const currUser = new UserModel();
        currUser.userId = this.data;
        //set the local storage user id for easy access
        localStorage.setItem('userId', this.data);
        console.log("successful login");
        this.snackBar.dismiss();
      }
      //what is the angular function for this
      else if(this.data == null)
      {
        this.snackBar.open('Username or Password was Incorrect');
        console.log("unsuccessful login");
        this.router.navigate(['Login']);
      }
    })


  }

  goToRegistration(){
    //User is not registered and chooses to register via login page
    this.router.navigateByUrl('/register');
  }

  goToJournal(){
    this.router.navigateByUrl('/journal');
  }

  goToMainMenu(){
    this.router.navigateByUrl('/main-menu')
  }
}

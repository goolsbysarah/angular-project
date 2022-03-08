import { environment } from './../../environments/environment';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { UserLogin, UserRegistration } from '../models/user.model';
import { Injectable } from "@angular/core";

const url = environment.api;
@Injectable({
  providedIn: 'root'
})

export class UserService {
constructor(private http: HttpClient){}
 httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

 registerUser!: UserRegistration;
 loginUser!: UserLogin;

login(loginModel: UserLogin){
  //once api is set up in backend, this function will make an http POST call
  //need the login url
return this.http.post(url + '/Login/Authenticate', loginModel, this.httpOptions);
}
 register(registerModel: UserRegistration){
   //once api is set up in backend this function will an http POST call to add user to database
   //need the register url
  return this.http.post(url + 'NewAccount/Create', registerModel, this.httpOptions);
 }



}

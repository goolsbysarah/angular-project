
//import { JournalComponent } from './journal/';
import { JournalService } from './services/journal.service';
import { UserService } from './services/user.service';
//import { ViewOneJournalComponent } from './Features/ViewOneJournal/viewonejournal.component';
//import { UserRegistrationComponent } from './userregistration/userregistration.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import { UserLoginComponent } from '../app/userlogin/userlogin.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon'
import { MatTableModule } from '@angular/material/table';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCommonModule, MatRippleModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { CdkTableModule } from '@angular/cdk/table';
import {CdkStepperModule} from '@angular/cdk/stepper';
import { MatStepperModule } from '@angular/material/stepper';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
//import { ViewJournalComponent } from './Features/ViewJournal/viewjournal.component';


@NgModule({
  declarations: [
    AppComponent,
    UserLoginComponent,
    //UserRegistrationComponent,
    //ViewJournalComponent,
    //JournalComponent,
    //ViewOneJournalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatIconModule,
    MatCommonModule,
    MatCheckboxModule,
    MatTableModule,
    MatToolbarModule,
    HttpClientModule,
    CdkStepperModule,
    CdkTableModule,
    CdkTableModule,
    MatCardModule,
    MatButtonModule,
    MatCardModule,
    MatStepperModule,
    MatDatepickerModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatRippleModule,
    MatSelectModule,
    MatSnackBarModule,
    BrowserAnimationsModule

  ],
  exports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatIconModule,
    MatCommonModule,
    MatTableModule,
    MatToolbarModule,
    HttpClientModule,
    CdkStepperModule,
    CdkTableModule,
    MatCheckboxModule,
    CdkTableModule,
    MatCardModule,
    MatButtonModule,
    MatCardModule,
    MatStepperModule,
    MatDatepickerModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatRippleModule,
    MatSelectModule,
    MatSnackBarModule,
    BrowserAnimationsModule
  ],
  providers: [UserService, JournalService],
  bootstrap: [AppComponent]
})
export class AppModule { }

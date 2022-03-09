import {Component} from '@angular/core';
import { Router } from '@angular/router';
import { JournalModel } from '../models/journal.model';
import { JournalService } from '../services/journal.service';

/** @title Form field theming */
@Component({
  selector: 'form-field-theming-example',
  templateUrl: 'viewonejournal.component.html',
  styleUrls: ['viewonejournal.component.css'],
  providers: [JournalModel]
})
export class ViewOneJournalComponent {
  data: any;
  journal: JournalModel = new JournalModel();
  isLoaded: boolean = false;
  constructor(private JournalService: JournalService, private router: Router) {}
  ngOnInit(){
    console.log(this.data);
    console.log(this.JournalService.viewOneJournalId);
    this.data = this.JournalService.viewOneJournalId;
    console.log(this.data);
    this.journal.JournalID = "ex";
    this.viewJournal(this.data);
  }
  viewJournal(data: any){
    console.log(data);
    this.JournalService.getJournalById(data).subscribe((myjournal) => {
      //myjournal as JournalModel;
      console.log(myjournal);
      console.log(myjournal.Title?.toString());
      console.log("Journal Title" + this.journal.Title);
      //getting the journal successfully but after this point everything is null
      console.log("Updated " + myjournal.LastUpdated);
      this.journal.LastUpdated = myjournal.LastUpdated;
      console.log(this.journal.LastUpdated + " " + myjournal.LastUpdated);
      this.journal.Title = myjournal.Title;
      this.journal.Body = myjournal.Body;
      this.journal!.JournalID = myjournal.JournalID;
      this.isLoaded = true;
      console.log(myjournal);

    })


  }

  delete(id: any){
    this.JournalService.deleteJournalById(id).subscribe(res => {
      console.log(res);
      this.router.navigateByUrl('view-journals');
    })
  }
  goToMain(){
    this.router.navigateByUrl('main-menu');
  }
  goToEdit(id: any) {
    //Implement a dialog box for editing
    this.router.navigateByUrl('add-journal');
  }
  clear() {
  //not needed for this
  }
}

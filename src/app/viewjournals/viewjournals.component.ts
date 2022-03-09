import { Router } from '@angular/router';
import { JournalService } from '../services/journal.service';
import { Component, ViewChild } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import { MatTableModule, MatCellDef, MatColumnDef, MatTable } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { JournalModel } from '../models/journal.model';


@Component({
  selector: 'view-journal',
  templateUrl: './viewjournals.component.html',
  styleUrls: [ './viewjournals.component.css' ],
  providers: [JournalModel]
})
export class ViewJournalsComponent {

  constructor(private JournalService: JournalService, private route: Router) { console.log("help");}

  displayedColumns = ['LastUpdated', 'Title', 'Body', 'Action'];
  dataSource = new MatTableDataSource<JournalModel[]>();
  journals?: any;
  journal?: any;
  userId?: any; //this will be the user's id when they log in
 // @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    console.log("help again");
    this.getJournals();
  }

  ngAfterViewInIt() {
    //this.dataSource.paginator = this.paginator;
  }
    getJournals() {
      //right now userid is null
      //valueOf needed?
      this.userId = localStorage.getItem('userId');
      console.log(this.userId);
      this.JournalService.getJournal(this.userId).subscribe((journals) => {
        this.journals = journals;
        if (this.journals != null){//if i receive data
          console.log(this.journals);
        this.dataSource.data = this.journals;
        }
        //add if i don't receive data because they have no journals, route them to add one
      })
    }
    getJournal(id: string){
      console.log(id);
      this.JournalService.getJournalById(id).subscribe(res => {
          this.journal = res;
          console.log(this.journal);
          console.log("routing to view one");
          this.route.navigateByUrl('view-one');
      });

    }

    goToViewOne(){
      console.log("going to view one");
      this.route.navigateByUrl('view-one');
    }


  }

//change the name to match better





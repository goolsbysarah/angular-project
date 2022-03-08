import { JournalModel } from '../models/journal.model';
import { FormsModule, FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { JournalService } from '../services/journal.service';

@Component({
  selector: 'journal-feature',
  templateUrl: './journal.component.html',
  styleUrls: ['./journal.component.css']
})

export class JournalComponent implements OnInit {
  journalForm: any;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private JournalService: JournalService
    ) { }

    ngOnInit(): void {
      this.journalForm = this.formBuilder.group({
        Title: [''],
        Body: ['']
      });
    }

    get f() {
      return this.journalForm.controls;
    }

    onSubmit() {
      const journalModel = new FormData();
      journalModel.append('Title', this.journalForm.get('Title').value);
      journalModel.append('Body', this.journalForm.get('Body').value);

      const journal = new JournalModel();
      journal.Title = this.journalForm.get('Title').value;
      journal.Body = this.journalForm.get('Body').value;
      console.log(journal);
      this.JournalService.createJournal(journal).subscribe((res) => {
          console.log(res);
      })

    }

goToMain() {
  this.router.navigateByUrl('/main-menu');
}

}

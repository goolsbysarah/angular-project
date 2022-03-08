import { environment } from './../../environments/environment';
import { Injectable } from "@angular/core";
//why can't you find this model?
import {JournalModel} from '../models/journal.model';
import { Router, ActivatedRoute } from "@angular/router";
import { HttpClient, HttpHeaderResponse, HttpHeaders } from "@angular/common/http";

const url = environment.api;
@Injectable({
  providedIn: 'root'
})

export class JournalService {
   httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private http: HttpClient,
    private httpHeaders: HttpHeaders,
    ) { }

getJournal(userId?: number){
//get all journals based on the user id
  return this.http.get(url + '/GetAll?userID=' + userId,  { responseType: 'json' })

}

createJournal(journal: JournalModel){
  return this.http.post(url + '/Create', journal, this.httpOptions);
}

getJournalById(id: string){
  //need the journal url
  return this.http.get(url + '/GetJournal?journalID=' + id, { responseType: 'json'});

}

deleteJournalById(id: string){
  return this.http.delete(url + '/Delete?journalID=' + id, this.httpOptions);
}

updateJournal(journal: JournalModel){
  return this.http.put(url + '/Update', journal, this.httpOptions);
}



}

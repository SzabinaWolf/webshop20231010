import { Component } from '@angular/core';
import { map } from 'rxjs';
import { FireService } from 'src/app/services/fire.service';
import { KosarService } from 'src/app/services/kosar.service';

@Component({
  selector: 'app-termekek',
  templateUrl: './termekek.component.html',
  styleUrls: ['./termekek.component.css']
})
export class TermekekComponent {

  termekek: any = [];
  key: any;
  ar: any;
  db: any;

  constructor(
    private fire:  FireService,
    private kosar: KosarService
  ){
    this.fire.getTermekek()
    .snapshotChanges()
    .pipe(
      map((ch) => ch.map(c =>
        ({key: c.payload.key, ...c.payload.val()})))
    ).subscribe(
      datas =>{
        this.termekek = datas;
      });
  }

  addTermek(key:any, db:any, ar:any){
    this.kosar.addTermek(key, db, ar);
    console.log(this.key);
    
  }
}

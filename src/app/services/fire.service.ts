import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database';
import { Termek } from '../models/termek';
import { Kosar } from '../models/kosar';

@Injectable({
  providedIn: 'root'
})
export class FireService {

  termekRef: AngularFireList<Termek>;
  rendelesRef: AngularFireList<Kosar>;
  
  constructor(
    private db: AngularFireDatabase
  ) {
    this.termekRef = this.db.list('/termekek');
    this.rendelesRef = this.db.list('/rendeles');
   }

   getTermekek(){
    return this.termekRef;
   }

   addRendeles(body:any){
    return this.rendelesRef.push(body);
   }
}

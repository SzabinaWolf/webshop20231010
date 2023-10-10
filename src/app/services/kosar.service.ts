import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class KosarService {
tetelek: any = [];


  constructor() { }

  addTermek(key:any, db:any, ar: any){
    let body: any = {};
    body.termekKey = key;
    body.db = db;
    body.ar = (db * ar);
    this.tetelek.push(body);
    this.getTotalPrice().toPrecision();
  }

  getTotalPrice(){
    let grandTotal = 0;
    this.tetelek.map(
      (a:any) => {
        grandTotal += a.ar;
      })
      return grandTotal;
  }

  getTetelek(){
    return this.tetelek;
  }

  deleteAll(){
    this.tetelek = [];
  }

  deleteTetel(tetel:any){
    this.tetelek = this.tetelek.filter(
      (e:any) => e != tetel
    )
  }
}

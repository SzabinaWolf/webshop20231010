import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { map } from 'rxjs';
import { Kosar } from 'src/app/models/kosar';
import { FireService } from 'src/app/services/fire.service';
import { KosarService } from 'src/app/services/kosar.service';

@Component({
  selector: 'app-rendeles',
  templateUrl: './rendeles.component.html',
  styleUrls: ['./rendeles.component.css']
})
export class RendelesComponent {
termekek: any = [];
tetelek: any;
megrendeles: Kosar = {};
public grandTotal!: number;


constructor(
  private fire:  FireService,
  private kosar: KosarService,
  private router: Router
){
  this.tetelek = this.kosar.getTetelek();

  this.fire.getTermekek()
  .snapshotChanges()
  .pipe(
    map((ch) => ch.map(c =>
      ({key: c.payload.key, ...c.payload.val()})))
  ).subscribe(
    datas =>{
      this.termekek = datas;
      this.grandTotal =  this.kosar.getTotalPrice();
    });
    console.log(this.termekek);
    
}

deleteTetel(tetel: any){
this.kosar.deleteTetel(tetel);
this.tetelek = this.kosar.getTetelek();
this.grandTotal = this.kosar.getTotalPrice();
}

deleteAll(){
  this.kosar.deleteAll();
  this.grandTotal = 0;
  this.tetelek = this.kosar.getTetelek();
}

megrendel(){
  this.megrendeles.rendeles = this.tetelek;
  this.megrendeles.status = false;
  this.megrendeles.datum = String(Date());
  this.fire.addRendeles(this.megrendeles);
  this.grandTotal = this.kosar.getTotalPrice();
  this.router.navigate(['/termekek']);
  console.log(this.megrendeles);
}

nevKereses(key: string){
if(this.termekek.length == 0) return null;
return this.termekek.filter(
  (a:any) => a.key== key
)[0].megnevezes
}

}

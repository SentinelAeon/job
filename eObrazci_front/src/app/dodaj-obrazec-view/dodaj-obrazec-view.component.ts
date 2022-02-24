import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Obrazec } from '../obrazec';
import { ObrazecService } from '../obrazec.service';




@Component({
  selector: 'dodaj-obrazec-view',
  templateUrl: './dodaj-obrazec-view.component.html',
  styleUrls: ['./dodaj-obrazec-view.component.css']
})
export class DodajObrazecViewComponent implements OnInit {

  
  public obrazec: Obrazec = {
    id: 0,
    ime: '',
    priimek: '',
    imeUlice: '',
    stevilkaUlice: 0,
    postnaStevilka: 0,
    kraj: '',
    drzava: '',
    spol: '',
    izpiti: []
  }   
  
  constructor(private obrazecService: ObrazecService, private router: Router ) { }
  

  ngOnInit(): void {
  }

  public dodajObrazec(): void {    

    if(this.obrazec.ime == "") {
      
      alert("Polje ime ne sme biti prazno");
      return;
    }

    if(this.obrazec.priimek == "") {
      
      alert("Polje priimek ne sme biti prazno");
      return;
    }

    if(this.obrazec.imeUlice == "") {
      
      alert("Polje ime ulice ne sme biti prazno");
      return;
    }

    if(this.obrazec.stevilkaUlice == 0) {
      
      alert("Polje stevilka ulice ne sme biti 0");
      return;
    }

    if(this.obrazec.kraj == "") {
      
      alert("Polje kraj ne sme biti prazno");
      return;
    }

    if(this.obrazec.postnaStevilka == 0) {
      
      alert("Polje postna stevilka ulice ne sme biti 0");
      return;
    }

    if(this.obrazec.drzava == "") {
      
      alert("Polje drzava ne sme biti prazno");
      return;
    }

    if(!(this.obrazec.spol == "M" || this.obrazec.spol == "Z")) {
      
      alert("Spol je lahko M ali Z.");
      return;
    }

    if(!Number(this.obrazec.postnaStevilka)) {
      
      alert("Postna stevilka ni veljavna");
      return;
    }




    this.obrazecService.addObrazec(this.obrazec).subscribe(
      (response: Obrazec) => {
        this.obrazec = response;
        console.log();    
        this.router.navigateByUrl('obrazci');    
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    ); 
    
   

  




}

}

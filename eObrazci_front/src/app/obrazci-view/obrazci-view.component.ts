import { HttpErrorResponse } from '@angular/common/http';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { Obrazec } from '../obrazec';
import { ObrazecService } from '../obrazec.service';
import { OnInit } from '@angular/core';
import jsPDF from 'jspdf';




@Component({
  selector: 'app-obrazci-view', 
  templateUrl: './obrazci-view.component.html',
  styleUrls: ['./obrazci-view.component.css']
})
export class ObrazciViewComponent implements OnInit {
  title(_title: any) {
    throw new Error('Method not implemented.');
  }
 
  public obrazci: Obrazec[];
  public obrazci1: Obrazec[];
  
  public inputIme = "";
  public inputPriimek = "";



  constructor(private obrazecService: ObrazecService){
    this.obrazci = [];  
    this.obrazci1 = [];  
  }
  

  ngOnInit() {
    this.getObrazci();
  }


  public exportPdf(): void {

    var doc = new jsPDF()
    let obrazciArray: string[] = []
    obrazciArray[0] = '    ';
    obrazciArray[1] = ' Seznam obrazcev:  ';
    obrazciArray[2] = '    ';

    let i = 3;

    for(let obrazec of this.obrazci) {  
        obrazciArray[i] =  obrazec.id + ' ' + obrazec.ime + ' ' + obrazec.priimek + ' ' + obrazec.imeUlice + ' ' + obrazec.stevilkaUlice + ' ' + obrazec.kraj + ' '  + obrazec.postnaStevilka +  ' ' + obrazec.drzava + ' ' + obrazec.spol; 
        i++;      
    }

    doc.text(obrazciArray, 2, 2)
    doc.save('tableToPdf.pdf');


  }

 

  public getObrazci(): void {
    this.obrazecService.getObrazec().subscribe(
      (response: Obrazec[]) => {
        this.obrazci = response;
        console.log(this.obrazci);    
        
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );    
    
  }



  public deleteObrazci(id: number): void {
    this.obrazecService.deleteObrazec(id).subscribe(
      (_response: void) => {
        //this.obrazci = response;
        console.log(this.obrazci);
        this.getObrazci();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
 
  public onKeyIme(event: any) {
        this.inputIme = event.target.value;        
  }

  public onKeyPriimek(event: any) {    
      this.inputPriimek = event.target.value;
}


public sortById() {
  this.obrazci = this.obrazci.sort((a, b) => (a.id > b.id) ? 1 : -1)
}

public sortByIme() {
  this.obrazci = this.obrazci.sort((a, b) => (a.ime > b.ime) ? 1 : -1)
}

public sortByPriimek() {
  this.obrazci = this.obrazci.sort((a, b) => (a.priimek > b.priimek) ? 1 : -1)
}

public sortByNaslov() {
  this.obrazci = this.obrazci.sort((a, b) => (a.imeUlice > b.imeUlice) ? 1 : -1)
}

public sortByKraj() {
  this.obrazci = this.obrazci.sort((a, b) => (a.kraj > b.kraj) ? 1 : -1)
}

public sortByDrzava() {
  this.obrazci = this.obrazci.sort((a, b) => (a.drzava > b.drzava) ? 1 : -1)
}

public sortBySpol() {
  this.obrazci = this.obrazci.sort((a, b) => (a.spol > b.spol) ? 1 : -1)
}


  

  

 



  
  //title = 'eObrazci_front';



  
}

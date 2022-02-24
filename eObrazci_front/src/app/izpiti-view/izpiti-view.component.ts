import { Component, OnInit } from '@angular/core';
import { Izpit } from '../izpit';
import { Obrazec } from '../obrazec';
import { ObrazecService } from '../obrazec.service';
import { HttpErrorResponse } from '@angular/common/http';
import { IzpitService } from '../izpit.service';
import { ActivatedRoute } from '@angular/router';




@Component({
  selector: 'app-izpiti-view',
  templateUrl: './izpiti-view.component.html',
  styleUrls: ['./izpiti-view.component.css']
})
export class IzpitiViewComponent implements OnInit {

  public izpiti: Izpit[];
  public obrazec: Obrazec | undefined;   
  public id: number = 0;
  

  public izpit: Izpit = {
    id: 0,
    naziv: '',
    datum: '',
    ocena: 0
  } 

  constructor(private izpitService: IzpitService, private obrazecService: ObrazecService, private route: ActivatedRoute,){
    this.izpiti = []    
  }   

  ngOnInit(): void {
    this.getObrazec();        
  } 

  public dodajIzpit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.obrazecService.addIzpit(this.id , this.izpit ).subscribe(
      (response: Izpit) => {
        this.izpit = response;
        console.log();    
        this.getObrazec();    
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    ); 
  }

  public getObrazec(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.obrazecService.getObrazecById(this.id).subscribe(
      (response: Obrazec) => {
        this.obrazec = response;
        this.getIzpiti();
        console.log(this.obrazec);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public getIzpiti(): void {
    if(this.obrazec?.izpiti != undefined) {
      this.izpiti = this.obrazec.izpiti;
    } 
    

  }

  public deleteIzpit(idIzpit: number): void {
    this.izpitService.deleteIzpit(this.id, idIzpit).subscribe(
      (response: void) => {
        //this.obrazci = response;
        console.log();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }



  

  

}

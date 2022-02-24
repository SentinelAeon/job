import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Obrazec } from './obrazec';
import { environment } from 'src/environments/environment';
import { Izpit } from './izpit';
import { HttpHeaders } from '@angular/common/http';





@Injectable({providedIn: 'root'})
export class ObrazecService {
 
  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient){}



   httpOptions = {
   headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'my-auth-token'
  })
};


  



  public getObrazec(): Observable<Obrazec[]> {
    
    return this.http.get<Obrazec[]>(`${this.apiServerUrl}/obrazec/all`, this.httpOptions);      
  }

  public getObrazecById(obrazecId: number): Observable<Obrazec> {
    return this.http.get<Obrazec>(`${this.apiServerUrl}/obrazec/find/${obrazecId}`);      
  }

  public addObrazec(obrazec: Obrazec): Observable<Obrazec> {
    return this.http.post<Obrazec>(`${this.apiServerUrl}/obrazec/add`, obrazec);
  }
  
  public updateObrazec(obrazec: Obrazec): Observable<Obrazec> {
    return this.http.put<Obrazec>(`${this.apiServerUrl}/obrazec/update`, obrazec);
  }

  public deleteObrazec(obrazecId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}/obrazec/delete/${obrazecId}`);
  }

  public addIzpit(obrazecId: number, izpit: Izpit): Observable<Izpit> {
    return this.http.put<Izpit>(`${this.apiServerUrl}/obrazec/find/${obrazecId}/add`, izpit);    
  }

  public deleteIzpit(obrazecId: number, izpitId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}/obrazec/find/${obrazecId}/delete/${izpitId}`);    
  }
   
}

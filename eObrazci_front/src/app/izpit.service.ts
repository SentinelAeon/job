import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Obrazec } from './obrazec';
import { environment } from 'src/environments/environment';
import { Izpit } from './izpit';
import { ObrazecService } from './obrazec.service';

@Injectable({
  providedIn: 'root'
})
export class IzpitService {

 obrazec: Obrazec | undefined;

  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient){

  }

  public deleteIzpit(obrazecId: number, izpitId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}/obrazec/find/${obrazecId}/delete/${izpitId}`);
  }


}

import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class LocalDataService {

  constructor(
    private httpClient: HttpClient
  ) { }

  public getJSON(url: string): Observable<any> {
    return this.httpClient.get(url);
  }
}

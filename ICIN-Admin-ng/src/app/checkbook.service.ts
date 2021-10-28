import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CheckbookRequest } from './model/checkbookRequest';
import{ GlobalConstants } from './global-constants';


@Injectable({
  providedIn: 'root'
})
export class CheckbookService {

  //readonly rootUrl = 'localhost:<port>/user/{username}/chequebook/request/confirm';
  readonly rootUrl = GlobalConstants.backendURL + '/user/';
  //readonly dataUrl= 'localhost:<port>/chequebook/request/all';
  readonly dataUrl = GlobalConstants.backendURL + '/chequebook/request/all';
  private data: any = []
  constructor(private http: HttpClient) { }




  confirmCheckbookService(account) {
    return this.http.get(this.rootUrl + account + '/chequebook/request/confirm');
  }


  getRequestsData(): Observable<CheckbookRequest[]> {
    return this.http.get<CheckbookRequest[]>(this.dataUrl);
  }

}


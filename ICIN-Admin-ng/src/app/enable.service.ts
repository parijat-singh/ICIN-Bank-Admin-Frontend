import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import{ GlobalConstants } from './global-constants';


@Injectable({
  providedIn: 'root'
})
export class EnableService {

  readonly rootUrl = GlobalConstants.backendURL + '/user/';
  constructor(private http: HttpClient) {
  }

  enableLoginService(username) {
    return this.http.get(this.rootUrl + username + '/enable');
  }
}

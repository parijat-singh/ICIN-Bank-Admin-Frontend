import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import{ GlobalConstants } from './global-constants';


@Injectable({
  providedIn: 'root'
})
export class DisableService {
  readonly rootUrl = GlobalConstants.backendURL + '/user/';

  constructor(private http: HttpClient) {

  }

  disableLoginService(username) {
    return this.http.get(this.rootUrl + username + '/disable');
  }
}


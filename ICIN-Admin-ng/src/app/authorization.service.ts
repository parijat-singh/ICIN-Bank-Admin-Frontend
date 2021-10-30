import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthorizeUser } from './model/authorizeUser';
import{ GlobalConstants } from './global-constants';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {
 
  readonly rootUrl = GlobalConstants.backendURL + '/user/';
  constructor(private http: HttpClient) { }

  getRequestData() {
    return this.http.get<AuthorizeUser[]>(this.rootUrl + '/unauthorized/all');
  }

  authorizeAccount(username) {
    return this.http.get(this.rootUrl + '/authorize');
  }

  rejectRequest(username) {
    return this.http.get(this.rootUrl + '/authorize/cancel');

  }


}
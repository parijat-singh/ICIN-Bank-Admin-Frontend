import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthorizeUser } from './model/authorizeUser';
import{ GlobalConstants } from './global-constants';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {

  constructor(private http: HttpClient) { }

  getRequestData() {
    return this.http.get<AuthorizeUser[]>(GlobalConstants.backendURL + '/unauthorized/all');
  }

  authorizeAccount(username) {
    return this.http.get(GlobalConstants.backendURL + username + '/authorize');
  }

  rejectRequest(username) {
    return this.http.get(GlobalConstants.backendURL + username + '/authorize/cancel');

  }


}
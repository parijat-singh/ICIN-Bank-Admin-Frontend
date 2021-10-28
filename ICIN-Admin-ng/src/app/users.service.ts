import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserData } from './model/userData';
import { Observable } from 'rxjs';
import{ GlobalConstants } from './global-constants';


@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) {
  }

  public getAllUsers() {
    return this.http.get<any[]>(GlobalConstants.backendURL + "user/all");
  }
}

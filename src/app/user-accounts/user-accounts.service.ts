import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserAccountsService {

  constructor(private http:HttpClient) { }

  getUserData():Observable<any>
  {
    return this.http.get("https://panorbit.in/api/users.json")
  }
}

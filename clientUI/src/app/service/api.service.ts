
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  url = 'https://jsonplaceholder.cypress.io';

  constructor(private http : HttpClient) { }

  getUsers(): Observable<any>
  {
    return this.http.get(this.url + '/users'); 
  }

  getUser(id :number) : Observable<any>{
    return this.http.get(this.url + `/users/${id}`)
  }

}

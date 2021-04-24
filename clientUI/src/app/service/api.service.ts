
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
// url =' https://jsonplaceholder.typicode.com/users'; ---------------// url was not respondng and found this one
  url = 'https://jsonplaceholder.cypress.io';

  constructor(private http : HttpClient) { }


  //gets users
  getUsers(): Observable<any>
  {
    return this.http.get(this.url + '/users'); 
  }
//gets user by id
  getUser(id :number) : Observable<any>{
    return this.http.get(this.url + `/users/${id}`)
  }

}

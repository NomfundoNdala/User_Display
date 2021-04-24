import { Injectable } from '@angular/core';
import { UserI } from 'src/app/model/user.interface';


@Injectable({
  providedIn: 'root'
})
export class UserDetailService {
  public selectedUser!: UserI;

  constructor() { }

  //will set the selected user
  setSelectedUser(user : UserI) : void{
    this.selectedUser = user;
  }
}

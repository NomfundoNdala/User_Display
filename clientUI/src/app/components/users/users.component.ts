import { UserDetailService } from './../../service/shared/user-detail.service';
import { ApiService } from './../../service/api.service';
import { Component, OnInit } from '@angular/core';
import { UserI } from 'src/app/model/user.interface';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

 
  user!: UserI;
  
  constructor(
    private apiService : ApiService,
    private userDetailService : UserDetailService) { }

  ngOnInit(): void {
     const url = window.location.pathname;
     var id = url.substring(url.lastIndexOf('/') +1);
     console.log('user' , id);
     var newId : number = +id;
     this.getUser(newId);
     
  }


//gets the user by id
  getUser(id : number)
  {
    this.apiService.getUser(id).subscribe((data : any)=> {
      this.user = data;
          console.log(data);
    });
    this.user = this.userDetailService.selectedUser;
    console.log(this.user);
    
   
}

}


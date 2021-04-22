import { ApiService } from './../../service/api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  //users : any;
  users: any[] = [];
  
  constructor(private apiService : ApiService) { }

  ngOnInit(): void {
    //this.getUsers();
    //this.apiService.getUsers(this.route.snapshot.paramMap.get('id'));

  //   this.student = this.studentService.studentById;
  //   console.log(this.student);
  // }
  }

  getUsers()
  {
    this.apiService.getUsers().subscribe((data : any)=> {
      this.users = data;
          console.log(this.users);

          localStorage.setItem("users", JSON.stringify(this.users))
    });
   
}

}


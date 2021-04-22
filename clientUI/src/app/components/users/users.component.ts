import { ApiService } from './../../service/api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  //users : any;
  users : any =[];
  name!: string;
  constructor(private apiService : ApiService) { }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers()
  {
    this.apiService.getUsers().subscribe((data : any)=> {
      this.users = data;
      this.name = data.name;
          //console.log(this.users);

          for (let i = 0; i < Object.keys(data).length; i++) {
            console.log(data[i]);
          }
    });
    
  }


  
}


import { RouterModule } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  users: any[] = [];
  constructor(private apiService: ApiService, private router :RouterModule) { }
  filterTerm: string ='';

  ngOnInit(): void {
    this.getUsers()
  }

  getUsers(): any 
  {
    this.apiService.getUsers().subscribe((data : any)=> {
      this.users = data;
          console.log(this.users);

          localStorage.setItem("users", JSON.stringify(this.users))
    });
  }

  
}

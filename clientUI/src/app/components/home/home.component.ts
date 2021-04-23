import { UserDetailService } from './../../service/shared/user-detail.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';
import { UserI } from 'src/app/model/user.interface';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  users: UserI[] = [];
  public selectedUserIndex : number =0;
  constructor(
    private apiService: ApiService, 
    private router :Router , 
    private userDetailService : UserDetailService) { }

  filterTerm: string ='';

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(): any 
  {
    this.apiService.getUsers().subscribe((data : any)=> {
      this.users = data;
    });
  }

  filterByName(filterValue : string) : void{
    let data = this.users.filter((value)=> {
      value.name.toLocaleLowerCase().includes(filterValue);
    });
    this.users = data;
  }

  getSelectedUser(user :UserI , index:number) : void
  {
    this.userDetailService.setSelectedUser(user);
    this.selectedUserIndex = index;

  }

  detailsRoute(id :number)
  {
    this.router.navigateByUrl(`/user/${id}`);
  }

  
}

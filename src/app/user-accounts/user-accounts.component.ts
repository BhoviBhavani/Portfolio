import { Component, OnInit } from '@angular/core';
import { UserAccountsService } from './user-accounts.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-accounts',
  templateUrl: './user-accounts.component.html',
  styleUrls: ['./user-accounts.component.scss']
})
export class UserAccountsComponent implements OnInit {

  userData:any[]=[];
  constructor(private userAccountService:UserAccountsService,private router:Router)
  {

  }
  ngOnInit() {
    this.getUserData();
  }

  getUserData()
  {
    this.userAccountService.getUserData().subscribe((response:any)=>{
      console.log(response)
      this.userData=response.users;
    })
  }

  showUserProfile(user:any)
  {
    console.log(user);
    this.router.navigateByUrl("profile/"+user.id);
  }

}

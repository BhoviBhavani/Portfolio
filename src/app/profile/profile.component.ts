import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit{
  id:any=0;
  header:string='Profile';
  UserData:any={};
  showCommingSoon:boolean=false;
  isChatOpen = false; // Track the state of the chat box
  chatUsers: any[] = [];
  ngOnInit(){
    this.getUserData();
    // Fetch user data and populate chatUsers array
    this.http.get("https://panorbit.in/api/users.json").subscribe((response: any) => {
      this.chatUsers = response.users.map((user: any) => ({
        name: user.name,
        profilePicture: user.profilepicture,
        online: user.id === 1 || user.id === 2 || user.id ===5 || user.id === 7 || user.id === 8
      }));
    });
  }

  signOut() {  
  // Redirect the user to the home page.
  this.router.navigate(['/']); 
}

  toggleChat() {
    console.log('Toggle chat box');
    this.isChatOpen = !this.isChatOpen; // Toggle the chat box state
  }

  constructor(private route:ActivatedRoute, private http:HttpClient,private router: Router)
  {

  }

  showComingSoonPage(tab:string)
  {
    this.header=tab;
    this.showCommingSoon=true;
  }

  getUserData()
  {
    this.showCommingSoon=false;
    this.header="Profile";
    this.id = this.route.snapshot.paramMap.get('id');
    this.http.get("https://panorbit.in/api/users.json").subscribe((response:any)=>{
      console.log(response)
      const index= response.users.findIndex((user:any)=>+user.id===+this.id)
      this.UserData=response.users[index];
      console.log(response.users[index]);
    })
  }
}

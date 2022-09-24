import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Subscription, Observable } from 'rxjs';
import { Router } from '@angular/router';
@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  private userSubscription: Subscription;
  constructor(public userService: UserService,private router: Router) { }

  ngOnInit(): void {
    this.userSubscription = this.userService.user$.subscribe(user => {
      if (user) {
        this.router.navigate(['chirp']);
      }
      else {
        this.router.navigate([''])
      }
    });
   
  }
  public myFunction(){
    var x = document.getElementById("myTopnav");
    var y = document.getElementById("button")

    if(y.className === "float-right"){
      y.className="float-none"
    }
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    } 
  }

  public signOut() {
    this.userService.signOut();
  }
}

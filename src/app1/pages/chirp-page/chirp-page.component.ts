import { Component, OnInit } from '@angular/core';
import { Chirp } from 'src/app/models/chirp';
import { ChirpService } from 'src/app/services/chirp.service';
import { UserService } from 'src/app/services/user.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
@Component({
  selector: 'app-chirp-page',
  templateUrl: './chirp-page.component.html',
  styleUrls: ['./chirp-page.component.css']
})
export class ChirpPageComponent implements OnInit {

  constructor(private chirpService: ChirpService, public userService: UserService,private router: Router) { }

  public chirps$: Observable<Chirp[]>;

  ngOnInit(): void {
      // Get the user who is logged in, then get that person's chirps
      this.userService.user$.subscribe( user => {
        
          if (!user) {
            alert("Login to view this page");
            
            this.router.navigate(['']);
          }
         
        
        // Get an observable of the user's chirps
        this.chirps$ = this.chirpService.getChirpsByUid(user.uid);
      });
  }

  public signOut() {
    this.userService.signOut();
  }

}

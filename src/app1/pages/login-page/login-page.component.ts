import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { ChirpService } from 'src/app/services/chirp.service';
import { Chirp } from 'src/app/models/chirp';
import { Subscription, Observable } from 'rxjs';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit, OnDestroy {

  /** Keeps the subscription to the user object */
  private userSubscription: Subscription;

  /** Observable of all chirps in the system. Used to make a public chirp view. */
  public allChirps: Observable<Chirp[]>;

  constructor(public userService: UserService, private chirpService: ChirpService, private router: Router) { }

  ngOnInit() {
    // If a user comes back from this subscription, forward them on to the chirp page
    this.userSubscription = this.userService.user$.subscribe(user => {
      if (user) {
        this.router.navigate(['profile']);
      }
      else {
        this.router.navigate(['trents'])
      }
    });

    // Subscribe to ALL chirps in the system and show them on this login page
    this.allChirps = this.chirpService.getAllChirps();
  }

  ngOnDestroy() {
    // Clean up the subscription if this template is destroyed
    this.userSubscription.unsubscribe();
  }

}

import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

import { UserService} from '../services/user.service';
import { Observable } from 'rxjs';
import { tap, map, take } from 'rxjs/operators';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private userService: UserService, private router: Router) {}

  /** Lets the router know whether the user can visit the route */
  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {

      return this.userService.user$.pipe(
           take(1),
           map(user => !!user), // <-- map to boolean
           tap(loggedIn => {
             if (!loggedIn) {
               console.log('access denied');
               alert("Please log in to view this page")
               this.router.navigate(['/']);
             }
         })
    );
  }
}

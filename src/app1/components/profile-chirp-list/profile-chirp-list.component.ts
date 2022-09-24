import { Component, Input, OnInit } from '@angular/core';
import { Chirp } from 'src/app/models/chirp';
import { Observable } from 'rxjs';
import { ChirpService } from 'src/app/services/chirp.service';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-profile-chirp-list',
  templateUrl: './profile-chirp-list.component.html',
  styleUrls: ['./profile-chirp-list.component.css']
})
export class ProfileChirpListComponent implements OnInit {
  @Input() chirpList: Observable<Chirp[]>;
  @Input() user: User;
  constructor(private chirpRef:ChirpService,public userService: UserService) { }

  ngOnInit(): void {
  }

  public deleteChirp(chirp: Chirp):void{
    console.log(chirp.text);
      this.chirpRef.deleteChirp(chirp);
  }
}

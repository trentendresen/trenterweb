import { Component, OnInit, Input } from '@angular/core';
import { Chirp } from 'src/app/models/chirp';
import { Observable } from 'rxjs';
import { ChirpService } from 'src/app/services/chirp.service';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-chirp-list',
  templateUrl: './chirp-list.component.html',
  styleUrls: ['./chirp-list.component.css']
})
export class ChirpListComponent implements OnInit {
  @Input() chirpList: Observable<Chirp[]>;
  @Input() user: User;
 
  constructor(private chirpRef:ChirpService,public userService: UserService) { }

  ngOnInit(): void {
    console.log(this.user.uid);
  
  }

  public deleteChirp(chirp: Chirp):void{
    console.log(chirp.text);
      this.chirpRef.deleteChirp(chirp);
  }


}

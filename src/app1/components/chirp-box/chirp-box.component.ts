import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Chirp } from 'src/app/models/chirp';
import { ChirpService } from 'src/app/services/chirp.service';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-chirp-box',
  templateUrl: './chirp-box.component.html',
  styleUrls: ['./chirp-box.component.css']
})
export class ChirpBoxComponent implements OnInit {
  public chirpForm: FormGroup;

  constructor(private fb: FormBuilder, private chirpService: ChirpService) {
    this.createForm();
  }

  @Input() user: User;

  ngOnInit() {
  }

  createForm() {
    this.chirpForm = this.fb.group({
      text: [null, [Validators.required, Validators.maxLength(140)]]
    });
  }

  /**
   * When form is submitted, builds a new chirp object and stores it
   */
  onSubmit() {
    let trent = this.chirpForm.get('text').value;
    let trentChecker = trent.toLowerCase();
    if (trentChecker.split(" ").includes("trent") === false) {
      alert("Not enough trent");
    } else {
      this.chirpService.postChirp(new Chirp({
        user: this.user,
        text: this.chirpForm.get('text').value
      })
      );
    }
  }

  /**
   * Helps us validate the form field
   */
  lengthIsInvalid() {
    return this.chirpForm.get('text').invalid &&
      (this.chirpForm.get('text').dirty || this.chirpForm.get('text').touched);
  }

  enoughTrent() {


  }

}

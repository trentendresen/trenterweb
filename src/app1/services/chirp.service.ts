import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Chirp } from '../models/chirp';
import { elementAt, map } from 'rxjs/operators';
import { domain } from 'process';


@Injectable({
  providedIn: 'root'
})
export class ChirpService {

  constructor(private afs: AngularFirestore) { }

  /**
   * Takes in a username and returns an observable stream for that user's chirps
   * @param uid The username of the person
   * @returns An observable of a chirp array
   */
  public getChirpsByUid(uid: string): Observable<Chirp[]> {
    return this.afs
      .collection('trents', ref => ref.where('user.uid', '==', uid).orderBy('time', 'desc'))
      .valueChanges().pipe(
        map( chirps => chirps.map( chirpObj => new Chirp(chirpObj) ))
      );
  }

  /** Gets all chirps in the system */
  public getAllChirps(): Observable<Chirp[]> {
    return this.afs
      .collection('trents', ref => ref.orderBy('time', 'desc'))
      .valueChanges().pipe(
        map( chirps => chirps.map( chirpObj => new Chirp(chirpObj) ))
      );
  }


  public deleteChirp(chirp: Chirp): void{
    const trentRef = this.afs.collection('trents', ref=>ref.where('text','==',chirp.text).where('time' ,'==' ,chirp.time))
    .get().toPromise().then(function(querySnapshot){
      querySnapshot.forEach(function(doc){
        doc.ref.delete();
      });
    });
    
  }

  /**
   * Posts a new chirp to the database
   * @param chirp The chirp object we want to save
   */
  public postChirp(chirp: Chirp): void {
    this.afs.collection('trents').add({ // Break down the chirp to a JS object to save
      user:  chirp.user,
      time: chirp.time,
      text: chirp.text
    });
  }
}

import * as moment from 'moment';

export class Chirp {
    public user: object;
    public text: string;
    public time: string;

    constructor(chirpObj) {
        this.user = chirpObj.user;
        this.text = chirpObj.text;
        this.time = chirpObj.time || new Date().toISOString();
    }

    /**
     * Returns the time of the chirp in moment's "fromNow" format
     */
    get timeFromNow() {
        return moment( new Date(this.time) ).fromNow();
    }
}

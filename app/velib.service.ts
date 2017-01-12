import { Injectable } from '@angular/core';
import { Http ,Response } from '@angular/http';
import { Observable }     from 'rxjs/Observable';

import { Point } from './point';
import { POINTS } from './mock-points';

@Injectable()
export class VelibService {

  getPoints(): Promise<Point[]> {
    return Promise.resolve(POINTS);
  }
  /*private velibUrl = 'https://api.jcdecaux.com/vls/v1/stations?apiKey=038726c8760714be8a4d90cf2e60b40f9f84ce52';
  constructor(private http: Http) {}

  getPoints(): Promise<Point[]> {
    return this.http.get(this.velibUrl)
                    .toPromise()
                    .then(this.extractData)
                    .catch(this.handleError);

    //return Promise.resolve(POINTS);
  }

  private extractData(res: Response) {
    let body = res.json();
    console.log(body.data);
    return body.data || { };
  }

  private handleError (error: Response | any) {
    // In a real world app, we might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }*/
}

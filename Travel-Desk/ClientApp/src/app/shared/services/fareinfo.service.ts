import { Injectable } from '@angular/core';

import { AppHttpService } from '../services/http.service';
import { ConfigService } from '../utils/config.service';
import { AuthService } from '../services/auth.service';
import {HttpClient,HttpParams} from '@angular/common/http';
import {BaseService} from "./base.service";
import { Observable } from 'rxjs/Rx';
import { BehaviorSubject } from 'rxjs/Rx';
import { FareOptions} from '../models/fareoptions.interface';

//import * as _ from 'lodash';
// Add the RxJS Observable operators we need in this app.
import '../../rxjs-operators';

@Injectable()

export class FareService extends BaseService {

  baseUrl: string = '';
  private loggedIn = false;

  constructor(private http: HttpClient , private configService: ConfigService,private authService : AuthService) {
    super();
    this.baseUrl = configService.getApiURI();
  }

  addFareInfo(faredata: FareOptions): Observable<any> {
      return this.http.post(this.baseUrl + 'api/Fare/AddFare',
          JSON.stringify(faredata));
  }

  getFareForRequest(requestId: number): Observable<any> {
        return this.http.get(this.baseUrl + 'api/Fare/GetFareForRequest',
            {
                params: new HttpParams().set('id', requestId.toString())
            });
    }


  updateFareInfo(faredata: FareOptions): Observable<any> {

      return this.http.post(this.baseUrl + 'api/Fare/UpdateFare', 
          JSON.stringify(faredata));
    }


    deleteFare(deletedFares: number[]): Observable<any> {
        return this.http.post(this.baseUrl + 'api/Fare/DeleteFare',
            JSON.stringify(deletedFares));

    }
}

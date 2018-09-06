import { Injectable } from '@angular/core';

import { AppHttpService } from '../services/http.service';
import { ConfigService } from '../utils/config.service';
import { AuthService } from '../services/auth.service';
import {HttpClient,HttpParams} from '@angular/common/http';
import {BaseService} from "./base.service";
import { Observable } from 'rxjs/Rx';
import { BehaviorSubject } from 'rxjs/Rx';
import { BoardingLodgingOptions } from '../models/boardingLodgingoptions.interface';

//import * as _ from 'lodash';
// Add the RxJS Observable operators we need in this app.
import '../../rxjs-operators';

@Injectable()

export class BoardingLodgingService extends BaseService {

  baseUrl: string = '';
  private loggedIn = false;

  constructor(private http: HttpClient , private configService: ConfigService,private authService : AuthService) {
    super();
    this.baseUrl = configService.getApiURI();
  }

    addBoardingLodgingInfo(boardingLodgingdata: BoardingLodgingOptions): Observable<any> {
        return this.http.post(this.baseUrl + 'api/BoardingLodging/AddBoardingLodging',
            JSON.stringify(boardingLodgingdata));
  }

  getBoardingLodgingForRequest(requestId: number): Observable<any> {
      return this.http.get(this.baseUrl + 'api/BoardingLodging/GetBoardingLodgingForRequest',
            {
                params: new HttpParams().set('id', requestId.toString())
            });
    }


    updateBoardingLodgingInfo(boardingLodgingdata: BoardingLodgingOptions): Observable<any> {

        return this.http.post(this.baseUrl + 'api/BoardingLodging/UpdateBoardingLodging', 
            JSON.stringify(boardingLodgingdata));
    }


    deleteBoardingLodging(deletedBoardingLodging: number[]): Observable<any> {
        return this.http.post(this.baseUrl + 'api/BoardingLodging/DeleteBoardingLodging',
            JSON.stringify(deletedBoardingLodging));

    }
}

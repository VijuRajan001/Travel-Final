import { Injectable } from '@angular/core';

import { AppHttpService } from '../services/http.service';
import { ConfigService } from '../utils/config.service';
import { AuthService } from '../services/auth.service';
import {HttpClient,HttpParams} from '@angular/common/http';
import {BaseService} from "./base.service";
import { Observable } from 'rxjs/Rx';
import { BehaviorSubject } from 'rxjs/Rx';
import { TravelExpensesWithVoucherOptions } from '../models/travelExpensesWithVoucheroptions.interface';

//import * as _ from 'lodash';
// Add the RxJS Observable operators we need in this app.
import '../../rxjs-operators';

@Injectable()

export class TravelExpensesWithVoucherService extends BaseService {

  baseUrl: string = '';
  private loggedIn = false;

  constructor(private http: HttpClient , private configService: ConfigService,private authService : AuthService) {
    super();
    this.baseUrl = configService.getApiURI();
  }

    addTravelExpensesWithVoucherInfo(travelExpensesWithVoucherdata: TravelExpensesWithVoucherOptions): Observable<any> {
      return this.http.post(this.baseUrl + 'api/TravelExpensesWithVoucher/AddTravelExpensesWithVoucher',
          JSON.stringify(travelExpensesWithVoucherdata));
  }

  getTravelExpensesWithVoucherForRequest(requestId: number): Observable<any> {
    return this.http.get(this.baseUrl + 'api/TravelExpensesWithVoucher/GetTravelExpensesWithVoucherForRequest',
            {
                params: new HttpParams().set('id', requestId.toString())
            });
    }


    updateTravelExpensesWithVoucherInfo(travelExpensesWithVoucherdata: TravelExpensesWithVoucherOptions): Observable<any> {

      return this.http.post(this.baseUrl + 'api/TravelExpensesWithVoucher/UpdateTravelExpensesWithVoucher', 
          JSON.stringify(travelExpensesWithVoucherdata));
    }


    deleteTravelExpensesWithVoucher(deletedTravelExpensesWithVoucher: number[]): Observable<any> {
      return this.http.post(this.baseUrl + 'api/TravelExpensesWithVoucher/DeleteTravelExpensesWithVoucher',
            JSON.stringify(deletedTravelExpensesWithVoucher));

    }
}

import { Injectable } from '@angular/core';

import { AppHttpService } from '../services/http.service';
import { ConfigService } from '../utils/config.service';
import { AuthService } from '../services/auth.service';
import {HttpClient,HttpParams} from '@angular/common/http';
import {BaseService} from "./base.service";
import { Observable } from 'rxjs/Rx';
import { BehaviorSubject } from 'rxjs/Rx';
import { TravelExpensesWithoutVoucherOptions } from '../models/travelExpensesWithoutVoucheroptions.interface';

//import * as _ from 'lodash';
// Add the RxJS Observable operators we need in this app.
import '../../rxjs-operators';

@Injectable()

export class TravelExpensesWithoutVoucherService extends BaseService {

  baseUrl: string = '';
  private loggedIn = false;

  constructor(private http: HttpClient , private configService: ConfigService,private authService : AuthService) {
    super();
    this.baseUrl = configService.getApiURI();
  }

    addTravelExpensesWithoutVoucherInfo(travelExpensesWithoutVoucherdata: TravelExpensesWithoutVoucherOptions): Observable<any> {
      return this.http.post(this.baseUrl + 'api/TravelExpensesWithoutVoucher/AddTravelExpensesWithoutVoucher',
          JSON.stringify(travelExpensesWithoutVoucherdata));
  }

  getTravelExpensesWithoutVoucherForRequest(requestId: number): Observable<any> {
    return this.http.get(this.baseUrl + 'api/TravelExpensesWithoutVoucher/GetTravelExpensesWithoutVoucherForRequest',
            {
                params: new HttpParams().set('id', requestId.toString())
            });
    }


    updateTravelExpensesWithoutVoucherInfo(travelExpensesWithoutVoucherdata: TravelExpensesWithoutVoucherOptions): Observable<any> {

      return this.http.post(this.baseUrl + 'api/TravelExpensesWithoutVoucher/UpdateTravelExpensesWithoutVoucher', 
          JSON.stringify(travelExpensesWithoutVoucherdata));
    }


    deleteTravelExpensesWithoutVoucher(deletedTravelExpensesWithoutVoucher: number[]): Observable<any> {
      return this.http.post(this.baseUrl + 'api/TravelExpensesWithoutVoucher/DeleteTravelExpensesWithoutVoucher',
            JSON.stringify(deletedTravelExpensesWithoutVoucher));

    }
}

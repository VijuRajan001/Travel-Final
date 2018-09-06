import { Injectable } from '@angular/core';

import { AppHttpService } from '../services/http.service';
import { ConfigService } from '../utils/config.service';
import { AuthService } from '../services/auth.service';
import {HttpClient,HttpParams} from '@angular/common/http';
import {BaseService} from "./base.service";
import { Observable } from 'rxjs/Rx';
import { BehaviorSubject } from 'rxjs/Rx';
import { OtherExpensesOptions } from '../models/otherExpensesoptions.interface';

//import * as _ from 'lodash';
// Add the RxJS Observable operators we need in this app.
import '../../rxjs-operators';

@Injectable()

export class OtherExpensesService extends BaseService {

  baseUrl: string = '';
  private loggedIn = false;

  constructor(private http: HttpClient , private configService: ConfigService,private authService : AuthService) {
    super();
    this.baseUrl = configService.getApiURI();
  }

    addOtherExpensesInfo(otherExpensesdata: OtherExpensesOptions): Observable<any> {
        return this.http.post(this.baseUrl + 'api/OtherExpenses/AddOtherExpenses',
            JSON.stringify(otherExpensesdata));
  }

  getOtherExpensesForRequest(requestId: number): Observable<any> {
      return this.http.get(this.baseUrl + 'api/OtherExpenses/GetOtherExpensesForRequest',
            {
                params: new HttpParams().set('id', requestId.toString())
            });
    }


    updateOtherExpensesInfo(otherExpensesdata: OtherExpensesOptions): Observable<any> {

        return this.http.post(this.baseUrl + 'api/OtherExpenses/UpdateOtherExpenses', 
            JSON.stringify(otherExpensesdata));
    }


    deleteOtherExpenses(deletedOtherExpenses: number[]): Observable<any> {
        return this.http.post(this.baseUrl + 'api/OtherExpenses/DeleteOtherExpenses',
            JSON.stringify(deletedOtherExpenses));

    }
}

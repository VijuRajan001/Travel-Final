import { Injectable } from '@angular/core';

import { AppHttpService } from '../services/http.service';
import { ConfigService } from '../utils/config.service';
import { AuthService } from '../services/auth.service';
import {HttpClient,HttpParams} from '@angular/common/http';
import {BaseService} from "./base.service";
import { Observable } from 'rxjs/Rx';
import { BehaviorSubject } from 'rxjs/Rx';
import { ForexCard} from '../models/forex.interface';

//import * as _ from 'lodash';
// Add the RxJS Observable operators we need in this app.
import '../../rxjs-operators';

@Injectable()

export class ForexService extends BaseService {

  baseUrl: string = '';
  private loggedIn = false;

  constructor(private http: HttpClient , private configService: ConfigService,private authService : AuthService) {
    super();
    this.baseUrl = configService.getApiURI();
  }

  addForexInfo(forexdata: ForexCard): Observable<any> {
      return this.http.post(this.baseUrl + 'api/Forex/AddForex',
          JSON.stringify(forexdata));
  }

  getForexDetails(id: number): Observable<any> {

      return this.http.get(this.baseUrl + 'api/Forex/GetForexDetails', {
          params: new HttpParams().set('id', id.toString())
      });
  }

    updateForexInfo(forexdata: ForexCard): Observable<any> {

      return this.http.post(this.baseUrl + 'api/Forex/UpdateForex', 
          JSON.stringify(forexdata));
    }
}

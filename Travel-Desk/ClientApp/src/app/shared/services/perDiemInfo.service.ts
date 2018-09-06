import { Injectable } from '@angular/core';

import { AppHttpService } from '../services/http.service';
import { ConfigService } from '../utils/config.service';
import { AuthService } from '../services/auth.service';
import {HttpClient,HttpParams} from '@angular/common/http';
import {BaseService} from "./base.service";
import { Observable } from 'rxjs/Rx';
import { BehaviorSubject } from 'rxjs/Rx';
import { PerDiemOptions} from '../models/perDiemoptions.interface';

//import * as _ from 'lodash';
// Add the RxJS Observable operators we need in this app.
import '../../rxjs-operators';
import { PerDiemItem } from '../models/perDiemitem.interface';

@Injectable()

export class PerDiemService extends BaseService {

  baseUrl: string = '';
  private loggedIn = false;

  constructor(private http: HttpClient , private configService: ConfigService,private authService : AuthService) {
    super();
    this.baseUrl = configService.getApiURI();
  }

  addPerDiemInfo(perDiemdata: PerDiemItem): Observable<any> {
      return this.http.post(this.baseUrl + 'api/PerDiem/AddPerDiem',
          JSON.stringify(perDiemdata));
  }

  getPerDiemForRequest(requestId: number): Observable<any> {
        return this.http.get(this.baseUrl + 'api/PerDiem/GetPerDiemForRequest',
            {
                params: new HttpParams().set('id', requestId.toString())
            });
    }


  updatePerDiemInfo(perDiemdata: PerDiemItem): Observable<any> {
      
      return this.http.post(this.baseUrl + 'api/PerDiem/UpdatePerDiem', 
          JSON.stringify(perDiemdata));
    }


    deletePerDiem(deletedPerDiem: number[]): Observable<any> {
        return this.http.post(this.baseUrl + 'api/PerDiem/DeletePerDiem',
            JSON.stringify(deletedPerDiem));

    }
}

import { Injectable } from '@angular/core';

import { AppHttpService } from '../services/http.service';
import { ConfigService } from '../utils/config.service';
import { AuthService } from '../services/auth.service';
import {HttpClient,HttpParams} from '@angular/common/http';
import {BaseService} from "./base.service";
import { Observable } from 'rxjs/Rx';
import { BehaviorSubject } from 'rxjs/Rx';
import { TravelData} from '../models/traveldata.interface';
import { RequestData } from '../models/requestdata.interface';
//import * as _ from 'lodash';
// Add the RxJS Observable operators we need in this app.
import '../../rxjs-operators';

@Injectable()

export class RequestService extends BaseService {

  baseUrl: string = '';
  private loggedIn = false;

  constructor(private http: HttpClient , private configService: ConfigService,private authService : AuthService) {
    super();
    this.baseUrl = configService.getApiURI();
  }

  addRequest(requestData: RequestData): Observable<any> {
      return this.http.post(this.baseUrl + 'api/Request/AddRequest',
          JSON.stringify(requestData));
  }

  getRequestList(login : string,filter?:string, sortOrder? :string,
    pageNumber?:number, pageSize? :number): Observable<RequestData[]> {

    return this.http.get<RequestData[]>(this.baseUrl + 'api/Request/GetRequestList', {
      params: new HttpParams()
        .set('filter', filter)
        .set('sortOrder', sortOrder)
        .set('pageNumber', pageNumber.toString())
        .set('pageSize', pageSize.toString())
        .set('login',login)
    });
  }

  getRequestById(id:number): Observable<RequestData> {
      
      return this.http.get<RequestData>(this.baseUrl + 'api/Request/GetRequestById', {
          params: new HttpParams().set('id', id.toString())
      }
    );
  }

  updateRequest(requestData: RequestData): Observable<any> {
      
      return this.http.post(this.baseUrl + 'api/Request/UpdateRequest', 
        JSON.stringify(requestData));
  }

  approveRequest(id: number) : Observable<any>{
    return this.http.get(this.baseUrl + 'api/Request/ApproveRequest', {
      params: new HttpParams().set('id', id.toString())
    });

  }
  declineRequest(id: number) : Observable<any>{
    return this.http.get(this.baseUrl + 'api/Request/DeclineRequest', {
      params: new HttpParams().set('id', id.toString())
      });

  }
}

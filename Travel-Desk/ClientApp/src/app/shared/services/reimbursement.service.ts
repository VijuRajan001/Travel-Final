import { Injectable } from '@angular/core';

import { AppHttpService } from '../services/http.service';
import { ConfigService } from '../utils/config.service';
import { AuthService } from '../services/auth.service';
import {HttpClient,HttpParams} from '@angular/common/http';
import {BaseService} from "./base.service";
import { Observable } from 'rxjs/Rx';
import { BehaviorSubject } from 'rxjs/Rx';
import { TravelData} from '../models/traveldata.interface';
import { ReimbursementData } from '../models/reimbursementdata.interface';
//import * as _ from 'lodash';
// Add the RxJS Observable operators we need in this app.
import '../../rxjs-operators';

@Injectable()

export class ReimbursementService extends BaseService {

  baseUrl: string = '';
  private loggedIn = false;

  constructor(private http: HttpClient , private configService: ConfigService,private authService : AuthService) {
    super();
    this.baseUrl = configService.getApiURI();
  }

  addReimbursement(reimbursementData: ReimbursementData): Observable<any> {
    console.log('inside reimbursement' + reimbursementData);
    return this.http.post(this.baseUrl + 'api/Reimbursement/AddReimbursement',
          JSON.stringify(reimbursementData));
  }

  getReimbursementList(): Observable<ReimbursementData[]> {

      return this.http.get<ReimbursementData[]>(this.baseUrl + 'api/Reimbursement/GetReimbursementList');
  }

  getReimbursementById(id:number): Observable<ReimbursementData> {
      
      return this.http.get<ReimbursementData>(this.baseUrl + 'api/Reimbursement/GetReimbursementById', {
          params: new HttpParams().set('id', id.toString())
      }
    );
  }

  updateReimbursement(reimbursementData: ReimbursementData): Observable<any> {
      
      return this.http.post(this.baseUrl + 'api/Reimbursement/UpdateReimbursement', 
        JSON.stringify(reimbursementData));
  }

  approveRequest(id: number) : Observable<any>{
    return this.http.get(this.baseUrl + 'api/Reimbursement/ApproveRequest', {
      params: new HttpParams().set('id', id.toString())
    });

  }
  declineRequest(id: number) : Observable<any>{
    return this.http.get(this.baseUrl + 'api/Reimbursement/DeclineRequest', {
      params: new HttpParams().set('id', id.toString())
      });

  }
}

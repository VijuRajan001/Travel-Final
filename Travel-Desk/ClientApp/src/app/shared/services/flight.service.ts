import { Injectable } from '@angular/core';

import { AppHttpService } from '../services/http.service';
import { ConfigService } from '../utils/config.service';
import { AuthService } from '../services/auth.service';
import {HttpClient,HttpParams} from '@angular/common/http';
import {BaseService} from "./base.service";
import { Observable } from 'rxjs/Rx';
import { BehaviorSubject } from 'rxjs/Rx';
import { FlightOptions} from '../models/flightoptions.interface';

//import * as _ from 'lodash';
// Add the RxJS Observable operators we need in this app.
import '../../rxjs-operators';

@Injectable()

export class FlightService extends BaseService {

  baseUrl: string = '';
  private loggedIn = false;

  constructor(private http: HttpClient , private configService: ConfigService,private authService : AuthService) {
    super();
    this.baseUrl = configService.getApiURI();
  }

  addFlightInfo(flightdata: FlightOptions): Observable<any> {

    return this.http.post(this.baseUrl + 'api/Flight/AddFlights',
          JSON.stringify(flightdata));
  }

  getFlightsForRequest(requestId: number): Observable<any> {
      return this.http.get(this.baseUrl + 'api/Flight/GetFlightsForRequest',
          {
              params: new HttpParams().set('id', requestId.toString())
          });
  }



  updateFlightInfo(flightdata: FlightOptions): Observable<any> {
    
        return this.http.post(this.baseUrl + 'api/Flight/UpdateFlights', 
          JSON.stringify(flightdata));
     
    }

    deleteflights(deletedFlights: number[]):Observable<any> {
        return this.http.post(this.baseUrl + 'api/Flight/DeleteFlights',
            JSON.stringify(deletedFlights));
        
    }
}

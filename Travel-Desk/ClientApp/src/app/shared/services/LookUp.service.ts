import { BaseService } from "./base.service";
import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from '@angular/common/http';
import { ConfigService } from "../utils/config.service";
import { appuser } from "../models/user.interface";
import { LookUp } from "../models/lookUp.Interface";
import { Observable } from "rxjs";
import { App } from "../models/app.enum";

@Injectable()
export class LookupService extends BaseService {

  baseUrl: string = '';
  
  constructor(private http: HttpClient, private configService: ConfigService) {
    super();
    this.baseUrl = configService.getApiURI();
  }


  getCountryList(): Observable<LookUp[]> {

    return this.http.get<LookUp[]>(this.baseUrl + 'api/LookUp/GetCountryList');

  }

  getCurrencyList() {


  }

  

}

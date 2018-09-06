import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { RequestService } from './request.service';
import { ReimbursementService} from './reimbursement.service';
import { from } from 'rxjs/observable/from'; 
@Injectable()
export class GridreimbursementService {
    constructor(private reimbursementService:ReimbursementService) {  }

    private gridDataSource = new BehaviorSubject<any[]>([]);

   gridData = this.gridDataSource.asObservable();

   pushGridData(data:any) {
      this.gridDataSource.next(data);
    }

    getGridData(): Observable<any>
    {
        return this.gridData;
    }

    disconnect(): any
    {
        this.gridDataSource.complete();
    }

    loadReimbursementData(): void {

      this.reimbursementService.getReimbursementList().subscribe((requests => this.pushGridData(requests)))
    }

}

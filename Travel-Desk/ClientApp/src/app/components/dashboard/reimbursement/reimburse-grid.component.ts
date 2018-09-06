import { Component, ViewChild,OnInit } from '@angular/core';
import { MatPaginatorModule,MatFormFieldModule, MatButtonModule, MatSortModule, MatDialogModule, MatTableModule } from '@angular/material';
import { MatPaginator, MatSort,MatDialog } from '@angular/material';

import { RequestData } from '../../../shared/models/requestdata.interface';
import { ReimbursementData } from '../../../shared/models/reimbursementdata.interface';
import { RequestDialog } from '../../request/request-dialog.component';
import { ReimbursementDialog } from '../../reimbursement/reimbursement-dialog.component';
import { DataSource } from '@angular/cdk/collections';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { GridService } from '../../../shared/services/grid.service';
import { GridreimbursementService } from '../../../shared/services/gridreimbursement.service';
import { ReimbursementService } from '../../../shared/services/reimbursement.service';
import { CollectionViewer } from '@angular/cdk/collections';
import { catchError, finalize, tap } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';

/**
 * @title Data table with sorting, pagination, and filtering.
 */
@Component({
    selector: 'reimburse-grid',
    styleUrls: ['reimburse-grid.component.css'],
    templateUrl: 'reimburse-grid.component.html',
})
export class ReimburseGrid implements OnInit {

  displayedColumns = ['reimbursementInfoId', 'projectCode', 'employeeId','employeeName', 'purposeofTravel', 'locationofTravel','actions'];
    dataSource: ReimbursementDataSource;
    request: RequestData;
    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort) sort: MatSort;

  constructor(public dialog: MatDialog, private reimbursementService: ReimbursementService) {
        // Create 100 users
        
        
    }
    
    /**
     * Set the paginator and sort after the view init since this component will
     * be able to query its view for the initialized paginator and sort.
     */
    ngAfterViewInit() {
     
    }

    ngOnInit() {
      this.dataSource = new ReimbursementDataSource(this.reimbursementService);
        this.dataSource.loadReimbursement();

    }

    applyFilter(filterValue: string) {
        //filterValue = filterValue.trim(); // Remove whitespace
        //filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
        //this.dataSource.filter = filterValue;
    }
  


    openReimbursementDialog(id: number): void {


        let dialogRef = this.dialog.open(ReimbursementDialog, {
            width: '80vw',
            height: '70vh',
            data: id
        });

        dialogRef.afterClosed().subscribe(result => {

            this.dataSource.loadReimbursement();

        });



    }

  approve(id: number) {

      this.reimbursementService.approveRequest(id).subscribe(
          (val) => {
            this.dataSource.loadReimbursement();
          },
          response => {
            console.log("POST call in error", response);
          },
          () => {
            console.log("The POST observable is now completed.");
          });

    }

    decline(id: number) {


      this.reimbursementService.declineRequest(id).subscribe(
          (val) => {
            this.dataSource.loadReimbursement();
          },
          response => {
            console.log("POST call in error", response);
          },
          () => {
            console.log("The POST observable is now completed.");
          });

    }
    


}

/** Builds and returns a new User. */
export class ReimbursementDataSource extends DataSource<any>
{
    
  private reimbursementSubject = new BehaviorSubject<ReimbursementData[]>([]);
  private loadingReimbursementSubject = new BehaviorSubject<boolean>(false);
  public loading$ = this.loadingReimbursementSubject.asObservable();

  constructor(private reimbursementService: ReimbursementService) {
        super();
    }
  connect(collectionViewer: CollectionViewer): Observable<ReimbursementData[]> {
    return this.reimbursementSubject.asObservable();
  }
  disconnect(collectionViewer: CollectionViewer): void {
    this.reimbursementSubject.complete();
    this.loadingReimbursementSubject.complete();
  }

  loadReimbursement() {
    this.loadingReimbursementSubject.next(true);
    this.reimbursementService.getReimbursementList().pipe(
      catchError(() => of([])),
      finalize(() => this.loadingReimbursementSubject.next(false))
    )
      .subscribe(request => {
        this.reimbursementSubject.next(request);
        console.log(request);
      }

    );


  }


}


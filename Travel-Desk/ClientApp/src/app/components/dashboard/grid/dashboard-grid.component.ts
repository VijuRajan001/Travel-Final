import { Component, ViewChild,OnInit } from '@angular/core';
import { MatPaginatorModule,MatFormFieldModule, MatButtonModule, MatSortModule, MatDialogModule, MatTableModule } from '@angular/material';
import { MatPaginator, MatSort,MatDialog } from '@angular/material';
import { RequestService } from '../../../shared/services/request.service'
import { RequestData } from '../../../shared/models/requestdata.interface';
import { ReimbursementData } from '../../../shared/models/reimbursementdata.interface';
import { RequestDialog } from '../../request/request-dialog.component';
import { ReimbursementDialog } from '../../reimbursement/reimbursement-dialog.component';
import { DataSource } from '@angular/cdk/collections';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { GridService } from '../../../shared/services/grid.service';
import { CollectionViewer } from '@angular/cdk/collections';
import { catchError, finalize, tap } from 'rxjs/operators';
import { MatProgressSpinnerModule } from '@angular/material';
import { of } from 'rxjs/observable/of';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../../shared/services/user.service';
import { appuserrole } from '../../../shared/models/user.interface';
import { App, role } from '../../../shared/models/app.enum';

/**
 * @title Data table with sorting, pagination, and filtering.
 */
@Component({
    selector: 'dash-grid',
    styleUrls: ['dashboard-grid.component.css'],
    templateUrl: 'dashboard-grid.component.html',
})
export class TableOverviewExample implements OnInit {

    displayedColumns = ['requestId', 'project_Code', 'country', 'employeeId', 'employeeName', 'travelDate', 'returnDate','actions'];
    dataSource: RequestDataSource;
     userrole: appuserrole;
     approle: typeof role = role;

    length=0;
    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort) sort: MatSort;

    constructor(public dialog: MatDialog, private requestService: RequestService,
      private route: ActivatedRoute, private userService: UserService,
      private router: Router
    ) {
        // Create 100 users
        
        
    }
    
    /**
     * Set the paginator and sort after the view init since this component will
     * be able to query its view for the initialized paginator and sort.
     */
    ngAfterViewInit() {
      this.paginator.page
            .pipe(
                tap(() => this.loadRequestPage())
            )
            .subscribe();

      this.paginator.length = this.length;
      
    }

    ngOnInit() {
        
        this.dataSource = new RequestDataSource(this.requestService,this.userService);
        this.dataSource.loadRequests( );
        this.length = this.dataSource.getRequestlength();
      this.userrole = this.userService.getCurrentRole(App.RequestAppId);
      

    }

    applyFilter(filterValue: string) {
        //filterValue = filterValue.trim(); // Remove whitespace
        //filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
        //this.dataSource.filter = filterValue;
    }

    openRequestDialog(id:number): void {


        //let dialogRef = this.dialog.open(RequestDialog, {
        //    width: '80vw',
        //    height: '70vh',
        //    data: id
        //});

        //dialogRef.beforeClose().subscribe(result => {

        //    this.dataSource.loadRequests();

        //});


      this.router.navigateByUrl("/request/" + id);
        
    }

    approve(id: number) {

      this.requestService.approveRequest(id).subscribe(
          (val) => {
            this.dataSource.loadRequests();
          },
          response => {
            console.log("POST call in error", response);
          },
          () => {
            console.log("The POST observable is now completed.");
          });

    }

    decline(id: number) {


      this.requestService.declineRequest(id).subscribe(
          (val) => {
            this.dataSource.loadRequests();
          },
          response => {
            console.log("POST call in error", response);
          },
          () => {
            console.log("The POST observable is now completed.");
          });

    }
    
    loadRequestPage() {

      this.dataSource.loadRequests(
              '',
            'asc',
            this.paginator.pageIndex,
            this.paginator.pageSize);
      
    }


}

/** Builds and returns a new User. */
export class RequestDataSource implements DataSource<any>
{

  private requestSubject = new BehaviorSubject<RequestData[]>([]);
  private loadingRequestSubject = new BehaviorSubject<boolean>(false);
  public loading$ = this.loadingRequestSubject.asObservable();
  private requestLength= 0;

  constructor(private requestService: RequestService,private userService : UserService) {
        
    }
    connect(collectionViewer: CollectionViewer): Observable<RequestData[]> {
      return this.requestSubject.asObservable();
    }
    disconnect(collectionViewer: CollectionViewer): void {
      this.requestSubject.complete();
      this.loadingRequestSubject.complete();
    }

    getRequestlength() {

      return this.requestLength;
    }

    loadRequests(filter = '',
    sortDirection = 'asc', pageIndex = 0, pageSize = 3) {
        this.loadingRequestSubject.next(true);
    this.requestService.getRequestList(this.userService.getCurrentLoginId(), filter, sortDirection,
      pageIndex, pageSize).pipe(
        catchError(() => of([])),
        finalize(() => this.loadingRequestSubject.next(false))
      )
      .subscribe(request => {
        this.requestLength = request.length;
        this.requestSubject.next(request);

      });
            
        
    }

}


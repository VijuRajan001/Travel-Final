import { MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectorRef, Component, Renderer2, ElementRef, ViewChild,ViewChildren,QueryList, AfterViewInit } from '@angular/core';
import { MatToolbarModule, MatSidenavModule, MatListModule, MatSidenav, MatMenuModule, MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { UserService } from '../../../shared/services/user.service';
import { Router, ActivatedRoute,Params } from '@angular/router';
import { RequestDialog } from '../../request/request-dialog.component';
import { TableOverviewExample } from '../../dashboard/grid/dashboard-grid.component';
import { GridService } from '../../../shared/services/grid.service';
import { ReimbursementDialog } from '../../reimbursement/reimbursement-dialog.component';

import { MatIconRegistry } from "@angular/material/icon";
import { DomSanitizer } from "@angular/platform-browser";
@Component({
    selector: 'home-layout',
    templateUrl: './home-layout.component.html',
    styleUrls: ['./home-layout.component.css']
})
export class HomeLayoutComponent {
    
     
   
    
    @ViewChildren(TableOverviewExample) DashBoardGrid: QueryList<TableOverviewExample>

    mobileQuery: MediaQueryList;
    

    
    private _mobileQueryListener: () => void;

    constructor(public dialog: MatDialog, changeDetectorRef: ChangeDetectorRef,
        media: MediaMatcher, private renderer: Renderer2, private router: Router,
        private gridService: GridService,
        private userService: UserService
         , private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer
    ) {
        this.mobileQuery = media.matchMedia('(max-width: 600px)');
        this._mobileQueryListener = () => changeDetectorRef.detectChanges();
        this.mobileQuery.addListener(this._mobileQueryListener);
      this.matIconRegistry.addSvgIcon(
      "nous-logo",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/Nous_logo.svg")
    );
        
    }
    
    openRequestDialog(): void {
        this.router.navigateByUrl("/request");
    }


    openReimbursementDialog(): void {
        this.router.navigateByUrl("/reimbursement");
    }
    
    
    ngOnDestroy(): void {
        this.mobileQuery.removeListener(this._mobileQueryListener);
    }

    signout() {
        this.userService.logout();
        this.router.navigateByUrl('/login');
    }
}

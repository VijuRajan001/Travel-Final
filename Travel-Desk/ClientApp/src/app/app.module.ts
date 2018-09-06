
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './components/app/app.component';
import { NavMenuComponent } from './components/navmenu/navmenu.component';
import { RequestDialog } from './components/request/request-dialog.component'
import { TableOverviewExample } from './components/dashboard/grid/dashboard-grid.component';
import { FetchDataComponent } from './components/fetchdata/fetchdata.component';
import { CounterComponent } from './components/counter/counter.component';
import { LoginComponent } from './components/account/login/login.component';
import { LoginLayoutComponent } from './components/layout/login/login-layout.component';
import { HomeLayoutComponent } from './components/layout/home/home-layout.component';
import { ReimbursementDialog } from './components/reimbursement/reimbursement-dialog.component';
import { MediaMatcher } from '@angular/cdk/layout';
import { ConfigService } from './shared/utils/config.service';
import { UserService } from './shared/services/user.service';
import { RequestService } from './shared/services/request.service';
import { AuthService } from './shared/services/auth.service';
import { GridService } from './shared/services/grid.service';
import { ReimbursementService } from './shared/services/reimbursement.service';
import { FareService } from './shared/services/fareinfo.service';
import { PerDiemService } from './shared/services/perDiemInfo.service';
import { BoardingLodgingService } from './shared/services/boardingLodging.service';
import { TravelExpensesWithoutVoucherService } from './shared/services/travelExpensesWithoutVoucher.service';
import { TravelExpensesWithVoucherService } from './shared/services/travelExpensesWithVoucher.service';
import { OtherExpensesService } from './shared/services/otherExpenses.service';
import { ReimburseGrid } from './components/dashboard/reimbursement/reimburse-grid.component';
import { AuthGuard } from '../app/auth.guard';
import { httpInterceptorProviders } from '../app/shared/interceptors/http.intercep.providers';
import {
  MatAutocompleteModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatDividerModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatStepperModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
} from '@angular/material';
import { ErrorStateMatcher, ShowOnDirtyErrorStateMatcher } from '@angular/material/core';
import { FlightItemsArrayComponent } from './components/form/flightoptions/flightoptions.component';
import { FlightItemControlComponent } from './components/form/flightItems/flight-item-control.component';
import { HotelItemsArrayComponent } from './components/form/hotelOptions/hoteloptions.component';
import { HotelItemControlComponent } from './components/form/hotelItems/hotel-item-control.component';
import { FareItemsArrayComponent } from './components/form/fareOptions/fareoptions.component';
import { FareItemControlComponent } from './components/form/fareItems/fare-item-control.component';
import { BoardingLodgingItemsArrayComponent } from './components/form/boardingLodgingOptions/boardingLodgingoptions.component';
import { BoardingLodgingItemControlComponent } from './components/form/boardingLodgingItems/boardingLodging-item-control.component';
import { PerDiemItemsArrayComponent } from './components/form/perDiemOptions/perDiemoptions.component';
import { PerDiemItemControlComponent } from './components/form/perDiemItems/perDiem-item-control.component';
import { TravelExpensesWithoutVoucherItemsArrayComponent } from './components/form/TravelExpensesWithoutVoucherOptions/travelExpensesWithoutVoucheroptions.component';
import { TravelExpensesWithoutVoucherItemControlComponent } from './components/form/TravelExpensesWithoutVoucherItems/travelExpensesWithoutVoucher-item-control.component';
import { TravelExpensesWithVoucherItemsArrayComponent } from './components/form/TravelExpensesWithVoucherOptions/travelExpensesWithVoucheroptions.component';
import { TravelExpensesWithVoucherItemControlComponent } from './components/form/TravelExpensesWithVoucherItems/travelExpensesWithVoucher-item-control.component';
import { OtherExpensesItemsArrayComponent } from './components/form/otherExpensesOptions/otherExpensesoptions.component';
import { OtherExpensesItemControlComponent } from './components/form/otherExpensesItems/otherExpenses-item-control.component';
import { FlightService } from './shared/services/flight.service';
import { HotelService } from './shared/services/hotel.service';
import { PassportService } from './shared/services/passport.service';
import { ForexService } from './shared/services/forex.service';
import { GridreimbursementService } from './shared/services/gridreimbursement.service';
import { LookupService } from './shared/services/LookUp.service';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    CounterComponent,
    FetchDataComponent,
    LoginLayoutComponent,
    HomeLayoutComponent,
    LoginComponent,
    RequestDialog,
    ReimbursementDialog,
    TableOverviewExample,
    FlightItemsArrayComponent,
    FlightItemControlComponent,
    HotelItemsArrayComponent,
    HotelItemControlComponent,
    FareItemsArrayComponent,
    FareItemControlComponent,
    BoardingLodgingItemsArrayComponent,
    BoardingLodgingItemControlComponent,
    PerDiemItemsArrayComponent,
    PerDiemItemControlComponent,
    TravelExpensesWithoutVoucherItemsArrayComponent,
    TravelExpensesWithoutVoucherItemControlComponent,
    TravelExpensesWithVoucherItemsArrayComponent,
    TravelExpensesWithVoucherItemControlComponent,
    OtherExpensesItemsArrayComponent,
    OtherExpensesItemControlComponent,
    ReimburseGrid
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatStepperModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    RouterModule.forRoot([

      {
        path: '',
        component: HomeLayoutComponent,
        canActivate: [AuthGuard],
        children: [
          { path: '', redirectTo: 'home', pathMatch: 'full' },
          { path: 'reimbursement', component: ReimburseGrid },
          
          { path: 'request', component: RequestDialog },
          { path: 'request/:id', component: RequestDialog },
          { path: 'fetch-data', component: FetchDataComponent },
          { path: 'home', component: TableOverviewExample },


        ]
      },
      {
        path: '',
        component: LoginLayoutComponent,
        children: [
          {
            path: 'login',
            component: LoginComponent   // {5}
          }]
      }

    ])
  ],
  
  entryComponents: [RequestDialog,ReimbursementDialog],
  providers: [MediaMatcher, GridreimbursementService, FareService, BoardingLodgingService,
    PerDiemService, TravelExpensesWithVoucherService, TravelExpensesWithoutVoucherService, OtherExpensesService,
    ConfigService, RequestService, UserService, GridService, ReimbursementService, FlightService, HotelService,
    PassportService, ForexService, LookupService, AuthService, AuthGuard, httpInterceptorProviders,
    { provide: ErrorStateMatcher, useClass: ShowOnDirtyErrorStateMatcher }],
  bootstrap: [AppComponent],

})

export class AppModule { }

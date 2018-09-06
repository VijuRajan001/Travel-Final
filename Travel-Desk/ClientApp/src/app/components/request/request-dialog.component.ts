import { ActivatedRoute, Params, Router } from '@angular/router';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { Directive, Attribute } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { MatDialog, MatAccordion, MatDialogRef, MAT_DIALOG_DATA, MatExpansionModule, MatTableModule, MatDividerModule } from '@angular/material';
import { Inject } from '@angular/core';
import { TravelData, ITravelData } from '../../shared/models/traveldata.interface';
import { FormGroup, FormControl, Validators, FormGroupDirective, NgForm, FormArray, FormBuilder, NG_VALIDATORS, } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { RequestService } from '../../shared/services/request.service'
import { AuthService } from '../../shared/services/auth.service';
import { FlightItemsArrayComponent } from '../form/flightoptions/flightoptions.component';
import { FlightItemControlComponent } from '../form/flightItems/flight-item-control.component';
import { forkJoin } from "rxjs/observable/forkJoin";
import { FlightOptions, IFlightOptions } from '../../shared/models/flightoptions.interface';
import { FlightService } from '../../shared/services/flight.service';
import { MatTabChangeEvent } from '@angular/material';
import { Observable } from 'rxjs/Observable';
import { HotelOptions, IHotelOptions } from '../../shared/models/hoteloptions.interface';
import { HotelService } from '../../shared/services/hotel.service';
import { Passport, IPassport } from '../../shared/models/passport.interface';
import { PassportService } from '../../shared/services/passport.service';
import { ForexCard, IForexCard } from '../../shared/models/forex.interface';
import { ForexService } from '../../shared/services/forex.service';
import { HotelItemsArrayComponent } from '../form/hotelOptions/hoteloptions.component';
import { HotelItemControlComponent } from '../form/hotelItems/hotel-item-control.component';
import { RequestData, IRequestData } from '../../shared/models/requestdata.interface';
import { FlightItem, IFlightItem } from '../../shared/models/flightitem.interface';
import { AbstractControl } from '@angular/forms/src/model';
import { ViewChild } from '@angular/core/src/metadata/di';
import { IHotelItem, HotelItem } from '../../shared/models/hotelitem.interface';
import { AppComponent } from '../app/app.component';
import { UserService } from '../../shared/services/user.service';
import { appuser } from '../../shared/models/user.interface';
import { LookUp } from '../../shared/models/lookUp.Interface';
import { LookupService } from '../../shared/services/LookUp.service';


@Component({
  selector: 'request-dialog',
  templateUrl: './request-dialog.component.html',
  styleUrls: ['./request-dialog.component.css'],

})

export class RequestDialog implements OnInit, Validators {

  today = new Date();
  maxDate = new Date(this.today.getFullYear() - 18, this.today.getMonth(), this.today.getDate());
  mindate = new Date(this.today);
  minDate1 = new Date(this.today.getFullYear(), this.today.getMonth(), this.today.getDate());
  data: 0;
  currentUser: appuser;
  countryList: LookUp[];
  step = 0;
  mode = 1;
  message: string;
  requestInfo: RequestData
  traveldata: TravelData = new TravelData();
  submitActions: number;
  action: typeof SubmitActions = SubmitActions;
  matcher = new MyErrorStateMatcher();
  TravelDataForm: FormGroup;
  FlightOptionsForm: FormGroup;
  HotelOptionsForm: FormGroup;
  PassportForm: FormGroup;
  ForexForm: FormGroup;
  statusList = [
    { value: 'draft', viewValue: 'Draft' },
    { value: 'approved', viewValue: 'Approved' },
    { value: 'declined', viewValue: 'Declined' }

  ];



  constructor(//@Inject(MAT_DIALOG_DATA) public data: any,
    //public dialogRef: MatDialogRef<RequestDialog>,
    private route: ActivatedRoute,
    private requestService: RequestService,
    private flightService: FlightService,
    private hotelService: HotelService,
    private passportService: PassportService,
    private forexService: ForexService,
    private authservice: AuthService,
    private fb: FormBuilder,
    private formBuilder: FormBuilder,
    private userservice: UserService,
    private lookupservice: LookupService,
    private router: Router
  ) {


    this.route.params.subscribe( params => this.data = params.id );
    

  }

  resetExpansionPanel(val: number) {

    this.step = val;

  }


  getHotelFormArray() {
    return (this.HotelOptionsForm.get('hotelItems') as FormArray);
  }
  getOnwardFormArray() {
    return (this.FlightOptionsForm.get('onwardFlightItems') as FormArray);
  }

  getReturnFormArray() {
    return (this.FlightOptionsForm.get('returnFlightItems') as FormArray);
  }

  

  ngOnInit(): void {

    this.currentUser = this.userservice.getCurrentUser();
    this.lookupservice.getCountryList().subscribe(
      (val) => {
        this.countryList = val;
      },
      response => {
        console.log("POST call in error", response);
      },
      () => {
        console.log("The POST observable is now completed.");
      });
    this.TravelDataForm = this.fb.group({

      'project_code': new FormControl(this.currentUser.projects[0].value),
      'country': new FormControl(null, [Validators.required]),
      //'dob': new FormControl(null, [Validators.required]),
      'travelDate': new FormControl(null, [Validators.required, this.isOnward]),
      'returnDate': new FormControl(null, [Validators.required]),
      'employeeId': new FormControl(null, [Validators.required, Validators.maxLength(50)]),
      'employeeName': new FormControl(null, [Validators.required]),
      'requestStatus': new FormControl(this.statusList[0].value),


    });



    this.FlightOptionsForm = this.fb.group({

      'onwardFlightItems': FlightItemsArrayComponent.buildItems(),
      'returnFlightItems': FlightItemsArrayComponent.buildItems()

    });

    this.HotelOptionsForm = this.fb.group({
      'hotelItems': HotelItemsArrayComponent.buildItems()
    });

    this.PassportForm = this.fb.group({
      'passportNum': new FormControl(null, [Validators.required]),
      'visaNum': new FormControl(null, [Validators.required]),
      'passportExpiryDate': new FormControl(null, [Validators.required]),
      'visaExpiryDate': new FormControl(null, [Validators.required])
    });

    this.ForexForm = this.fb.group({
      'cardNumber': new FormControl(null, [Validators.required]),
      'cardType': new FormControl(null, [Validators.required]),
      'cardExpiryDate': new FormControl(this.today, [Validators.required])
    });




    if (this.data > 0) {
      let requestData = this.requestService.getRequestById(this.data);
      let flightData = this.flightService.getFlightsForRequest(this.data);
      let hotelData = this.hotelService.getHotelsForRequest(this.data); ``
      let passportData = this.passportService.getPassportDetails(this.data);
      let forexData = this.forexService.getForexDetails(this.data);


      forkJoin([requestData]).subscribe(results => {
        this.requestInfo = new RequestData(<IRequestData>results[0]);
        this.TravelDataForm.patchValue(this.requestInfo);
        //this.PassportForm.patchValue(new Passport(<IPassport>results[3]));
        //this.ForexForm.patchValue(new ForexCard(<IForexCard>results[4]))
        let flightOptions = new FlightOptions(<IFlightOptions>
          {
          onwardFlightItems: this.requestInfo.flightItem.filter( flight => flight.flightDirection === 'Onward'),
          returnFlightItems : this.requestInfo.flightItem.filter( flight => flight.flightDirection === 'Return')

          });
        let hotelOptions = new HotelOptions(<IHotelOptions>{ hotelItems: this.requestInfo.hotelItem });


        let i = 0;
        flightOptions.OnwardFlightItems.forEach(item => {
          if (i == 0) {
            this.getOnwardFormArray().setControl(i, FlightItemsArrayComponent.buildItemsWithValue(item));
          } else {
            this.getOnwardFormArray().insert(i, FlightItemsArrayComponent.buildItemsWithValue(item));
          }
          i = i + 1;
        });
        i = 0;
        flightOptions.ReturnFlightItems.forEach(item => {
          if (i == 0) {
            this.getReturnFormArray().setControl(i, FlightItemsArrayComponent.buildItemsWithValue(item));
          } else {
            this.getReturnFormArray().insert(i, FlightItemsArrayComponent.buildItemsWithValue(item));
          }
          i = i + 1;
        });
        i = 0;
        hotelOptions.HotelItems.forEach(item => {
          if (i == 0) {
            this.getHotelFormArray().setControl(i, HotelItemsArrayComponent.buildItemsWithValue(item));
          } else {
            this.getHotelFormArray().insert(i, HotelItemsArrayComponent.buildItemsWithValue(item));
          }
          i = i + 1;


        });


        this.traveldata.requestData = new RequestData(<IRequestData>this.TravelDataForm.value);
        this.traveldata.flightData = new FlightOptions(<IFlightOptions>this.FlightOptionsForm.value);
        this.traveldata.hotelData = new HotelOptions(<IHotelOptions>this.HotelOptionsForm.value);
        this.traveldata.passportData = new Passport(<IPassport>this.PassportForm.value);
        this.traveldata.forexCardData = new ForexCard(<IForexCard>this.ForexForm.value);




      });

    }
  }






  setStep(index: number) {
    this.step = index;

  }

  nextStep() {

    this.step++;

  }

  prevStep() {

    this.step--;

  }


  onSubmit() {

    console.log(this.submitActions);
    switch (this.submitActions) {


      case SubmitActions.createUpdateRequest: this.createUpdateRequest(); break;
      case SubmitActions.createFlightOptions: this.createFlightOptions(); break;
      case SubmitActions.createHotelOptions: this.createHotelOptions(); break;
      case SubmitActions.createPassport: this.createPassport(); break;
      case SubmitActions.createForex: this.createForex(); break;
    }

  }




  createFlightOptions() {
    let saveFlightdata: FlightOptions;
    let addFlightdata: FlightOptions = new FlightOptions();
    let updateFlightdata: FlightOptions = new FlightOptions();


    if (this.FlightOptionsForm.valid) {


      saveFlightdata = new FlightOptions(<IFlightOptions>this.FlightOptionsForm.value);
      this.deleteFlightOptions(saveFlightdata);
      saveFlightdata.OnwardFlightItems.forEach(item => {
        item.requestInfoId = this.data;
        item.flightDirection = "Onward";
        if (item.id == 0 || item.id == null) {
          item.id = 0;
          addFlightdata.OnwardFlightItems.push(item);

        }
        else {

          updateFlightdata.OnwardFlightItems.push(item);
        }

      });

      saveFlightdata.ReturnFlightItems.forEach(item => {
        item.requestInfoId = this.data;
        item.flightDirection = "Return";
        if (item.id == 0 || item.id == null) {
          item.id = 0;
          addFlightdata.ReturnFlightItems.push(item);
        }
        else {

          updateFlightdata.ReturnFlightItems.push(item);
        }
      });



      this.flightService.addFlightInfo(addFlightdata).subscribe(
        (val) => {
          console.log("POST call success");
        },
        response => {
          console.log("POST call in error", response);
        },
        () => {
          console.log("The POST observable is now completed.");
        });


      this.flightService.updateFlightInfo(updateFlightdata).subscribe(
        (val) => {
          console.log("POST call success");
        },
        response => {
          console.log("POST call in error", response);
        },
        () => {
          console.log("The POST observable is now completed.");
        });
    }


  }

  deleteFlightOptions(finalFlightOPtions: FlightOptions) {
    let initialFlightOPtions: FlightOptions = this.traveldata.flightData;
    let deletedItemsId: number[] = [];

    if (initialFlightOPtions.OnwardFlightItems.length > finalFlightOPtions.OnwardFlightItems.length
      || initialFlightOPtions.ReturnFlightItems.length > finalFlightOPtions.ReturnFlightItems.length) {

      initialFlightOPtions.OnwardFlightItems.forEach(item => {
        let index = finalFlightOPtions.OnwardFlightItems.findIndex((flightItem: FlightItem) => { return item.id == flightItem.id })

        if (index === -1) {
          deletedItemsId.push(item.id);
        }
      });

    }

    if (deletedItemsId.length > 0) {
      this.flightService.deleteflights(deletedItemsId).subscribe(
        (val) => {
          console.log("POST call success");
        },
        response => {
          console.log("POST call in error", response);
        },
        () => {
          console.log("The POST observable is now completed.");
        });
    }



  }
  createHotelOptions() {

    let saveHoteldata: HotelOptions;
    let addHoteldata: HotelOptions = new HotelOptions();
    let updateHoteldata: HotelOptions = new HotelOptions();

    if (this.HotelOptionsForm.valid) {

      saveHoteldata = new HotelOptions(<IHotelOptions>this.HotelOptionsForm.value);
      this.deleteHotelOptions(saveHoteldata);
      saveHoteldata.HotelItems.forEach(item => {
        item.requestInfoId = this.data;

        if (item.id === null || item.id === 0) {
          item.id = 0;
          addHoteldata.HotelItems.push(item);

        }
        else {

          updateHoteldata.HotelItems.push(item);
        }

      });


      if (addHoteldata.HotelItems.length > 0) {

        this.hotelService.addHotelInfo(addHoteldata).subscribe(
          (val) => {
            console.log("POST call success");
          },
          response => {
            console.log("POST call in error", response);
          },
          () => {
            console.log("The POST observable is now completed.");
          });

      }

      if (updateHoteldata.HotelItems.length > 0) {
        this.hotelService.updateHotelInfo(updateHoteldata).subscribe(
          (val) => {
            console.log("POST call success");
          },
          response => {
            console.log("POST call in error", response);
          },
          () => {
            console.log("The POST observable is now completed.");
          });
      }



    }


  }

  deleteHotelOptions(finalHotelOptions: HotelOptions) {
    let initialHotelOptions: HotelOptions = this.traveldata.hotelData;
    let deletedItemsId: number[] = [];

    if (initialHotelOptions.HotelItems.length > finalHotelOptions.HotelItems.length) {

      initialHotelOptions.HotelItems.forEach(item => {
        let index = finalHotelOptions.HotelItems.findIndex((hotelItem: HotelItem) => { return item.id == hotelItem.id })

        if (index === -1) {
          deletedItemsId.push(item.id);
        }
      });

    }

    if (deletedItemsId.length > 0) {
      this.hotelService.deleteHotels(deletedItemsId).subscribe(
        (val) => {
          console.log("POST call success");
        },
        response => {
          console.log("POST call in error", response);
        },
        () => {
          console.log("The POST observable is now completed.");
        });
    }


  }


  createPassport() {
    if (this.PassportForm.valid) {
      let passportdata: Passport = new Passport(<IPassport>this.PassportForm.value);

      if (passportdata.id == 0 || passportdata.id == null) {

        passportdata.requestInfoId = this.data;
        this.passportService.addPassportInfo(passportdata).subscribe(
          (val) => {
            console.log("POST call success");
          },
          response => {
            console.log("POST call in error", response);
          },
          () => {
            console.log("The POST observable is now completed.");
          });

      }
      else {
        this.passportService.updatePassportInfo(passportdata).subscribe(
          (val) => {
            console.log("POST call success");
          },
          response => {
            console.log("POST call in error", response);
          },
          () => {
            console.log("The POST observable is now completed.");
          });

      }

    }


  }


  createForex() {
    if (this.ForexForm.valid) {

      let forexdata = new ForexCard(<IForexCard>this.ForexForm.value);

      if (forexdata.id == 0 || forexdata.id == null) {
        forexdata.requestInfoId = this.data;
        this.forexService.addForexInfo(forexdata).subscribe(
          (val) => {
            console.log("POST call success");
          },
          response => {
            console.log("POST call in error", response);
          },
          () => {
            console.log("The POST observable is now completed.");
          });

      }
      else {
        this.forexService.updateForexInfo(forexdata).subscribe(
          (val) => {
            console.log("POST call success");
          },
          response => {
            console.log("POST call in error", response);
          },
          () => {
            console.log("The POST observable is now completed.");
          });

      }
    }
  }



  createUpdateRequest() {

    let requestdata: RequestData;
    if (this.TravelDataForm.valid) {
      requestdata = new RequestData();
      requestdata.requestId = this.data;
      requestdata.project_Code = this.TravelDataForm.controls['project_code'].value;
     // requestdata.dob = this.TravelDataForm.controls['dob'].value;
      requestdata.country = this.TravelDataForm.controls['country'].value;
      requestdata.travelDate = this.TravelDataForm.controls['travelDate'].value;
      requestdata.returnDate = this.TravelDataForm.controls['returnDate'].value;
      requestdata.employeeId = this.TravelDataForm.controls['employeeId'].value;
      requestdata.employeeName = this.TravelDataForm.controls['employeeName'].value;
      requestdata.requestStatus = this.TravelDataForm.controls['requestStatus'].value;
      requestdata.createdBy = this.userservice.getCurrentLoginId();
      requestdata.approver = this.userservice.getCurrentLoginId();
      if (this.mode === Mode.New) {

        this.requestService.addRequest(requestdata).subscribe(
          (val) => {

            this.router.navigateByUrl("/home");
          },
          response => {
            console.log("POST call in error", response);
          },
          () => {
            console.log("The POST observable is now completed.");
          });
      }
      else {
        this.requestService.updateRequest(requestdata).subscribe(
          (val) => {
            console.log("POST call success");
          },
          response => {
            console.log("POST call in error", response);
          },
          () => {
            console.log("The POST observable is now completed.");
          });

      }



    }


  }



  isOnward(c: FormControl) {
    return null;
  }
}
enum SubmitActions {

  createUpdateRequest,
  createFlightOptions,
  createHotelOptions,
  updateHotelOptions,
  createPassport,
  updatePassport,
  createForex,
  updateForex,
}

enum Mode {
  New,
  Edit

}


export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

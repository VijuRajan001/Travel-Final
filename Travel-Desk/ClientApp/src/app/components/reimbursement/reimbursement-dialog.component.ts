import { ActivatedRoute, Params } from '@angular/router';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { Directive, Attribute } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { MatDialog,MatAccordion ,MatDialogRef, MAT_DIALOG_DATA,MatExpansionModule,MatTableModule,MatDividerModule } from '@angular/material';
import { Inject } from '@angular/core';
import { TravelData, ITravelData } from '../../shared/models/traveldata.interface';
import { FormGroup, FormControl, Validators, FormGroupDirective, NgForm, FormArray, FormBuilder, NG_VALIDATORS, } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { ReimbursementService } from '../../shared/services/reimbursement.service'
import { FareService } from '../../shared/services/fareinfo.service';
import { PerDiemService } from '../../shared/services/perDiemInfo.service';
import { BoardingLodgingService } from '../../shared/services/boardingLodging.service';
import { TravelExpensesWithVoucherService } from '../../shared/services/travelExpensesWithVoucher.service';
import { TravelExpensesWithoutVoucherService } from '../../shared/services/travelExpensesWithoutVoucher.service';
import { OtherExpensesService } from '../../shared/services/otherExpenses.service';
import { AuthService } from '../../shared/services/auth.service';
import { forkJoin } from "rxjs/observable/forkJoin";
import { MatTabChangeEvent } from '@angular/material';
import { Observable } from 'rxjs/Observable';
import { ReimbursementData, IReimbursementData } from '../../shared/models/reimbursementdata.interface';
import { AbstractControl } from '@angular/forms/src/model';
import { Request } from '@angular/http/src/static_request';
import { ViewChild } from '@angular/core/src/metadata/di';
import { AppComponent } from '../app/app.component';
import { RequestDialog } from '../request/request-dialog.component';
import { FareItemsArrayComponent } from '../form/fareOptions/fareoptions.component';
import { PerDiemItemsArrayComponent } from '../form/perDiemOptions/perDiemoptions.component';
import { BoardingLodgingItemsArrayComponent } from '../form/boardingLodgingOptions/boardingLodgingoptions.component';
import { TravelExpensesWithoutVoucherItemsArrayComponent } from '../form/TravelExpensesWithoutVoucherOptions/travelExpensesWithoutVoucheroptions.component';
import { TravelExpensesWithVoucherItemsArrayComponent } from '../form/TravelExpensesWithVoucherOptions/travelExpensesWithVoucheroptions.component';
import { OtherExpensesItemsArrayComponent } from '../form/otherExpensesOptions/otherExpensesoptions.component';
import { RequestData, IRequestData } from '../../shared/models/requestdata.interface';
import { FlightItem, IFlightItem } from '../../shared/models/flightitem.interface';
import { HotelOptions, IHotelOptions } from '../../shared/models/hoteloptions.interface';
import { HotelService } from '../../shared/services/hotel.service';
import { Passport, IPassport } from '../../shared/models/passport.interface';
import { PassportService } from '../../shared/services/passport.service';
import { ForexCard, IForexCard } from '../../shared/models/forex.interface';
import { ForexService } from '../../shared/services/forex.service';
import { FlightOptions, IFlightOptions } from '../../shared/models/flightoptions.interface';
import { FlightService } from '../../shared/services/flight.service';
import { IHotelItem, HotelItem } from '../../shared/models/hotelitem.interface';
import { FareOptions, IFareOptions } from '../../shared/models/fareoptions.interface';
import { BoardingLodgingOptions, IBoardingLodgingOptions } from '../../shared/models/boardingLodgingoptions.interface';
import { ITravelExpensesWithVoucherItem, TravelExpensesWithVoucherItem } from '../../shared/models/travelExpensesWithVoucheritem.interface';
import { TravelExpensesWithVoucherOptions, ITravelExpensesWithVoucherOptions } from '../../shared/models/travelExpensesWithVoucheroptions.interface';
import { ITravelExpensesWithoutVoucherOptions, TravelExpensesWithoutVoucherOptions } from '../../shared/models/travelExpensesWithoutVoucheroptions.interface';
import { OtherExpensesOptions, IOtherExpensesOptions } from '../../shared/models/otherExpensesoptions.interface';
import { PerDiemItem, IPerDiemItem } from '../../shared/models/perDiemitem.interface';
import { FareItem } from '../../shared/models/fareitem.interface';
import { Reimbursementform } from '../../shared/models/reimbursementform.interface';
import { BoardingLodgingItem } from '../../shared/models/boardingLodgingitem.interface';
import { TravelExpensesWithoutVoucherItem } from '../../shared/models/travelExpensesWithoutVoucheritem.interface';
import { OtherExpensesItem } from '../../shared/models/otherExpensesitem.interface';
import { PerDiemOptions, IPerDiemOptions } from '../../shared/models/perDiemoptions.interface';
@Component({
    selector: 'reimbursement-dialog',
    templateUrl: './reimbursement-dialog.component.html',
    styleUrls: ['./reimbursement-dialog.component.css'],

})

export class ReimbursementDialog implements OnInit, Validators {

  today = new Date();
  maxDate = new Date(this.today.getFullYear() - 18, this.today.getMonth(), this.today.getDate());
  mindate = new Date(this.today);
  minDate1 = new Date(this.today.getFullYear(), this.today.getMonth(), this.today.getDate());

    step = 0;


    
    submitActions: number;
    action: typeof SubmitActionsReimburseMent = SubmitActionsReimburseMent;
    matcher = new MyErrorStateMatcher();
    reimbursementformInfo:Reimbursementform=new Reimbursementform();
    ReimbursementForm: FormGroup;
    FareOptionsForm: FormGroup;
    PerDiemForm: FormGroup;
    BoardingExpensesForm: FormGroup;
    ForexForm: FormGroup;
    TravelWithVoucherForm: FormGroup;
    TravelWithoutVoucherForm: FormGroup;
    OtherExpensesForm: FormGroup;


    constructor(@Inject(MAT_DIALOG_DATA) public data: any,
        public dialogRef: MatDialogRef<RequestDialog>, private reimbursementService: ReimbursementService,
        private fareService: FareService,
        private perDiemService: PerDiemService,
        private boardingLodgingService: BoardingLodgingService,
        private travelExpensesWithVoucherService: TravelExpensesWithVoucherService,
        private travelExpensesWithoutVoucherService: TravelExpensesWithoutVoucherService,
        private otherExpensesService:OtherExpensesService,
        private fb: FormBuilder,
        private formBuilder: FormBuilder) {

        //data = 0 means new request
        console.log(data);


    }

    resetExpansionPanel(val:number) {

        this.step = val;

    }

  
    getFareOptionsFormArray() {
        return (this.FareOptionsForm.get('fareItems') as FormArray);
    }

   

    onNoClick(): void {
        this.dialogRef.close();
    }



    ngOnInit(): void {

        this.ReimbursementForm = this.fb.group({

            
            'employeeId': new FormControl(null, [Validators.required]),
            'employeeName': new FormControl(null, [Validators.required]),
            'designation': new FormControl(null, [Validators.required]),
            'bandWorkLevel': new FormControl(null, [Validators.required]),
            'clientName': new FormControl(null, [Validators.required, Validators.maxLength(50)]),
            'projectCode': new FormControl(null, [Validators.required]),
            'costCenter': new FormControl(null, [Validators.required]),
            'purposeofTravel': new FormControl(null, [Validators.required]),
            'locationofTravel': new FormControl(null, [Validators.required]),
            'dateofArrival': new FormControl(null, [Validators.required, Validators.maxLength(50)]),
            'dateofDeparture': new FormControl(null, [Validators.required]),
            'travelBillabletoCustomer': new FormControl(null, [Validators.required]),
            'flightChargesReimbursed': new FormControl(null, [Validators.required]),
            'travelExpenseReimbursed': new FormControl(null, [Validators.required, Validators.maxLength(50)]),
            'anyOtherExpenseReimbursed': new FormControl(null, [Validators.required]),
        

            });



        this.FareOptionsForm = this.fb.group({

            'fareItems': FareItemsArrayComponent.buildItems(),
            

        });

        this.PerDiemForm = this.fb.group({
          'id': new FormControl(0),
          'arrivalDate': new FormControl(null, [Validators.required]),
          'departureDate': new FormControl(null, [Validators.required]),
          'currency': new FormControl(null, [Validators.required]),          
          'totalDays': new FormControl(null, [Validators.required, Validators.maxLength(50)]),
          'totalAmount': new FormControl(null, [Validators.required]),
          'remarks': new FormControl(null, [Validators.required]),
          
        });

        this.BoardingExpensesForm = this.fb.group({
            'boardingLodgingItems': BoardingLodgingItemsArrayComponent.buildItems()         
        });

        this.TravelWithVoucherForm = this.fb.group({
            'travelExpensesWithVoucherItems': TravelExpensesWithVoucherItemsArrayComponent.buildItems()
           
        });
        this.TravelWithoutVoucherForm = this.fb.group({
            'travelExpensesWithoutVoucherItems': TravelExpensesWithoutVoucherItemsArrayComponent.buildItems()
           
        });

        this.OtherExpensesForm = this.fb.group({
            'otherExpenseItems': OtherExpensesItemsArrayComponent.buildItems()
           
        });

        if (this.data > 0) {
          let reimbursementData = this.reimbursementService.getReimbursementById(this.data);
          let fareData = this.fareService.getFareForRequest(this.data);
          let perDiemData = this.perDiemService.getPerDiemForRequest(this.data);
          let boardingData = this.boardingLodgingService.getBoardingLodgingForRequest(this.data);
          let voucherData = this.travelExpensesWithVoucherService.getTravelExpensesWithVoucherForRequest(this.data);
          let nonVoucher =  this.travelExpensesWithoutVoucherService.getTravelExpensesWithoutVoucherForRequest(this.data);
          let otherExpenseData = this.otherExpensesService.getOtherExpensesForRequest(this.data);
           forkJoin([reimbursementData, fareData, perDiemData, boardingData, voucherData,nonVoucher,otherExpenseData] ).subscribe(results => {

             this.ReimbursementForm.patchValue(new ReimbursementData(<IReimbursementData>results[0]));
             this.initializePerDiemForm(new PerDiemOptions(<IPerDiemOptions>results[2]));
             let fareOptions = new FareOptions(<IFareOptions>results[1]);
                
             let boardingOptions = new BoardingLodgingOptions(<IBoardingLodgingOptions>results[3]);
             let VoucherOptions = new TravelExpensesWithVoucherOptions(<ITravelExpensesWithVoucherOptions>results[4]);
             let nonVoucherOptions = new TravelExpensesWithoutVoucherOptions(<ITravelExpensesWithoutVoucherOptions>results[5]);
             let otherExpenseOptions = new OtherExpensesOptions(<IOtherExpensesOptions>results[6]);
        //        let hotelOptions = new HotelOptions(<IHotelOptions>results[2]);

                
                let i = 0;
                fareOptions.FareItems.forEach(item => {
                    if (i == 0) {
                      (this.FareOptionsForm.get('fareItems') as FormArray).setControl(i, FareItemsArrayComponent.buildItemsWithValue(item));
                  }
                    else {
                      (this.FareOptionsForm.get('fareItems') as FormArray).insert(i, FareItemsArrayComponent.buildItemsWithValue(item));
                    }
                    i = i + 1;
                });
                i = 0;
                boardingOptions.BoardingLodgingItems.forEach(item => {
                    if (i == 0) {
                        (this.BoardingExpensesForm.get('boardingLodgingItems') as FormArray).setControl(i, BoardingLodgingItemsArrayComponent.buildItemsWithValue(item));
                    } else {
                        (this.BoardingExpensesForm.get('boardingLodgingItems') as FormArray).insert(i, BoardingLodgingItemsArrayComponent.buildItemsWithValue(item));
                    }
                    i = i + 1;
                });
                i = 0;
                VoucherOptions.TravelExpensesWithVoucherItems.forEach(item => {
                    if (i == 0) {
                        (this.TravelWithVoucherForm.get('travelExpensesWithVoucherItems') as FormArray).setControl(i, TravelExpensesWithVoucherItemsArrayComponent.buildItemsWithValue(item));
                    } else {
                        (this.TravelWithVoucherForm.get('travelExpensesWithVoucherItems') as FormArray).insert(i, TravelExpensesWithVoucherItemsArrayComponent.buildItemsWithValue(item));
                    }
                    i = i + 1;


             });
             i = 0;
             debugger;
             nonVoucherOptions.TravelExpensesWithoutVoucherItems.forEach(item => {
               if (i == 0) {
                 (this.TravelWithoutVoucherForm.get('travelExpensesWithoutVoucherItems') as FormArray).setControl(i, TravelExpensesWithoutVoucherItemsArrayComponent.buildItemsWithValue(item));
               } else {
                 (this.TravelWithoutVoucherForm.get('travelExpensesWithoutVoucherItems') as FormArray).insert(i, TravelExpensesWithoutVoucherItemsArrayComponent.buildItemsWithValue(item));
               }
               i = i + 1;


             });

             i = 0;
             otherExpenseOptions.OtherExpenseItems.forEach(item => {
               if (i == 0) {
                 (this.OtherExpensesForm.get('otherExpenseItems') as FormArray).setControl(i, OtherExpensesItemsArrayComponent.buildItemsWithValue(item));
               } else {
                 (this.OtherExpensesForm.get('otherExpenseItems') as FormArray).insert(i, OtherExpensesItemsArrayComponent.buildItemsWithValue(item));
               }
               i = i + 1;


             });



                  this.reimbursementformInfo.fareOptions = new FareOptions(<IFareOptions> this.FareOptionsForm.value);
                  this.reimbursementformInfo.boardingLodgingOptions = new BoardingLodgingOptions(<IBoardingLodgingOptions> this.BoardingExpensesForm.value);
             this.reimbursementformInfo.travelExpensesWithVoucherOptions = new TravelExpensesWithVoucherOptions(<ITravelExpensesWithVoucherOptions>this.TravelWithVoucherForm.value);
             this.reimbursementformInfo.travelExpensesWithoutVoucherOptions = new TravelExpensesWithoutVoucherOptions(<ITravelExpensesWithoutVoucherOptions>this.TravelWithoutVoucherForm.value);
             this.reimbursementformInfo.otherExpensesOptions = new OtherExpensesOptions(<IOtherExpensesOptions>this.OtherExpensesForm.value);
        //        this.traveldata.passportData = new Passport(<IPassport>this.PassportForm.value);
        //        this.traveldata.forexCardData = new ForexCard(<IForexCard>this.ForexForm.value);




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

          case SubmitActionsReimburseMent.createUpdateReimbursement: this.createUpdateReimbursement(); break;
          case SubmitActionsReimburseMent.createUpdateFare: this.createUpdateFare(); break;
          case SubmitActionsReimburseMent.createUpdateBoarding: this.createUpdateBoarding(); break;
          case SubmitActionsReimburseMent.createUpdatereVoucherItems: this.createUpdatereVoucherItems(); break;
          case SubmitActionsReimburseMent.createUpdatereNonVoucherItems: this.createUpdatereNonVoucherItems(); break;
          case SubmitActionsReimburseMent.createUpdatereOtherExpenses: this.createUpdatereOtherExpenses(); break;
          case SubmitActionsReimburseMent.createUpdatePerDiem: this.createUpdatePerDiem(); break;
        }

    }




    createUpdateFare() {
        let savefaredata: FareOptions;
        let addfaredata: FareOptions = new FareOptions();
        let updateFlightdata: FareOptions = new FareOptions();


        if (this.FareOptionsForm.valid) {

            
            savefaredata = new FareOptions(<IFareOptions>this.FareOptionsForm.value);
            this.deleteFare(savefaredata);
            savefaredata.FareItems.forEach(item => {
                item.reimbursementInfoId = this.data;
                
                if (item.id === null || item.id==0) {
                    item.id = 0;
                    addfaredata.FareItems.push(item);

                }
                else {

                    updateFlightdata.FareItems.push(item);
                }

            });

            

            if (addfaredata.FareItems.length > 0) {
                this.fareService.addFareInfo(addfaredata).subscribe(
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

            if (updateFlightdata.FareItems.length > 0) {
              this.fareService.updateFareInfo(updateFlightdata).subscribe(
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

    deleteFare(fareOptions: FareOptions) {
        let initialfareOptions: FareOptions = this.reimbursementformInfo.fareOptions;
        let deletedItemsId: number[] = [];
        
        if (initialfareOptions.FareItems.length > fareOptions.FareItems.length
           ) {

            initialfareOptions.FareItems.forEach(item => {
                let index = fareOptions.FareItems.findIndex((fareitem: FareItem) => { return item.id == fareitem.id })

                if (index === -1) {
                  deletedItemsId.push(item.id);

                }
            });

        }

        if (deletedItemsId.length > 0) {
            this.fareService.deleteFare(deletedItemsId).subscribe(
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
    createUpdateBoarding() {

        let saveBoardingdata: BoardingLodgingOptions;
        let addBoardingdata: BoardingLodgingOptions = new BoardingLodgingOptions();
        let updateBoardingdata: BoardingLodgingOptions = new BoardingLodgingOptions();

        if (this.BoardingExpensesForm.valid) {

            saveBoardingdata = new BoardingLodgingOptions(<IBoardingLodgingOptions>this.BoardingExpensesForm.value);
            this.deleteBoardingOptions(saveBoardingdata);
            saveBoardingdata.BoardingLodgingItems.forEach(item => {
                item.reimbursementInfoId = this.data;

                if (item.id === null || item.id === 0) {
                    item.id = 0;
                    addBoardingdata.BoardingLodgingItems.push(item);

                }
                else {

                    updateBoardingdata.BoardingLodgingItems.push(item);
                }

            });

            if (addBoardingdata.BoardingLodgingItems.length > 0) {
              this.boardingLodgingService.addBoardingLodgingInfo(addBoardingdata).subscribe(
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

            if (updateBoardingdata.BoardingLodgingItems.length > 0) {
              this.boardingLodgingService.updateBoardingLodgingInfo(updateBoardingdata).subscribe(
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

    deleteBoardingOptions(finalBoardingOptions: BoardingLodgingOptions) {
        let initialBoardingOPtions: BoardingLodgingOptions = this.reimbursementformInfo.boardingLodgingOptions;
        let deletedItemsId: number[] = [];

        if (initialBoardingOPtions.BoardingLodgingItems.length > finalBoardingOptions.BoardingLodgingItems.length) {

            initialBoardingOPtions.BoardingLodgingItems.forEach(item => {
                let index = finalBoardingOptions.BoardingLodgingItems.findIndex((boardingItem: BoardingLodgingItem) => { return item.id == boardingItem.id })

                if (index === -1) {
                    deletedItemsId.push(item.id);
                }
            });

        }

        if (deletedItemsId.length > 0) {
            this.boardingLodgingService.deleteBoardingLodging(deletedItemsId).subscribe(
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


  createUpdatereVoucherItems() {
    let saveVoucherData: TravelExpensesWithVoucherOptions;
    let addVoucherData: TravelExpensesWithVoucherOptions = new TravelExpensesWithVoucherOptions();
    let updateVoucherData: TravelExpensesWithVoucherOptions = new TravelExpensesWithVoucherOptions();


    if (this.TravelWithVoucherForm.valid) {

      
      saveVoucherData = new TravelExpensesWithVoucherOptions(<ITravelExpensesWithVoucherOptions>this.TravelWithVoucherForm.value);
      this.deleteVoucherData(saveVoucherData);
      saveVoucherData.TravelExpensesWithVoucherItems.forEach(item => {
        item.reimbursementInfoId = this.data;

        if (item.id === null) {
          item.id = 0;
          addVoucherData.TravelExpensesWithVoucherItems.push(item);

        }
        else {

          updateVoucherData.TravelExpensesWithVoucherItems.push(item);
        }

      });
      

      if (addVoucherData.TravelExpensesWithVoucherItems.length > 0) {

      this.travelExpensesWithVoucherService.addTravelExpensesWithVoucherInfo(addVoucherData).subscribe(
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

      if (updateVoucherData.TravelExpensesWithVoucherItems.length > 0) {

        this.travelExpensesWithVoucherService.updateTravelExpensesWithVoucherInfo(updateVoucherData).subscribe(
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

  
    deleteVoucherData(finalVoucherData: TravelExpensesWithVoucherOptions) {
        let initialVoucherData: TravelExpensesWithVoucherOptions = this.reimbursementformInfo.travelExpensesWithVoucherOptions;
        let deletedItemsId: number[] = [];

        if (initialVoucherData.TravelExpensesWithVoucherItems.length > finalVoucherData.TravelExpensesWithVoucherItems.length) {

            initialVoucherData.TravelExpensesWithVoucherItems.forEach(item => {
                let index = finalVoucherData.TravelExpensesWithVoucherItems.findIndex((voucherItem: TravelExpensesWithVoucherItem) => { return item.id == voucherItem.id })

                if (index === -1) {
                    deletedItemsId.push(item.id);
                }
            });

        }

        if (deletedItemsId.length > 0) {
            this.travelExpensesWithVoucherService.deleteTravelExpensesWithVoucher(deletedItemsId).subscribe(
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


  createUpdatereNonVoucherItems() {
    let saveNonVoucherData: TravelExpensesWithoutVoucherOptions;
    let addNonVoucherData: TravelExpensesWithoutVoucherOptions = new TravelExpensesWithoutVoucherOptions();
    let updateNonVoucherData: TravelExpensesWithoutVoucherOptions = new TravelExpensesWithoutVoucherOptions();


    if (this.TravelWithoutVoucherForm.valid) {


      saveNonVoucherData = new TravelExpensesWithoutVoucherOptions(<ITravelExpensesWithoutVoucherOptions>this.TravelWithoutVoucherForm.value);
      this.deleteNonVoucherData(saveNonVoucherData);
      saveNonVoucherData.TravelExpensesWithoutVoucherItems.forEach(item => {
        item.reimbursementInfoId = this.data;

        if (item.id === null) {
          item.id = 0;
          addNonVoucherData.TravelExpensesWithoutVoucherItems.push(item);

        }
        else {

          updateNonVoucherData.TravelExpensesWithoutVoucherItems.push(item);
        }

      });
      

      if (addNonVoucherData.TravelExpensesWithoutVoucherItems.length > 0) {
      this.travelExpensesWithoutVoucherService.addTravelExpensesWithoutVoucherInfo(addNonVoucherData).subscribe(
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
      if (updateNonVoucherData.TravelExpensesWithoutVoucherItems.length > 0) {
        this.travelExpensesWithoutVoucherService.updateTravelExpensesWithoutVoucherInfo(updateNonVoucherData).subscribe(
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


  deleteNonVoucherData(finalNonVoucherData: TravelExpensesWithoutVoucherOptions) {
    let initialNonVoucherData: TravelExpensesWithoutVoucherOptions = this.reimbursementformInfo.travelExpensesWithoutVoucherOptions;
    let deletedItemsId: number[] = [];

    if (initialNonVoucherData.TravelExpensesWithoutVoucherItems.length > finalNonVoucherData.TravelExpensesWithoutVoucherItems.length) {

      initialNonVoucherData.TravelExpensesWithoutVoucherItems.forEach(item => {
        let index = finalNonVoucherData.TravelExpensesWithoutVoucherItems.findIndex((nonVoucherItem: TravelExpensesWithoutVoucherItem) => { return item.id == nonVoucherItem.id })

        if (index === -1) {
          deletedItemsId.push(item.id);
        }
      });

    }

    if (deletedItemsId.length > 0) {
      this.travelExpensesWithoutVoucherService.deleteTravelExpensesWithoutVoucher(deletedItemsId).subscribe(
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


    //updateRequest() {

    //    let requestdata: RequestData;
    //    if (this.ReimbursementDataForm.valid) {

    //        requestdata = new RequestData();
    //        requestdata.requestId = this.data;
    //        requestdata.project_code = this.ReimbursementDataForm.controls['project_Code'].value;
    //        requestdata.country = this.ReimbursementDataForm.controls['country'].value;
    //        requestdata.travelDate = this.ReimbursementDataForm.controls['travelDate'].value;
    //        requestdata.returnDate = this.ReimbursementDataForm.controls['returnDate'].value;
    //        requestdata.employeeId = this.ReimbursementDataForm.controls['employeeId'].value;
    //        requestdata.employeeName = this.ReimbursementDataForm.controls['employeeName'].value;
    //        this.requestService.updateRequest(requestdata).subscribe(
    //            (val) => {
    //                console.log("POST call success");
    //            },
    //            response => {
    //                console.log("POST call in error", response);
    //            },
    //            () => {
    //                console.log("The POST observable is now completed.");
    //            });


    //    }

    //}

  createUpdatereOtherExpenses() {
    let saveOtherExpenseData: OtherExpensesOptions;
    let addOtherExpenseData: OtherExpensesOptions = new OtherExpensesOptions();
    let updateOtherExpenseData: OtherExpensesOptions = new OtherExpensesOptions();


    if (this.OtherExpensesForm.valid) {


      saveOtherExpenseData = new OtherExpensesOptions(<IOtherExpensesOptions>this.OtherExpensesForm.value);
      this.deleteOtherExpenseData(saveOtherExpenseData);
      saveOtherExpenseData.OtherExpenseItems.forEach(item => {
        item.reimbursementInfoId = this.data;

        if (item.id === null || item.id ==0) {
          item.id = 0;
          addOtherExpenseData.OtherExpenseItems.push(item);

        }
        else {

          updateOtherExpenseData.OtherExpenseItems.push(item);
        }

      });

     
      if(addOtherExpenseData.OtherExpenseItems.length>0)
      this.otherExpensesService.addOtherExpensesInfo(addOtherExpenseData).subscribe(
        (val) => {
          console.log("POST call success");
        },
        response => {
          console.log("POST call in error", response);
        },
        () => {
          console.log("The POST observable is now completed.");
        });

      if(updateOtherExpenseData.OtherExpenseItems.length>0)
      this.otherExpensesService.updateOtherExpensesInfo(updateOtherExpenseData).subscribe(
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


  deleteOtherExpenseData(finalExpenseData: OtherExpensesOptions) {
    let initialExpenseData: OtherExpensesOptions = this.reimbursementformInfo.otherExpensesOptions;
    let deletedItemsId: number[] = [];

    if (initialExpenseData.OtherExpenseItems.length > finalExpenseData.OtherExpenseItems.length) {

      initialExpenseData.OtherExpenseItems.forEach(item => {
        let index = finalExpenseData.OtherExpenseItems.findIndex((otherExpenseItem: OtherExpensesItem) => { return item.id == otherExpenseItem.id })

        if (index === -1) {
          deletedItemsId.push(item.id);
        }
      });

    }

    if (deletedItemsId.length > 0) {
      this.otherExpensesService.deleteOtherExpenses(deletedItemsId).subscribe(
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

  initializePerDiemForm(perDiemOptions: PerDiemOptions) {

    for (let perDiemItem of perDiemOptions.PerDiemItems) {
      this.PerDiemForm.controls['id'].setValue(perDiemItem.id);
      this.PerDiemForm.controls['arrivalDate'].setValue(perDiemItem.arrivalDate);
      this.PerDiemForm.controls['departureDate'].setValue(perDiemItem.departureDate);
      this.PerDiemForm.controls['currency'].setValue(perDiemItem.currency);
      this.PerDiemForm.controls['totalDays'].setValue(perDiemItem.totalDays);
      this.PerDiemForm.controls['totalAmount'].setValue(perDiemItem.totalAmount);
      this.PerDiemForm.controls['remarks'].setValue(perDiemItem.remarks)
      }


  }


  createUpdatePerDiem() {
    let perDiemItem: PerDiemItem;
    if (this.PerDiemForm.valid) {
      perDiemItem = new PerDiemItem();
      perDiemItem.id=this.PerDiemForm.controls['id'].value;
      perDiemItem.arrivalDate = this.PerDiemForm.controls['arrivalDate'].value;
      perDiemItem.departureDate = this.PerDiemForm.controls['departureDate'].value;
      perDiemItem.currency = this.PerDiemForm.controls['currency'].value;
      perDiemItem.totalDays = this.PerDiemForm.controls['totalDays'].value;
      perDiemItem.totalAmount = this.PerDiemForm.controls['totalAmount'].value;
      perDiemItem.remarks = this.PerDiemForm.controls['remarks'].value;
      perDiemItem.reimbursementInfoId = this.data;
      if (typeof(perDiemItem.id) == 'undefined' || perDiemItem.id == null) {
        this.perDiemService.addPerDiemInfo(perDiemItem).subscribe(
          (val) => {
            console.log("POST call success");
          },
          response => {
            console.log("POST call in error", response);
          },
          () => {
            console.log("The POST observable is now completed.");
          });
      } else {

        this.perDiemService.updatePerDiemInfo(perDiemItem).subscribe(
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

    createUpdateReimbursement() {
        let reimbursementData: ReimbursementData;
        if (this.ReimbursementForm.valid) {
            reimbursementData = new ReimbursementData();
            reimbursementData.reimbursementInfoId = this.data;
            reimbursementData.employeeId = this.ReimbursementForm.controls['employeeId'].value;
            reimbursementData.employeeName = this.ReimbursementForm.controls['employeeName'].value;
            reimbursementData.designation = this.ReimbursementForm.controls['designation'].value;
            reimbursementData.bandWorkLevel = this.ReimbursementForm.controls['bandWorkLevel'].value;
            reimbursementData.clientName = this.ReimbursementForm.controls['clientName'].value;
          reimbursementData.costCenter = this.ReimbursementForm.controls['costCenter'].value;
          reimbursementData.projectCode = this.ReimbursementForm.controls['projectCode'].value;
            reimbursementData.purposeofTravel = this.ReimbursementForm.controls['purposeofTravel'].value;
            reimbursementData.locationofTravel = this.ReimbursementForm.controls['locationofTravel'].value;
          reimbursementData.dateofArrival = this.ReimbursementForm.controls['dateofArrival'].value;
          reimbursementData.dateofDeparture = this.ReimbursementForm.controls['dateofDeparture'].value;
          reimbursementData.travelBillabletoCustomer = this.ReimbursementForm.controls['travelBillabletoCustomer'].value =='Yes'?true:false;
          reimbursementData.flightChargesReimbursed = this.ReimbursementForm.controls['flightChargesReimbursed'].value=='Yes'?true:false;
          reimbursementData.travelExpenseReimbursed = this.ReimbursementForm.controls['travelExpenseReimbursed'].value=='Yes'?true:false;
          reimbursementData.anyOtherExpenseReimbursed = this.ReimbursementForm.controls['anyOtherExpenseReimbursed'].value=='Yes'?true:false;

            
            if (this.data == 0) {
              this.reimbursementService.addReimbursement(reimbursementData).subscribe(
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
              this.reimbursementService.updateReimbursement(reimbursementData).subscribe(
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
enum SubmitActionsReimburseMent {
    createUpdateReimbursement,
    createUpdateFare,
    createUpdatePerDiem,
    createUpdateBoarding,
    createUpdatereVoucherItems,
    createUpdatereNonVoucherItems,
    createUpdatereOtherExpenses,
    
}




export class MyErrorStateMatcher implements ErrorStateMatcher {
    isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
        const isSubmitted = form && form.submitted;
        return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
    }
}

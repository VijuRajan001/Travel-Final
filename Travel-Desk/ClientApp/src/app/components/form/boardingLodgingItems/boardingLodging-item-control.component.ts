
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms'
import { Injectable } from '@angular/core';
import { MatInputModule,MatFormFieldModule,MatButtonModule,MatDividerModule} from '@angular/material';


@Component({
    selector: 'boardingLodging-item-control',
    templateUrl: './boardingLodging-item-control.component.html',
    styleUrls:['./boardingLodging-item-control.component.css']
        
})
@Injectable()
export class BoardingLodgingItemControlComponent {

    @Input()
    public index: number;

    @Input()
    public boardingLodgingItem: FormGroup;

    @Output()
    public removed: EventEmitter<number> = new EventEmitter<number>();

    @Output()
    public add: EventEmitter<number> = new EventEmitter<number>();;
 

    static buildItemwithValue(data: any) {
      debugger;

      return new FormGroup({
             'id': new FormControl(data.id),
            'placeofStay': new FormControl(data.placeofStay),
            'fromDate': new FormControl(data.fromDate, Validators.required),
            'toDate': new FormControl(data.toDate, Validators.required),
            'currency': new FormControl(data.currency, Validators.required),
            'amountSpent': new FormControl(data.amountSpent, Validators.required),
            'remarks': new FormControl(data.remarks, Validators.required),

        });
    }


    static buildItem(data: any) {
      return new FormGroup({
            'id': new FormControl(),
            'placeofStay': new FormControl(data.placeofStay),
            'fromDate': new FormControl(data.fromDate, Validators.required),
            'toDate': new FormControl(data.toDate, Validators.required),
            'currency': new FormControl(data.currency, Validators.required),
            'amountSpent': new FormControl(data.amountSpent, Validators.required),
            'remarks': new FormControl(data.remarks, Validators.required),

        })
    }
}

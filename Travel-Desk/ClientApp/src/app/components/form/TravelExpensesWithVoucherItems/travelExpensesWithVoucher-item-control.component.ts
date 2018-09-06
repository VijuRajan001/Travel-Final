
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms'
import { Injectable } from '@angular/core';
import { MatInputModule,MatFormFieldModule,MatButtonModule} from '@angular/material';


@Component({
    selector: 'travelExpensesWithVoucher-item-control',
    templateUrl:'./travelExpensesWithVoucher-item-control.component.html'
        
})
@Injectable()
export class TravelExpensesWithVoucherItemControlComponent {

    @Input()
    public index: number;

    @Input()
    public travelExpensesWithVoucherItem: FormGroup;

    @Output()
    public removed: EventEmitter<number> = new EventEmitter<number>();

    @Output()
    public add: EventEmitter<number> = new EventEmitter<number>();;
 

    static buildItemwithValue(data: any) {

      return new FormGroup({
            'id':new FormControl(data.id),
            'date': new FormControl(data.date),
            'from': new FormControl(data.from, Validators.required),
            'to': new FormControl(data.to, Validators.required),
            'modeOfConveyance': new FormControl(data.modeOfConveyance, Validators.required),
            'currency': new FormControl(data.currency, Validators.required),
            'amountSpent': new FormControl(data.amountSpent, Validators.required),
            'remarks': new FormControl(data.remarks, Validators.required)

        });
    }


    static buildItem(val: string) {
      return new FormGroup({
            'id': new FormControl(),
            'date': new FormControl(),
            'from': new FormControl(val, Validators.required),
            'to': new FormControl(val, Validators.required),
            'modeOfConveyance': new FormControl(val, Validators.required),
            'currency': new FormControl(val, Validators.required),
            'amountSpent': new FormControl(val, Validators.required),
            'remarks': new FormControl(val, Validators.required)
        })
    }
}

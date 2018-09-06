
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms'
import { Injectable } from '@angular/core';
import { MatInputModule,MatFormFieldModule,MatButtonModule} from '@angular/material';


@Component({
    selector: 'otherExpenses-item-control',
    templateUrl:'./otherExpenses-item-control.component.html'
        
})
@Injectable()
export class OtherExpensesItemControlComponent {

    @Input()
    public index: number;

    @Input()
    public otherExpensesItem: FormGroup;

    @Output()
    public removed: EventEmitter<number> = new EventEmitter<number>();

    @Output()
    public add: EventEmitter<number> = new EventEmitter<number>();;
 

    static buildItemwithValue(data: any) {

      return new FormGroup({
        'id': new FormControl(data.id),
            'date': new FormControl(data.date),
            'natureOfExpenses': new FormControl(data.natureOfExpenses, Validators.required),
            'currency': new FormControl(data.currency, Validators.required),
            'amountSpent': new FormControl(data.amountSpent, Validators.required),
            'supportByVoucher': new FormControl(data.supportByVoucher, Validators.required)

        });
    }


    static buildItem(val: string) {
      return new FormGroup({
        'id': new FormControl(),
            'date': new FormControl(),
            'natureOfExpenses': new FormControl(val, Validators.required),
            'currency': new FormControl(val, Validators.required),
            'amountSpent': new FormControl(val, Validators.required),
            'supportByVoucher': new FormControl(val, Validators.required)
        })
    }
}

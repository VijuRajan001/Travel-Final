
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms'
import { Injectable } from '@angular/core';
import { MatInputModule,MatFormFieldModule,MatButtonModule} from '@angular/material';


@Component({
    selector: 'perDiem-item-control',
    templateUrl:'./perDiem-item-control.component.html'
        
})
@Injectable()
export class PerDiemItemControlComponent {

    @Input()
    public index: number;

    @Input()
    public perDiemItem: FormGroup;

    @Output()
    public removed: EventEmitter<number> = new EventEmitter<number>();

    @Output()
    public add: EventEmitter<number> = new EventEmitter<number>();;
 

    static buildItemwithValue(data: any) {

        return new FormGroup({
            'id': new FormControl(data.id),
            'arrivalDate': new FormControl(data.arrivalDate, Validators.required),
            'departureDate': new FormControl(data.departureDate, Validators.required),
            'currency': new FormControl(data.currency, Validators.required),
            'eligibility': new FormControl(data.eligiility, Validators.required),
            'totalDays': new FormControl(data.totalDays, Validators.required),
            'totalAmount': new FormControl(data.totalAmount, Validators.required),
            'remarks': new FormControl(data.remarks, Validators.required)

        });
    }


    static buildItem(val: string) {
        return new FormGroup({
            'id': new FormControl(),
            'arrivalDate': new FormControl(val, Validators.required),
            'departureDate': new FormControl(val, Validators.required),
            'currency': new FormControl(val, Validators.required),
            'eligibility': new FormControl(val, Validators.required),
            'totalDays': new FormControl(val, Validators.required),
            'totalAmount': new FormControl(val, Validators.required),
            'remarks': new FormControl(val, Validators.required)
        })
    }
}

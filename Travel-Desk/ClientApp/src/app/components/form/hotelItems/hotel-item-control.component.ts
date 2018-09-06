
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms'
import { Injectable } from '@angular/core';
import { MatInputModule,MatFormFieldModule,MatButtonModule} from '@angular/material';


@Component({
    selector: 'hotel-item-control',
    templateUrl:'./hotel-item-control.component.html'
        
})
@Injectable()
export class HotelItemControlComponent {

    @Input()
    public index: number;

    @Input()
    public hotelItem: FormGroup;

    @Output()
    public removed: EventEmitter<number> = new EventEmitter<number>();

    @Output()
    public add: EventEmitter<number> = new EventEmitter<number>();;
 

    static buildItemwithValue(data: any) {

        return new FormGroup({
            'id': new FormControl(data.id),
            'hotelName': new FormControl(data.hotelName, Validators.required),
            'location': new FormControl(data.location, Validators.required),
            'website': new FormControl(data.website, Validators.required),
            'mobileno': new FormControl(data.mobileno, Validators.required)

        });
    }


    static buildItem(val: string) {
        return new FormGroup({
            'id': new FormControl(),
            'hotelName': new FormControl(val, Validators.required),
            'location': new FormControl(val, Validators.required),
            'website': new FormControl(val, Validators.required),
            'mobileno': new FormControl(val, Validators.required)
        })
    }
}


import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms'
import { Injectable } from '@angular/core';
import { HotelItemControlComponent } from '../hotelItems/hotel-item-control.component';

@Component({
    selector: 'hotel-items-array',
    templateUrl:'./hoteloptions.component.html'
 })

@Injectable()
export class HotelItemsArrayComponent {

    @Input()
    public hotelItemsFormArray: FormArray;

    addItem(hotelIndex: number) {
        if (hotelIndex === this.hotelItemsFormArray.length - 1) {
            this.hotelItemsFormArray.push(HotelItemControlComponent.buildItem(''));
        }
        else {
            this.hotelItemsFormArray.insert(hotelIndex + 1, HotelItemControlComponent.buildItem(''));
        }
    }
    static buildItemsWithValue(data: any) {

        return HotelItemControlComponent.buildItemwithValue(data);
    }
    static buildItems() {
        
        return new FormArray([
            HotelItemControlComponent.buildItem('')],
        );
    }
}


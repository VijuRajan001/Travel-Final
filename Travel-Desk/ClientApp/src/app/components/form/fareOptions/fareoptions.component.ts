
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms'
import { Injectable } from '@angular/core';
import { FareItemControlComponent } from '../fareItems/fare-item-control.component';

@Component({
    selector: 'fare-items-array',
    templateUrl:'./fareoptions.component.html'
 })

@Injectable()
export class FareItemsArrayComponent {

    @Input()
    public fareItemsFormArray: FormArray;

    addItem(fareIndex: number) {
        if (fareIndex === this.fareItemsFormArray.length - 1) {
            this.fareItemsFormArray.push(FareItemControlComponent.buildItem(''));
        }
        else {
            this.fareItemsFormArray.insert(fareIndex + 1, FareItemControlComponent.buildItem(''));
        }
    }
    static buildItemsWithValue(data: any) {

        return FareItemControlComponent.buildItemwithValue(data);
    }
    static buildItems() {
        
        return new FormArray([
            FareItemControlComponent.buildItem('')],
        );
    }
}


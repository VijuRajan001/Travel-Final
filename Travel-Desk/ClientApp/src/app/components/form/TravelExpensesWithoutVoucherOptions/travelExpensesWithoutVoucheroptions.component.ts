
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms'
import { Injectable } from '@angular/core';
import { TravelExpensesWithoutVoucherItemControlComponent } from '../TravelExpensesWithoutVoucherItems/travelExpensesWithoutVoucher-item-control.component';

@Component({
    selector: 'travelExpensesWithoutVoucher-items-array',
    templateUrl:'./travelExpensesWithoutVoucheroptions.component.html'
 })

@Injectable()
export class TravelExpensesWithoutVoucherItemsArrayComponent {

    @Input()
    public travelExpensesWithoutVoucherItemsFormArray: FormArray;

    addItem(travelExpensesWithoutVoucherIndex: number) {
        if (travelExpensesWithoutVoucherIndex === this.travelExpensesWithoutVoucherItemsFormArray.length - 1) {
            this.travelExpensesWithoutVoucherItemsFormArray.push(TravelExpensesWithoutVoucherItemControlComponent.buildItem(''));
        }
        else {
            this.travelExpensesWithoutVoucherItemsFormArray.insert(travelExpensesWithoutVoucherIndex + 1, TravelExpensesWithoutVoucherItemControlComponent.buildItem(''));
        }
    }
    static buildItemsWithValue(data: any) {

        return TravelExpensesWithoutVoucherItemControlComponent.buildItemwithValue(data);
    }
    static buildItems() {
        
        return new FormArray([
            TravelExpensesWithoutVoucherItemControlComponent.buildItem('')],
        );
    }
}


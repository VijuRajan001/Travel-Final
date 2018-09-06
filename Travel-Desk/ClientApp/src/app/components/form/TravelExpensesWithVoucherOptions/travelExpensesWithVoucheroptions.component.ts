
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms'
import { Injectable } from '@angular/core';
import { TravelExpensesWithVoucherItemControlComponent } from '../TravelExpensesWithVoucherItems/travelExpensesWithVoucher-item-control.component';

@Component({
    selector: 'travelExpensesWithVoucher-items-array',
    templateUrl:'./travelExpensesWithVoucheroptions.component.html'
 })

@Injectable()
export class TravelExpensesWithVoucherItemsArrayComponent {

    @Input()
    public travelExpensesWithVoucherItemsFormArray: FormArray;

    addItem(travelExpensesWithVoucherIndex: number) {
        if (travelExpensesWithVoucherIndex === this.travelExpensesWithVoucherItemsFormArray.length - 1) {
            this.travelExpensesWithVoucherItemsFormArray.push(TravelExpensesWithVoucherItemControlComponent.buildItem(''));
        }
        else {
            this.travelExpensesWithVoucherItemsFormArray.insert(travelExpensesWithVoucherIndex + 1, TravelExpensesWithVoucherItemControlComponent.buildItem(''));
        }
    }
    static buildItemsWithValue(data: any) {

        return TravelExpensesWithVoucherItemControlComponent.buildItemwithValue(data);
    }
    static buildItems() {
        
        return new FormArray([
            TravelExpensesWithVoucherItemControlComponent.buildItem('')],
        );
    }
}



import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms'
import { Injectable } from '@angular/core';
import { OtherExpensesItemControlComponent } from '../otherExpensesItems/otherExpenses-item-control.component';

@Component({
    selector: 'otherExpenses-items-array',
    templateUrl:'./otherExpensesoptions.component.html'
 })

@Injectable()
export class OtherExpensesItemsArrayComponent {

    @Input()
    public otherExpensesItemsFormArray: FormArray;

    addItem(otherExpensesIndex: number) {
        if (otherExpensesIndex === this.otherExpensesItemsFormArray.length - 1) {
            this.otherExpensesItemsFormArray.push(OtherExpensesItemControlComponent.buildItem(''));
        }
        else {
            this.otherExpensesItemsFormArray.insert(otherExpensesIndex + 1, OtherExpensesItemControlComponent.buildItem(''));
        }
    }
    static buildItemsWithValue(data: any) {

        return OtherExpensesItemControlComponent.buildItemwithValue(data);
    }
    static buildItems() {
        
        return new FormArray([
            OtherExpensesItemControlComponent.buildItem('')],
        );
    }
}


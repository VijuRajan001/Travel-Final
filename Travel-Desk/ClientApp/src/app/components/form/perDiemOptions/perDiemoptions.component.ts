
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms'
import { Injectable } from '@angular/core';
import { PerDiemItemControlComponent } from '../perDiemItems/perDiem-item-control.component';

@Component({
    selector: 'perDiem-items-array',
    templateUrl:'./perDiemoptions.component.html'
 })

@Injectable()
export class PerDiemItemsArrayComponent {

    @Input()
    public perDiemItemsFormArray: FormArray;

    addItem(perDiemIndex: number) {
        if (perDiemIndex === this.perDiemItemsFormArray.length - 1) {
            this.perDiemItemsFormArray.push(PerDiemItemControlComponent.buildItem(''));
        }
        else {
            this.perDiemItemsFormArray.insert(perDiemIndex + 1, PerDiemItemControlComponent.buildItem(''));
        }
    }
    static buildItemsWithValue(data: any) {

        return PerDiemItemControlComponent.buildItemwithValue(data);
    }
    static buildItems() {
        
        return new FormArray([
            PerDiemItemControlComponent.buildItem('')],
        );
    }
}


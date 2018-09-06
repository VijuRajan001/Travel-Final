
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms'
import { Injectable } from '@angular/core';
import { FlightItemControlComponent } from '../flightItems/flight-item-control.component';
import { FlightItem } from '../../../shared/models/flightitem.interface';

@Component({
    selector: 'flight-items-array',
    templateUrl:'./flightoptions.component.html'
 })

@Injectable()
export class FlightItemsArrayComponent {


    @Input()
    public itemsFormArray: FormArray;

    @Output()
    public removedId: any[] = [];
    
    removeItem(index: number) {

      this.itemsFormArray.removeAt(index);
      if (this.itemsFormArray.length == 0) {
        this.itemsFormArray.push(FlightItemControlComponent.buildItem());

      }
    }
    addItem(index: number) {
        if (index === this.itemsFormArray.length - 1) {
            this.itemsFormArray.push(FlightItemControlComponent.buildItem());
        }
        else {
            this.itemsFormArray.insert(index + 1, FlightItemControlComponent.buildItem());
        }
    }

    static buildItemsWithValue(data: any) {

        return FlightItemControlComponent.buildItemwithValue(data);
    }

    static buildItems() {
      
        return new FormArray([FlightItemControlComponent.buildItem()]);
    }
}


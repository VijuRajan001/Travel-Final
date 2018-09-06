
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms'
import { Injectable } from '@angular/core';
import { BoardingLodgingItemControlComponent } from '../boardingLodgingItems/boardingLodging-item-control.component';

@Component({
    selector: 'boardingLodging-items-array',
    templateUrl:'./boardingLodgingoptions.component.html'
 })

@Injectable()
export class BoardingLodgingItemsArrayComponent {

    @Input()
    public boardingLodgingItemsFormArray: FormArray;

    addItem(boardingLodgingIndex: number) {
        if (boardingLodgingIndex === this.boardingLodgingItemsFormArray.length - 1) {
            this.boardingLodgingItemsFormArray.push(BoardingLodgingItemControlComponent.buildItem(''));
        }
        else {
            this.boardingLodgingItemsFormArray.insert(boardingLodgingIndex + 1, BoardingLodgingItemControlComponent.buildItem(''));
        }
    }
    static buildItemsWithValue(data: any) {

        return BoardingLodgingItemControlComponent.buildItemwithValue(data);
    }
    static buildItems() {
        
        return new FormArray([
            BoardingLodgingItemControlComponent.buildItem('')],
        );
    }
}


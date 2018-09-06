import { OtherExpensesItem } from './otherExpensesitem.interface';


export class OtherExpensesOptions {

    constructor(otherExpensesOptions: IOtherExpensesOptions = {

      otherExpenseItems: new Array<OtherExpensesItem>(),
        

    }) {

       otherExpensesOptions.otherExpenseItems.forEach(item => item.supportByVoucher = false);
      this.OtherExpenseItems = otherExpensesOptions.otherExpenseItems;

    }
    public OtherExpenseItems: OtherExpensesItem[];
   
}


export interface IOtherExpensesOptions {
  otherExpenseItems: OtherExpensesItem[]
}

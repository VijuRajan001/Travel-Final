import { TravelExpensesWithoutVoucherItem } from './travelExpensesWithoutVoucheritem.interface';


export class TravelExpensesWithoutVoucherOptions {

    constructor(travelExpensesWithoutVoucherOptions: ITravelExpensesWithoutVoucherOptions = {

      travelExpensesWithoutVoucherItems: new Array<TravelExpensesWithoutVoucherItem>(),
        

    }) {

      this.TravelExpensesWithoutVoucherItems = travelExpensesWithoutVoucherOptions.travelExpensesWithoutVoucherItems;
       

    }
    public TravelExpensesWithoutVoucherItems: TravelExpensesWithoutVoucherItem[];
   
}


export interface ITravelExpensesWithoutVoucherOptions {
  travelExpensesWithoutVoucherItems: TravelExpensesWithoutVoucherItem[]
}

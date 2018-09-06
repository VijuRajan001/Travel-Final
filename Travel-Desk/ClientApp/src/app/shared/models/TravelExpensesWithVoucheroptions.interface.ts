import { TravelExpensesWithVoucherItem } from './travelExpensesWithVoucheritem.interface';


export class TravelExpensesWithVoucherOptions {

    constructor(travelExpensesWithVoucherOptions: ITravelExpensesWithVoucherOptions = {

      travelExpensesWithVoucherItems: new Array<TravelExpensesWithVoucherItem>(),
        

    }) {

      this.TravelExpensesWithVoucherItems = travelExpensesWithVoucherOptions.travelExpensesWithVoucherItems ;
       

    }
    public TravelExpensesWithVoucherItems: TravelExpensesWithVoucherItem[];
   
}


export interface ITravelExpensesWithVoucherOptions {
  travelExpensesWithVoucherItems: TravelExpensesWithVoucherItem[]
}

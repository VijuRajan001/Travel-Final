import { RequestData } from './requestdata.interface';
import { FlightOptions} from './flightoptions.interface';
import { HotelOptions } from './hoteloptions.interface';
import { Passport } from './passport.interface';
import { ReimbursementData } from './reimbursementdata.interface';
import { ForexCard } from './forex.interface';
import { FareOptions } from './fareoptions.interface';
import { BoardingLodgingOptions } from './boardingLodgingoptions.interface';
import { OtherExpensesOptions } from './otherExpensesoptions.interface';
import { TravelExpensesWithVoucherOptions } from './travelExpensesWithVoucheroptions.interface';
import { TravelExpensesWithoutVoucherOptions } from './travelExpensesWithoutVoucheroptions.interface';


export class Reimbursementform {

    constructor(reimbursementform: IReimbursementform = {

        reimbursementData: new ReimbursementData(),
        fareOptions: new FareOptions(),
        boardingLodgingOptions: new BoardingLodgingOptions(),
        travelExpensesWithoutVoucherOptions: new TravelExpensesWithoutVoucherOptions(),
        travelExpensesWithVoucherOptions: new TravelExpensesWithVoucherOptions(),
        otherExpensesOptions: new OtherExpensesOptions()
    }) {
      debugger;
        this.reimbursementData = reimbursementform.reimbursementData;
        this.fareOptions = reimbursementform.fareOptions;
        this.boardingLodgingOptions = reimbursementform.boardingLodgingOptions;
        this.travelExpensesWithoutVoucherOptions = reimbursementform.travelExpensesWithoutVoucherOptions;
      this.travelExpensesWithVoucherOptions = reimbursementform.travelExpensesWithVoucherOptions;
      this.otherExpensesOptions= reimbursementform.otherExpensesOptions;

    }
    public reimbursementData: ReimbursementData;
    public fareOptions: FareOptions;
    public boardingLodgingOptions: BoardingLodgingOptions;
    public travelExpensesWithoutVoucherOptions: TravelExpensesWithoutVoucherOptions;
  public travelExpensesWithVoucherOptions: TravelExpensesWithVoucherOptions;
  public otherExpensesOptions: OtherExpensesOptions;
}

export interface IReimbursementform {
    reimbursementData: ReimbursementData;
    fareOptions: FareOptions;
    boardingLodgingOptions: BoardingLodgingOptions;
    travelExpensesWithoutVoucherOptions: TravelExpensesWithoutVoucherOptions;
    travelExpensesWithVoucherOptions: TravelExpensesWithVoucherOptions;
    otherExpensesOptions: OtherExpensesOptions;
}

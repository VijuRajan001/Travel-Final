import { RequestData } from './requestdata.interface';
import { FlightOptions} from './flightoptions.interface';
import { HotelOptions } from './hoteloptions.interface';
import { Passport } from './passport.interface';
import { ReimbursementData } from './reimbursementdata.interface';
import { ForexCard } from './forex.interface';


export class TravelData {

    constructor(travelData: ITravelData = {

        requestData: new RequestData(),
        flightData: new FlightOptions(),
        hotelData: new HotelOptions(),
        passportData: new Passport(),
        forexCardData: new ForexCard(),
      reimbursementData: new ReimbursementData()
    }) {

        this.requestData = travelData.requestData;
        this.flightData = travelData.flightData;
        this.hotelData = travelData.hotelData;
        this.passportData = travelData.passportData;
      this.forexCardData = travelData.forexCardData;
      this.reimbursementData= travelData.reimbursementData;

    }
    public requestData: RequestData;
    public flightData: FlightOptions;
    public hotelData: HotelOptions;
    public passportData: Passport;
  public forexCardData: ForexCard;
  public reimbursementData: ReimbursementData;
}

export interface ITravelData {
    requestData: RequestData;
    flightData: FlightOptions;
    hotelData: HotelOptions;
    passportData: Passport;
  forexCardData: ForexCard;
  reimbursementData: ReimbursementData;
}

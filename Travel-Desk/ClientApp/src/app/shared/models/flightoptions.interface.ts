import { FlightItem} from './flightitem.interface';

export class FlightOptions {

    constructor(flightOPtions: IFlightOptions = {

        onwardFlightItems: new Array<FlightItem>(),
        returnFlightItems: new Array<FlightItem>()

    }) {

        this.OnwardFlightItems = flightOPtions.onwardFlightItems;
        this.ReturnFlightItems = flightOPtions.returnFlightItems;

    }
    public OnwardFlightItems: FlightItem[];
    public ReturnFlightItems: FlightItem[];
}


export interface IFlightOptions {
    onwardFlightItems: FlightItem[], 
    returnFlightItems: FlightItem[]
}
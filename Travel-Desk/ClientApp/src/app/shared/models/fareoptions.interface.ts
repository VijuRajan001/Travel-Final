import { FareItem} from './fareitem.interface';


export class FareOptions {

    constructor(fareOptions: IFareOptions = {

        fareItems: new Array<FareItem>(),
        

    }) {

        this.FareItems = fareOptions.fareItems;
       

    }
    public FareItems: FareItem[];
   
}


export interface IFareOptions {
    fareItems: FareItem[]
}
import { HotelItem} from './hotelitem.interface';


export class HotelOptions {

    constructor(hotelOptions: IHotelOptions = {

        hotelItems: new Array<HotelItem>(),
        

    }) {

        this.HotelItems = hotelOptions.hotelItems;
       

    }
    public HotelItems: HotelItem[];
   
}


export interface IHotelOptions {
    hotelItems: HotelItem[]
}
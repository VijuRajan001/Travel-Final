export class HotelItem {

    constructor(hotelItem: IHotelItem = {
        id: 0,
        hotelName: "",
        location: "",
        website: "",
        mobileno: "",
        requestInfoId: 0,
    }) {
        this.id = hotelItem.id;
        this.hotelName = hotelItem.hotelName;
        this.location = hotelItem.location;
        this.website = hotelItem.website;
        this.mobileno = hotelItem.mobileno;
        this.requestInfoId = hotelItem.requestInfoId;
        
    }
    public id: number
    public hotelName: string;
    public location: string;
    public website: string;
    public requestInfoId: number;
    public mobileno: string;
}


export interface IHotelItem {
    id:number
    hotelName: string;
    location: string;  
    website: string;
    mobileno: string;
    requestInfoId: number;
    
}
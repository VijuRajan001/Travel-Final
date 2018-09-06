export class FlightItem {

    constructor(flightItem: IFlightItem = {
        id: 0,
        flightItemId:"",
        flightName:"",
        flightFrom: "",
        flightTo: "",
        requestInfoId: 0,
      flightDirection: "",
         flightCost: 0,
    flightLayover: "",
      flightLayoverHours: 0,
      flightStartDate: "",
    flightEndDate: "",
    flightStartTime: "",
    flightEndTime: ""
    })
    {
        this.id = flightItem.id;
        this.flightItemId = flightItem.flightItemId;
        this.flightName = flightItem.flightName;
        this.flightFrom = flightItem.flightFrom;
        this.flightTo = flightItem.flightTo;
        this.requestInfoId = flightItem.requestInfoId;
      this.flightDirection = flightItem.flightDirection;
      this.flightCost = flightItem.flightCost;
      this.flightLayover = flightItem.flightLayover;
      this.flightLayoverHours = flightItem.flightLayoverHours;
      this.flightStartDate = flightItem.flightStartDate;
      this.flightEndDate = flightItem.flightEndDate;
      this.flightStartTime = flightItem.flightStartTime;
      this.flightEndTime = flightItem.flightEndTime;
    }
    public id:number
    public flightItemId: string;
    public flightName: string;  
    public flightFrom: string;
    public flightTo: string;
    public requestInfoId: number;
  public flightDirection: string;
  public flightCost: number;
   public flightLayover: string;
   public flightLayoverHours: number;
   public flightStartDate: string;
  public  flightEndDate: string;
   public flightStartTime: string;
   public flightEndTime: string;
}

export interface IFlightItem {
    id: number;
    flightItemId: string;
    flightName: string;
    flightFrom: string;
    flightTo: string;
    requestInfoId: number;
    flightDirection: string;
    flightCost: number;
    flightLayover: string;
    flightLayoverHours: number;
    flightStartDate: string;
    flightEndDate: string;
    flightStartTime: string;
    flightEndTime: string;
}

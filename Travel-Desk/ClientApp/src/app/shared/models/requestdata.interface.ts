import { FlightItem } from "./flightitem.interface";
import { HotelItem } from "./hotelitem.interface";
import { ForexCard } from "./forex.interface";
import { Passport } from "./passport.interface";

export class RequestData {

  constructor(request: IRequestData = {
    requestId: 0,
    project_Code: "",
    country: "",
    travelDate: "",
    returnDate: "",
    employeeName: "",
    employeeId: "",
    approver: "",
    createdBy: "",
    requestStatus: "",
    flightItem:new Array<FlightItem>(),
    hotelItem: new Array<HotelItem>(),
    forexItem: new ForexCard(),
    passportItem:new Passport()


  }) {

    this.requestId = request.requestId;
    this.project_Code = request.project_Code;
    this.requestId = request.requestId;
    this.country = request.country;
    this.travelDate = request.travelDate;
    this.returnDate = request.returnDate;
    this.employeeName = request.employeeName;
    this.employeeId = request.employeeId;
    // this.dob = request.dob;
    this.requestStatus = request.requestStatus;
    this.flightItem = request.flightItem;
    this.hotelItem = request.hotelItem;
    this.forexItem = request.forexItem;
    this.hotelItem = request.hotelItem;
    this.passportItem = request.passportItem;

  }
  public requestId: number;
  public project_Code: string;
  public country: string;
  public travelDate: string;
  public returnDate: string;
  public employeeName: string;
  public employeeId: string;
  //public dob: string;
  public approver: string;
  public createdBy: string;
  public requestStatus: string;
  public flightItem: FlightItem[];
  public hotelItem: HotelItem[];
  public forexItem: ForexCard;
  public passportItem: Passport;
}


export interface IRequestData {
  requestId: number;
  project_Code: string;
  country: string;
  travelDate: string;
  returnDate: string;
  employeeName: string;
  employeeId: string;
  //dob: string;
  requestStatus: string;
  approver: string;
  createdBy: string;
    flightItem: FlightItem[];
   hotelItem: HotelItem[];
   forexItem: ForexCard;
   passportItem: Passport;
}

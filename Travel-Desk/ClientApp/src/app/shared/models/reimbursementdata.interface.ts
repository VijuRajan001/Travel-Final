
export class ReimbursementData {

    constructor(request: IReimbursementData = {
        reimbursementInfoId: 0,
        employeeName: "",
        employeeId: "",
        designation: "",
        bandWorkLevel: "",
        clientName: "",
        projectCode: "",
        costCenter: "",
        purposeofTravel: "",
        locationofTravel: "",
        dateofArrival: "",
        dateofDeparture: "",
        travelBillabletoCustomer: false,
        flightChargesReimbursed: false,
        travelExpenseReimbursed: false,
        anyOtherExpenseReimbursed: false,
        reimbursementStatus: ''
    }) {

        this.reimbursementInfoId = request.reimbursementInfoId;
        this.employeeName = request.employeeName;
        this.employeeId = request.employeeId;
        this.designation = request.designation;
      this.bandWorkLevel = request.bandWorkLevel;
      this.clientName = request.clientName;
      this.projectCode = request.projectCode;
      this.costCenter = request.costCenter;
      this.purposeofTravel = request.purposeofTravel;
      this.locationofTravel = request.locationofTravel;
      this.dateofArrival = request.dateofArrival;
      this.dateofDeparture = request.dateofDeparture;
      this.travelBillabletoCustomer = request.travelBillabletoCustomer;
      this.flightChargesReimbursed = request.flightChargesReimbursed;
      this.travelExpenseReimbursed = request.travelExpenseReimbursed;
      this.anyOtherExpenseReimbursed = request.anyOtherExpenseReimbursed;
      this.reimbursementStatus = request.reimbursementStatus;

    }
    public reimbursementInfoId: number;
    public employeeName: string;
    public employeeId: string;
    public designation: string;
    public bandWorkLevel: string;
    public clientName: string;
    public projectCode: string;
    public costCenter: string;
  public purposeofTravel: string;
  public locationofTravel: string;
  public dateofArrival: string;
  public dateofDeparture: string;
  public travelBillabletoCustomer: boolean;
    public flightChargesReimbursed: boolean;
    public travelExpenseReimbursed: boolean;
    public anyOtherExpenseReimbursed: boolean;
  public reimbursementStatus: string;

}


export interface IReimbursementData {
    reimbursementInfoId: number;
    employeeName: string;
    employeeId: string;
    designation: string;
    bandWorkLevel: string;
    clientName: string;
    projectCode: string;
    costCenter: string;
  purposeofTravel: string;
    locationofTravel: string;
    dateofArrival: string;
    dateofDeparture: string;
    travelBillabletoCustomer: boolean;
     flightChargesReimbursed: boolean;
     travelExpenseReimbursed: boolean;
     anyOtherExpenseReimbursed: boolean;
     reimbursementStatus: string;
}

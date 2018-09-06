export class PerDiemItem {

    constructor(perDiemItem: IPerDiemItem = {
        id:0,
        arrivalDate: "",
        departureDate: "",
        currency: "",        
        totalDays: 0,
        totalAmount: 0,
        remarks: "",
        reimbursementInfoId: 0,
    }) {
        this.id = perDiemItem.id;
        this.arrivalDate = perDiemItem.arrivalDate;
        this.departureDate = perDiemItem.departureDate;
        this.currency = perDiemItem.currency;        
        this.totalDays = perDiemItem.totalDays;
        this.totalAmount = perDiemItem.totalAmount;
        this.remarks = perDiemItem.remarks;
        this.reimbursementInfoId = perDiemItem.reimbursementInfoId;
        
        
  }
    public id: number;
    public arrivalDate: string;
    public departureDate: string;
    public currency: string;
    
    public totalDays: number;
    public totalAmount: number;
    public remarks: string;
    public reimbursementInfoId: number;
}


export interface IPerDiemItem {
    id: number;
    arrivalDate: string;
    departureDate: string;
    currency: string;
    totalDays: number;
    totalAmount: number;
    remarks: string;
    reimbursementInfoId: number;
    
}

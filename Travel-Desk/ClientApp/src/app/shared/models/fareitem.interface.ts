export class FareItem {

    constructor(fareItem: IFareItem = {
        id:0,
        travelMode: "",
        date: "",
        from: "",
        to: "",
        currency: "",
        amountSpent: 0,
        
        remarks: "",
        reimbursementInfoId: 0,
    }) {
        this.travelMode = fareItem.travelMode;
        this.date = fareItem.date;
        this.from = fareItem.from;
        this.to = fareItem.to;
        this.currency = fareItem.currency;
        
        this.amountSpent = fareItem.amountSpent;
        this.remarks = fareItem.remarks;
        this.reimbursementInfoId = fareItem.reimbursementInfoId;
        this.id = fareItem.id;
        
  }
    public id: number;
    public travelMode: string;
    public date: string;
    public from: string;
    public to: string;
    public currency: string;
    public amountSpent: number;
  
    public remarks: string;
    public reimbursementInfoId: number;
}


export interface IFareItem {
    id: number;
    travelMode: string;
    date: string;
    from: string;  
    to: string;
    currency: string;
    amountSpent: number;
    
    remarks: string;
    reimbursementInfoId: number;
    
}

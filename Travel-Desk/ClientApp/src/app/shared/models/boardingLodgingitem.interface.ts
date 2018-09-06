export class BoardingLodgingItem {

    constructor(boardingLodgingItem: IBoardingLodgingItem = {
        id:0,
        placeofStay: "",
        fromDate: "",
        toDate: "",
        currency: "",
        amountSpent: 0,
        remarks: "",
        reimbursementInfoId: 0,
    }) {
        this.id = boardingLodgingItem.id;
        this.placeofStay =boardingLodgingItem.placeofStay;
        this.fromDate = boardingLodgingItem.fromDate;
        this.toDate = boardingLodgingItem.toDate;
        this.currency = boardingLodgingItem.currency;
        this.amountSpent = boardingLodgingItem.amountSpent;
        this.remarks = boardingLodgingItem.remarks;
        this.reimbursementInfoId = boardingLodgingItem.reimbursementInfoId;
        
  }
    public id:number
    public placeofStay: string;
    public fromDate: string;
    public toDate: string;
    public currency: string;
    public amountSpent: number;
    public remarks: string;
    public reimbursementInfoId: number;
}


export interface IBoardingLodgingItem {
    id:number
    placeofStay: string;
    fromDate: string;
    toDate: string;
    currency: string;
    amountSpent: number;
    remarks: string;
    reimbursementInfoId: number;
}

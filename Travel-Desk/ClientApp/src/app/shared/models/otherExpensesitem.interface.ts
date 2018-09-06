export class OtherExpensesItem {

  constructor(otherExpensesItem: IOtherExpensesItem = {
        id:0,
        date: "",
        natureOfExpenses: "",
        currency: "",
        amountSpent: 0,
        supportByVoucher: false,
        reimbursementInfoId: 0,
  }) {
    this.id= otherExpensesItem.id;
        this.date = otherExpensesItem.date;
        this.natureOfExpenses = otherExpensesItem.natureOfExpenses;
        this.currency = otherExpensesItem.currency;
        this.amountSpent = otherExpensesItem.amountSpent;
        
        this.supportByVoucher = false;
        this.reimbursementInfoId = otherExpensesItem.reimbursementInfoId;
        
  }
  public id: number;
    public date: string;
    public natureOfExpenses: string;
    public currency: string;
    public amountSpent: number;
    
  public supportByVoucher: boolean;
    public reimbursementInfoId: number;
}


export interface IOtherExpensesItem {
    id: number;
    date: string;
    natureOfExpenses: string;
    currency: string;
    amountSpent: number;
    
  supportByVoucher: boolean;
    reimbursementInfoId: number;
}

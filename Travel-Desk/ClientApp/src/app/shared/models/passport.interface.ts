
export class Passport {

    constructor(passport: IPassport = {
         id : 0,
         passportNum:'',
         visaNum:'',
         passportExpiryDate:'',
         visaExpiryDate:'',
         requestInfoId:0,
    }) {

        this.id = passport.id;
        this.visaNum = passport.visaNum;
        this.visaExpiryDate = passport.visaExpiryDate;
        this.passportExpiryDate = passport.passportExpiryDate;
        this.passportNum = passport.passportNum;
        this.requestInfoId = passport.requestInfoId;
        

    }
    public id: number;
    public passportNum: string;
    public visaNum: string;
    public passportExpiryDate: string
    public visaExpiryDate: string;
    public requestInfoId: number;
}




export interface IPassport {
    id:number
    passportNum: string;
    visaNum: string;
    passportExpiryDate: string
    visaExpiryDate: string;
    requestInfoId: number;
}
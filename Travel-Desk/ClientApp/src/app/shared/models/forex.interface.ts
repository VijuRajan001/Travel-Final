

export class ForexCard {

    constructor(fxCard: IForexCard = {
        id: 0,
        cardNumber:'' ,
        cardType: '',
        cardExpiryDate: '',        
        requestInfoId: 0,
    }) {

        this.id = fxCard.id;
        this.cardNumber = fxCard.cardNumber;
        this.cardType = fxCard.cardType;
        this.cardExpiryDate = fxCard.cardExpiryDate;
        this.requestInfoId = fxCard.requestInfoId;
        


    }
    public id: number
    public cardNumber: string;
    public cardType: string;
    public cardExpiryDate: string;
    public requestInfoId: number;
}



export class IForexCard {
    id: number
    cardNumber: string;
    cardType: string;
    cardExpiryDate: string;
    requestInfoId: number;

}
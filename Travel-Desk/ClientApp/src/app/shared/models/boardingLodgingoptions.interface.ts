import { BoardingLodgingItem} from './boardingLodgingitem.interface';


export class BoardingLodgingOptions {

    constructor(boardingLodgingOptions: IBoardingLodgingOptions = {

        boardingLodgingItems: new Array<BoardingLodgingItem>(),
        

    }) {

        this.BoardingLodgingItems = boardingLodgingOptions.boardingLodgingItems;
       

    }
    public BoardingLodgingItems: BoardingLodgingItem[];
   
}


export interface IBoardingLodgingOptions {
    boardingLodgingItems: BoardingLodgingItem[]
}

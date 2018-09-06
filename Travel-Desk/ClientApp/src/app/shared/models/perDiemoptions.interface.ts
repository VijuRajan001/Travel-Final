import { PerDiemItem} from './perDiemitem.interface';


export class PerDiemOptions {

    constructor(perDiemOptions: IPerDiemOptions = {

        perDiemItems: new Array<PerDiemItem>(),
        

    }) {

        this.PerDiemItems = perDiemOptions.perDiemItems;
       

    }
    public PerDiemItems: PerDiemItem[];
   
}


export interface IPerDiemOptions {
    perDiemItems: PerDiemItem[]
}
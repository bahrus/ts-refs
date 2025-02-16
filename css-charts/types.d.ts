import { ITransformer } from "../trans-render/types";

export interface EndUserProps {
    chartType: 'bar' | 'pie'
}

export interface AllProps extends EndUserProps{
    $slot: HTMLSlotElement,
    slotChangeCount: number,
    data: Array<DataItem>,
    isBar: boolean,
    isPie: boolean,
}

export interface DataItem {
    key: string, 
    value: number, 
    scaledVal: number
}

export type PAP = Partial<AllProps>;

export type ProPAP = Promise<PAP>;

export interface Actions {
    extractData(self: AllProps): ProPAP;
    classify(self: AllProps): PAP;
}
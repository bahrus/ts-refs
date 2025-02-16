import { ITransformer } from "../trans-render/types";

export interface EndUserProps {

}

export interface AllProps extends EndUserProps{
    $slot: HTMLSlotElement,
    slotChangeCount: number,
    data: Array<DataItem>
}

export interface DataItem {
    key: string, 
    value: number, 
    scaledVal: number
}

export type PAP = Partial<AllProps>;

export type ProPAP = Promise<PAP>;

export interface Actions {
    //handleSlotChange(evt: Event, transformer: ITransformer<AllProps, Actions, any>): void;
    extractData(self: AllProps): ProPAP;

    buildTable(self: AllProps): PAP;
}
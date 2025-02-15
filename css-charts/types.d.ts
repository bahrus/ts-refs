import { ITransformer } from "../trans-render/types";

export interface EndUserProps {

}

export interface AllProps extends EndUserProps{
    $slot: HTMLSlotElement,
    slotChangeCount: number,
    data: Array<any>
}

export type PAP = Partial<AllProps>;

export interface Actions {
    //handleSlotChange(evt: Event, transformer: ITransformer<AllProps, Actions, any>): void;
    extractData(self: AllProps): PAP;

    buildTable(self: AllProps): PAP;
}
import { ITransformer } from "../trans-render/types";

export interface EndUserProps {

}

export interface AllProps extends EndUserProps{
    slot: HTMLSlotElement,
    slotChangeCount: number,
}

export interface Actions {
    
    handleSlotChange(evt: Event, transformer: ITransformer<AllProps, Actions, any>): void;
}
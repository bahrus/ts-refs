import { IEnhancement, BEAllProps } from '../trans-render/be/types';

export interface EndUserProps extends IEnhancement{
    buttonInsertPosition?: InsertPosition;
    buttonContent?: string;
}

export interface AllProps extends EndUserProps{
    byob?: boolean,
}

export type AP = AllProps;

export type PAP = Partial<AP>;

export type ProPAP = Promise<PAP>;

export type BAP = AP & BEAllProps;

export interface Actions{
    
    // addDeleteBtn(self: BAP): ProPOA ;
    // setBtnContent(self: this): void;
    // beDeleted(self: this): void;
}
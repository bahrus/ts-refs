import {BEAllProps, IEnhancement} from '../trans-render/be/types';

export interface EndUserProps extends IEnhancement<HTMLLabelElement> {
    triggerInsertPosition?: InsertPosition;
    labelTextContainer?: string;
    buttonContent?: string;
    beReformable?: boolean;
    nudge?: boolean;
}

export interface AllProps extends EndUserProps{
    byob?: boolean;
}

export type AP = AllProps;

export type PAP = Partial<AP>;

export type BAP = AP & BEAllProps

export type ProPAP = Promise<PAP>;



export interface Actions{
    // addTypingBtn(self: this): ProPOA;
    // setBtnContent(self: this): void;
    // beTyped(self: this): void;
    // finale(): void;
}

export interface ITyper{
    showDialog(): void;
    dispose(): void;
}
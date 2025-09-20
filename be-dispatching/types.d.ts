import {IEnhancement, BEAllProps, EMC} from '../trans-render/be/types';

export interface EndUserProps extends IEnhancement{

}

export interface AllProps extends EndUserProps{
    dispatchRules: Array<DispatchRule>
}

export type DispatchStatement = string;

export interface DispatchRule{
    dispatchOn?: string,
    dispatchOnPropChange?: string,
    qualifiers?: string,
    dispatch: string,
    bubbles?: boolean,
    cancelable?: boolean,
    composed?: boolean,
    replace?: boolean,
}

export type AP = AllProps;

export type PAP = Partial<AP>;

export type ProPAP = Promise<PAP>;

export type BAP = AP & BEAllProps;

export interface Actions{
    //onCamelized(self: this): ProPAP;
    hydrate(self: BAP): ProPAP;
}
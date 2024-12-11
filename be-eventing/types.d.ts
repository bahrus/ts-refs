import {IEnhancement, BEAllProps} from '../trans-render/be/types';

export interface EventHandlingScriptElement extends HTMLScriptElement{
    on: {[key: string]: (e: Event) => void}
    
}

export interface EndUserProps extends IEnhancement<EventHandlingScriptElement>{
    nudges?: string,
}

export interface AllProps extends EndUserProps{}

export type AP = AllProps;

export type PAP = Partial<AP>;

export type ProPAP = Promise<PAP>;

export type BAP = AP & BEAllProps;

export interface Actions{
    getOn(self: BAP): ProPAP,
}
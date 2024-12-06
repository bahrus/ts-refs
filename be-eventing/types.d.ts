import {IEnhancement, BEAllProps} from '../trans-render/be/types';

export interface EventHandlingScriptElement extends HTMLScriptElement{
    on: any
}

export interface EndUserProps extends IEnhancement<EventHandlingScriptElement>{

}

export interface AllProps extends EndUserProps{}

export type AP = AllProps;

export type PAP = Partial<AP>;

export type ProPAP = Promise<PAP>;

export type BAP = AP & BEAllProps;

export interface Actions{
    
}
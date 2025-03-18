import {IEnhancement, BEAllProps} from '../trans-render/be/types';
import { XForm } from "../trans-render/types";

export interface EndUserProps<TProps, TMethods, TElement = {}> extends IEnhancement<HTMLTemplateElement>{
    of: string,
    xform: XForm<TProps, TMethods, TElement>,
    initModel?: TProps & TMethods,
    slotMap?: any,
}

export interface AllProps<TProps, TMethods, TElement = {}> extends EndUserProps<TProps, TMethods, TElement>{
    isParsed?: boolean,
    model?: TProps & TMethods,
}

export type AP = AllProps<any, any, any>;

export type PAP = Partial<AP>;

export type ProPAP = Promise<PAP>;

export type BAP = AP & BEAllProps;


export interface Actions{
    onInitModel(self: BAP): ProPAP;
    startWeaving(self: BAP): ProPAP;
}

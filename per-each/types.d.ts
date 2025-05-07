import {IEnhancement, BEAllProps} from '../trans-render/be/types';
import { HasIshList } from '../trans-render/dss/types';

export interface EndUserProps extends IEnhancement{
    each: string;
    mapIdxTo: string;
    idxStart: number;
    idleTimeout: number;
    options: Partial<EndUserProps>;
}

export interface AllProps extends EndUserProps{
    listProp: string;
    itemProp: string;
    ish: EventTarget & HasIshList;
    itemTemplate: HTMLTemplateElement;
    emc: any;
    //updateCnt: number;
}

export type AP = AllProps;

export type PAP = Partial<AP>;

export type ProPAP = Promise<PAP>;

export type BAP = AP & BEAllProps;

export interface Actions{
    parse(self: BAP): PAP;
    init(self: BAP): ProPAP;
    hydrate(self: BAP)
}


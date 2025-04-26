import {IEnhancement, BEAllProps} from '../trans-render/be/types';
import { HasIshList } from '../trans-render/dss/types';

export interface EndUserProps extends IEnhancement{
    statement: string;
}

export interface AllProps extends EndUserProps{
    listProp: string;
    itemProp: string;
    ish: EventTarget & HasIshList;
    //updateCnt: number;
}

export type AP = AllProps;

export type PAP = Partial<AP>;

export type ProPAP = Promise<PAP>;

export type BAP = AP & BEAllProps;

export interface Actions{
    parse(self: BAP): PAP;
    hydrate(self: BAP): ProPAP;
}


import {IEnhancement, BEAllProps, EMC} from '../trans-render/be/types';

export interface EndUserProps extends IEnhancement{
    fetchReadyEventName: string
    fetchReadyCss: string
    target: string
}

export interface AllProps extends EndUserProps{
    evtCount: number,
}

export type AP = AllProps;

export type PAP = Partial<AP>;

export type ProPAP = Promise<PAP>;

export type BAP = AP & BEAllProps;

export interface Actions{
    hydrate(self: BAP): PAP;
}
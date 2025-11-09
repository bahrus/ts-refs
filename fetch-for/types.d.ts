import {IEnhancement, BEAllProps, EMC} from '../trans-render/be/types';

interface FetchReadyEvent extends Event {
    url: string
    options: RequestInit
}

export interface EndUserProps extends IEnhancement{
    target: string
}

export interface AllProps extends EndUserProps{
    //evtCount: number,
    fetchReadyEvent: FetchReadyEvent

}

export type AP = AllProps;

export type PAP = Partial<AP>;

export type ProPAP = Promise<PAP>;

export type BAP = AP & BEAllProps;

export interface Actions{
    hydrate(self: BAP): PAP;
    doFetch(self: BAP): void;
}
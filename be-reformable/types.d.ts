import {BEAllProps, IEnhancement} from '../trans-render/be/types';

export interface EndUserProps extends IEnhancement<HTMLFormElement>{
    baseLink?: string,
    path?: string,
    target?: '-object'
    updateOn: string,
}

export interface AllProps extends EndUserProps{
    updateCnt: number,
}

export type AP = AllProps;

export type PAP = Partial<AP>;

export type ProPAP = Promise<PAP>;

export type BAP = AP & BEAllProps;

export interface Actions {
    hydrate(self: BAP): ProPAP;
}
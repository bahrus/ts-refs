import {IEnhancement, BEAllProps} from '../trans-render/be/types';

export interface EndUserProps extends IEnhancement{
    names: string;
}

export interface AllProps extends EndUserProps{
    parsedNames: string[];
}

export type AP = AllProps;

export type PAP = Partial<AP>;

export type ProPAP = Promise<PAP>;

export type BAP = AP & BEAllProps;

export interface Actions{
    parse(self: BAP): PAP;
    hydrate(self: BAP): ProPAP;
    retire(self: BAP): void;
}
import {IEnhancement, BEAllProps, EMC} from '../trans-render/be/types';

export interface EndUserProps extends IEnhancement{
    onEmptyContents: boolean
    onDefined: Array<string>
    whenStr: string
}

export interface AllProps extends EndUserProps{
}

export type AP = AllProps;

export type PAP = Partial<AP>;

export type ProPAP = Promise<PAP>;

export type BAP = AP & BEAllProps;

export interface Actions{
    onOnDefined(self: BAP): ProPAP
    onOnEmptyContents(self: BAP): ProPAP
    parseWhen(self: BAP): PAP
}
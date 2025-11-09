import {IEnhancement, BEAllProps, EMC} from '../trans-render/be/types';

export interface EndUserProps extends IEnhancement{
}

export interface AllProps extends EndUserProps{
    emc: EMC<any, AllProps>,
}

export type AP = AllProps;

export type PAP = Partial<AP>;

export type ProPAP = Promise<PAP>;

export type BAP = AP & BEAllProps;

export interface Actions{
}
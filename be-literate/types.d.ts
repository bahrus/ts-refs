import {IEnhancement, BEAllProps} from '../trans-render/be/types';

export interface EndUserProps extends IEnhancement<HTMLInputElement>{
    readVerb: 'readAsText' | 'readAsDataURL' | 'readAsArrayBuffer' | 'readAsBinaryString';
}

export interface AllProps extends EndUserProps{
    fileContents: any[];
}


export type AP = AllProps;

export type PAP = Partial<AP>;

export type ProPAP = Promise<PAP>;


export interface Actions {
    hydrate(self: AP & BEAllProps): ProPAP
}
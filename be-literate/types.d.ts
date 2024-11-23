import {IEnhancement, BEAllProps} from '../trans-render/be/types';
import {USL} from '../trans-render/XV/types'

export interface EndUserProps extends IEnhancement<HTMLInputElement>{
    readVerb: 'readAsText' | 'readAsDataURL' | 'readAsArrayBuffer' | 'readAsBinaryString';
    writeTo: USL;
}

export interface AllProps extends EndUserProps{
    fileContents: Array<any>;
    writtenTo: Array<USL>;
}


export type AP = AllProps;

export type PAP = Partial<AP>;

export type ProPAP = Promise<PAP>;

export type BAP = AP & BEAllProps;


export interface Actions {
    hydrate(self: BAP): ProPAP,
    storeFileContents(self: BAP): ProPAP,
}
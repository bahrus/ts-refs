import {BEAllProps, IEnhancement} from '../trans-render/be/types';

export interface EndUserProps extends IEnhancement<HTMLElement>{
    //eval?: string,
    vm: any,
    //scriptRef?: string,
}

export interface AP extends EndUserProps{
    //attrExpr?: string | null,
    //scriptEl?: HTMLScriptElement,
    renderer: (vm: any) => any,
}

export type PAP = Partial<AP>;

export type BAP = AP & BEAllProps;

export type ProPAP = Promise<PAP>;

export interface Actions {
    // getAttrExpr(self: this): PAP;
    // onAttrExpr(self: this): PAP;
    // importSymbols(self: this): ProPAP;
    doRender(self: BAP): void;
    // onScriptRef(self: this): ProPAP;
}
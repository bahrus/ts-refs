import {BEAllProps, IEnhancement} from '../trans-render/be/types';

export interface RenderingHTMLScriptElement extends HTMLScriptElement{
    renderer: (vm: any, html: any) => any,
}

export interface EndUserProps extends IEnhancement<RenderingHTMLScriptElement>{
    vm: any,
    with: string,
}

export interface AP extends EndUserProps{
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
import {BEAllProps, IEnhancement} from '../trans-render/be/types';

export interface RenderingHTMLScriptElement extends HTMLScriptElement{
    renderer: (vm: any, html: any) => any,
}

export interface EndUserProps extends IEnhancement<RenderingHTMLScriptElement>{
    vm: any,
    with: string,
}

export interface AP extends EndUserProps{
    renderer: (vm: any, html: any) => any,
}

export type PAP = Partial<AP>;

export type BAP = AP & BEAllProps;

export type ProPAP = Promise<PAP>;

export interface Actions {
    getRenderer(self: BAP): BAP;
    doRender(self: BAP): void;
    
}
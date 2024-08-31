import {BEAllProps, IEnhancement} from '../trans-render/be/types';
import {Target, Scope, ProxyPropChangeInfo} from '../trans-render/lib/types';
import { Specifier } from '../trans-render/dss/types';

export interface EndUserProps extends IEnhancement<HTMLElement>{
    forAttr?: string,
    //onInput?: string,
    //onChange?: string,
    //onLoad?: string,
    //assignTo?: Array<Specifier>,
    nameOfCalculator?: string,
    
}

export interface AllProps extends EndUserProps{
    // calculator?: (vm: any) => any, //(et: EventTarget, ppci?: ProxyPropChangeInfo) => any,
    // value: any;
    // isParsed: boolean;
    // attrExpr?: string | null;
    scriptEl?: HTMLScriptElement;
    defaultEventType?: 'input' | 'change' | 'load',
    forArgs: string[],
    remoteSpecifiers: Array<Specifier>,
    isAttached?: boolean,
    isOutputEl?: boolean,
    enhElLocalName: string,
    categorized?: boolean,
    remSpecifierLen?: number,
}

export type AP = AllProps;

export type PAP = Partial<AP>;

export type ProPAP = Promise<PAP>

// export interface Actions{
//     parseForAttr(self: this): PAP;
//     regOnInput(self: this): PAP;
//     regOnChange(self: this): PAP;
//     regOnLoad(self: this): PAP;
//     genRemoteSpecifiers(self: this): PAP;
//     hydrate(self: this): ProPAP;
//     findScriptEl(self: this): PAP;
//     //getArgs(self: this): PAP;
//     //observe(self: this): ProPAP;
//     importSymbols(self: this): ProPAP;
//     //onValue(self: this): void;
// }

export type BAP = AP & BEAllProps;

export interface Actions{
    categorizeEl(self: BAP): PAP;
    parseForAttr(self: BAP): PAP;
    getDefltEvtType(self: BAP): PAP;
    genRemoteSpecifiers(self: BAP): PAP;
    hydrate(self: BAP): ProPAP;
}
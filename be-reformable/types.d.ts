import {BEAllProps, IEnhancement} from '../trans-render/be/types';
import {Specifier} from '../trans-render/dss/types';

export interface EndUserProps extends IEnhancement<HTMLFormElement>{
    baseLink?: string,
    path: string,
    headers?: {},
    updateOn: 'input' | 'change' | 'submit',
    submitOptions:{
        onlyAfter: Specifier,
        nudges: boolean,
        disableIfNotAllConditionsAreMet: boolean
    }
}

type BeforeToken = string;
type TokenKey = string | undefined

export interface IURLBuilder{
    readonly tokens: Array<[BeforeToken, TokenKey]>
}

export interface AllProps extends EndUserProps{
    updateCnt: number,
    readonly urlBuilder: IURLBuilder,
    readonly url: string,
}

export type AP = AllProps;

export type PAP = Partial<AP>;

export type ProPAP = Promise<PAP>;

export type BAP = AP & BEAllProps;

export interface Actions {
    hydrate(self: BAP): ProPAP;
    updateAction(self: BAP): ProPAP;
    parsePath(self: BAP): ProPAP;
}
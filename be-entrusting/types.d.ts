import {EndUserProps as ObservingEndUserProps} from '../be-observing/types'
export interface EndUserProps extends ObservingEndUserProps{
    
}

export interface AllProps extends EndUserProps{
    isParsed?: boolean,
    entrustingRules?: Array<EntrustingRule>
}

export type OfStatement = string;

export type AP = AllProps;

export type PAP = Partial<AP>;

export type ProPAP = Promise<PAP>;

export interface Actions{
    noAttrs(self: this): ProPAP;
    onCamelized(self: this): ProPAP;
    hydrate(self: this): ProPAP;
}

export interface EntrustingRule extends ObserveRule{
    
}


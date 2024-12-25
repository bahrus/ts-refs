import {IEnhancement, BEAllProps} from '../trans-render/be/types';


export interface EndUserProps extends IEnhancement{
    /**
     * abbrev for pass server-rendered value
     * This will pass the initial value from the enhanced element if applicable
     */
    passSRV?: boolean
}

export interface AP extends EndUserProps {
    parsedStatements?: Array<ElevatingParameters>,
    rawStatements?: Array<string>,
}

export type AllProps = AP;

export type BAP = AP & BEAllProps;

export type PAP = Partial<AP>

export type ProPAP  = Promise<PAP>

export interface Actions{
    noAttrs(self: this): ProPAP;
    hydrate(self: this): ProPAP;
    onRawStatements(self: this): void;
}

export interface ElevatingParameters {
    localPropToElevate?: string,
    remoteSpecifiers: Array<Specifier>,
    localEventType?: string,
}


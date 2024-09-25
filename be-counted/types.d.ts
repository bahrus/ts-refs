import {BEAllProps, IEnhancement} from '../trans-render/be/types';
import {MatchRHS, Scope} from 'trans-render/lib/types';
import {XForm, ITransformer} from '../trans-render/types';

export interface EndUserPropsBasic{
    /**
     * How much to increment on each event
     */
    step?: number;
    /**
     * Don't allow count to exceed this number
     */
    ltOrEq?: number;
    /** Don't allow count to reach this number. */
    lt?: number;
    /**
     * Starting value of count, including after looping
     */
    min?: number;
    /**
     * Make count loop back to min value after hitting the ceiling set by ltOrEq or lt
     */
    loop?: boolean;
    /**
     * DTR transform to perform after count increments
     * See https://github.com/bahrus/trans-render for syntax
     */
    xform?: XForm<EndUserPropsBasic, Actions, {}>;
    /**
     * Specify how wide the surrounding DOM should be subject to the transformation.
     * Values specified here: https://github.com/bahrus/trans-render/blob/baseline/lib/types.d.ts#L388
     */
    transformScope?: Scope;
    /**
     * Slowly "awaken" a disabled element.  If the disabled attribute is not set to a number, or is set to "1", removes the disabled attribute.  If it is a larger number, decrements the number by 1. 
     */
    nudge?: boolean;
    /**
     * Event name to trigger count increment
     */
    incOn?: string;
    /**
     * Property to subscribe to trigger count increment
     */
    incOnSet?: string;
    
}
export interface EndUserProps extends EndUserPropsBasic, IBE {

}

export interface AllProps extends EndUserProps{
    value: number;
    checked: boolean;
    isMaxedOut?: boolean;
    isParsed?: boolean;
    transformer?: ITransformer<EndUserPropsBasic, Actions, {}>
}


export type AP = AllProps;

export type PAP = Partial<AP>;

export type ProPAP = Promise<PAP>

export type POA = [PAP | undefined, ActionOnEventConfigs<PAP, Actions>];

export type ProPOA = Promise<POA>

 export interface Actions{
    hydrate(self: this, mold: PAP): ProPOA;
    inc(self: this): PAP;
    disableInc(self: this): POA;
    check(self: this, allGood: PAP): PAP;
    hydrateTransform(self: this): ProPAP;
}


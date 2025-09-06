import { Scope } from '../lib/types'
import { CSSQuery } from '../types';

export type DSS = string;

// export type DirectionalScopeSigils = 
//     /**
//      * upward direction, non recursive
//      */
//     |'^'  
//     /**
//      * downward direction, next element siblings only
//      */
//     |'Y' 
//     /**
//      * IdRef query
//      * 
//      */ 
//     |'?'
//     /**
//      * self
//      */
//     |'.'
//     /**
//      * modulo
//      */
//     |'%'
//     /**
//      * itemscoped host
//      */
//     |'$'
//     /**
//      * comment scope
//      */
//     |'/**/'
//     ;

// export type AttrSigils =
//     /**
//      * Reference to self / local element
//      */
//     '$0' |
//     /**
//      * Reference by ID
//      */
//     '#' | '@' |  '-' | '|' | '%';

// export type ElementSigils = '/' | '~';

// export type ScopeSigils = '';

// export type Sigils = AttrSigils | ElementSigils | ScopeSigils;

export type asOptions = 
    | 'number'
    | 'boolean'
    | 'string' 
    | 'object'
    | 'regexp' 
    | 'urlpattern'
    | 'boolean|number'
;

// export interface $copeDetail{
//     ceName?: string,
//     itemProp?: string,
// }

// export interface $ScopeHierarchy {
//     home: Element;
//     satellites?: Array<Element>;
// }

export interface Specifier {
    id?: string,
    prop?: string,
    path?: SubPropPath,
    evtName?: string,
    as?: asOptions,
    constVal?: any;
    enhKey?: string;
    ish?: boolean;
    //element to observe must be a shadowed custom element host.
    host?: boolean;
}

//export type Modulo = 'aria-rowindex' | 'aria-colindex' | 'aria-rowindextext'

export type InferredPropName = string;

/**
 * can contain dot (.) for sub property access and pipes (|) for method invocations
 */
export type SubPropPath = string;

export type EventName = string;

export type CSSSelector = string;

/**
 * starts with a dash, typically all kebab case 
 * inferred prop name will be camel cased based on this.
 */
export type MarkerString = string;

/**
 * PIP stands for Partner in Prop (for now) -- supports bi-directional data flow to property
 * IP stands for In Prop (for now) -- Data only Flow only goes in
 * OP s
 */

export interface GetPIPOptions{
    //name of event to listen for for when the prop being monitored for changes
    evtName?: string,
    isRoundAboutReady?: boolean;
    prop?: string,
    sota?: string,
}

/**
 * Partner In Prop
 */
export interface PIP<TProp = any, TElement = Element> extends EventListenerObject{
    readonly propagator: EventTarget;
    async getValue(el: TElement): Promise<TProp | undefined>;
    async setValue(el: TElement, val: TProp);
    async hydrate(el: TElement);
    syncVal(el: TElement);
    disconnect();
    toString(nv: TProp): string;
    readonly outEvtName: string;
}



export interface HasIshList {
    ishList: Array<any>;
}
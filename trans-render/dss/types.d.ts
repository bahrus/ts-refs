import { Scope } from '../lib/types'
import { CSSQuery } from '../types';

export type DSS = string;

export type DirectionalScopeSigils = 
    /**
     * upward direction, non recursive
     */
    |'^'  
    /**
     * downward direction, next element siblings only
     */
    |'Y' 
    /**
     * IdRef query
     * 
     */ 
    |'?'
    /**
     * self
     */
    |'.'
    /**
     * modulo
     */
    |'%'
    ;

export type AttrSigils =
    /**
     * Reference to self / local element
     */
    '$0' |
    /**
     * Reference by ID
     */
    '#' | '@' |  '-' | '|' | '%';

export type ElementSigils = '/' | '~';

export type Sigils = AttrSigils | ElementSigils;

export type asOptions = 
    | 'number'
    | 'boolean'
    | 'string' 
    | 'object'
    | 'regexp' 
    | 'urlpattern'
    | 'boolean|number'
;

export interface Specifier {
    /** Directional Scope Sigil */
    dss?: DirectionalScopeSigils,
    /**
     * recursive
     */
    rec?: boolean,
    /**
     * root node fallback
     */
    rnf?: boolean,
    /**
     * include siblings in scope search
     */
    isiss?: boolean,
    scopeS?: CSSSelector,
    elS?: CSSSelector,
    el?: string,
    idRefS?: string,
    s?: Sigils,

    /**
     * Inferred prop name
     * This should be the last token word of the DSS expression
     */
    prop?: InferredPropName,
    path?: SubPropPath;
    /**
     * Event Name
     */
    evt?: EventName;

    /**
     * RoundAbout Prop events to listen for
     */
    raps?: Array<string>;

    ms?: MarkerString;
    self?: boolean;
    /**
     * must have a dash in the localName
     * wait for whenDefined in find
     */
    host?: boolean;
    /**
     * host prop
     */
    hp?: string;
    /**
     * host prop fallback
     */
    hpf?: string;
    
    as?: asOptions
        
    
    isModulo?: boolean;
    modulo?: Modulo;
}

export type Modulo = 'aria-rowindex' | 'aria-colindex' | 'aria-rowindextext'

export type InferredPropName = string;

/**
 * can contain dot (.) for sub property access and pipes (|) for method invocations
 */
export type SubPropPath = string;

export type EventName = string;

export type CSSSelector = string;

/**
 * starts with a dash, typically all kebab case 
 * inferrered prop name will be camel cased based on this.
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

export interface HasIshList extends HTMLElement{
    ishList: Array<any>;
}
import { Scope } from '../lib/types'
import { CSSQuery } from '../types';

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
     * include sibings in scope search
     */
    isiss?: boolean,
    scopeS?: CSSSelector,
    elS?: CSSSelector,
    el?: string,
    idRefS?: string,
    s?: Sigils,

    /**
     * Inferred prop name
     */
    prop?: InferredPropName,
    path?: SubPropPath;
    evt?: EventName;
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
    
    as?: 
        | 'Number' 
        | 'number'
        | 'Boolean'
        | 'boolean'
        | 'String'
        | 'string' 
        | 'Object'
        | 'object'
        | 'RegExp'
        | 'regexp' 
        | 'URLPattern'
        | 'urlpattern'
    ;
    
    isModulo?: boolean;
    modulo: 'aria-rowindex' | 'aria-colindex' | 'aria-rowindextext';
}

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
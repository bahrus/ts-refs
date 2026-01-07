import { XForm } from "../trans-render/types";
import { PropInfo, Actions as FRActions } from '../trans-render/froop/types';
import {Scope} from '../trans-render/lib/types';
import { Compacts, WCConfig } from "../trans-render/froop/types";

export interface PropInferenceCriteria{
    cssSelector: string,
    attrForProp: string,

}

export interface EndUserProps<TProps = any, TActions = TProps> extends WCConfig<TProps, TActions>{
    aka?: string,
    inferProps?: boolean,
    xform?: XForm<TProps, TActions>,
    lcXform?: XForm<TProps, TActions>,
    shadowRootMode?:  ShadowRootMode,
    props: Partial<{[key in keyof TProps]: PropInfo | boolean | string | number}>,
    compacts?: Compacts<TProps, TActions>,
    targetScope?: Scope,
    assumeCSR?: boolean,
    propInferenceCriteria?: Array<PropInferenceCriteria>,
    inherits?: string | {new(): HTMLElement} | (() => Promise<{new(): HTMLElement}>),
    actions?: FRActions<TProps, TActions>,
    /**
     * form associated
     */
    fa?: boolean,
    mainTemplate?: string | HTMLTemplateElement
}

export interface AP<TProps = any, TActions = TProps> extends EndUserProps<TProps, TActions>{
    mainTemplate?: HTMLTemplateElement,
    styles?: string,
}
export type ProAP = Promise<AP>

export interface Actions {
    getTemplate(self: this): ProAP,
    define(self: this): ProAP,
}


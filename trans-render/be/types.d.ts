import { AttrChangeInfo, MountInit, RootCnfg,  ObservedSourceOfTruthAttribute, MOSE} from '../../mount-observer/types';
import { RegExpExt } from '../lib/prs/types';
import {IObject$tring, CSSQuery, StringWithAutocompleteOptions} from '../types';
export type stringArray = string | Array<string>;

export type stringArrayOrTree = Array<string> | [string, Array<string>];
// export interface AttrParts {
//     root: string,
//     base: string,
//     branch: string,
//     leaf: string,
// } 


type prefixDelimiter = '-' | ':' | '--';

/**
 * Abbrev. for EnhancementMountConfig
 */
export type EMC<TBranches = any, TProps = any> = EnhancementMountConfig<TBranches, TProps>

export interface AttrCacheConfig {
    enable: 'always' | 'instantiating',
    clone?: boolean
}

export type SafeProps = StringWithAutocompleteOptions<
    'textContent',
    'value',
    'object',
    'checked',
    '^aria'
>;

export type EventListenerOrFn = EventListener | ((e: Event) => void);

export type HandlerKey = string;

export type HandlerName = string;

type CustomHandlers = Map<HandlerName, EventListenerOrFn>;
type ScopedCustomHandlers = Map<HandlerName, Array<[CSSQuery, EventListenerOrFn]>>;
type CustomHandlerCluster = Map<HandlerKey, CustomHandlers>;
type ScopedCustomHandlerCluster = Map<HandlerKey, ScopedCustomHandlers>;

export interface EnhancementMountConfig<TBranches = any, TProps = any>{
    id?: string;
    enhancedElementInstanceOf?: Array<{new(): Element}>,
    enhancedElementMatches?: string,
    enhPropKey: HandlerKey,
    /**
     * If not specified, will be defaulted to the enhPropKey
     * This allows for registered event handlers that are tied to a particular 
     * enhancement to be scoped within a Shadow DOM realm
     */
    handlerKey?: string,
    hasRootIn?: Array<RootCnfg>,
    preBaseDelimiter?: prefixDelimiter,
    base?: string,
    preBranchDelimiter?: prefixDelimiter,
    branches?: Array<string>,
    //TODO
    watchedBranches?: Array<string>,
    //TODO
    preLeafDelimiter?: prefixDelimiter,
    //TODO
    leaves?: Partial<{[key in keyof TBranches & string]: stringArray}>,
    //TODO
    hostMatches?: CSSQuery,
    //TODO
    hostInstanceOf?: Array<{new(): HTMLElement}>,
    block?: boolean,
    //TODO
    unblock?: boolean,

    importEnh?: () => Promise<{new(): IEnhancement}> 

    map?: {[key: AttrCoordinates]: AttrMapPoint<TProps>},
    /**
     * Observed Source of Truth Attributes [TODO, need better name]
     */
    osotas? : Array<ObservedSourceOfTruthAttribute<TProps>>,

    cacheConfig?: AttrCacheConfig,

    mapLocalNameTo?: keyof TProps,

    allowedMutations?: {[key: CSSQuery]: []}

    top: EnhancementMountConfig<TBranches, TProps>
    
}

export type AttrMapPoint<TProps = any> = keyof TProps & string | AttrMapConfig<TProps>


export interface AttrMapConfig<TProps = any, TMethods = TProps> {
    instanceOf?: 'Object' | 'String' | 'Object$tring' | 'Object$entences' | 'DSSArray' | 'Boolean' | 'Number',
    mapsTo?: '.' | keyof TProps,
    valIfFalsy?: any,
    strValMapsTo?: keyof TProps,
    objValMapsTo?: '.' | keyof TProps,
    arrValMapsTo?: keyof TProps,
    strArrMapsTo?: keyof TProps,
    regExpExts?: Partial<{[key in keyof TProps]: RegExpExt<any>[]}>;
    parsedRegExps?: boolean;
}


export type Branchitude = number;
export type Leafitude = number;
export type AttrCoordinates = `${Branchitude}.${Leafitude}`;



export type MountBeHive<TBranches = any> = Partial<EMC<TBranches>>;

export interface EnhancementInfo {
    initialPropValues?: any,
    initialAttrInfo?: Array<AttrChangeInfo>,
    mountCnfg: EMC,
    synConfig: EMC
}

export interface BEAllProps<TElement = Element> {
    resolved: boolean;
    rejected: boolean;
    enhancedElement: TElement;
}

export interface IEnhancement<TElement = Element> extends BEAllProps<TElement>{
    attach(el: TElement, enhancement: EnhancementInfo): Promise<void>;
    detach(el: TElement): Promise<void>;
    resolved: boolean;
    rejected: boolean;
    readonly enhancedElement: TElement;
    whenResolved(): Promise<boolean>;
    de(src: EventTarget, name: string) : Event,
    attrChgCB(attrChangeInfos: Array<AttrChangeInfo>) : void,
    channelEvent(e: Event): void;
    //parsedFrom: string;
    //autoImport?: boolean | string;
}
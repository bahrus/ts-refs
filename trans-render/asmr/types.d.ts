import {StringWithAutocompleteOptions, ZeroOrMore} from '../types';

export type ValueProp = StringWithAutocompleteOptions<
    | 'value' 
    | 'checked' 
    | 'href'
    | 'ariaValueNow'
    | 'ariaChecked'
>

export type DisplayProp = StringWithAutocompleteOptions<
    | 'textContent'
    | 'ariaValueText'
>;

export type ValueType = StringWithAutocompleteOptions<
    | 'Boolean'
    | 'String'
    | 'Number'
    | 'NumericRange'
>;

export type TrueText = StringWithAutocompleteOptions<
    | 'Yes'
    | 'On'
>;

export type FalseText = StringWithAutocompleteOptions<
    | 'No'
    | 'Off'
>;

export type TrueStringValue = StringWithAutocompleteOptions<
    | 'https://schema.org/True'
    
>;

export type FalseStringValue = StringWithAutocompleteOptions<
    | 'https://schema.org/False'
>;

export interface ASMROptions<TProp = any>{
    valueProp?: ValueProp;
    valueType?: ValueType
    displayProp?: DisplayProp;
    trueText?: TrueText;
    falseText?: FalseText;
    trueValue?: TrueStringValue;
    falseValue?: FalseStringValue;

}

export interface SetOptions<TProp = any> extends ASMROptions<TProp>{
    valToDisplay?: (v: TProp) => string;
}

export interface AbsOptions<TProp = any> extends ASMROptions<TProp> {
    /**
     * source of truth attribute
     */
    sota?: string;
}

// export interface Setter<TProp = any> {
//     setValue(nv: TProp);
// }

export interface SharingObject<TProp = any>{
    setValue(el: Element, val: TProp);
    pureValue: TProp;
}

export interface AbsorbingObject<TProp = any> extends EventTarget{
    getValue(el: Element): Promise<TProp>;

}
import {StringWithAutocompleteOptions, ZeroOrMore} from '../types';

export type ValueProp = StringWithAutocompleteOptions<
    | 'value' 
    | 'checked' 
    | 'href'
    | 'ariaValueNow'
    | 'ariaChecked'
    | 'valueAsNumber'
    | 'valueAsDate'
    | 'textContent'
    | 'innerHTML'
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

export type StdEventNames = StringWithAutocompleteOptions<
    | 'input'
    | 'change'
    | 'click'
    | 'slotchange'
>;

export type BuiltInEditables = StringWithAutocompleteOptions<
    | 'input'
    | 'select'
    | 'textarea'
    
>;

export interface ASMROptions<TProp = any>{
    valueProp?: ValueProp;
    valueType?: ValueType;
    displayProp?: DisplayProp;
    trueText?: TrueText;
    falseText?: FalseText;
    trueValue?: TrueStringValue;
    falseValue?: FalseStringValue;

}

export interface SetOptions<TProp = any> extends ASMROptions<TProp>{
    valToDisplay?: (v: TProp) => string;
}

export interface AbsOptions<TProp = any> {
    /**
     * source of truth attribute
     */
    sota?: string;

    /**
     * Is Roundabout ready
     */
    isRAR?: boolean;

    /**
     * Is Roundabout Emulating
     */
    isRAE?: boolean;

    /**
     * Is User Editable
     */
    isUE?: boolean;

    /**
     * User Edit Event Name
     */
    UEEN?: StdEventNames;

    propToAbsorb?: ValueProp;

    propToAbsorbValueType?: ValueType;
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
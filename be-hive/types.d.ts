import {StringWithAutocompleteOptions} from '../trans-render/types';
export type aggKeys = StringWithAutocompleteOptions<
    | '+'
    | '*'
    | 'max'
    | 'min'
    | 'nearlyEq'
    | 'eq'
    | '||'
    | '&&'
    | '{}'
>;
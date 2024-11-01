export type storage = 'sessionStorage' | 'localStorage';

export type protocols = 
    | storage
    |'indexedDB' 
    |'globalThis'
;

export type db = string;
export type storeName = string;
export type key = string;
export type chainedAccessor = string;

export type idbUSP = `indexedDB://${db}/${storeName}/${key}`;
export type idbUSL = `${idbUSP}?.${chainedAccessor}`;

export type storageUSP = `${storage}://${key}`;
export type storageUSL = `${storageUSP}?.${chainedAccessor}`;

export type USP = 
    | idbUSP
    | storageUSP
;

export type USL = 
    | idbUSP
    | idbUSL
    | storageUSP
    | storageUSL
;
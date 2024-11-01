export type protocols = 
    |'sessionStorage' 
    |'localStorage' 
    |'idb' 
    |'globalThis'
;

export type db = string;
export type storeName = string;
export type key = string;
export type chainedAccessor = string;

export type idbUSP = `indexedDB://${db}/${storeName}/${key}`;
export type idbUSL = `${idbUSP}?.${chainedAccessor}`;


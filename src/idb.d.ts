declare module 'idb' {
    export function openDB(name: string, version: number, options?: any): Promise<any>;
    export interface IDBPDatabase {
      createObjectStore(name: string, options?: any): void;
      transaction(storeName: string, mode?: string): any;
      objectStoreNames: DOMStringList;
    }
  }
import { Injectable } from '@angular/core';
import { IDBPDatabase, openDB } from 'idb';

@Injectable({
  providedIn: 'root'
})
export class LocalDatabaseService {
  private dbName = 'appDB';
  private storeName = 'dataStore';

  constructor() {
    this.initDB();
  }

  async initDB() {
    const db = await openDB(this.dbName, 1, {
      upgrade(db: IDBPDatabase) {
        if (!db.objectStoreNames.contains(this.storeName)) {
          db.createObjectStore(this.storeName);
        }
      }
    });
  }

  async saveData(key: string, value: any) {
    const db = await openDB(this.dbName, 1);
    const tx = db.transaction(this.storeName, 'readwrite');
    tx.store.put(value, key);
    await tx.done;
  }

  async getData(key: string) {
    const db = await openDB(this.dbName, 1);
    return await db.transaction(this.storeName).store.get(key);
  }
}
import { Injectable } from '@angular/core';
import {
  CapacitorSQLite,
  SQLiteConnection,
  SQLiteDBConnection,
} from '@capacitor-community/sqlite';

export const DB_USERS = 'myuserdb'; // Database Name

@Injectable({
  providedIn: 'root',
})
export class DatabaseService {
  private sqlite = new SQLiteConnection(CapacitorSQLite);
  private db!: SQLiteDBConnection;
  constructor() {}

  async initializePlugin() {
    this.db = await this.sqlite.createConnection(
      DB_USERS,
      false,
      'no_encryption',
      1,
      false
    );

    await this.db.open();

    const schema = ``; // Statement string;

    await this.db.execute(schema);

    await this.db.close()
  }

}

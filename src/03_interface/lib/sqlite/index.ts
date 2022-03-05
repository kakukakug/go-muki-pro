import * as SQLite from "expo-sqlite";

class ISQLiteDB {
  public DataBase;

  constructor() {
    console.log("constructor");
    this.DataBase = SQLite.openDatabase("template.sqlite");
    this.DataBase.transaction((tx) => {
      /*
      tx.executeSql(
        `DROP table  task ;`,
        null,
        console.log('drop success'),
        (tran,error)=>console.log(error)
      );
      */
      tx.executeSql(
        `create table if not exists list( 
          listID integer primary key ASC AUTOINCREMENT not null
          ,groupID INTEGER
          ,name text 
          ,createDate text
          ,updateDate text
          ,deleteFlg INTEGER
          ,favoriteFlg INTEGER
        );`,
        null,
        null, // console.log('create success')
        (_tran, error) => {
          console.log(error);
        }
      );
      tx.executeSql(
        `create table if not exists item( 
          itemID integer primary key ASC AUTOINCREMENT not null
          ,listID INTEGER
          ,name TEXT
          ,memo TEXT
          ,createDate text
          ,updateDate text
          ,deleteFlg INTEGER
        );`,
        null,
        null, // console.log('create success')
        (_tran, error) => {
          console.log(error);
        }
      );
    });
  }
}

export const SQLiteDB = new ISQLiteDB();

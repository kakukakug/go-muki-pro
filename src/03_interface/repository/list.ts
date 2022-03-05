import { SQLTransaction } from "expo-sqlite";
import { SQLiteDB } from "../lib/sqlite";

import { IListRepository } from "../../02_usecase/repository/list";

export class ListRepository implements IListRepository {
  // eslint-disable-next-line class-methods-use-this
  public async getList(setFunc) {
    await SQLiteDB.DataBase.transaction(
      (tx: SQLTransaction) => {
        tx.executeSql(
          `select * 
         from list
         where 
           deleteFlg = 0
         ORDER BY updateDate DESC 
        ;`,
          null,
          (_, { rows: { _array } }) => {
            setFunc(_array);
          }
        );
      },
      (error) => {
        console.log(error);
      },
      null // console.log('success')
    );
  }

  // eslint-disable-next-line class-methods-use-this
  public async getListByID(listID: number, setFunc) {
    await SQLiteDB.DataBase.transaction(
      (tx) => {
        tx.executeSql(
          `SELECT * 
         FROM list
         WHERE 
           listID = ?
           AND deleteFlg = 0
        ;`,
          [listID],
          (_, { rows: { _array } }) => {
            setFunc(_array[0]);
          }
        );
      },
      (error) => {
        console.log(error);
      },
      null // console.log('success')
    );
  }

  // eslint-disable-next-line class-methods-use-this
  public async setList(name: string) {
    await SQLiteDB.DataBase.transaction(
      (tx: SQLTransaction) => {
        tx.executeSql(
          `INSERT INTO list
          (
            name
            ,groupID
            ,createDate
            ,updateDate
            ,deleteFlg
            ,favoriteFlg
          ) 
          VALUES 
          (
            ?
            ,0
            ,strftime('%s','now')
            ,strftime('%s','now')
            ,0
            ,0
          );`,
          [name],
          null, // console.log('insert success')
          (_tran, error) => {
            console.log(error);
          }
        );
      },
      (error) => {
        console.log(error);
      },
      null // console.log('tran success')
    );
  }

  // eslint-disable-next-line class-methods-use-this
  public async updateList(listID: number, name: string) {
    await SQLiteDB.DataBase.transaction(
      (tx: SQLTransaction) => {
        tx.executeSql(
          `update list
            SET 
              updateDate = strftime('%s','now'),
              name = ? 
            WHERE listID = ?;`,
          [name, listID],
          null, // console.log('insert success')
          (_tran, error) => {
            console.log(error);
          }
        );
      },
      (error) => {
        console.log(error);
      },
      null // console.log('tran success')
    );
  }

  // eslint-disable-next-line class-methods-use-this
  public async touchList(listID: number) {
    await SQLiteDB.DataBase.transaction(
      (tx: SQLTransaction) => {
        tx.executeSql(
          `update list 
            SET 
              updateDate = strftime('%s','now')
            WHERE listID = ?;`,
          [listID],
          null, // console.log('insert success')
          (_tran, error) => {
            console.log(error);
          }
        );
      },
      (error) => {
        console.log(error);
      },
      null // console.log('tran success')
    );
  }

  // eslint-disable-next-line class-methods-use-this
  public async deleteList(listID: number) {
    await SQLiteDB.DataBase.transaction(
      (tx: SQLTransaction) => {
        tx.executeSql(
          `DELETE FROM  item 
            WHERE listID = ?;`,
          [listID],
          null, // console.log('insert success')
          (_tran, error) => {
            console.log(error);
          }
        );
        tx.executeSql(
          `DELETE FROM list
            WHERE listID = ?;`,
          [listID],
          null, // console.log('insert success')
          (_tran, error) => {
            console.log(error);
          }
        );
      },
      (error) => {
        console.log(error);
      },
      null // console.log('tran success')
    );
  }
}

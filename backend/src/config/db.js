import sqlite3 from 'sqlite3';
import { open } from 'sqlite';


process.loadEnvFile('./.env');

const dbFile = process.env.DB_FILE;



export async function dbConfiguration() {
  try {

    const db = await open({
      filename: dbFile,
      driver: sqlite3.Database
    });


    return db;

  } catch (error) {

    console.error('Error al abrir DB', error.message);

  }
  
}




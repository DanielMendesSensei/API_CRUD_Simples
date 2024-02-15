import sqlite3 from 'sqlite3'
import { open } from 'sqlite'

sqlite3.verbose();
export async function openDb () {
  return open({
    filename: './src/database/database.db',
    driver: sqlite3.Database
  })
}
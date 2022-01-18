// get the client
import mysql from "mysql2/promise";

export const connection = mysql.createConnection({
  host: process.env.MYSQL_HOST,
  port: Number(process.env.MYSQL_PORT),
  database: process.env.MYSQL_DATABASE,
  password: process.env.MYSQL_PASSWORD,
});

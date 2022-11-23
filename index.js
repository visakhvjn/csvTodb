import { generateNoSQL, generateSQL } from "./converter.js";
import { convertCSVtoArray } from "./util.js";

export const convertCSVToSQL = (tableName, csvFilePath) => {
	const list = convertCSVtoArray(csvFilePath);
	const sqlStatements = generateSQL(tableName, list);

	return sqlStatements;
};


export const convertCSVToNoSql = (tableName, csvFilePath) => {
	const list = convertCSVtoArray(csvFilePath);
	const nosqlStatements = generateNoSQL(tableName, list);

	return nosqlStatements;
}
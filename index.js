import { generateSQL } from "./converter.js";
import { convertCSVtoArray } from "./util.js";

export const convertCSVToSQL = (tableName, csvFilePath) => {
	const list = convertCSVtoArray(csvFilePath);
	const sqlStatements = generateSQL(tableName, list);

	return sqlStatements;
};
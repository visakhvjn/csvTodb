export const generateSQL = (tableName, data) => {

	const headers = data[0].split(',');
	const sqlStatements = [];

	for (let i = 1; i < data.length; i++) {
		const fields = data[i].split(",");
		const sqlStatement = _convertToSql(tableName, headers, fields);

		if (sqlStatement) {
			sqlStatements.push(sqlStatement);
		}
	}

	return sqlStatements;
};

const _convertToSql = (tableName, columns, row) => {

	if (columns.length !== row.length) {
		return null;
	}

	let sqlStatement = `INSERT INTO ${tableName} (`;

	columns.map(column => {
		sqlStatement += `${column},`
	});

	// Removing the trailing ,
	sqlStatement = sqlStatement.slice(0, -1);

	// Closing the columns
	sqlStatement += ')';

	sqlStatement += ' VALUES (';

	row.map(value => {
		sqlStatement += `'${value.trim()}',`;
	});

	sqlStatement = sqlStatement.slice(0, -1);
	sqlStatement += ');';

	return sqlStatement;
}

export const generateNoSQL = (tableName, data) => {

	const headers = data[0].split(',');
	const sqlStatements = [];

	for (let i = 1; i < data.length; i++) {
		const fields = data[i].split(",");
		const sqlStatement = _convertToNoSql(tableName, headers, fields);

		if (sqlStatement) {
			sqlStatements.push(sqlStatement);
		}
	}

	return sqlStatements;
};

const _convertToNoSql = (tableName, columns, row) => {

	if (columns.length !== row.length) {
		return null;
	}

	const document = {};

	for (let i = 0; i < columns.length; i++) {
		const key = columns[i];
		const value = row[i];

		document[key] = value;
	}


	return `db.${tableName}.insert (${JSON.stringify(document)});`;
}
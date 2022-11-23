export const generateSQL = (data) => {

	const headers = data[0].split(',');
	const sqlStatements = [];

	for (let i = 1; i < data.length; i++) {
		const fields = data[i].split(",");
		const sqlStatement = _convertToSql('dummy', headers, fields);

		if (sqlStatement) {
			sqlStatements.push(sqlStatement);
		}
	}

	return sqlStatements;
};

export const csvToNoSql = () => {

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
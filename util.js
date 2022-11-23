import fs from 'fs';

export const convertCSVtoArray = (filePath) => {

	const data = fs.readFileSync(filePath);
	const array = data.toString().split("\n");

	return array;
}
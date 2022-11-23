import fs from 'fs';

export const convertCSVtoArray = (file) => {

	const data = fs.readFileSync(file.path);
	const array = data.toString().split("\n");

	return array;
}
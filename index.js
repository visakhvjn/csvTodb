import express from "express";
import multer from "multer";
import os from 'os';
import { generateSQL } from "./converter.js";
import { convertCSVtoArray } from "./util.js";

const app = new express();
const upload = new multer({ dest: os.tmpdir() });

app.post('/sql', upload.single('file'), (req, res) => {
	const data = convertCSVtoArray(req.file);
	const sqlStatements = generateSQL(data);
	res.send(sqlStatements);
});

app.listen(3000);
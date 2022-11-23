This package allows to convert a CSV file into SQL insert statements.

### Future goals

1. Allow to convert to any database insert query

### Install

`npm i @vjnvisakh/csv2db`

### Sample Usage

```
import { convertCSVToSQL, convertCSVToNoSQL } from '@vjnvisakh/csv2db'`

import express from "express";
import multer from "multer";
import os from 'os';

const app = new express();
const upload = new multer({ dest: os.tmpdir() });

app.post('/sql', upload.single('file'), (req, res) => {
	const data = convertCSVToSQL('tableName', req.file.path);
	res.send(data);
});

app.post('/nosql', upload.single('file'), (req, res) => {
	const data = convertCSVToNoSQL('tableName', req.file.path);
	res.send(data);
});

app.listen(3000);


<!-- Sample SQL Output -->
[
    "INSERT INTO tableName (firstName,lastName,address,city,state,pin) VALUES ('John','Doe','120 jefferson st.','Riverside','NJ','8075');",
    "INSERT INTO tableName (firstName,lastName,address,city,state,pin) VALUES ('Jack','McGinnis','220 hobo Av.','Phila','PA','9119');",
]

<!-- Sample NoSQL Output -->
[
    "db.tableName.insert ({\"firstName\":\"John\",\"lastName\":\"Doe\",\"address\":\"120 jefferson st.\",\"city\":\"Riverside\",\"state\":\" NJ\",\"pin\":\"8075\"});",
    "db.tableName.insert ({\"firstName\":\"Jack\",\"lastName\":\"McGinnis\",\"address\":\"220 hobo Av.\",\"city\":\"Phila\",\"state\":\" PA\",\"pin\":\"9119\"});",
]

```

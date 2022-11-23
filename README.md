This package allows to convert a CSV file into SQL insert statements.

### Future goals

1. Allow to convert to any database insert query

### Install

`npm i @vjnvisakh/csv2db`

### Sample Usage

```
import { convertCSVToSQL } from '@vjnvisakh/csv2db'`

import express from "express";
import multer from "multer";
import os from 'os';
import { generateSQL } from "./converter.js";
import { convertCSVtoArray } from "./util.js";

const app = new express();
const upload = new multer({ dest: os.tmpdir() });

app.post('/sql', upload.single('file'), (req, res) => {
	const data = convertCSVToSQL('tableName', req.file.path);
	res.send(sqlStatements);
});

app.listen(3000);


<!-- Sample Output -->
[
    "INSERT INTO tableName (firstName,lastName,address,city,state,pin) VALUES ('John','Doe','120 jefferson st.','Riverside','NJ','8075');",
    "INSERT INTO tableName (firstName,lastName,address,city,state,pin) VALUES ('Jack','McGinnis','220 hobo Av.','Phila','PA','9119');",
    "INSERT INTO tableName (firstName,lastName,address,city,state,pin) VALUES ('John','Doe','120 jefferson st.','Riverside','NJ','8075');",
    "INSERT INTO tableName (firstName,lastName,address,city,state,pin) VALUES ('Jack','McGinnis','220 hobo Av.','Phila','PA','9119');",
    "INSERT INTO tableName (firstName,lastName,address,city,state,pin) VALUES ('John','Doe','120 jefferson st.','Riverside','NJ','8075');",
    "INSERT INTO tableName (firstName,lastName,address,city,state,pin) VALUES ('Jack','McGinnis','220 hobo Av.','Phila','PA','9119');",
    "INSERT INTO tableName (firstName,lastName,address,city,state,pin) VALUES ('John','Doe','120 jefferson st.','Riverside','NJ','8075');",
    "INSERT INTO tableName (firstName,lastName,address,city,state,pin) VALUES ('Jack','McGinnis','220 hobo Av.','Phila','PA','9119');"
]

```

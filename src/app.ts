import express = require("express");
import * as homeController from "./controllers/home";
import { Connection, createConnection } from "typeorm";
import { Category } from "../../inventory/src/core/model/category";

export let connection: Connection;
const app = express();
console.log("connecting...");

createConnection(
    {
        "logging": true,
        "type": "sqlite",
        "database": "uza.sqlite3",
        "entities": [
            Category
        ],
        "synchronize": true
    }
).then(async c => {
    connection = c;
    console.log(`connected successfully ${connection.name}`);
}).catch(error => console.log("TypeORM connection error: ", error));

app.get("/", homeController.index);


export default app;
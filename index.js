const express = require("express");
const cors = require("cors");
const db = require("./utils/connection-wrapper");

require("dotenv").config();

const server = express();
server.use(cors());
server.use(express.json());

server.listen(process.env.REST_PORT, () =>
  console.log(`The server is running port ${process.env.REST_PORT}`),
);

const express = require("express");
const db = require("./config/db");
const routes = require("./routes");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const dotenv = require("dotenv");
dotenv.config();

const corsOptions = {
  origin: process.env.URL_FRONT,
  credentials: true,
};

const server = express();
server.use(cookieParser());

server.use(cors(corsOptions));
server.use(express.json());
server.use("/api", routes);

const connect = () => {
  db.sync({ force: false })
    .then(() => {
      server.listen(process.env.PORT, () => {
        console.log("Server is running on port 3001");
      });
    })
    .catch((error) => {
      console.error("Error connecting to dataBase: ", error);
    });
};

connect();

module.exports = connect;

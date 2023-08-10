require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors")


require("./Db/Conn");
const router = require("./Routes/route")
app.use(express.json());
app.use(cors());
app.use(router)
const port = 8001;

app.listen(port, () => {
    console.log("Express server listening on port http://localhost:8001 port " + port);
})
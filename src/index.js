const express = require("express");
const app = express();
const webRoutes = require("./routes/webRoutes");
const { static } = require("express");
app.use(express.static("public"));

app.listen(3000,()=> console.log("servidor corriendo en el puerto 3000"));

app.use(express.static("public"))
app.use(webRoutes);


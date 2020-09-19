const express = require("express");
const app = express();
const webRoutes = require("./routes/webRoutes");
app.use(express.static("public"));

app.listen(3000,()=> console.log("servidor corriendo en el puerto 3000"));
 
const express = require("express");
const app = express();
const path = require("path");
const router = express.Router();


router.get("/", function (req, res) {
  res.sendFile(path.join(__dirname + "/website/index.html"));
});

app.use("/", router);
app.use(express.static(__dirname));

app.listen(process.env.port || 3000);

console.log(`Server Running at http://localhost:3000`);



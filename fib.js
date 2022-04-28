const express = require("express");
const app = express();
const path = require("path");
const router = express.Router();


router.get("/", function (req, res) {
  res.sendFile(path.join(__dirname + "/index.html"));
});

app.use("/", router);
app.use(express.static(__dirname));

app.listen(process.env.port || 3000);

console.log(`Server Running at http://localhost:3000`);

function Fibinacci() {
  var fullArray = [0, 1, 1];
  for (var i = 0; i <= 1000; ) {
    let lastArrValues = fullArray.slice(-2);
    let i = lastArrValues[0] + lastArrValues[1];
    fullArray.push(i);
    if (i >= 1000) {
      console.log(fullArray);
      break;
    }
  }
}
//Fibinacci();

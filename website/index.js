$("#sumthing").on("click", function () {
  $(this).css("background-color", "#00FFFF");
  $(this).text("Ouch!");
});



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
Fibinacci();
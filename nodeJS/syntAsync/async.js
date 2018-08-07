const fs = require('fs')

let textFile = process.argv[2]
let number = 0

fs.readFile(textFile, "utf8", function(err, data) {
  // If there was an error reading the file, we log it and return immediately
  if (err) {
    return console.log(err);
  }
  // number should still be 0 here
  console.log(number);
  var secondNumber = 0;

  number = 5;
  secondNumber = 2;
  fs.appendFile("written.txt", "Hello Kitty", function(err){
    if (err) {
  return console.log(err);
  }
  });

  console.log("SAVED");
  // secondNumber should be 2 here
  console.log(secondNumber);
});
// number is still 0 here
console.log("number", number);

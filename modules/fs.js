const fs = require("fs");
const path = require("path");

//Create Dir
fs.mkdir(path.join(__dirname, "/test"), (e) => {
  e ? console.log("Error", e) : console.log("Success Dir");
});

//Create File

fs.writeFile(path.join(__dirname, "/test", "test.txt"), "Hello Node!", (e) => {
  e ? console.log("Error", e) : console.log("Success File");
  
  
  //Add to File
  fs.appendFile(
    path.join(__dirname, "/test", "test.txt"),
    " Hello World!",
    (e) => {
      e ? console.log("Error", e) : console.log("Success Append");
    }
  );

  //Lear arquivo
  fs.readFile(path.join(__dirname, "/test", "test.txt"), "utf-8", (e, data) => {
    e ? console.log("Error", e) : console.log("Success Read=>", data);
  });
});

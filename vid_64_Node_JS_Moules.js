const fs = require("fs");
let my_text_file = fs.readFileSync("dele.text", "utf-8");
console.log("The Content is:-\n");
console.log(my_text_file);

console.log("Now replacing some text!!!");
console.log("\nAfter Replacing the Content of the same file is:- ");
my_text_file = my_text_file.replace("Yogi AdityaNath", "Narendra Modi");
console.log(my_text_file);

console.log("Creating a new file...");
fs.writeFileSync("Rohan.txt", my_text_file);



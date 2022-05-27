//Establishing our connection to mongod with the Help of mongoose:-
const mongoose = require("mongoose");

main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://localhost:27017/ZicoKart");
  console.log("We are connected!!!");
  console.log("I started to use mongoose doccumentation.. yeah!!!");
}

//Schema:-
const DogSchema = new mongoose.Schema({
  name: String,
});
//Dogs can vouu, so let's take a look at how to add "speak" functionality to our documents:
//This can also known as method
DogSchema.methods.speak = function () {
  var greeting = "Vou Vouu Vouuuu name is " + this.name;
  console.log(greeting);
};
//Model:-
//The next step is compiling our schema into a Model.
const Dog = mongoose.model("Zico_rr_Dog", DogSchema); //"Zico_rr_Dog" namer collection toiri hoyejabey ZicoKart namer DataBase aa

//Model err cooresponding Doccument/Doccument_Object/Object Baniye nilam
//Doccument:-
const Zico_silence = new Dog({ name: "Zico's_Dogs_is_in_Silence" });
// console.log(Zico_silence.name);
const Zico_silence_2 = new Dog({ name: "Zico's_Dogs_is_in_Silence_2nd_time" });
// console.log(Zico_silence_2.name);
//Just speak methods taa use korchi
// Zico_silence.speak();
// Zico_silence_2.speak();

//Save method
Zico_silence.save();
// Zico_silence.speak();
Zico_silence_2.save();
// Zico_silence_2.speak();

//mongoose diye find kortey geley find() function err vitor namm diye search kortey hoy. Line no. 93 [const Zico_silence = new Dog({ name: "Zico's_Dogs_is_in_Silence" });]. Line no. 95. [const Zico_silence_2 = new Dog({ name: "Zico's_Dogs_is_in_Silence_2nd_time" });]
Dog.find({ name: "Zico's_Dogs_is_in_Silence" }, function (err, Dogs) {
  if (err) return console.error(err);
  console.log(Dogs);
});

// kintu mongo_Power_Shell aa search kortey geley Line now. 89 [const Dog = mongoose.model("Zico_rr_Dog", DogSchema);]....
// db.Zico_rr_Dog.find() diyee search kortey hoy....

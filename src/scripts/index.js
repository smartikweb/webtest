import "../styles/index.scss";

let user = {
  firstName: "Mark",
  lastName: "Simple",
  age: 28,
  birthday: "31.12.1990",
  height: 160,
  haveAnimal: true,
  meal: ["pizza", "pasta", "tea"],
  info: function() {
    console.log(
      "The user information" +
        ": " +
        this.firstName +
        " " +
        this.lastName +
        "," +
        " " +
        this.birthday
    );
  }
};
// console.log(typeof user.haveAnimal);
console.log("User firstname: ", user.firstName);
console.log("User firstname: ", user.lastName);
console.log("User age: ", user.age, "years");
console.log("User birthday: ", user.birthday);
console.log("User height:", user.height, "cm");
console.log("User haveAnimal:", user.haveAnimal);

console.log("*****");

console.log(
  user.firstName,
  "like to eat",
  user.meal[0],
  ",",
  user.meal[1],
  "and",
  user.meal[2]
);

console.log("*****");

console.log("His favotite foods:", user.meal);

console.log("*****");

user.info();

console.log("*****");

function userInfo() {
  console.log(user.firstName, user.lastName, user.birthday);
}
userInfo();

console.log("*****");

function userIfo2() {
  console.log(
    "His name is" +
      " " +
      user.firstName +
      " " +
      user.lastName +
      ". " +
      "He was born on",
    user.birthday
  );
}
userIfo2();

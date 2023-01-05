function addTwo(number) {
  return number + 2;
}

const answer = addTwo(5);

console.log(answer);

function greet(firstName, lastName, honorific, greeting) {
  return `${greeting} ${honorific} ${lastName}! I'm extrememly pleased you could join us, ${firstName}! I hope you enjoy your stay, ${honorific} ${lastName}.`;
}

console.log(greet("Ayyy", "Lmao", "Lil", "pieface"));

console.log(greet("Johnny", "Appleseed", "KYS", "La gruenta"));

const City = "Seattle";
const State = "Washingtong";
const Country = "USA";

function home(city, state, country) {
  console.log(`You are from ${City}, ${State} ${Country}.`);
}

home(City, State, Country);

//various ways of writing functions

function bark() {
  console.log("woof");
}

//making a variable a function
const meow = function () {
  console.log("meeeoooww");
};

const chirp = () => {
  console.log("Chirp chirp");
};

bark();
meow();
chirp();

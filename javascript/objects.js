const person = {
  name: "Matthew Garcia",
  city: "Santa Cruz",
  state: "CA",
  wantsFood: true,
  scale: 100,
};

console.log(person); //prints everything
console.log(person.name); //only prints name

const person1 = {
  name: "Angie",
  age: "25-35",
};

const person2 = {
  name: "Francesca",
  age: "65-75",
};

function music(person) {
  if (person.age === "25-35") {
    console.log("We think you'll like J-Cole");
  } else if (person.age === "65-75") {
    console.log("We think you'll like Pearl Jam");
  } else {
    console.log("goofy ah goober");
  }
}

music(person1);
music(person2);

//objects can have nested objects inside of them

const me = {
  name: {
    first: "Matthew",
    last: "Garcia",
  },

  location: {
    city: "Panorama City",
    state: "California",
    country: "USA",
  },
};

console.log(me.name.first);
console.log(me.location.state);

//objects can have their own functions

const dog = {
  name: "Bella",
  speak() {
    console.log("woof woof");
  },
};

dog.speak();

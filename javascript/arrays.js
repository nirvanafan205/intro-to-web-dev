//can stare arry of numbers, strings, objects, and array of arrays

const daysOfWeek = [
  "Monday",
  "Tuesday",
  "Wednseday",
  "Thursday",
  "Friday",
  "Sunday",
];

console.log(daysOfWeek);
console.log(daysOfWeek[0]);
console.log(daysOfWeek[1]);
console.log(daysOfWeek[5]);

//arrays have many methods and properties
const nums = [1, 2, 3, 4, 5, 6, 7, 8];

console.log(nums.length); //gives length of array
console.log(nums.join(" | ")); //takes whole array and makes it into one string with '|' inbetween each number

//can push items into an array

const numbers = [2, 5, 7, 2, 234, 56467, 1324];

console.log(numbers); //before push function

numbers.push(23);

console.log(numbers); //after push function

//for loop
//increments until i is eqal to length
for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}

//for each loop
//takes a function and that function will be called once on each item of the array
numbers.forEach(function (num) {
  console.log(num);
});

numbers.pop(); //removes last item in the array

numbers.forEach(function (num) {
  console.log(num);
});

numbers.shift(); //removes first item in the array

numbers.forEach(function (num) {
  console.log(num);
});

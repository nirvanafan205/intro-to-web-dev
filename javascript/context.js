//properly prints shipping address

const me = {
  name: {
    first: "Matthew",
    last: "Garcia",
  },

  location: {
    streetNumber: 6969,
    street: "Ayyylmao",
    city: "Woodland Hills",
    state: "CA",
    zip: 42069,
    countr: "USA",
  },

  getAddress() {
    return `${this.name.first} ${this.name.last} 
${this.location.streetNumber} ${this.location.street}
${this.location.city}, ${this.location.state} ${this.location.zip}
${this.location.country}`;
  },
};

console.log(me.getAddress());

/*
anywhere you are in javascript you have a context you are in
you can reference that context by using this
if this is referenced from the outtermost layer, it'll be a global object
*/

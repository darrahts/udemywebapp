console.log("page loaded");
var user = {
    name: "john",
    age: 34,
    hobby: "soccer",
    married: false,

    toString: function() {
        console.log(user.name + " is " + user.age.toString());
        console.log(`${user.name} is ${user.age}`);
    }
};
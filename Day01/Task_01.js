// Identify if a Number is Even or Odd :
var num = 13;
if (num % 2 == 0) {
    console.log("".concat(num, " is Even"));
}
else {
    console.log("".concat(num, " is Odd"));
}
// Filter Expensive Products from an Array :
var products = [10, 20, 50, 30, 40, 15];
var threshold = 20;
for (var i = 0; i < products.length; i++) {
    if (products[i] > threshold) {
        console.log(products[i]);
    }
}
// Sum All Elements in an Array :
var numbers = [1, 5, 8, 9, 12, 17, 21];
var sum = 0;
for (var i = 0; i < numbers.length; i++) {
    sum = sum + numbers[i];
}
console.log("Total = ".concat(sum));

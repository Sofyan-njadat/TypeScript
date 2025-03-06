
// Identify if a Number is Even or Odd :


let num: number = 13;

if (num % 2 == 0) {
  console.log(`${num} is Even`);
} else {
  console.log(`${num} is Odd`);
}


// Filter Expensive Products from an Array :


let products: number[] = [10, 20, 50, 30, 40, 15];
let threshold: number = 20;

for (let i = 0; i < products.length; i++) {
  if (products[i] > threshold) {
    console.log(products[i]);
  }
}


// Sum All Elements in an Array :


let numbers: number[] = [1, 5, 8, 9, 12, 17, 21];
let sum: number = 0;

for (let i = 0; i < numbers.length; i++) {
  sum = sum + numbers[i];
}

console.log(`Total = ${sum}`);




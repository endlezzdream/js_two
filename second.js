// Первое задание
const num1 = 10;
const num2 = 25;

const sum = add(num1, num2);
console.log(sum); 

const difference = subtract(num1, num2);
console.log(difference); 

const result = power(num1, num2);
console.log(result); 

const quotient = divide(num1, num2);
console.log(quotient); 

// Второе
const myString = "Hello, world!";
const length = calculateStringLength(myString);
console.log(length); // Output: 13

//Третье задание
function check(num) {
    if (num > 0) {
      console.log("Число положительное");
    } else if (num < 0) {
      console.log("Число отрицательное");
    } else {
      console.log("Число равно нулю");
    }
  }
  
  check(10); 
  
  
//Четвертое задание
function calculateAverage(numbers) {
    if (numbers.length === 0) {
      return 0; 
    }
  
    const sum = numbers.reduce((acc, curr) => acc + curr, 0);
    return sum / numbers.length;
  }
  
//Пятое задание
const person = {
    name: "Ардашер",
    age: 19
  };
  
  console.log("Name:", person.name);
  console.log("Age:", person.age);

//Шестое задание
function checkEvenness(num) {
    if (num % 2 === 0) {
      console.log(`Число ${num} является четным.`);
    } else {
      console.log(`Число ${num} является нечетным.`);
    }
  }
  
  
  checkEvenness(4); 

//Седьмая задание
function checkNegative(num) {
    if (num < 0) {
      console.log(`Число ${num} является отрицательным.`);
    } else {
      console.log(`Число ${num} не является отрицательным.`);
    }
  }
  
  
  checkNegative(-5); 
//Восьмое задание
function isDivisible(num1, num2) {
    if (num1 % num2 === 0) {
      console.log(`Число ${num1} делится на ${num2} без остатка.`);
    } else {
      console.log(`Число ${num1} не делится на ${num2} без остатка.`);
    }
  }
  isDivisible(10, 2); 
  
  
  
/*
Exercise 1: maxOfTwoNumbers()

In this exercise, create a function named maxOfTwoNumbers. 
It should take two numbers as inputs and return the larger number. 
If they're equal, return either one.

Exercise 1 has been completed for you:
*/

const maxOfTwoNumbers = (x, y) => {
    if (x >= y) {
      return x;
    } else {
      return y;
    }
  }
  
  console.log('Exercise 1 Result:', maxOfTwoNumbers(3, 9));
  
  // Number 2
  /*
Exercise 2: isAdult()

Write a function named isAdult. It should take an age (number) 
and return 'Adult' if the age is 18 or over and 'Minor' otherwise.

Example: isAdult(21) should return 'Adult'.

Complete the exercise in the space below:
*/

const isAdult = (age) => {
    if (age >= 18) {
        return "Adult";
    } else {
        return "Minor"
    }
}
console.log('Exercise 2 Result:', isAdult(21));
console.log('Exercise 2 Result:', isAdult(15));

/*
Exercise 3: isCharAVowel()

Write a function named isCharAVowel that takes a single character as 
an argument. It should return true if the character is a vowel and 
false otherwise. For the purposes of this exercise, the character 
y should not be considered a vowel.

Example: isCharAVowel('a') should return true.

Complete the exercise in the space below:
*/

const isCharAVowel = (char) => {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    if (vowels.includes(char)) {
        return "true";
    } else {
        return "false"
    }
}

console.log('Exercise 3 Result:', isCharAVowel("a"));
console.log('Exercise 3 Result:', isCharAVowel('q'));
console.log('Exercise 3 Result:', isCharAVowel('i'));

/*
Exercise 4: generateEmail()

Create a function named generateEmail. It should take two strings: 
a name and a domain. It should return a simple email address.

Example: generateEmail('johnsmith', 'example.com') 
should return 'johnsmith@example.com'.

Complete the exercise in the space below:
*/

const generateEmail = (name, domain) => {
    return name + "@" + domain;
}
const email = generateEmail("johnSmith", "example.com")

console.log('Exercise 4 Result:', generateEmail("johnsmith", "example.com"));

/*
Exercise 5: greetUser()

Define a function called greetUser. It should take a name and a 
time of day (morning, afternoon, evening) and return a personalized 
greeting.

Example: greetUser('Sam', 'morning') should return "Good morning, Sam!"

Complete the exercise in the space below:
*/

const greetUser = (name, timeOfDay) => {
    return `Good ${timeOfDay}, ${name}!`
}

console.log('Exercise 5 Result:', greetUser("Sam", "morning"));
console.log('Exercise 5 Reseult', greetUser("Zach", "Afternoon"))

/*
Exercise 6: maxOfThree()

Define a function, maxOfThree. It should accept three numbers 
and return the largest among them.

Example: maxOfThree(17, 4, 9) should return 17.

Complete the exercise in the space below:
*/

const maxOfThreeNum =(num1, num2, num3) => {
    if (num1 < num2) {
        return num2;
    } 
    // if (num3 > num1) {
    //     return num3;
    // }
    // if (num1 > num3) {
    //     return num3
    // }
}

//  Incorrect code listed below, correct code is on line118
// const maxOfThreeNum = (5,10,8) => {
//     if (num1 > num2) {
//         return num2;
//     }
//     if (num2 < num3) {
//         return num2;
//     }
//     if (num1 > num3) {
//         return num3;
//     }
// }

// const maxOfThreeNum = (five,ten,eigth) => {
//     if (5 > 10) {
//         return 5
//     }
//     if (10 < 8) {
//         return 5;
//     }
//     if (5 > 8) {
//         return 5;
//     }
// }

// This code goes with the code on line 118. This is what is being ran
console.log('Exercise 6 Result:', maxOfThreeNum(5, 10, 8));


/*
Exercise 7: calculateTip()

Create a function called calculateTip. It should take two arguments: 
the bill amount and the tip percentage (as a whole number). 
The function should return the amount of the tip.

Example: calculateTip(50, 20) should return 10.

Complete the exercise in the space below:
*/

const calculateTip = ()
// Having a hard time with this exercise
console.log('Exercise 7 Result:', calculateTip(50, 20));


/*
Exercise 8: convertTemperature()

Write a function named convertTemperature. 
It takes two arguments: a temperature and a string representing the 
scale ('C' for Celsius, 'F' for Fahrenheit). 
Convert the temperature to the other scale.

Example: convertTemperature(32, 'C') should return 89.6 (Fahrenheit).
Example: convertTemperature(32, 'F') should return 0 (Celsius).

Complete the exercise in the space below:
*/

const convertTemperature =

console.log('Exercise 8 Result:', convertTemperature(32, "C"));


/*
let js = "Amazing";
console.log(40 + 8 + 23 - 10);

 //Values - Piece of data
let firstName = "Jonas"
console.log(firstName);
console.log(firstName);
console.log(firstName);
console.log(firstName);

let jonas_matilda = "JM";
let $function = 27;
let person = "jonas"; 

//make sure variables are descriptive
let myFirstJob = "teacher";
let myCurrentJob = "programmer";

//not 

let job1 = "programmer";
let job2 = "teacher";

console.log(myFirstJob);

//Values and Variables assignment 
let country = "US";
let continent = "North America";
let population = "343 million";

console.log(country);
console.log(continent);
console.log(population);

// this is an object
let me = {
      name: 'Jonas'
} 





//typeof() 
console.log(typeof(true));
console.log(typeof(23));
console.log(typeof('Gabe'));

//dynamic typing 
let javaScriptIsFun = true;
console.log(javaScriptIsFun);

javaScriptIsFun = "Yes!";
console.log(javaScriptIsFun);

//undefined variable;
let year;
console.log(year);
console.log(typeof(year));


let age = 30;
age = 31;




//Math Operators
const now = 2037;
const ageJonas = now - 1991;
const ageSara = now - 2018;
console.log(ageJonas);
console.log(ageJonas, ageSara);

console.log(ageJonas * 2, ageJonas / 2);


//Assignment Operators
let x = 10 + 15; //25
x += 10; // x = x + 10; New value of x will be (35);
x *= 4; // x = x * 4; New value of x will be (100);
x++ // x = x + 1; New value of x will be (26);
x-- // x = x - 1; New value of x will be (24);
console.log(x);

//Comparison Operators >, <, >=, <=
console.log(ageJonas > ageSara);
console.log(ageSara >= 18);

const isFullAge = ageSara >= 18;


const now = 2037;
const ageJonas = now - 1991;
const ageSara = now - 2018;
console.log( now - 1991 > now - 2018);

console.log(25 - 10 - 5);

let x, y; 
x = y = 25 - 10 - 5; // x = y = 10, next y = 10 because it operates right to left, then x = y
console.log(x, y);

const averageAge = (ageJonas + ageSara) / 2; //must place ageJonas + ageSara in (), because (/) holds a higher precedence;
console.log(ageJonas, ageSara, averageAge);

//Coding challenge #1
Mark and John are trying to compare their BMI (Body Mass Index), which is 
calculated using the formula:
BMI = mass / height ** 2 = mass / (height * height) (mass in kg 
and height in meter).
Your tasks:
1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both 
versions)
3. Create a Boolean variable 'markHigherBMI' containing information about 
whether Mark has a higher BMI than John.
Test data:
§ Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 
m tall.
§ Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 
m tall 

let markWeight1 = 78;
let markHeight1 = 1.69; 

let markWeight2 = 95; 
let markHeight2 = 1.88;

let johnWeight1 = 92;
let johnHeight1 = 1.95;

let johnWeight2 = 85;
let johnHeight2 = 1.76;

const bmiMark = markWeight1/(markHeight1)**2;
const bmiJohn = johnWeight1/(johnHeight1)**2;
console.log(bmiJohn, bmiMark);

const markHigherBMI = console.log(bmiMark >= bmiJohn);

const bmiMark2 = markWeight2/(markHeight2 * markHeight2);
const bmiJohn2 = johnWeight2/(johnHeight2 * johnHeight2); 
console.log(bmiMark, bmiJohn2);

const markHigherBMI2 = console.log(bmiMark2 >= bmiJohn2);



//Template Literals
const firstName = 'Gabe';
const job = 'Developer';
const birthYear = 2000;
const year = 2022;
const age = year - birthYear;

const gabe = 'I am ' + firstName + ', a ' + (year - birthYear) + ' year old ' + job + '!';
console.log(gabe);

const gabeNew = `I am ${firstName}, a ${year - birthYear} year old ${job}!`;
console.log(gabeNew);

//multi-line strings
console.log(`String
 multiple
 lines`);

 

 //if / else statements
const age = 15;

if(age >= 18) {
      console.log('Gabe can start driving liscence⭐');
} else {
      const yearsLeft = 18 - age;
      console.log(`Gabe is too young. Wait another ${yearsLeft} years.`);
}


const birthYear = 2012;
let century;
if(birthYear <= 2000) {
      century = 20;
} else {
      century = 21;
}

console.log(century);

// code challenge #2
Use the BMI example from Challenge #1, and the code you already wrote, and 
improve it.
Your tasks:
1. Print a nice output to the console, saying who has the higher BMI. The message 
is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
2. Use a template literal to include the BMI values in the outputs. Example: "Mark's
BMI (28.3) is higher than John's (23.9)!"



let markWeight1 = 78;
let markHeight1 = 1.69; 

let markWeight2 = 95; 
let markHeight2 = 1.88;

let johnWeight1 = 92;
let johnHeight1 = 1.95;

let johnWeight2 = 85;
let johnHeight2 = 1.76;

const bmiMark = markWeight1/(markHeight1)**2;
const bmiJohn = johnWeight1/(johnHeight1)**2;
console.log(bmiJohn, bmiMark);

const markHigherBMI = console.log(bmiMark >= bmiJohn);

const bmiMark2 = markWeight2/(markHeight2 * markHeight2);
const bmiJohn2 = johnWeight2/(johnHeight2 * johnHeight2); 
console.log(bmiMark, bmiJohn2);

const markHigherBMI2 = console.log(bmiMark2 <= bmiJohn2);

if(bmiMark >= bmiJohn) {
      console.log(`Mark's BMI (${bmiMark}) is higher than John's (${bmiJohn})`);
} else {
      console.log(`John's BMI (${bmiJohn}) is higher than Mark's (${bmiMark})`)
}

if(bmiJohn2 >= bmiMark2) {
      console.log(`John's BMI (${bmiJohn2}) is higher than Mark's (${bmiMark2})`)
} else {
      console.log(`Mark's BMI (${bmiMark2}) is higher than John's (${bmiJohn2})`);
}



//type conversion
const inputYear = '1991';
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(String(23));

//type coercion
console.log('I am ' + 23 + ' years old');
console.log('23' - '10' - 3);



//truthy and falsy

//5 falsy values: 0, ' ', null, undefined, NaN
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean(null));
console.log(Boolean('Gabe'));
console.log(Boolean({}));

const money = 100;

if(money) {
      console.log("Don't spend it all");
} else {
      console.log('You should get a job');
}

let height = 6;
if(height) {
      console.log(`Yea height is defined`);
} else {
      console.log(`Height is undefined`);
}



//Equality operators
const age = '18';
if(age === 18) console.log(`You just became an adult (strict)`); //when placed into a if(); doesnt need {} since it's already true

if(age == 18) console.log(`You just became an adult (loose)`);


//Saving input
const favorite = Number(prompt('Whats you favorite number?'));
console.log(favorite);

if(favorite === 23) {  
      console.log('cool, 23 is an amazing number')
} else if(favorite === 7) {
      console.log('7 is a cool number as well')
} else if(favorite === 9) {
      console.log(`9 is awesome`)      
} else {
      console.log('Number is not 23 or 7')
}

if(favorite !== 23) {
      console.log(`Why not 23?`);
}



//Logical operators
const hasDriversLiscence = true; // variable A
const hasGoodVision = true // variable B

console.log(hasDriversLiscence && hasGoodVision);
console.log(hasDriversLiscence || hasGoodVision);
console.log(!hasDriversLiscence);

const shouldDrive = hasDriversLiscence && !hasGoodVision;
if (shouldDrive) {
      console.log('Gabe is able to drive');
} else {
      console.log('Someone else should drive');
}

const isTired = false; // Variable C
console.log(hasDriversLiscence || hasGoodVision || isTired);

if (hasGoodVision && hasDriversLiscence && !isTired) {
      console.log('Gabe is able to drive');
} else {
      console.log('Someone else should drive');
}


////////////////////////////////////
// Coding Challenge #3

/*
There are two gymnastics teams, Dolphins and Koalas. They compete against each other 3 times. The winner with the highest average score wins the a trophy!

1. Calculate the average score for each team, using the test data below
2. Compare the team's average scores to determine the winner of the competition, and print it to the console. Don't forget that there can be a draw, so test for that as well (draw means they have the same average score).

3. BONUS 1: Include a requirement for a minimum score of 100. With this rule, a team only wins if it has a higher score than the other team, and the same time a score of at least 100 points. HINT: Use a logical operator to test for minimum score, as well as multiple else-if blocks 😉
4. BONUS 2: Minimum score also applies to a draw! So a draw only happens when both teams have the same score and both have a score greater or equal 100 points. Otherwise, no team wins the trophy.

TEST DATA: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
TEST DATA BONUS 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
TEST DATA BONUS 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106

GOOD LUCK 😀


// const dolphinsAverage = (96 + 108 + 89)/3;
// const koalasAverage = (88 + 91 + 110)/3;
// console.log(dolphinsAverage, koalasAverage);

// if(dolphinsAverage >= koalasAverage) {
//       console.log('Dolphins win!');
// } else if(dolphinsAverage === koalasAverage){
//       console.log('Its a tie!');
// } else {
//       console.log('Koalas win!');
// }

const dolphinsAverage2 = (97 + 112 + 101)/3;
const koalasAverage2 = (109 + 95 + 123)/3;
const minAverage = 100;
console.log(dolphinsAverage2, koalasAverage2);

if(dolphinsAverage2 >= koalasAverage2 && dolphinsAverage2 >= 100) {
      console.log('Dolphins win!');
} else if(koalasAverage2 > dolphinsAverage2 && koalasAverage2 > 100){
      console.log('Its a tie!');
} else {
      console.log('Koalas win!');
}



// Switch Statement
const day = 'wednesday';

// switch(day) {
//       case 'monday': // day = 'monday'
//             console.log('Plan course structure');
//             console.log('Go to coding meeting');
//             break;
//       case 'tuesday':
//             console.log('prepare theory videos');
//             break;
//       case 'wednesday':
//       case 'thursday':
//             console.log('Write code examples');
//       case 'friday':
//             console.log('Record video');
//             break;
//       case 'saturday':
//       case 'sunday':
//             console.log('Enjoy your weekend!');
//       default:
//             console.log('Not a valid day!');
// }

if (day === 'monday') {
      console.log('Plan course structure');
      console.log('Go to coding meeting');
} else if (day === 'tuesday') {
      console.log('prepare theory videos');
} else if (day === 'wednesday' || 'thursday') {
      console.log('Write code examples'); 
} else if (day === 'friday') {
      console.log('Record video');
} else if (day ==== 'saturday' || 'sunday') {
      console.log('enjoy your weekend');
} else {
      console.log('not a valid day!');
}



//Ternary Operator

const age = 23;
age >= 18 ? console.log('I like to drink beer'):
      console.log('I like to drink water');

const drink = age >= 18 ? 'beer' : 'water';
console.log(drink);

let drink2;
if (age >= 18) {
      drink2 = 'beer';
} else {
      drink2 = 'water';
}
console.log(drink2);

// Using in a ternary operator
 console.log(`I like to drink ${age >= 18 ? 'beer' : 'water'}`);

 */



 const firstName = 'Gabe';
 if (firstName != 'Gabe') {
       console.log('Youre not Gabe!');
 } else if (firstName === 'Gabe') {
       console.log('Welcome Gabe!');
 } else {
       console.log('try another name!');
 }

 const lastName = 'Gutierrez';
 switch (lastName) {
       case 'Gutierrez':
             console.log ('You will make it Gabe...Dont worry, you got this');
             break;
             console.log('Welcome Mr Garn');
             break;
      case 'Lawson':
            console.log('Welcome Ms Lawson');
            break;
      case 'McGowin':
            console.log('Welcome Mr McGowin');
            break;
      default:
            console.log('Please identify your lastname!');
 }        

 const equation = (55 <= 10);
 switch (equation) {
      case 22 > 19 :
             console.log(equation);
             break;
      case 33 > 19 :
             console.log(equation);
             break;
      case 55 <= 10 : 
            console.log(equation);
 }

 const number = 22;
 if(number === 22) {
       console.log('Youre right!');
 } else if (number >= 21) {
       console.log('Youre old enough to buy a beer!');
 } else {
       console.log('You cant buy that just yet! Wait x years!');
 }

  // Coding Challenge #4

let tip = bill <= 300 && bill >= 50 ? bill * .15 : bill * .20;
let bill = 275;
console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`);
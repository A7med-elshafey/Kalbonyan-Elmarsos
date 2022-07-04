/*
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
m tall.
GOOD LUCK �
*/
// const BMI = mass / height ** 2;
// let markMass = 78;
// let markHeight = 1.69;
// const markBMI = markMass / markHeight ** 2;
// console.log(markBMI);
// let johnMass = 92;
// let johanHeight = 1.95;
// const johanBMI = johnMass / johanHeight ** 2;
// console.log(johanBMI);
// const markHigherBMI = markBMI > johanBMI;
// console.log(markHigherBMI);

// const massMark = 95;
// const heightMark = 1.88;
// const massJohan = 85;
// const heightJohan = 1.76;
// const BMImark = massMark / heightMark ** 2;
// const BMIjohan = massJohan / heightJohan ** 2;
// const markHigherBMI = BMImark > BMIjohan;
// console.log(BMIjohan, BMImark, markHigherBMI);

////////////////// challenge2//////////////////
/*
Use the BMI example from Challenge #1, and the code you already wrote, and
improve it.
Your tasks:
1. Print a nice output to the console, saying who has the higher BMI. The message
is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
2. Use a template literal to include the BMI values in the outputs. Example: "Mark's
BMI (28.3) is higher than John's (23.9)!"
Hint: Use an if/else statement �
const massMark = 95;
const heightMark = 1.88;
const massJohan = 85;
const heightJohan = 1.76;
const BMImark = massMark / heightMark ** 2;
const BMIjohan = massJohan / heightJohan ** 2;
const markHigherBMI = BMImark > BMIjohan;
console.log(BMIjohan, BMImark, markHigherBMI);
if (BMIjohan > BMImark) {
  console.log(`John's BMI ${BMIjohan} is higher than Mark's ${BMImark}!`);
} else {
  console.log(`Mark's BMI ${BMImark} is higher than John's ${BMIjohan}!`);
}
*/
////////////////// challenge 3 ////////////////////
/*
There are two gymnastics teams, Dolphins and Koalas. They compete against each
other 3 times. The winner with the highest average score wins a trophy!
Your tasks:
1. Calculate the average score for each team, using the test data below
2. Compare the team's average scores to determine the winner of the competition,
and print it to the console. Don't forget that there can be a draw, so test for that
as well (draw means they have the same average score)
3. Bonus 1: Include a requirement for a minimum score of 100. With this rule, a
team only wins if it has a higher score than the other team, and the same time a
score of at least 100 points. Hint: Use a logical operator to test for minimum
score, as well as multiple else-if blocks �
4. Bonus 2: Minimum score also applies to a draw! So a draw only happens when
both teams have the same score and both have a score greater or equal 100
points. Otherwise, no team wins the trophy
Test data:
§ Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
§ Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
§ Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106
const dolphinsAverage = (96 + 108 + 89) / 3;
const koalasAverage = (88 + 91 + 110) / 3;
console.log(dolphinsAverage);
console.log(koalasAverage);
if (dolphinsAverage > koalasAverage) {
  console.log("dolphins winnnnnner!");
} else if (koalasAverage > dolphinsAverage) {
  console.log("koalas winnnnnnnner!");
} else {
  console.log("Same result");
}
// bouns 1
// const dolphinsScore = (97 + 112 + 101) / 3;
// const koalasScore = (109 + 95 + 123) / 3;
// const minimumScore = 100;
// if (dolphinsScore > koalasScore && dolphinsScore > minimumScore) {
  //   console.log("dolphins winer!");
  // } else if (koalasScore > dolphinsScore && koalasScore > minimumScore) {
    //   console.log("koalas winner!");
    // } else {
      //   console.log("No winner");
      // }
      // bouns 2
      const dolphinsScore = (97 + 112 + 101) / 3;
      const koalasScore = (109 + 95 + 106) / 3;
      const minimumScore = 100;
      if (
        dolphinsScore === koalasScore &&
        dolphinsScore >= minimumScore &&
        koalasScore >= minimumScore
        ) {
          console.log("No team wins");
        }
        
  ////////////////// challenge 4////////////////////
        Steven wants to build a very simple tip calculator for whenever he goes eating in a
restaurant. In his country, it's usual to tip 15% if the bill value is between 50 and
300. If the value is different, the tip is 20%.
Your tasks:
1. Calculate the tip, depending on the bill value. Create a variable called 'tip' for
this. It's not allowed to use an if/else statement � (If it's easier for you, you can
start with an if/else statement, and then try to convert it to a ternary
operator!)
2. Print a string to the console containing the bill value, the tip, and the final value
(bill + tip). Example: “The bill was 275, the tip was 41.25, and the total value
316.25”
Test data:
§ Data 1: Test for bill values 275, 40 and 430
Hints:
§ To calculate 20% of a value, simply multiply it by 20/100 = 0.2
§ Value X is between 50 and 300, if it's >= 50 && <= 300 �
const bill = 430;
const tip = bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;
const total = bill + tip;
console.log(
  `The bill was ${bill} the tip was ${tip} and the total value ${total}`
  );
  
  */

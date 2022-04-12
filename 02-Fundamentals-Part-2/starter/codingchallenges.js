'use strict';
console.log(`--------------------- 
Coding Challenges
--------------------- 
`);
/**
 * Coding Challenge #1
Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new gymnastics discipline, which works differently.
Each team competes 3 times, and then the average of the 3 scores is calculated (so one average score per team).
A team only wins if it has at least double the average score of the other team. Otherwise, no team wins!
Your tasks:
1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
2. Use the function to calculate the average for both teams
3. Create a function 'checkWinner' that takes the average score of each team as parameters ('avgDolphins' and 'avgKoalas'), and then logs the winner to the console, together with the victory points, according to the rule above. Example: "Koalas win (30 vs. 13)"
4. Use the 'checkWinner' function to determine the winner for both Data 1 and Data 2
5. Ignore draws this time
Test data:
§ Data 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49 § Data 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27
Hints:
§ To calculate average of 3 values, add them all together and divide by 3
§ To check if number A is at least double number B, check for A >= 2 * B.
Apply this to the team's average scores 
  
 */
const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;
const checkWinner = (avgDolphins, avgKoalas) => {
    let result;
    if (avgDolphins >= 2 * avgKoalas) {
        result = `Dolphins win (${avgDolphins} vs. ${avgKoalas})`;
    }
    else if (avgKoalas >= 2 * avgDolphins) {
        result = `Koalas win (${avgKoalas} vs. ${avgDolphins})`
    }
    else {
        result = `No one wins!`;
    }
    return result;
}
// data 1
let dolphScore1 = 44;
let dolphScore2 = 23;
let dolphScore3 = 71;

let koalaScore1 = 65;
let koalaScore2 = 54;
let koalaScore3 = 49;

let avgDolphScore = calcAverage(dolphScore1, dolphScore2, dolphScore3);
let avgKoalaScore = calcAverage(koalaScore1, koalaScore2, koalaScore3);
console.log(avgDolphScore, avgKoalaScore);
console.log(checkWinner(avgDolphScore, avgKoalaScore));

// data 2
dolphScore1 = 85;
dolphScore2 = 54;
dolphScore3 = 41;

koalaScore1 = 23;
koalaScore2 = 34;
koalaScore3 = 27;

avgDolphScore = calcAverage(dolphScore1, dolphScore2, dolphScore3);
avgKoalaScore = calcAverage(koalaScore1, koalaScore2, koalaScore3);

console.log(avgDolphScore, avgKoalaScore);
console.log(checkWinner(avgDolphScore, avgKoalaScore));
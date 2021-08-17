const readlineSync = require("readline-sync"),
chalk = require('chalk');

var score = 0;
var userName = readlineSync.question(chalk.magenta("Hey! What's your name? "));

console.log(chalk.magenta("Glad to have you here " + chalk.cyan(userName)))
console.log(chalk.magenta("Let's have some fun by playing") + chalk.cyan(" K-POP band quiz!"))
console.log("You only need to select the options from a, b, or c!")
console.log(chalk.magenta("==========================================================="))

var aboutMe = [
  {
    question: chalk.blue(`1. Who is the leader of the band BTS? 
      a. RM
      b. J-hope
      c. Suga 
Answer Please : `),
    answer: "RM",
    option: "a"
  },
  {
    question: chalk.blue(`2. Who is known as Worldwide handsome in BTS? 
      a. Jin
      b. V
      c. Jimin 
Answer Please : `),
    answer: "Jin",
    option: "a"
  },
  {
    question: chalk.blue(`3. Which among the following SHINee member was part of K-Drama Hwarang? 
      a. Key
      b. Minhoo
      c. Onew 
Answer Please : `),
    answer: "Minhoo",
    option: "b"
  },
  {
    question: chalk.blue(`4. How many members are there in BLACKPINK band? 
      a. 6
      b. 5
      c. 4 
Answer Please : `),
    answer: "4",
    option: "a"
  },
  {
    question: chalk.blue(`5. How many members are there in BTS band? 
      a. 8
      b. 7
      c. 6 
Answer Please : `),
    answer: "7",
    option: "b"
  },
  {
    question: chalk.blue(`6. BTS' member V's real name is? 
      a. Kim Tayheung
      b. Kim Soekjin
      c. Kim Namjoon 
Answer Please : `),
    answer: "Kim Tayheung",
    option: "a"
  }];

var highestScoreDetail = {
  name: "Pinki",
  score: "2"
};

function LetsPlay(question, option, answer){
  var userAnswer = readlineSync.question(question);

  if(userAnswer.toLowerCase() === option.toLowerCase()) {
    console.log(chalk.magenta("Yayy.. you got the right answer, it's definitely - ") + chalk.cyan(answer));
    score += 1;
  } else{
    console.log(chalk.magenta("Oh shoot! you got it  wrong..."));
  }

  console.log(chalk.magenta("Your current score is : " )+ chalk.cyan(score));
  console.log(chalk.cyan("---------------------------------------------------------"));

  if(score >= highestScoreDetail.score){
    highestScoreDetail.name = userName;
    highestScoreDetail.score = score;
  }
}

for(var i=0; i < aboutMe.length; i++){
  LetsPlay(aboutMe[i].question, aboutMe[i].option, aboutMe[i].answer);
}

console.log("Yayyyy.. You've scored " + chalk.cyan(score) + " points!");
console.log(chalk.magenta("Highest Score so far is "));
console.log(chalk.cyan(highestScoreDetail.name) + chalk.magenta(" : ") + chalk.cyan(highestScoreDetail.score));
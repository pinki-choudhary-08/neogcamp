const readlineSync = require("readline-sync"),
chalk = require('chalk');

var currentScore = 0;
var userName = readlineSync.question(chalk.magenta("Hey! What's your name? "));

console.log(chalk.magenta("Glad to have you here " + chalk.cyan(userName)))
console.log(chalk.magenta("Let's have some fun by playing") + chalk.cyan(" DO YOU KNOW PINKI?"))
console.log("You only need to select the options from a, b, or c!")
console.log(chalk.magenta("==========================================================="))

var aboutMe = [
  {
    question: chalk.blue(`1. Where I'm from? 
      a. Gurgaon
      b. Hisar
      c. Delhi 
Answer Please : `),
    answer: "Hisar",
    option: "b"
  },
  {
    question: chalk.blue(`2. What is my favorite Cuisine? 
      a. Chinese
      b. Italian
      c. Mexican 
Answer Please : `),
    answer: "Italian",
    option: "b"
  },
  {
    question: chalk.blue(`3. Which series I love the most? 
      a. Friends
      b. Prisoner
      c. Big Bang 
Answer Please : `),
    answer: "Friends",
    option: "a"
  },
  {
    question: chalk.blue(`4. What's my hobby? 
      a. Art
      b. Travel
      c. Music 
Answer Please : `),
    answer: "Music",
    option: "c"
  },
  {
    question: chalk.blue(`5. Which K-pop band I love the most? 
      a. BTS
      b. BlackPink
      c. Exo 
Answer Please : `),
    answer: "BTS",
    option: "a"
  },
  {
    question: chalk.blue(`6. My Favorite singer? 
      a. Diljit Dosanjh
      b. Arijit Singh
      c. Kishore Kumar 
Answer Please : `),
    answer: "Diljit Dosanjh",
    option: "a"
  }];

var highestScoreDetail = [{
  name: "Pinki",
  score: "2"
},
{
  name: "Jiah",
  score: "3"
}];

function LetsPlay(question, option, answer){
  var userAnswer = readlineSync.question(question);

  if(userAnswer.toLowerCase() === option.toLowerCase()) {
    console.log(chalk.magenta("Yayy.. you got the right answer, it's definitely - ") + chalk.cyan(answer));
    currentScore += 1;
  } else{
    console.log(chalk.magenta("Oh shoot! you got it  wrong..."));
  }

  console.log(chalk.magenta("Your current score is : " )+ chalk.cyan(currentScore));
  console.log(chalk.cyan("---------------------------------------------------------"));
}

for(var i=0; i < aboutMe.length; i++){
  LetsPlay(aboutMe[i].question, aboutMe[i].option, aboutMe[i].answer);
}

if(highestScoreDetail.find(user => user.score < currentScore)){
  highestScoreDetail.push({
      name: userName,
      score: currentScore
    });
}

console.log("Yayyyy.. You've scored " + chalk.cyan(currentScore) + " points!");
console.log(chalk.magenta("Highest Score so far is "));
for( var i=0; i < highestScoreDetail.length; i++){
  console.log(chalk.cyan(highestScoreDetail[i].name) + chalk.magenta(" : ") + chalk.cyan(highestScoreDetail[i].score));
}

console.log(chalk.red("Can't see your name? Send me the screenshot & I'll update it! "));
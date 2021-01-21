//user score variable
var score=0;

//high score variable
var highScorer={
  name: "Yet to come",
  scoreHigh: 0
}

//questions list
var quiz = [{
  question: "Which character has a twin: Rachel or Phoebe?",
  answer: "Phoebe"
},
{
  question: "What was the name of Ross's monkey: Marcel or Melso or Bonnie?",
  answer: "Marcel"
},
{
  question: "How many sisters did Joey have: 0 or 4 or 7?",
  answer: "7"
},
{
  question: "What is Joey's favorite food?: Pizza or Sandwiches or Cakes",
  answer: "Sandwiches"
},
{
  question: "Whom did Phoebe marry?: Joey or Mike or Joseph",
  answer: "Mike"
}]

//welcome user
var readLineSync=require("readline-sync");
var userName=readLineSync.question("Enter your name:");

console.log("Welcome to F.R.I.E.N.D.S quiz, "+ userName);

//start the game if user says yes
if(readLineSync.keyInYN("Do you want to start playing?")){
  console.log("Ok! Let's start...");
  for(var i=0;i<quiz.length;i++){
    var currentQuestion=quiz[i];
    play(currentQuestion.question,currentQuestion.answer);
  }
  
}
//end the game if user says no
else{
  console.log("Ok Bye!");
}
//play function 
function play(question,answer){
  var readlineSync = require('readline-sync');
  var userAnswer = readLineSync.question(currentQuestion.question);
  if (userAnswer===currentQuestion.answer)
  {
    console.log('Right answer');
    score+=1;
  }
  else
  {
    console.log('Wrong answer');
    
  }
  console.log('Score-----> '+ score);
}


//check high score
if (score>highScorer.scoreHigh){
    console.log("You are the highest score achiever. Please send us a screenshot of this message and we will update our database");
    const chalk=require("chalk");

    console.log("Highest Scorer: " + userName );
    console.log(chalk.blue("score: ") + score);

  }

 

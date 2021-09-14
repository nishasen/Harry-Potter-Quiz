
var readlineSync = require("readline-sync")

var userName = readlineSync.question("Hello! What is your name?")

console.log("Welcome "+userName+" to the Harry Potter Quiz.")

questionOne = {
  question: "Who was the choosen one?",
  answer: "Harry Potter"
}

questionTwo = {
  question: "Who was more studious?",
  answer: "Hermoine"
}

questionThree = {
  question: "How many horcrux was there?",
  answer: "7"
}

questionFour = {
  question: "In which Hogwart's house was Draco in?",
  answer: "Slytherin"
}

questionFive = {
  question: "Which Harry Potter word is now in the Oxford English Dictionary?",
  answer: "Muggle"
}

questionSix = {
  question: "Who were Harry's parents?",
  answer: "James and Lily Potter"
}

questionSeven = {
  question: "How many Weasley sibling's are there?",
  answer: "7"
}

questionEight = {
  question: "How many unforgivable curses are there?",
  answer: "3"
}

questionNine = {
  question: "Which of these Hogwarts professors teaches Transfiguration?",
  answer: "McGonagall"
}

questionTen = {
  question: "At the end of Harry Potter and the Sorcerer's Stone, which professor removes his turban to reveal Voldemort on the back of his head?",
  answer: "Quirrell"
}

var quizLevel1 = [questionOne, questionTwo, questionThree, questionFour, questionFive]

var quizLevel2 = [questionSix, questionSeven, questionEight, questionNine, questionTen]

var score = 0
function play(question, answer){
  var userAns = readlineSync.question(question)
  if(userAns === answer){
    score +=1;
    console.log("You are right")
  }
  else{
    console.log("You are wrong")
  }
  console.log("Current score: ", score)
  console.log("---------------------")
}

for(var i=0;i<quizLevel1.length;i++){
  play(quizLevel1[i].question, quizLevel1[i].answer)
}

if(score < 3) {
  console.log("It seems you are a muggle, your score is ", score)
} else {
  console.log("It seems you can become a wizard, let's go to level 2")
  for(var i=0;i<quizLevel2.length;i++){
  play(quizLevel2[i].question, quizLevel2[i].answer)
}
console.log("YAY your total score is ",score)
}

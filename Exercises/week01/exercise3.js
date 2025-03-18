// exercise3.js

// Define a constructor function `Answer` to create one or more answers
function Answer(response, respondent, score, date) {
  this.response = response;
  this.respondent = respondent;
  this.score = score;
  this.date = new Date(date);
}

// Define a constructor function `Question` to represent a question
function Question(question, questioner, date) {
  this.question = question;
  this.questioner = questioner;
  this.date = new Date(date);
  this.answers = [];
}

// Method to add an answer
Question.prototype.add = function(answer) {
  this.answers.push(answer);
};

// Method to find all answers by a given respondent
Question.prototype.findAll = function(name) {
  return this.answers.filter(answer => answer.respondent === name);
};

// Method to find all answers after a given date
Question.prototype.afterDate = function(date) {
  return this.answers.filter(answer => answer.date > new Date(date));
};

// Method to list answers by increasing date
Question.prototype.listByDate = function() {
  return this.answers.slice().sort((a, b) => a.date - b.date);
};

// Method to list answers by decreasing score
Question.prototype.listByScore = function() {
  return this.answers.slice().sort((a, b) => b.score - a.score);
};

// Create an instance of `Question` with at least four `Answer`s in it and test the methods
let question = new Question("What is JavaScript?", "Alice", "2023-10-01");

question.add(new Answer("JavaScript is a programming language.", "Bob", 5, "2023-10-02"));
question.add(new Answer("It is used for web development.", "Charlie", 3, "2023-10-03"));
question.add(new Answer("JavaScript can be used on both client and server sides.", "Dave", 4, "2023-10-04"));
question.add(new Answer("It is a versatile language.", "Eve", 2, "2023-10-05"));

// Test the methods
console.log("All answers by Charlie:", question.findAll("Charlie"));
console.log("All answers after 2023-10-03:", question.afterDate("2023-10-03"));
console.log("Answers sorted by date:", question.listByDate());
console.log("Answers sorted by score:", question.listByScore());

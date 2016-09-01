var QUESTIONS = [{
    text: 'question 1',
    answers: [
        '0815',
        '2B',
        'BAM128',
        'Barely'
    ],
    answer: 0
}, {
    text: 'question 2',
    answers: [
        '0815',
        '2B',
        'BAM128',
        'Barely'
    ],
    answer: 1
}, {
    text: 'question 3',
    answers: [
        '0815',
        '2B',
        'BAM128',
        'Barely'
    ],
    answer: 2
}, {
    text: 'question 4',
    answers: [
        '0815',
        '2B',
        'BAM128',
        'Barely'
    ],
    answer: 3
}];

//save the index number of the correct & incorrect questions into an array called answeredQuestions
//create a new property in the incoming array that will determine the correct/incorrect answer by the user (true/false)
    //use this to create a score tracker, 
        //if correctAnswer === true, create a counter for the score
        //on the results page, show how many questions the user answered correctly
//when user goes back to the website after closing, the question correct will be pushed to array
    //correct/incorrect store as new property: true/false
//user comes back
    //IF  the length of the answeredQuestions array > 0
        //THEN shift.() the QUESTIONS in the length of the answeredQuestions array

var state = {
    currentQuestion: 1,
    correctlyAnswered: []
};

var currentQuestionNumber = state.currentQuestion;
var correctAnsweredQuestions = state.correctlyAnswered;

//calculates total questions 
var computeTotalQuestion = function(questions) {
    return questions.length;
}

//passes the computerTotalQuestion results and changes the text of the element in HTML
var renderTotalQuestions = function() {
    $('.questions-total').text(computeTotalQuestion(QUESTIONS));
}
//renderTotalQuestions();

//render question text
var renderQuestion = function() {
    var currentQuestionIndex = currentQuestionNumber - 1;
    $('.question').html('')
                  .text(QUESTIONS[currentQuestionIndex].text);
    renderChoices(QUESTIONS[currentQuestionIndex]);
}
//renderQuestion(state, $('.question'));


//render answer choices
var renderChoices = function(questionArrayLocation) {
    $('.answer').html('');
    questionArrayLocation.answers.forEach(function(element, index){
        $('.answers').append('<li value="' + index + '">' + element + '</li>');
    })
}

//state modification function: move to the next question
var nextQuestion = function() {
    state.currentQuestion += 1;
};

//INVOKE ONLY after they press press answer!!!
var userSubmitAnswer = function() {
        correctAnsweredQuestions.push(state.currentQuestion);
};


// User scenario:
// User answers first question correctly:
// console.log(state);
//   userSubmitAnswer(state, true);
//   nextQuestion(state);
// console.log(state);

// {  currentQuestion: 1, correctlyAnswered: [0] }

//render current score: 
var renderCurrentScore = function(state, element) {
    element.text(computeScore(state));
}
//renderCurrentScore(state, $('.score'));
var computeScore = function(state) {
    return correctAnsweredQuestions.length;
}



//render display: checks for: (called in event listener)
    //IF currentQuestion < total#Questions
        //THEN show question div, hide results page div.
var renderDisplay = function() {
    //if state.currentQuestion > QUestions.length
        //THEN $('.questions-page').hide();
            // $('.results-page').show();
    if(currentQuestionNumber > QUESTIONS.length) {
        $('.questions-page').hide();
        $('.results-page').show();
    };
};




$(document).ready(function() {
    renderQuestion(); 
    $('.answers li').on('click',function() {
      if ($(this).val() === QUESTIONS[currentQuestionNumber].answer){
        alert('bravo!!');       
        userSubmitAnswer()
        nextQuestion();
        renderQuestion();
console.log(state.currentQuestion);
      }
      else{
            alert('Sorry!')
      }
    })


});



// ----------

/*



var answeredQuestions = [],





var questionsPageElement = $('.questions-page');
var questionCurrentElement = $('.question-current');
var questionsTotalElement = $('.questions-total');
var questionElement = $('.question');
var answersElement = $('.answers');

var resultsPageElement = $('.results-page');
var scoreElement = $('.score');
var restartButtonElement = $('.restart-button');

var showResults = function() {
    questionsPageElement.hide();
    resultsPageElement.show();
};

var showQuestions = function() {
    resultsPageElement.hide();
    questionsPageElement.show();
};

var resetScore = function() {
    scoreElement.text(0); //grab the score from scroe tracker property?
};

var increaseScore = function() {
    var score = parseInt(scoreElement.text(), 10);
    scoreElement.text(score + 1);
};

var transferQuestion = function() {
    answeredQuestions.push(QUESTIONS.shift());
}

var currentQuestionCount = answeredQuestions.length + 1;


var setQuestion = function() {
    // var question = QUESTIONS[questionIndex];
     var question = QUESTIONS[0]; //using this because previous questions are pop and pushed
    questionCurrentElement.text(currentQuestionCount);
    questionElement.text(question.text);
    answersElement.empty();
    //we can use .forEach/map?
    for (var i = 0; i < question.answers.length; i++) {
        var answer = question.answers[i];
        answersElement.append('<li><button type="button">' + answer + '</button></li>');
    }
};

answersElement.on('click', 'button', function() {
    var choice = $(this).parent().index(); //this is the index of the answer choice
    console.log(choice);
    // var questionIndex = parseInt(questionCurrentElement.text(), 10); //parsing current question # into a num
    var question = QUESTIONS[0];
    if (question.answer === choice) { //checking if answer is correct
        increaseScore();
        //invoke a function where when the question is correct, the Question[object] gets into the correctAnswer array
        //invoke a function that POPS the current element in the QUESTIONS array, and push into answeredQuestions array
    }

    if (QUESTIONS.length > 0) {
        // setQuestion(questionIndex + 1);
        setQuestion();
    } else {
        showResults();
    }
});

restartButtonElement.click(function() {
    setQuestion();
    resetScore();
    showQuestions();
});

$(document).ready(function() {
    questionsTotalElement.text(QUESTIONS.length + answeredQuestions.length);
    setQuestion();
});
*/
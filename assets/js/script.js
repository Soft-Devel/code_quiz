let mainTextEl = document.querySelector("#text");
let mainButtonsEl = document.querySelector("#buttons");
let timerDisplayEl = document.querySelector(".timer");
let viewScoresEl = document.querySelector(".high-scores");
// let quizQuestionsEl = document.querySelector("#quiz-questions");
// var tasksCompletedEl = document.querySelector("#tasks-completed");
// var pageContentEl = document.querySelector("#page-content");


// var listItemEl = document.createElement("li");
// var listItemEl = document.createElement("li");
// var listItemEl = document.createElement("li");
// var listItemEl = document.createElement("li");


// let startScreenHeading = document.createElement("h1");
// document.getElementById("h1").innerHTML = "Coding Quiz Challenge";

let startScreen = function () {

    let quizHeadingEl = document.createElement("h1");
    // taskInfoEl.className = "task-info";
    quizHeadingEl.innerHTML =
        "Coding Quiz Challenge";


    mainTextEl.appendChild(quizHeadingEl);

    let quizDescriptionEl = document.createElement("p");
    quizDescriptionEl.className = "start-screen1";
    quizDescriptionEl.innerHTML = 
        "Try to answer the following code related questions within the time limit.";


    mainTextEl.appendChild(quizDescriptionEl);

    let quizDescriptionEl2 = document.createElement("p");
    quizDescriptionEl2.className = "start-screen2";
    quizDescriptionEl2.innerHTML = 
        "Keep in mind that incorrect answers will penalize your score/time by ten seconds!";


    mainTextEl.appendChild(quizDescriptionEl2);


    let quizButtonEl = document.createElement("button");
    quizButtonEl.className = "start-screen";
    quizButtonEl.innerHTML = 
        "Start Quiz"

    mainButtonsEl.appendChild(quizButtonEl);


};

let quizQuestionNumber = function () {
    // console.log("question number");
    // document.body.innerHTML = "";
    // console.log(true);
};



let quizQuestionsScreen = function () {
    // console.log("button pressed");

    // let quizQuestionsDel = document.getElementsByClassName("start-screen1");
    document.body.innerHTML = "";


    // let 
    
    // let quizQuestionsEl = document.createElement ("p")
    // quizQuestionsEl.className = "quiz-questions";
    // quizQuestionsEl.innerHTML = 
    // quizQuestionNumber()

    // mainTextEl.appendChild(quizQuestionsEl);

};

// debugger;
let taskButtonHandler = function(event) {
    // get target element from event
    let targetEl = event.target;
  
    if (targetEl.matches(".start-screen")) {
        console.log(true);
        quizQuestionsScreen();
        // debugger;
    // } else if (targetEl.matches(".delete-btn")) {
    //   var taskId = targetEl.getAttribute("data-task-id");
    //   deleteTask(taskId);
    // }
    }
};

// for quiz buttons
mainButtonsEl.addEventListener("click", taskButtonHandler);

startScreen();
// debugger;
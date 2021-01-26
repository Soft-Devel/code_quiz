let mainTextEl = document.querySelector("#text");
let mainButtonsEl = document.querySelector("#buttons");
let headerEl = document.querySelector(".header-wrapper");
// let viewScoresEl = document.querySelector(".high-scores");
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


    // document.getElementById("start-screen1").style.display = "none";

    // let viewScoresLinkEl = document.createElement("a");
    // viewScoresLinkEl.innerHTML = ""

    // let viewScoresLinkEl = document.createElement("div");
    // viewScoresLinkEl.className = "high-scores";
    // viewScoresLinkEl.innerHTML =
    // "<a href = '#high-scores'>View High Scores</a>";

    // // "<a href='high-scores'>View High Scores</a>";
    // headerEl.appendChild(viewScoresLinkEl);


    // let timerEl = document.createElement("div");
    // timerEl.className = "timer";
    // timerEl.innerHTML =
    // "<p class = 'countdown'>Time: </p>";
    // headerEl.appendChild(timerEl);


    // let quizHeadingEl = document.createElement("h1");
    // // taskInfoEl.className = "task-info";
    // quizHeadingEl.innerHTML =
    //     "Coding Quiz Challenge";


    // mainTextEl.appendChild(quizHeadingEl);

    // let quizDescriptionEl = document.createElement("p");
    // quizDescriptionEl.id = "start-screen1";
    // quizDescriptionEl.innerHTML = 
    //     "Try to answer the following code related questions within the time limit.";


    // mainTextEl.appendChild(quizDescriptionEl);

    // let quizDescriptionEl2 = document.createElement("p");
    // quizDescriptionEl2.className = "start-screen2";
    // quizDescriptionEl2.innerHTML = 
    //     "Keep in mind that incorrect answers will penalize your score/time by ten seconds!";


    // mainTextEl.appendChild(quizDescriptionEl2);


    // let quizButtonEl = document.createElement("button");
    // quizButtonEl.className = "start-screen";
    // quizButtonEl.innerHTML = 
    //     "Start Quiz"

    // mainButtonsEl.appendChild(quizButtonEl);


};

// let quizQuestionNumber = function () {
//     // console.log("question number");
//     // document.body.innerHTML = "";
//     // console.log(true);
// };



let quizIntroScreen = function () {



    // console.log("button pressed");

    // let quizQuestionsDel = document.getElementsByClassName("start-screen1");
    // document.body.innerHTML = "";

    // let viewScoresLinkEl = document.createElement("div");
    // viewScoresLinkEl.className = "high-scores";
    // viewScoresLinkEl.innerHTML =
    // "<a href = '#high-scores'>View High Scores</a>";

    // // "<a href='high-scores'>View High Scores</a>";
    // headerEl.appendChild(viewScoresLinkEl);

    console.log(true);

    // let timerEl = document.createElement("div");
    // timerEl.className = "timer";
    // timerEl.innerHTML =
    // "<p class = 'timer'>Time: </p>";
    // headerEl.appendChild(timerEl);


    // let timerView = document.createElement("p");
    // timerView.innerHTML = 
    // "Time";

    // timerDisplayEl.appendChild(timerView);

    
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

    let buttonIDs = [
        "go-back",
        "clear-button",
        "high-score-button",
        "start-screen",
        "quiz-num1",
        "quiz-num2",
        "quiz-num3",
        "quiz-num4",
        "quiz-num11",
        "quiz-num12",
        "quiz-num13",
        "quiz-num14",
        "quiz-num21",
        "quiz-num22",
        "quiz-num23",
        "quiz-num24",
        "quiz-num31",
        "quiz-num32",
        "quiz-num33",
        "quiz-num34",
        "quiz-num41",
        "quiz-num42",
        "quiz-num43",
        "quiz-num44"
    ];

    for (let i = 0; i < buttonIDs.length; i++) {
  
    if (targetEl.matches(".start-screen")) {

        // document.getElementById("start-screen1").style.display = "none";


        quizIntroScreen();
        // debugger;
    // } else if (targetEl.matches(".delete-btn")) {
    //   var taskId = targetEl.getAttribute("data-task-id");
    //   deleteTask(taskId);
    // }
    }
}
};

// for quiz buttons
mainButtonsEl.addEventListener("click", taskButtonHandler);

startScreen();
// debugger;
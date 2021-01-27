// Initialize Index.html containers.  Put section headings into variables.

let mainButtonsEl = document.querySelector("#buttons");


let score = 0;





//Create Landing Page of Quiz App

let startScreen = function () {

    // Turn on HTML display elements for the page

    $ ("#high-scoresS").show();
    $ ("#timerS").show();
    $ ("#start-screen-headingS").show();
    $ ("#start-screen1S").show();
    $ ("#start-screen2S").show();
    $("#start-screenS").show();

};


//Lands on Page 1 of Quiz After Clicking Start Quiz on Intro Screen and Subsequent Pages of Quiz follow this one

let quizQuestion1 = function () {


    // Set HTML Elements

    $ ("#start-screen-headingS").hide();
    $ ("#start-screen1S").hide();
    $ ("#start-screen2S").hide();
    $ ("#start-screenS").hide();

    $ ("#quiz-questions1S").show();
    $ ("#quiz-screen1S").show();
};

let quizQuestion2 = function () {


    // Set HTML Elements for Page Two of Quiz

    $ ("#quiz-questions1S").hide();
    $ ("#quiz-screen1S").hide();
    $("#quiz-screen2S").show();
    $("#quiz-questions11S").show(); 
    $("#answerc").hide();
    $("#answerw").hide();
    console.log("Score is:" + score);


};
// Function for Page Three of Quiz

let quizQuestion3 = function () {

    $("#quiz-screen2S").hide();
    $("#quiz-questions11S").hide(); 
    $("#answerc").hide();
    $("#answerw").hide();
    $("#quiz-questions21S").show();
    $("#quiz-screen3S").show();
    console.log("Score is:" + score);

};

let quizQuestion4 = function () {

    $("#answerc").hide();
    $("#answerw").hide();
    $("#quiz-questions21S").hide();
    $("#quiz-screen3S").hide();
    $("#quiz-questions31S").show(); 
    $("#quiz-screen4S").show();
    console.log("Score is:" + score);

};

let quizQuestion5 = function () {

    $("#answerc").hide();
    $("#answerw").hide();
    $("#quiz-questions31S").hide(); 
    $("#quiz-screen4S").hide(); 
    $("#quiz-questions41S").show(); 
    $("#quiz-screen5S").show();
    console.log("Score is:" + score);

};




// Process Mouse Clicks

let taskButtonHandler = function(event) {
    let targetEl = event.target;


// Starts Quiz By Loading First Page of Quiz
  
    if (targetEl.matches(".start-screen")) {

        quizQuestion1();
    }

// Page One of Quiz

    else if (targetEl.matches("#quiz-num1")) {

        // Incorrect Answer.  Display results.  After Delay take to next question

        $ ("#answerw").show();

        setTimeout(quizQuestion2, 1500);

    } else if (targetEl.matches("#quiz-num2")) {

        $ ("#answerw").show();


        setTimeout(quizQuestion2, 1500);

    } else if (targetEl.matches("#quiz-num3")) {

        $ ("#answerw").show();

        setTimeout(quizQuestion2, 1500);
    

    } else if (targetEl.matches("#quiz-num4")) {
    // This is the Correct Answer.  Displays Correct and Waits 3 sec and loads next page.

        $ ("#answerc").show();

        score++ ;


        setTimeout(quizQuestion2, 1500);

    }

// Page Two



    else if (targetEl.matches("#quiz-num11")) {

        $ ("#answerw").show();


        setTimeout(quizQuestion3, 1500);
    

    }

    else if (targetEl.matches("#quiz-num12")) {

        $ ("#answerw").show();


        setTimeout(quizQuestion3, 1500);
    

    }

    else if (targetEl.matches("#quiz-num13")) {

        $ ("#answerc").show();

        score++ ;


        setTimeout(quizQuestion3, 1500);
    

    }

    else if (targetEl.matches("#quiz-num14")) {

        $ ("#answerw").show();


        setTimeout(quizQuestion3, 1500);

    }

// Page Three

    else if (targetEl.matches("#quiz-num21")) {

        $ ("#answerw").show();


        setTimeout(quizQuestion4, 1500);        

    }

    else if (targetEl.matches("#quiz-num22")) {
        $ ("#answerw").show();


        setTimeout(quizQuestion4, 1500);
    }

    else if (targetEl.matches("#quiz-num23")) {

        $ ("#answerc").show();

        score++ ;

        setTimeout(quizQuestion4, 1500);

    }

    else if (targetEl.matches("#quiz-num24")) {

        $ ("#answerw").show();


        setTimeout(quizQuestion4, 1500);

    }

// Page Four

    else if (targetEl.matches("#quiz-num31")) {

        $ ("#answerw").show();


        setTimeout(quizQuestion5, 1500);

    }

    else if (targetEl.matches("#quiz-num32")) {

        $ ("#answerw").show();


        setTimeout(quizQuestion5, 1500);


    }

    else if (targetEl.matches("#quiz-num33")) {

        $ ("#answerc").show();

        score ++ ;


        setTimeout(quizQuestion5, 1500);

    }

    else if (targetEl.matches("#quiz-num34")) {

        $ ("#answerw").show();


        setTimeout(quizQuestion5, 1500);

    }

// Page Five

else if (targetEl.matches("#quiz-num41")) {

    $ ("#answerw").show();


    setTimeout(quizQuestion5, 1500);

}

else if (targetEl.matches("#quiz-num42")) {

    $ ("#answerw").show();


    setTimeout(quizQuestion5, 1500);


}

else if (targetEl.matches("#quiz-num43")) {

    $ ("#answerw").show();


    setTimeout(quizQuestion5, 1500);

}

else if (targetEl.matches("#quiz-num44")) {

    $ ("#answerc").show();

    score ++ ;


    setTimeout(quizQuestion5, 1500);

}


};

// Listen for Click Events on screen
let clicks = mainButtonsEl.addEventListener("click", taskButtonHandler);

startScreen();
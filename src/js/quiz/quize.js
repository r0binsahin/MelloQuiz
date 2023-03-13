import { questions } from "./questions";

function generateQuiz(questions, quizContainer, resultsContainer, submitButton){

	function showQuestions(questions, quizContainer){
		// code will go here
	}

	function showResults(questions, quizContainer, resultsContainer){
		// code will go here
	}

	// show the questions
	showQuestions(questions, quizContainer);

	// when user clicks submit, show results
	submitButton.onclick = function(){
		showResults(questions, quizContainer, resultsContainer);
	}
}

function showQuestions(questions, quizContainer) {
    const output = [];
    const answers = [];


    for( let i = 0; i < questions.length; i++) {
        for( letter in questions[i].answers) {
            answers.push(
                `<label>`
                + `<input type="radio" name="question'+i+'" value="'+letter+'">`
                + letter + ': '
                + questions[i].answers[letter]
            + `</label>`
            );
        }

        output.push (
            `<div class="question">`+ questions[i].question + `</div>`
			+ `<div class="answers">` + answers.join('') + `</div>`
        );
    }

    quizContainer.innerHTML = output.join('');
}

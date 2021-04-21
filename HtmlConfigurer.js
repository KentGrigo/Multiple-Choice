class HtmlConfigurer {
    hideEverything() {
        document.getElementById('start-quiz').style.display = "none"
        document.getElementById('statistics').style.display = "none"
        document.getElementById('score').style.display = "none"
        document.getElementById('question-navigation').style.display = "none"
        document.getElementById('question-answer').style.display = "none"
        document.getElementById('next-question-button').style.display = "none"
        document.getElementById('finish-test').style.display = "none"
    }

    showStartQuiz() {
        document.getElementById('start-quiz').style.display = "block"
    }

    showStatistics() {
        document.getElementById('statistics').style.display = "block"
    }

    showScore() {
        document.getElementById('score').style.display = "block"
    }

    showQuestionNavigation() {
        document.getElementById('question-navigation').style.display = "block"
    }

    showQuestionAnswer() {
        document.getElementById('question-answer').style.display = "block"
    }

    showNextQuestionButton() {
        document.getElementById('next-question-button').style.display = "block"
    }

    showFinishQuiz() {
        document.getElementById('finish-test').style.display = "block"
    }
}

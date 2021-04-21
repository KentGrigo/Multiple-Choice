class HtmlConfigurer {
    hideEverything() {
        this.hide('start-quiz')
        this.hide('statistics')
        this.hide('score')
        this.hide('question-navigation')
        this.hide('question-answer')
        this.hide('next-question-button')
        this.hide('finish-test')
    }

    showStartQuiz() {
        this.show('start-quiz')
    }

    showStatistics() {
        this.show('statistics')
    }

    showScore() {
        this.show('score')
    }

    showQuestionNavigation() {
        this.show('question-navigation')
    }

    showQuestionAnswer() {
        this.show('question-answer')
    }

    showNextQuestionButton() {
        this.show('next-question-button')
    }

    showFinishQuiz() {
        this.show('finish-test')
    }

    show(id) {
        document.getElementById(id).style.display = "block"
    }

    hide(id) {
        document.getElementById(id).style.display = "none"
    }
}

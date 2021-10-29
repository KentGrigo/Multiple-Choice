class QuestionHandler {
    constructor(questionSelector) {
        this.statistics = new Statistics()
        this.timer = new Timer()
        this.isDone = false

        this.questionSelector = questionSelector
        this.showQuestionNavigation()
        this.newQuestion()
    }

    htmlDecode(input) {
        var doc = new DOMParser().parseFromString(input, "text/html")
        return doc.documentElement.textContent
    }

    checkAnswer(element) {
        if (this.questionSelector.hasQuestionSelection()) {
            let questionSelectorButton = document.getElementById("question-selector-" + (this.questionSelector.currentQuestionNumber + 1))
            questionSelectorButton.style.color = GREY
        }

        for (let index = 0; index < 5; index++) {
            let option = document.getElementById('option' + index)
            option.style.color = BLACK
        }

        let answerIndex = parseInt(element.value)
        let isAnswerCorrect = this.currentQuestion.giveAnswer(answerIndex)
        element.style.color = GREY

        if (this.questionSelector.hasCheckAnswer()) {
            if (isAnswerCorrect) {
                this.statistics.addSuccess()
                element.style.color = FRESH_ONION
            } else {
                this.statistics.addFailure()
                element.style.color = PURE_CRIMSON
                document.getElementById('option' + this.currentQuestion.correctAnswerId).style.color = FRESH_ONION
            }
            for (let index = 0; index < 5; index++) {
                let option = document.getElementById('option' + index)
                option.disabled = true
            }
        }

        if (this.questionSelector.hasAutoNewQuestion()) {
            this.newQuestion()
        }
    }

    showStats() {
        if (!this.isDone) {
            return
        }

        this.statistics.checkQuestions(this.questionSelector.questions)
        this.timer.stopTimer()
        htmlConfigurer.hideEverything()
        htmlConfigurer.showStatistics()
        htmlConfigurer.showScore()

        this.questionSelector.questions.forEach(
            (answer, index) => 
                document
                    .getElementById("outer")
                    .appendChild(answer.generateHtml(index + 1))
        )
    }

    newQuestion() {
        if (this.isDone || this.questionSelector.isDone()) {
            return
        }

        let newQuestion = this.questionSelector.newQuestion()
        this.changeQuestion(newQuestion)
    }

    finishTest() {
        this.isDone = true
        this.showStats()
    }

    changeQuestionByNumber(questionNumber) {
        let question = this.questionSelector.questionByNumber(questionNumber)
        this.changeQuestion(question)
    }

    changeQuestion(question) {
        this.currentQuestion = question
        this.updateHtml()
    }

    updateHtml() {
        document.getElementById('question-number').innerHTML = "# " + (this.questionSelector.currentQuestionNumber + 1)
        document.getElementById('question').innerHTML = this.currentQuestion.question

        this.updateOption('option0', this.currentQuestion.option0)
        this.updateOption('option1', this.currentQuestion.option1)
        this.updateOption('option2', this.currentQuestion.option2)
        this.updateOption('option3', this.currentQuestion.option3)
        this.updateOption('option4', this.currentQuestion.option4)

        if (this.currentQuestion.givenAnswer != null) {
            let chosenOption = document.getElementById("option" + this.currentQuestion.givenAnswerId)
            chosenOption.style.color = GREY
        }
    }

    updateOption(id, value) {
        let element = document.getElementById(id)
        element.innerHTML = value
        element.style.color = BLACK
        element.disabled = false
    }

    showQuestionNavigation() {
        let container = document.getElementById('question-navigation')
        self = this
        for (let questionNumber = 1; questionNumber <= this.questionSelector.numberOfQuestions; questionNumber++) {
            var button = document.createElement("button")
            button.innerHTML = questionNumber
            button.id = "question-selector-" + questionNumber
            button.onclick = function() { questionHandler.changeQuestionByNumber(this.innerHTML - 1) }

            container.appendChild(button)
        }
    }
}

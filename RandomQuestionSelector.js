class RandomQuestionSelector {
    constructor() {
        this.currentQuestionNumber = -1
        this.questions = questions
                            .map(question => new QuestionAnswer(
                                question.question,
                                question.correctAnswer,
                                question.option1,
                                question.option2,
                                question.option3,
                                question.option4
                            ))
        this.configureHtml()
    }

    hasAutoNewQuestion() {
        return false
    }

    hasCheckAnswer() {
        return true
    }

    hasQuestionSelection() {
        return false
    }

    isDone() {
        return false
    }

    newQuestion() {
        this.currentQuestionNumber += 1
        let questionNumber = this.randomQuestionNumber()
        return this.questions[questionNumber].shuffleOptions()
    }

    randomQuestionNumber() {
        return Math.floor(this.questions.length * Math.random())
    }

    configureHtml() {
        document.getElementById('start-quiz').style.display = "none"
        document.getElementById('statistics').style.display = "block"
        document.getElementById('score').style.display = "block"
        document.getElementById('question-navigation').style.display = "none"
        document.getElementById('question-answer').style.display = "block"
        document.getElementById('next-question-button').style.display = "block"
        document.getElementById('finish-test').style.display = "none"
    }
}

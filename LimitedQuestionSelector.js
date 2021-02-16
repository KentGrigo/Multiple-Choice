class LimitedQuestionSelector {
    constructor() {
        this.currentQuestionNumber = -1
        this.numberOfQuestions = Math.min(80, questions.length)
        this.questions = shuffle(questions)
                            .slice(0, this.numberOfQuestions)
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
        return true
    }

    hasCheckAnswer() {
        return false
    }

    hasQuestionSelection() {
        return true
    }

    isDone() {
        return this.numberOfQuestions <= this.currentQuestionNumber + 1
    }

    newQuestion() {
        if (this.isDone()) {
            return
        }

        this.currentQuestionNumber += 1
        return this.questions[this.currentQuestionNumber]
    }

    questionByNumber(questionNumber) {
        this.currentQuestionNumber = questionNumber
        return this.questions[this.currentQuestionNumber]
    }

    configureHtml() {
        document.getElementById('start-quiz').style.display = "none"
        document.getElementById('statistics').style.display = "block"
        document.getElementById('score').style.display = "none"
        document.getElementById('question-navigation').style.display = "block"
        document.getElementById('question-answer').style.display = "block"
        document.getElementById('next-question-button').style.display = "none"
        document.getElementById('finish-test').style.display = "block"
    }
}

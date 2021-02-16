class QuestionAnswer {
    constructor(question, correctAnswer, option1, option2, option3, option4) {
        this.question = question
        this.correctAnswer = correctAnswer
        this.options = [correctAnswer, option1, option2, option3, option4]
        this.givenAnswer = null
        this.isCorrect = null
        this.givenAnswerId = null
        this.shuffleOptions()
    }

    shuffleOptions() {
        shuffle(this.options)
        this.correctAnswerId = this.options.indexOf(this.correctAnswer)

        this.option0 = this.options[0]
        this.option1 = this.options[1]
        this.option2 = this.options[2]
        this.option3 = this.options[3]
        this.option4 = this.options[4]

        return this
    }

    giveAnswer(answer) {
        this.givenAnswer = answer
        this.isCorrect = answer === this.correctAnswer
        this.givenAnswerId = this.options.indexOf(this.givenAnswer)
        return this.isCorrect
    }

    generateHtml(questionNumber) {
        var header = document.createElement("h1")
        header.innerHTML = questionNumber + ": " + this.question
        var correctAnswer = document.createElement("p")
        correctAnswer.innerHTML = "Korrekte svar: " + this.correctAnswer
        var givenAnswer = document.createElement("p")
        givenAnswer.innerHTML = "Dit svar: " + (this.givenAnswer ? this.givenAnswer : "Intet givet")
        
        var container = document.createElement("div")
        container.className = "container"
        container.appendChild(header)
        container.appendChild(correctAnswer)
        container.appendChild(givenAnswer)

        if (this.isCorrect) {
            container.style.borderColor = FRESH_ONION
        } else {
            container.style.borderColor = PURE_CRIMSON
        }

        return container
    }
}

class Statistics {
    constructor() {
        this.correct = 0
        this.total = 0
        this.successRatio = 0
        this.updateHtml()
    }

    checkQuestions(questions) {
        this.correct = 0
        this.total = questions.length
        questions.forEach(question => {
            if (question.isCorrect) {
                this.correct++
            }
        })
        this.updateSuccessRatio()
    }

    addFailure() {
        this.total++
        this.updateSuccessRatio()
    }

    addSuccess() {
        this.correct++
        this.total++
        this.updateSuccessRatio()
    }

    updateSuccessRatio() {
        this.successRatio = Math.ceil(this.correct / this.total * 100)
        this.updateHtml()
    }

    updateHtml() {
        document.getElementById('correct').innerHTML = this.correct
        document.getElementById('total').innerHTML = this.total
        document.getElementById('successRatio').innerHTML = this.successRatio
    }
}

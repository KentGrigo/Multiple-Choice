function startLimitedQuiz() {
    questionHandler = new QuestionHandler(new LimitedQuestionSelector())
}

function startRandomQuiz() {
    questionHandler = new QuestionHandler(new RandomQuestionSelector())
}

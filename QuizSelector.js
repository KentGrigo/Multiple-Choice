function startLimitedQuiz() {
    htmlConfigurer = new HtmlConfigurer()
    questionHandler = new QuestionHandler(new LimitedQuestionSelector())
}

function startRandomQuiz() {
    htmlConfigurer = new HtmlConfigurer()
    questionHandler = new QuestionHandler(new RandomQuestionSelector())
}

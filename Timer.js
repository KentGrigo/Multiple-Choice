class Timer {
    constructor() {
        this.totalTime = 75 // minutes
        this.startTime = new Date()
        this.minutesElapsed = 0
        this.minutesLeft = this.totalTime
        this.updateTimer()
    }

    updateTimer() {
        let self = this
        this.timer = setInterval(function() {
            let millisecondsElapsed = Date.now() - self.startTime
            self.minutesElapsed = Math.floor(millisecondsElapsed / (1000 * 60))
            self.minutesLeft = self.totalTime - self.minutesElapsed
            self.updateHtml()
        }, 1000)
    }

    stopTimer() {
        clearInterval(this.timer)
    }

    updateHtml() {
        document.getElementById('timer').innerHTML = this.minutesLeft
    }
}

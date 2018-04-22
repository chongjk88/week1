//Defining class Timer
class Timer {
    constructor(seconds) {
        this.seconds = seconds;
    }
    
    start() {
        const timerInterval = setInterval(function() {
            if (this.seconds === 0) {
                clearInterval(timerInterval);
            };
            console.log(this.seconds);
            this.seconds -= 1;
        }, 1000);
    }
}


module.exports = Timer;

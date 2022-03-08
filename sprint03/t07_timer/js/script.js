class Timer {
    constructor(str, timeout, cycles) {
        this.str = str;
        this.timeout = timeout;
        this.cycles = cycles;
    }

    start() {
        console.log(`Timer ${this.str} started (timeout=${this.timeout},  stopCounter=${this.cycles})`);
        this.cyclesLeft = this.cycles - 1;
        this.timer = setInterval(() => this.tick(), this.timeout);
    }
    tick() {
        if(this.cyclesLeft >= 0)
        {
            console.log("Timer "+ this.str + " Tick! | cycles left " + this.cyclesLeft)
            this.cyclesLeft--
        }
        else
        {
            this.stop();
        }
    }
    stop() {
        clearInterval(this.timer);
        console.log(`Timer ${this.str} stopped`);
    }
}

function runTimer(id, timeout, counter) {
    let timer = new Timer(id, timeout, counter)
    timer.start();
}


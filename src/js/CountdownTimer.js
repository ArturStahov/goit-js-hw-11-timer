export default class CountdownTimer {

    constructor(clockUiRef) {
        this.timerId = null;
        this.days = 0;
        this.hours = 0;
        this.mins = 0;
        this.secs = 0;
        this.UiDay = clockUiRef.querySelector('[data-value="days"]');
        this.UiHours = clockUiRef.querySelector('[data-value="hours"]');
        this.UiMins = clockUiRef.querySelector('[data-value="mins"]');
        this.UiSecs = clockUiRef.querySelector('[data-value="secs"]');
        this.isActive = false
    }

    start(targetDate) {
        if (!this.isActive) {
            this.timerId = setInterval(() => {
                let curentDate = Date.now();
                if (Number(targetDate) < Number(curentDate)) {
                    console.warn("date entered is less than current!Enter current date!!!!!")
                    this.stop()
                    return;
                }
                let time = targetDate - curentDate;
                this.isActive = true;
                this.calculateTimer(time);
                this.updateClockUi();

            }, 1000);
        }
    }

    stop() {
        this.isActive = false
        clearInterval(this.timerId);
        this.UiDay.textContent = "00"
        this.UiHours.textContent = "00"
        this.UiMins.textContent = "00"
        this.UiSecs.textContent = "00"
    }

    calculateTimer(time) {
        const pad = (value) => {
            return String(value).padStart(2, "0");
        }
        this.days = pad(Math.floor(time / (1000 * 60 * 60 * 24)));
        this.hours = pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
        this.mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
        this.secs = pad(Math.floor((time % (1000 * 60)) / 1000));
    }

    updateClockUi() {
        this.UiDay.textContent = this.days
        this.UiHours.textContent = this.hours
        this.UiMins.textContent = this.mins
        this.UiSecs.textContent = this.secs
    }

}




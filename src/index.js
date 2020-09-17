import './styles.css';
import Timer from './js/CountdownTimer.js'


const refs = {
    timerControl: document.querySelector('#timer-control'),
    clockUiRef: document.querySelector('#timer-1'),
    inputDate: document.querySelector('[data-input-date="input-date"]'),
    labelInputDate: document.querySelector('#label-input'),
}

// const targetDate = new Date('Oct 10, 2020').getTime()
const timer = new Timer(refs.clockUiRef);


const timerControlHandler = (event) => {
    if (event.target.dataset.button === "button-start") {
        if (refs.inputDate.value !== "") {
            timer.start(refs.inputDate.valueAsNumber)
            return
        }
        refs.labelInputDate.textContent = "Enter the date!!!!"
        refs.labelInputDate.style.color = "red"
    }
    if (event.target.dataset.button === "button-stop") {
        timer.stop();
        refs.labelInputDate.textContent = "Select date"
        refs.labelInputDate.style.color = "black"
    }
}


refs.timerControl.addEventListener('click', timerControlHandler);

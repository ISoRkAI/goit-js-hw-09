import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

const refs = {
    input: document.querySelector('input[type="text"]'),
    startBtn: document.querySelector('[data-start]'),
    days: document.querySelector('[data-days]'),
    hours: document.querySelector('[data-hours]'),
    minutes: document.querySelector('[data-minutes]'),
    seconds: document.querySelector('[data-seconds]'),
};

refs.startBtn.setAttribute('disabled', true)
  
flatpickr(refs.input, {
    isActive: false,
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
        if (selectedDates[0] < Date.now()) {
            refs.startBtn.setAttribute('disabled', true);
            window.alert("Please choose a date in the future");
        } else {
            refs.startBtn.removeAttribute('disabled')
            refs.startBtn.addEventListener("click", () => {
                if (this.isActive) {
                    return
                } else {
                    this.isActive = true;
                    timerId = setInterval(() => {
                        const currentTime = Date.now();
                        const time = selectedDates[0] - currentTime;
                        const timeComponents = convertMs(time)
                        console.log(timeComponents)
                        if (time < 1000) {
                            clearInterval(timerId)
                        }
                    }, 1000);
                }
            });
        }console.dir(selectedDates)
         console.dir(selectedDates[0])
    } 
    
});

function pad(value) {
    return String(value).padStart(2, '0');
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
    const days = pad(Math.floor(ms / day));
    refs.days.textContent =`${days}`
  // Remaining hours
    const hours = pad(Math.floor((ms % day) / hour));
    refs.hours.textContent =`${hours}`
  // Remaining minutes
    const minutes = pad(Math.floor(((ms % day) % hour) / minute));
    refs.minutes.textContent =`${minutes}`
  // Remaining seconds
    const seconds = pad(Math.floor((((ms % day) % hour) % minute) / second));
    refs.seconds.textContent =`${seconds}`

  return { days, hours, minutes, seconds };
}

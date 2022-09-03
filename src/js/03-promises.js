import { Notify } from "notiflix"
const refs = {
  form: document.querySelector('.form'),
}

refs.form.addEventListener('submit', onFormSubmit)

function onFormSubmit(evt) {
  evt.preventDefault()

  const { delay, step, amount } = evt.target.elements
  let delayValue = +delay.value

  for (let i = 1; i <= +amount.value ; i++) {

    createPromise(i, delayValue)
      .then(({ position, delay }) => {
        Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
      });
    delayValue += +step.value
  }
  evt.target.reset();
}

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay)
      
  })
  
}
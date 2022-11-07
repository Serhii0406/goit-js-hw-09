import Notiflix from 'notiflix';
import "notiflix/dist/notiflix-3.2.5.min.css";

const refs = {
  delay: document.querySelector('[name="delay"]'),
  step: document.querySelector('[name="step"]'),
  amount: document.querySelector('[name="amount"]'),
}

const form = document.querySelector('.form');
form.addEventListener('input', inputChecked);

function inputChecked() {
  if (refs.amount.value < 0  || refs.delay.value < 0 || refs.step.value < 0) {
    Notiflix.Notify.failure('Please, enter a number greater than 0');
  }
}

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  if (shouldResolve) {
    return new Promise((resolve, reject) => {
      setTimeout(function () {
        resolve({ position, delay });
      }, delay);
    });
  } else {
    return new Promise((resolve, reject) => {
      setTimeout(function () {
        reject({ position, delay });
      }, delay);
    });
  }
}

form.addEventListener('submit', function (event) {
  event.preventDefault();
  let delay = Number(refs.delay.value);
  const step = Number(refs.step.value);
  const amount = Number(refs.amount.value);
     
  for (let i = 1; i <= amount; i++) {
    createPromise(i, delay)
      .then(({ position, delay }) => {
        Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
      });
    delay += step;
  }
});
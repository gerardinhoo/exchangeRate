const currencyOne = document.querySelector('#currency-one');
const amountOne = document.querySelector('#amount-one');
const currencyTwo = document.querySelector("#currency-two");
const amountTwo = document.querySelector('#amount-two');


const rateEl = document.querySelector('#rate');
const swap = document.querySelector('#swap');


// Fetch exchange rates and update the DOM
function calculate() {
  const firstCurrency = currencyOne.value;
  const secondCurrency = currencyTwo.value;

  fetch(`https://api.exchangeratesapi.io/latest?base=${firstCurrency}`)
  .then(res => res.json())
  .then(data => {
    const rate = data.rates[secondCurrency];
    rateEl.innerText = `1 ${firstCurrency} = ${rate} ${secondCurrency}`;

    amountTwo.value = (amountOne.value * rate).toFixed(2);
  })
}


currencyOne.addEventListener('change', calculate);
amountOne.addEventListener('input', calculate);
currencyTwo.addEventListener('change', calculate);
amountTwo.addEventListener('input', calculate);


swap.addEventListener('click', () => {
  const temp = currencyOne.value;
  currencyOne.value = currencyTwo.value;
  currencyTwo.value = temp;
  calculate();
});


calculate();



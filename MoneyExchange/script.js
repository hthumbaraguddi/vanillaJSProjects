import  SelectOptionsTags  from "./countryWithFlagCurrency.js";

const currencyFrom = document.getElementById("currencyFrom");
const currencyTo = document.getElementById("currencyTo");
const amountEl_one = document.getElementById('amount-one');
const amountEl_two = document.getElementById('amount-two');
const rateEl = document.getElementById('rate');
const swap = document.getElementById('swap');
(function (){
    
    currencyFrom.innerHTML =SelectOptionsTags('USA');
    currencyTo.innerHTML = SelectOptionsTags('GBR');

})();

function calculate(){
    const api ="23581b1173106f0d157eba6";
    const currency_one = currencyFrom.value;
    const currency_two = currencyTo.value;
    const amount_one = amountEl_one.value;
    const amount_two = amountEl_two.value;
    var rate;
    fetch(`https://v6.exchangerate-api.com/v6/${api}/latest/${currency_one}`)
        .then(res => res.json())
        .then(data=>{
            if(data["result"]=="error")
            {
                rateEl.innerHTML ="Looks like API key is not valid.";
            }
            else{
                rate = data.conversion_rates[currency_two];
                console.log(rate);
                rateEl.innerHTML = `1 ${currency_one} = ${rate} ${currency_two}`;
                amountEl_two.value = (amount_one * rate).toFixed(2);
            }
        })
}

currencyFrom.addEventListener('change',calculate);
currencyTo.addEventListener('change',calculate);
amountEl_one.addEventListener('input',calculate);
amountEl_two.addEventListener('input',calculate);
swap.addEventListener('click', ()=>
{
    const temp = currencyFrom.value;
    currencyFrom.value=currencyTo.value;
    currencyTo.value=temp;
    calculate();
});
calculate();
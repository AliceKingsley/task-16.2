const elements = document.querySelectorAll('.product');
console.log(elements);

const divResult = document.querySelector('.result');

const buttonResult = document.querySelector('.calc');
buttonResult.addEventListener("click", calcSum);

let sum = 0;

function calcSum(event) {
    event.preventDefault();
    for (const element of elements) {
        console.log(element.checked);
        if (element.checked || element.selected) {
            sum += Number(element.value);
            console.log(sum); 
        }
    }
    
    divResult.textContent = `Стоимость вашего визита: ${sum} рублей.`;
    sum = 0;
}
const amount = document.getElementById("amount");
const time = document.getElementById("time");
const interest = document.getElementById("interes");
const alertText = document.getElementById("alertText");
const tableBody = document.getElementById("table-list tbody");

function calcularAmortizacion(){
    const amountText = amount.value;
    const timeText = time.value;
    const interestText = interest.value;

    if(amountText === "" || timeText === "" || interestText === ""){
        alertText.hidden = false;
        setTimeout(()=> {
            alertText.hidden = true;}, 200)
    }
    if (interestText === "Compuesto"){
        return calcularInteresCompuesto(amountText, timeText, interestText);
    }
    if (interestText === "Simple"){
        return calcularInteresSimple(amountText, timeText, interestText);
    }
}
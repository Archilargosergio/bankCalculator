const amount = document.getElementById("amount");
const time = document.getElementById("time");
const interest = document.getElementById("interest");
const alertText = document.getElementById("alertText");
const tableBody = document.querySelector("#table-list tbody");


function calcularInteres(monto, interes, tiempo){
    while(tableBody.firstChild){
        tableBody.removeChild(tableBody.firstChild);
    }
    
    let fechas = [];
    let fechaActual = Date.now();
    let mes_actual = moment(fechaActual);
    mes_actual = mes_actual.add(1, "month");

    let amortizacionConstante, pagoInteres, cuota;
    amortizacionConstante = monto / tiempo;
    for (let i = 1 ; i <= tiempo; i++){
        pagoInteres = monto * (interes / 100);
        cuota = amortizacionConstante + pagoInteres;
        monto = monto - amortizacionConstante;
        
        //Date format
        fechas[i] = mes_actual.format("DD-MM-YYYY");
        mes_actual = mes_actual.add(1, "month");
        
        const row = document.createElement('tr');
        row.innerHTML = ` 
        <td>${fechas[i]}</td>
        <td>${amortizacionConstante.toFixed(2)}</td>
        <td>${pagoInteres.toFixed(2)}</td>
        <td>${cuota.toFixed(2)}</td>
        <td>${monto.toFixed(2)}</td>
    `;

        tableBody.appendChild(row);
    }
}
function calcularAmortizacion(){
    const amountText = amount.value;
    const timeText = time.value;
    const interestText = interest.value;

    if(amountText === "" || timeText === "" || interestText === ""){
        alertText.hidden = false;
        setTimeout(()=> {
            alertText.hidden = true;}, 200)
    }
    else {
        return calcularInteres(amountText, interestText, timeText);
    }
}
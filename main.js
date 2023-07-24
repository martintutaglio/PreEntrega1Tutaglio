function calcularPrestamo() {
  let montoPrestamo = parseInt(prompt("Ingrese el monto del préstamo:"));
  let tasaInteresAnual = parseInt(prompt("Ingrese la tasa de interés (%):"));
  let plazoAnos = parseInt(prompt("Ingrese el plazo (años):"));

  const tasaMensual = tasaInteresAnual / 100 / 12;
  const numeroPagos = plazoAnos * 12;
  const cuotaMensual =
    (montoPrestamo * tasaMensual) / (1 - Math.pow(1 + tasaMensual, -numeroPagos));
  const montoTotal = cuotaMensual * numeroPagos;

  let resultado =
    "Cuota Mensual: $" + cuotaMensual.toFixed(2) + "\nMonto Total a Pagar: $" + montoTotal.toFixed(2);

  alert(resultado);
}

calcularPrestamo();

console.log
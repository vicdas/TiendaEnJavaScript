var fecha=new Date(2021, 11, 7, 3, 14, 00);
var contenedor = document.getElementById("fechas");

contenedor.innerHTML=fecha.toDateString();
console.log(fecha);
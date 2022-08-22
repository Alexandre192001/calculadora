function insert(num) {
  var numero = document.querySelector(".resultado-calculadora").innerHTML;
  document.querySelector(".resultado-calculadora").innerHTML = numero + num
}


document.querySelector(".reset").addEventListener("click", () => {
  document.querySelector(".resultado-calculadora").innerHTML = ""

})


document.querySelector(".delete").addEventListener("click", () => {
  var resultado = document.querySelector(".resultado-calculadora").innerHTML;
  document.querySelector(".resultado-calculadora").innerHTML = resultado.substring(0, resultado.length - 1)
})

document.querySelector(".igual").addEventListener("click", () => {
  var resultado = document.querySelector(".resultado-calculadora").innerHTML;
  if (resultado) {
    document.querySelector(".resultado-calculadora").innerHTML = eval(resultado);
  } else {

  }
})
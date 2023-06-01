
function agregar(valor) {
  document.getElementById('idLabelResultado').innerHTML += valor;
}


function calcular() {
  let cadena = document.getElementById('idLabelResultado').innerHTML

  let numeros = [];
  let operador = '+';
  let numeroActual = '';
  let resultado = 0;

  for (let i = 0; i < cadena.length; i++) {
    let caracter = cadena[i];

    if (!isNaN(caracter) || caracter === '.') {
      numeroActual += caracter;
    } else {
      let numero = parseFloat(numeroActual);
      numeros.push(numero);
      numeroActual = '';

      if (operador === '+') {
        resultado += numero;
      } else if (operador === '-') {
        resultado -= numero;
      } else if (operador === 'x') {
        resultado *= numero;
      } else if (operador === '÷') {
        resultado /= numero;
      }

      operador = caracter;
    }
  }

  // Calcular la última operación
  let ultimoNumero = parseFloat(numeroActual);
  if (!isNaN(ultimoNumero)) {
    numeros.push(ultimoNumero);

    if (operador === '+') {
      resultado += ultimoNumero;
    } else if (operador === '-') {
      resultado -= ultimoNumero;
    } else if (operador === 'x') {
      resultado *= ultimoNumero;
    } else if (operador === '÷') {
      resultado /= ultimoNumero;
    }
  }

  //return resultado;
  document.getElementById('idLabelResultado').innerHTML = resultado;

}


function eliminarElemento() {
  document.getElementById('idLabelResultado').innerHTML = '';
}




const borrar = () => (document.getElementById("ingreso").value = "");

const mostrar = (valor) => (document.getElementById("ingreso").value += valor);

const calcular = () => {
  var p = document.getElementById("ingreso").value;
  var q = eval(p);
  document.getElementById("resultado").innerHTML = q;
};

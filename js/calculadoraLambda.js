const sumar = (num1, num2) => num1 + num2;

// const sumarNumeros1 = () => {
//   var num1 = convertir("idNum1");
//   var num2 = convertir("idNum2");
//   document.getElementById("idLabelResultado").innerHTML =
//     "Resultado :  " + sumar(num1, num2);
// };

const parsear = (id) => {
  console.log("Convertir " + id);
  var numero = parseInt(document.getElementById(id).value);
  return numero;
};

const sumarNumeros = () => {
  document.getElementById("idLabelResultado").innerHTML =
    "Resultado :  " + (parsear("idNum1") + parsear("idNum2"));
  // console.log("Resultado :  " + (parsear("idNum1") + parsear("idNum2")));
};

const restarNumeros = () => {
  document.getElementById("idLabelResultado").innerHTML =
    "Resultado :  " + (parsear("idNum1") - parsear("idNum2"));
};

const multiplicarNumeros = () => {
  document.getElementById("idLabelResultado").innerHTML =
    "Resultado :  " + parsear("idNum1") * parsear("idNum2");
};

const dividirNumeros = () => {
  document.getElementById("idLabelResultado").innerHTML =
    "Resultado :  " + parsear("idNum1") / parsear("idNum2");
};

const eliminarElemento = () => {
  document.getElementById("idEliminar").remove();
  console.log(document.getElementById("idEliminar"));
  console.log("Test");
};

const insertarElemento = () => {
  document.getElementById("elemento").innerHTML = "<strong>Importante</strong>";
};

const conceptosJS = () => {
  // var (no es comunmente utilizado)
  // let
  // const

  var variable1 = "Nombre";
  var variable = 420;

  let variable3 = "Nombre";
  let variable4 = 8;

  const variable6 = "Nombre";
  const variable5 = 99;

  console.log(variable5);

  // Declaracion de arreglos
  const diasSemana = ["Lunes", "Martes", "Miercoles"];
  console.log(diasSemana);
  console.log(diasSemana[0]);
  diasSemana.push("Jueves");
  diasSemana.push("Viernes");

  console.log(diasSemana);

  const diasFinSemana = ["Sabado", "Domingo"];
  // diasSemana.push(diasFinSemana);
  // diasSemana.pop('Domingo');
  // diasSemana.unshift('Domingo');
  console.log(diasSemana.concat(diasSemana));

  const diasCompletos = diasSemana.concat(diasSemana);
  console.log(diasCompletos);

  for (const dia of diasCompletos) {
    console.log(dia);
  }

  // Declaracion de Objetos
  const persona = {
    nombre: "Paulo",
    apellido: "Aldaz",
    edad: 17,
    ciudad: "Quito",
  };
  const persona2 = {
    nombre: "Carlos",
    apellido: "Montalvo",
    edad: 17,
    ciudad: "Quito",
    vehiculo: {
      placa: "DDD-222",
      marca: "cherry",
      anhio: 2000,
    },
  };
  console.log(persona);
  console.log(persona2);

  //   const paulo = "paulo";
  //   paulo = "paulo2";

  //   console.log(paulo);

  const arreglo = ["uno", "dos"];

  arreglo.push("tres");
  arreglo[0] = "dd";
  console.log(arreglo);

//   Des arreglos
  const dias2 = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes"];
  const [dia1, dia2, dia3] = dias2;
  console.log(dia1);
  console.log(dia2);
  console.log(dia3);

  const [d1, d2, d3, d4, d5, d6] = [
    "Lunes",
    "Martes",
    "Miercoles",
    "Jueves",
    "Viernes",
  ];
  console.log(d6);
  console.log(d5);
  console.log(d4);
  console.log(d3);
  console.log(d1);
  console.log(d2);

//   Des objetos
const persona3 = {
    nombre: "Paulo",
    apellido: "Aldaz",
    edad: 18,
    ciudad: "Quito",
  };

  const {nombre,ciudad,vehiculo} = persona2;
  const {placa} = vehiculo
  
  
  console.log(vehiculo);
  console.log(placa);

  console.log(persona3.nombre + ' '+ persona3.apellido + ' '+ persona.edad + ' '+ persona.ciudad);



};


function parsear(id) {
    var numero=parseInt(document.getElementById(id).value) ;
    return numero
  }

  function sumarNumeros() {
    document.getElementById('idLabelResultado').innerHTML='Resultado :  ' + (parsear('idNum1')+parsear('idNum2'));
  }

  function restarNumeros() {
    document.getElementById('idLabelResultado').innerHTML='Resultado :  ' + (parsear('idNum1')-parsear('idNum2'));
  }


  function multiplicarNumeros() {
    document.getElementById('idLabelResultado').innerHTML='Resultado :  ' + (parsear('idNum1')*parsear('idNum2'));
  }

  function dividirNumeros() {
    document.getElementById('idLabelResultado').innerHTML='Resultado :  ' + (parsear('idNum1')/parsear('idNum2'));
  }

  function eliminarElemento(){
    document.getElementById('idEliminar').remove();
  }

  function insertarElemento(){
    document.getElementById('elemento').innerHTML='<strong>Importante</strong>';
  }


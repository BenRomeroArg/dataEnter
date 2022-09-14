function captura(){
    function Persona(nombre,edad,origen){
      this.nombre = nombre;
      this.edad = edad;
      this.origen = origen;
    }
    const nombreCapturar = document.getElementById('nombre').value;
    
    const edadCapturar = document.getElementById('edad').value;
    const origenCapturar = document.getElementById('origen').value;
    nuevaPersona = new Persona(nombreCapturar,edadCapturar,origenCapturar);
    console.log(nuevaPersona);
    agregar();
}
const baseDatos = [];
function agregar(){
    baseDatos.push(nuevaPersona);
   // console.log(baseDatos);
   let status = 'A';
    document.getElementById('tabla').innerHTML += '<tbody><td>'+nuevaPersona.nombre+'</td><td>'+nuevaPersona.edad+'</td><td>'+nuevaPersona.origen+'</td><td>'+status+'</td></tbody><hr>';
};
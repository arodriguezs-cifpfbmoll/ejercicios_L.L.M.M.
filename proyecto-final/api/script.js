var lista = []
var td = document.getElementById("td").value
var marca = document.getElementById("marca").value
var disp = {
  dispositive: td,
  marca: marca
}

  //FUNCION GUARDAR
  function guardar_disp() {

    //Guardar en  lista
    lista.push(disp)

    //guardar en api
    fetch('http://localhost:3000/dispositivos', {
      method: 'POST',
      body: JSON.stringify({
        dispositive: disp.dispositive,
        marca: disp.marca
      }), headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })
    .then(response => response.json())
    .then(result => console.log(result))

    //vaciar casilla
    document.getElementById("disp").innerHTML = ""

  }

  //FUNCION DEL
  function del_disp() {

        <button onclick="guardar_disp()">Guardar</button>
        fetch('http://localhost:3000/dispositivos', {
      method: 'DELETE'
    })
    .then(response => { 
      if (response.status == `200`)
        console.log(`Eliminado correctamente`);
      else
      throw new Error(response.status)
      response.json() 
    })
    .then(result => console.log(result))    

  }
   //mostrar lista
   fetch('http://localhost:3000/dispositivos/12')
   .then(response => response.json())
   .then(lista => {
     //proceso datos definidos
     console.log(lista)

     lista.forEach(disp => {
       //mostrar los datos de la disp
       document.getElementById("disp").innerHTML += 
 
       "td: " + disp.dispositive + ", marca: " + disp.marca + "<br>"
 
     });
   
   })


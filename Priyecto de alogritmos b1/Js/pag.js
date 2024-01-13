class proyecto { 
    login(){
   let edad 
   edad=document.getElementById("edad").value
   edad=parseInt(edad)
   if(isNaN(edad)|| edad <= 0){   
return
} 
  if( edad >= 12 ){
    window.location.href = 'proyecto_mayoresde12.html'
  } else{
    window.location.href ='proyecto_menoresde4.html'
  }
  
}
//niñosde4años

//niñosde12años
tabla_de_multiplicar(){
  let tabla,respuesta
  tabla=0;respuesta=0
  tabla=parseInt(document.getElementById("tabla").value)
  document.getElementById("resp").innerHTML = ""
  for (let i = 1; i <=10; i++) {
      respuesta= i * tabla
      document.getElementById("resp").innerHTML += `<br>${i} * ${tabla} = ${respuesta}`
  }
 }
}
let pro =new proyecto

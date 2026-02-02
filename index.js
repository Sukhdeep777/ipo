// Para seleccionar al reloj y hacer click encima de este
let torre=document.querySelector(".torre"); 
console.log(torre);
torre.addEventListener("click",change)
function change(){
   document.querySelector("#hora").innerHTML = "<h1>19:00</h1>";
}

// Para darle click encima de la fogata
let fecha=document.querySelector("#fecha-fogata")
console.log(fecha)
fecha.addEventListener("click",change)
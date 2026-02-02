// Para seleccionar al reloj y hacer click encima de este
let torre=document.querySelector(".torre"); 
console.log(torre);
torre.addEventListener("click",change)
function change(){
   document.querySelector("#hora").innerHTML = "<h1>19:00</h1>";
}
   
// Para darle click encima de la fogata
let fecha=document.querySelector(".fogata1")
console.log(fecha)
fecha.addEventListener("click",change1)
function change1(){
   document.querySelector("#fecha").innerHTML = "31 de Febrero"
   console.log(fecha)
   let miAudio= new Audio("sounds/melodia.mp3")
   miAudio.play
   miAudio.loop = true
}
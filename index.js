let main=document.querySelector("#fondo");
let torre=document.querySelector(".torre"); 
console.log(torre);
console.log(main);
torre.addEventListener("click",change)
function change(){
   document.querySelector("#hora").innerHTML = "<h1>19:00</h1>";
}
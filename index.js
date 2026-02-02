let main=document.querySelector("#fondo");
let torre=document.querySelector(".torre"); 
console.log(torre);
console.log(main);
torre.addEventListener("click",change)
function change(){
   document.getElementById("hora").textContent = "19:00";
   
}
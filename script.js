let button = document.querySelector('button')
let image = document.querySelector('img')
function toggleLight(){
   if (button.innerHTML == "Turn On"){
       image.src = "./assets/lighton.jpg"
       button.innerHTML = "Turn Off"
   }
   else{
       image.src = "assets/lightoff.jpg"
       button.innerHTML = "Turn On"
   }
}
button.onclick = toggleLight;
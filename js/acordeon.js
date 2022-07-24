//menu acordeon
let acordeonBtn = document.querySelector(".acordeon button");

acordeonBtn.addEventListener("click", function() {
    this.classList.toggle("active");
})


//para que desaparezca el menú al hacer click fuera del botón

window.addEventListener("click", function(event){
  if(!event.target.matches(".acordeon button img")  ){
        acordeonBtn.classList.remove("active");
    }
});


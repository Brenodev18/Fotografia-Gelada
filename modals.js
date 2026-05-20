const modal = document.getElementById("abrir")
const btnAbrir = document.getElementById("btn")
const btnfechar = document.getElementById("btn3")


//Abrir modal login
btnAbrir.addEventListener("click", () =>{
    modal.showModal()
    modal.style.display='flex'
    
});

btnfechar.addEventListener("click", () =>{
    modal.close()
    modal.style.display='none'
})


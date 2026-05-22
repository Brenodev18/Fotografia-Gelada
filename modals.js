const modal = document.getElementById("abrir")
const btnAbrir = document.getElementById("btn")
const btnfechar = document.getElementById("btn3")
const ftabrir = document.getElementById("item1")
const ftmodal = document.getElementById("open")
const ftfechar = document.getElementById("x")

//Abrir modal login
btnAbrir.addEventListener("click", () =>{
    modal.showModal()
    modal.style.display='flex'
    
});

btnfechar.addEventListener("click", () =>{
    modal.close()
    modal.style.display='none'
})

//Abrir modal foto
ftabrir.addEventListener("click", () =>{
    ftmodal.showModal()
    ftmodal.style.display='flex'
    
});

ftfechar.addEventListener("click", () =>{
    ftmodal.close()
    ftmodal.style.display='none'
})

//variaveis para abrir modal login
const modal = document.getElementById("abrir")
const btnAbrir = document.getElementById("btn")
const btnfechar = document.getElementById("btn3")

//variaveis para abrir modal imagem
const ftabrir = document.getElementById("item1")
const ftmodal = document.getElementById("open")
const ftfechar = document.getElementById("x")

//variaveis para abrir modal cadastro
const cadmodal = document.getElementById("cadastro")
const abrircad = document.getElementById("btncad")
const fecharcad = document.getElementById("fecharcad")
const cadastro = document.getElementById('cad')

//ABRIR MODAL LOGIN
btnAbrir.addEventListener("click", () =>{
    modal.showModal()
    modal.style.display='flex'
    
});
//FECHAR MODAL LOGIN
btnfechar.addEventListener("click", () =>{
    modal.close()
    modal.style.display='none'
})

//ABRIR MODAL FOTOS
ftabrir.addEventListener("click", () =>{
    ftmodal.showModal()
    ftmodal.style.display='flex'
    
});
//FECHAR MODAL FOTOS
ftfechar.addEventListener("click", () =>{
    ftmodal.close()
    ftmodal.style.display='none'
})

//ABRIR MODAL CADASTRO
abrircad.addEventListener("click", () =>{
    cadmodal.showModal()
    cadmodal.style.display='flex'
    
});
//FECHAR MODAL CADASTRO
fecharcad.addEventListener("click", () =>{
    cadmodal.close()
    cadmodal.style.display='none'
})

//FAZER CADASTRO
// cadastro.addEventListener("click", () =>{
//     cadmodal.close()
//     cadmodal.style.display='none'
// })
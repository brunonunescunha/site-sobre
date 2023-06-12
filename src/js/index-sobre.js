const menus = document.querySelectorAll(".menu")

menus.forEach((menu) =>{
    menu.addEventListener("click", () => {
        const menuAtual = document.querySelector(".ativo")

        if(menuAtual){
            menuAtual.classList.remove("ativo")
        }
        menu.classList.add("ativo")
    })

    
})

const removeAtivoDoMenuNaAbaSobre = document.querySelector(".inicio-sobre") 
removeAtivoDoMenuNaAbaSobre.addEventListener("mouseenter", () => {

    const menuativo = document.querySelector(".menu-servicos")
    menuativo.classList.remove("ativo")
})

AOS.init();


window.sr =  ScrollReveal({reset: true})

sr.reveal(".t1",{
    rotate:{x:100, y:0, z:0},
    duration:1500
})

sr.reveal(".frase",{
    rotate:{x:0, y:80, z:0},
    duration:1500
})
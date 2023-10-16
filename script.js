
var cont = document.querySelector("#box")
var heart = document.querySelector("i")


cont.addEventListener("dblclick",() =>{


    heart.style.transform = "translate(-50%, -50%) scale(1)",
    heart.style.opacity = 0.7,
    heart.style.transition = "all ease 0.3s"

    setTimeout(function(){
        heart.style.opacity = 0
    }, 1000)

    setTimeout(function(){
        heart.style.transform = "translate(-50%, -50%) scale(0)"
    }, 2000)
})


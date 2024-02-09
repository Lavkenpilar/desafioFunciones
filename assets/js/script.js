function pintar (backgroundColor = '#99FF33'){
    ele.style.backgroundColor = backgroundColor
}
const ele = document.getElementById ("hola")

/*ele.addEventlistener("click", pintar)*/


ele.addEventListener ("click", function (){
    pintar ('yellow')
})

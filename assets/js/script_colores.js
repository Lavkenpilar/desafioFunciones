const div1 = document.querySelector ('#box-1')
const div2 = document.querySelector ('#box-2')
const div3 = document.querySelector ('#box-3')
const div4 = document.querySelector ('#box-4')
const div5 = document.querySelector ('#key')
const div6 = document.querySelector('#key2')
const colorFondo = (ref, backgroundColor)=> {
 const div = document.querySelector ('#' + ref)
 div.style.backgroundColor = `black`
}
div1.addEventListener ("click", ()=>{
    colorFondo('box-1', '')
})
div2.addEventListener ("click", ()=>{
    colorFondo('box-2', '')
})
div3.addEventListener ("click", ()=>{
    colorFondo('box-3', '')
})
div4.addEventListener ("click", ()=>{
    colorFondo('box-4', '')
})

document.addEventListener ("keydown", (Event)=>{
    if (Event.key === 'a'){
        color1('key')
    } else if (Event.key === 's'){
        color2('key')
    }
    else if (Event.key === 'd') {
        color3('key')
    }
})

const color1 = (ref, backgroundColor)=>{
    const div = document.querySelector ('#'+ ref)
    div.style.backgroundColor = `pink`
}
const color2 = (ref, backgroundColor)=>{
    const div = document.querySelector ('#'+ ref)
    div.style.backgroundColor = `#FF6600`
}
const color3 = (ref, backgroundColor)=>{
    const div = document.querySelector ('#'+ ref)
    div.style.backgroundColor = `#0099FF`
}

document.addEventListener("keydown", (Event)=>{
    if (Event.key === 'q'){
        agregarElemento ('#660099')
    } else if (Event.key === 'w'){
        agregarElemento ('#333333')
    } else if (Event.key === 'e') {
        agregarElemento ('#6633300')
    }
})

const agregarElemento = (color)=>{
    /*const contenedor = document.getElementById ("key")*/
    const nuevoElemento  = document.createElement ("div")
    nuevoElemento.style.backgroundColor = color
    nuevoElemento.style.width = "200px"
    nuevoElemento.style.height = "200px"
    nuevoElemento.style.border = "6px solid black"
    key2.appendChild (nuevoElemento)
}
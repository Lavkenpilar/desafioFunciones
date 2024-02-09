const div1 = document.querySelector ('#box-1')
const div2 = document.querySelector ('#box-2')
const div3 = document.querySelector ('#box-3')
const div4 = document.querySelector ('#box-4')

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
import string from './css.js'

let n = 1
let time = 100
demo.innerText = string.substr(0, n)
demo2.innerHTML = string.substr(0, n)

const run = ()=>{
 n += 1
 if (n > string.length){
     window.clearInterval(id)
     return
 }
 demo.innerText = string.substr(0, n)
 demo2.innerHTML = string.substr(0, n)
demo.scrollTop = demo.scrollHeight
}

const play = ()=>{
    return setInterval(run,time)
}

let id = play()



btn_Play.onclick = ()=>{
    id = play ()
} 


btnTing.onclick = ()=>{
    window.clearInterval(id)
}


btnSlow.onclick = ()=>{
    window.clearInterval(id)
    time = 300
    id = play ()
}


btnNormal.onclick = ()=>{
    window.clearInterval(id)
    time = 100
    id = play ()
}


btnFast.onclick = ()=>{
    window.clearInterval(id)
    time = 0
    id = play ()
}


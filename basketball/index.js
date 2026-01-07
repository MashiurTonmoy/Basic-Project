let h=document.getElementById("home")
let g=document.getElementById("GUEST")

let ct=0
function on(){
    ct++
    h.textContent=ct
}
function tw(){
    ct+=2
    h.textContent=ct
}
function th(){
    ct+=3
    h.textContent=ct
}
let co=0
function on1(){
    co++
    g.textContent=co
}
function tw1(){
    co+=2
    g.textContent=co
}
function th1(){
    co+=3
    g.textContent=co
}
function res(){
    co=0
    ct=0
    g.textContent=co
    h.textContent=ct
}
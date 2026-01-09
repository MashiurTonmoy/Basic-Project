let y=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",
"a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",
"0","1","2","3","4","5","6","7","8","9","!","@","#","$","%","^","&","*","(",")","-","_","=","+","{","}","[","]","|",":",";","<",">",",",".","?","/","~","`"
]
let fpass=document.getElementById("fpass")
let spass=document.getElementById("spass")
let inpu=document.getElementById("input")
let p

function password(){
    let x=""
    for(let i=0;i<p;i++){
        let a=Math.floor(Math.random()*y.length)
        x+=y[a]
    }
    return x
}
function genpass(){
    p=Number(inpu.value)
    fpass.textContent=password()
    spass.textContent=password()
}
function fp(){
    navigator.clipboard.writeText(fpass.textContent)
}
function sp(){
    navigator.clipboard.writeText(spass.textContent)
}
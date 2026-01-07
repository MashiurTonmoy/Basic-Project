let count = 0;
let el=document.getElementById("count")
let s=document.getElementById("save-el")


function incre() {
   count=count+1
   el.textContent=count
}

function save(){
    let countstr=count + " - "
    s.textContent+=countstr
    count=0
    el.textContent=count
}


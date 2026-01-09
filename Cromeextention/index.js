

let myleads=[]
const delBtn=document.getElementById("delete-btn")
const inputel=document.getElementById("input-el")
const btn=document.getElementById("input-btn")
const ulEl=document.getElementById("ul-el")
const tabBtn=document.getElementById("tab-btn")

let leadFromloclastorage=JSON.parse(localStorage.getItem("myleads"))
if(leadFromloclastorage)myleads=leadFromloclastorage
render(myleads)

delBtn.addEventListener("dblclick",function(){
    localStorage.clear()
    myleads=[]
    render(myleads)

})

tabBtn.addEventListener("click", function () {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        myleads.push(tabs[0].url)
        localStorage.setItem("myleads", JSON.stringify(myleads))
        render(myleads)
    })
})


btn.addEventListener("click", function(){
    myleads.push(inputel.value)
    localStorage.setItem("myleads",JSON.stringify(myleads))
    render(myleads)
    inputel.value=""
})

function render(le){
let listitems=""
for(let i=0;i<le.length;i++){
    listitems+=`<li><a target="_blank" href="${le[i]}">${le[i]}</a></li>`
}
ulEl.innerHTML=listitems
}
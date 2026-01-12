import { houses } from "./poperty.js"
import def from './default.js'

let card=document.getElementById("cards")
function dis(money=10000){
   return  houses.map(pr=>pr.price-=money)
}
dis(20000)

function render(house=def()){
    let {image,location,price,comment,rooms}=house
let y=rooms.reduce((total,pe)=>total+=pe,0)

  return  ` <div class="card">
            <div class="myi">
               <img src="${image}" >
            </div>
            <div>
            <h3>${location}</h3>
            <h5>${price} $</h5>
            <p>${comment}</p>
            <h5>${y} m<sup>2</sup></h5>
            </div>
            </div>`
}
let final=""
for(let i=0;i<houses.length;i++){
   final+= render(houses[i])
}
card.innerHTML=final
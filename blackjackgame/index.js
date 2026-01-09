let mes=document.getElementById("message-el")
let sumel=document.getElementById("sum-el")
let card=document.getElementById("card")
let player={
    name:"Per",
    token: 145
}

let cards=[]
let sum=0
let hasblackjack=false
let isalive=false
let message=""
let pl=document.getElementById("player-el")
pl.textContent=player.name+" :$"+player.token
function getrandomcard(){
    let y=Math.floor(Math.random()*13)+1
    if(y==1)return 11
    else if(y>10)return 10
    else return y
    
}
function rendergame(){
    card.textContent="Cards: "
    for(let i=0;i<cards.length;i++){
        card.textContent+=cards[i]+" "
    }

    sumel.textContent="Sum: "+sum
if(sum<21){
   message="Do you want to draw a new card?"
}
else if(sum===21){
   message="Wohoo! You've got Blackjack!"
    hasblackjack=true
}
else {
    message="You're out of the game!"
    isalive=false
}
mes.textContent=message
}
function startgame(){
    isalive=true
   let firstcard=getrandomcard()
   let secondcard=getrandomcard()
    cards=[firstcard,secondcard]
    sum=firstcard+secondcard
    rendergame()
}

function newcard(){
    if(isalive && sum<21){
    let thirdcard=getrandomcard()
    cards.push(thirdcard)
    sum+=thirdcard
    rendergame()
    }
}
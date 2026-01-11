import data from './zdat.js'
let n=document.getElementById("name")
let s=document.getElementById("symbol")
let p=document.getElementById("price")
let t=document.getElementById("time")

n.textContent=`Name: ${data().name}`
s.textContent=`Name: ${data().symbol}`
let z=0
setInterval(function(){
let y=Math.random()*3
let a=z<y?'🔺':z>y?'🔻':'▶'
z=y
p.textContent=`Price: ${y.toFixed(2)} $ ${a}`
},
1000
)



setInterval(function(){
let time=new Date().toLocaleTimeString()
t.textContent=`Time: ${time}`
},1000)

console.log(a)




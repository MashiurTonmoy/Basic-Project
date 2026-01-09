let inputEl = document.getElementById("input-el");
let btnEl = document.getElementById("convert-btn");
let lengthUl = document.getElementById("length-ul");
let volumeUl = document.getElementById("volume-ul");
let massUl = document.getElementById("mass-ul");

function render(first,second,unit1,unit2){
  return `<li>${inputEl.value} ${first} = ${unit1} ${second} | ${inputEl.value} ${second} = ${unit2} ${first}</li>`

}

btnEl.addEventListener("click", function(){
    let y=inputEl.value
    let l1=(y*3.281).toFixed(3)
    let l2=(y/3.281).toFixed(3)
    let a= render("Meters","Feet",l1,l2)
    lengthUl.innerHTML=a
    let ll1=(y*.264).toFixed(3)
    let ll2=(y/.264).toFixed(3)
    let aa= render("Liters","Gallons",ll1,ll2)
    volumeUl.innerHTML=aa
    let lll1=(y*2.204).toFixed(3)
    let lll2=(y/2.204).toFixed(3)
    let aaa= render("Kilograms","Pounds",lll1,lll2)
    massUl.innerHTML=aaa
})
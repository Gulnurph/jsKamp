//console.log("merhaba kodlama.io")

//var dolarDun=9.20
let dolarBugun=9.30
//dolarDun="Ankara"
let dolarDun=9.20
{
    let dolarDun=9.10
}
//console.log(dolarDun)
const euroDun=11.2
//euroDun=11//Bunu yapamıyoruz const ile tanımladığımız için

//array
let konutKredileri=["konut kredisi","Emlak konut kredisi","Kamu konut kredisi"]
//console.log(konutKredileri)

 let sayi1=10
 let student= {id:1, name:"Gülnur"}
 //console.log(student);
function save(ogrenci)
 {  console.log
    
}
save()
let students=["Engin", "Halit","Engin Toprak","Büşra"]
//console.log(students)

let showProducts=function (id,...products) {
    console.log(id)
    console.log(products)   
}
// showProducts()
// showProducts(10,"elma","armut")
// showProducts(10,["elma","armut","karpuz"])//array içinde array gönderilmiş oluyor 
//console.log(typeof showProducts)
//SPREAD
let points=[1,2,3,4,50,4,60,14]
console.log(...points)
console.log(Math.max(...points))
console.log(..."abc","d",..."fg","h")
//DESTRUCTURİNG
let populatins=[10000,20000,30000,[40000]]
let [small,medium,high,veryHigh,maximum]=populatins//değişkenler
console.log(small,medium,high,veryHigh,maximum)

function someFunction([smll1,medium1]) {
    console.log(smll1,medium1)
    
}
someFunction(populatins)




function addToCart(quantity,productName="Elma") {
    console.log("sepete eklendi:"+productName+" adet"+quantity)

    
}


//addToCart("15")
addToCart(10)
//addToCart("muz")
            //fonksiyon fonksiyon olarak çalıştıracağı kod bloğu
let sayHello=()=>{
console.log(" Hello World!")
}
sayHello()//şeklinde çağırılabilir

let sayHello2=function () {
    console.log("Hello World 2!")
    
}
sayHello2()
//////////////////////
function addToCart2(productName,quantity,unitPrice)
{
}
addToCart2("elma",5,10)
/////////////////////////////////
//Nesnel olarak gönderme
function addToCart3(product) {
    console.log("Ürün: "+product.productName+" Fiyat: "+product.unitPrice+" adet: "+product.quantity)
}
//obje notasyonu
let product1={productName:" Elma",unitPrice:10,quantity:5}
let product2={productName:"kivi",unitPrice:"25",quantity:120}
addToCart3(product1)//parametre olarak gönderildi

//aynı anda birden fazla ürünü sepete eklesin
function addToCart4(products) {//products yerine x yazarsak da sonuç değişmez
    console.log(products)
    
}
//array li
let products=[
    {productName:" Elma",unitPrice:10,quantity:5},
    {productName:" Armut",unitPrice:10,quantity:5},
    {productName:" Karpuz",unitPrice:10,quantity:5}
]
addToCart4(products)//yukarıda tanımlı addToCart4 fonksiyonuna referans gönderdi


//rest operatör(... denir)
function add(bisey,...numbers) {//array benzeri yapı şeklinde tutuluyor
   // console.log(numbers)
   let total=0
   for (let i = 0; i <numbers .length; i++) {
     total=total+numbers[i]
    
   }
     console.log(total)
    console.log(bisey)//ilk değer biseye atanır,geriye kalan numbers a atanır
       
}
add(20,30)
//add(20,30,40)
//add(20,30,40,50)
//spread ayrıştırır,rest toparlar
let numbers=[30,10,500,600,120]
//console.log(...numbers)
console.log(Math.max(...numbers))

//Destructuring
let [İçAnadolu,marmara,karadeniz,[İçAnadoluSehirleri]]=[
{name:"İç Anadolu",populatins:"20M"},
{name:"Marmara",populatins:"30M"},
{name:"Karadeniz",populatins:"10M"},
[
    ["Ankara","Konya"],
    ["İstanbul","Bursa"],
    ["Sinop","Trabzon"],

]

]
console.log(İçAnadolu)//ilk elemanı atar
console.log(İçAnadoluSehirleri)
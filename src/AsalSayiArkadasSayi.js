function primeNumbers(...parameter) {  
    for (let i = 0; i < parameter.length; i++) {
        if (parameter[i] % 2 == 1 || parameter[i] == 2){
            console.log(parameter[i] + " Asal sayıdır")
        }
        else{
            console.log(parameter[i] + " Asal sayı değildir")
        }
    } 
}

primeNumbers(2,7,3,-2,20)
//Arkadaş sayi
function friendNumber(number1, number2) {
    let toplam1=0,toplam2=0
    for(let i=1; i<number1; i++)
    { if(number1%i==0)
        {
            toplam1+=i
        }

    }
    for(let j=1; j<number2; j++)
    {
        if(number2%j==0)
        {
            toplam2+=i
        }
    }
    if(number1==toplam1&&number2==toplam2)
    {
        console.log(number1+" "+number2+"Arkadaş Sayilardir")

    }
    else{
        console.log(number1+" "+number2+"Arkadaş Sayi Değildirler")
    }
    
}
friendNumber(220,284)

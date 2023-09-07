let sayac = document.querySelector(".sayac")
let gun = document.getElementById("gun")
let saat = document.getElementById("saat")
let dakika = document.getElementById("dakika")
let saniye = document.getElementById("saniye")

let birthday = "11 September 2023";
const geriSayim = () => {
    let NewBday = new Date(birthday)
    console.log(NewBday)

    let today = new Date()
    console.log(today)

    let totalSeconds = Math.floor((NewBday - today)/1000)
    console.log(totalSeconds)

 }

 geriSayim();

 


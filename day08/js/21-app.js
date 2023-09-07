const data = [
    {
        ad: "Serdar Konyalı",
        yas: 35,
        img: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        meslek: "The Boos",
    },
    {
        ad: "Ceren Yurt",
        yas: 29,
        img: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        meslek: "Product Owner",
    },
    {
        ad: "Cenk Aslan",
        yas: 31,
        img: "https://images.pexels.com/photos/1462980/pexels-photo-1462980.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        meslek: "Automation Engineer",
    },
    {
        ad: "Cankan Sarı",
        yas: 25,
        img: "https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        meslek: "Intern",
    },
    {
        ad: "Suzan Yapıcı",
        yas: 27,
        img: "https://images.pexels.com/photos/3772509/pexels-photo-3772509.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        meslek: "Web Developer",
    },
    {
        ad: "Ayberk Gök",
        yas: 32,
        img: "https://images.pexels.com/photos/3778212/pexels-photo-3778212.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        meslek: "Web Designer",
    }
];

let isimler=document.querySelector("#isim")
let resim=document.querySelector("#resim")
let yas=document.querySelector("#yas")
let meslek=document.querySelector("#meslek")
let ileri= document.querySelector("#ileri")
let geri= document.querySelector("#geri")

let mode=true;
document.querySelector("#btn").addEventListener("click",()=>{
    if(mode){

    document.querySelector(".alt").style.display="inline-block"
    }else{
        document.querySelector(".alt").style.display="none"
    }

    mode=!mode

})



const kisiGetir = (index) => {

    let getir=data[index]

    isimler.innerHTML=getir.ad
    yas.innerHTML=getir.yas
    meslek.innerHTML=getir.meslek
    resim.src=getir.img

 }

 let objeIndex=0;

 ileri.addEventListener("click",()=>{
    objeIndex++;
    if(objeIndex>data.length-1){
        objeIndex=0

    }
    kisiGetir(objeIndex)

 })

 geri.addEventListener("click",()=>{
    objeIndex--;
    if(objeIndex<0){
        objeIndex=data.length-1
    }
    kisiGetir(objeIndex)
 })




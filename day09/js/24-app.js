const notlar = [
    "kitap oku",
    "yuruyuse cik",
    "Daily'e katil",
    "Taskini bitir"
];

let liste=document.querySelector("#liste")
let veri=document.querySelector("#yeni")
let ekleBtn=document.querySelector("#ekle")
let silBtn=document.querySelector("#sil")


let satir="";
notlar.forEach((item)=>{
    satir+=`<li> ${item}</>`
})

//console.log(satir)
liste.innerHTML=satir

ekleBtn.addEventListener("click",()=>{
    if(!veri.value){
        veri.focus()
        return;

    }
    liste.innerHTML+=`<li> ${veri.value}</>`
    notlar.push(veri.value)
    cardEkle(notlar) //todo
    veri.value=""


})

silBtn.addEventListener("click",()=>{
    if(notlar.length==0){
        alert("listede silinecek eleman kalmadi!")
    }else{
        veri.value="";
        notlar.pop()
        liste.removeChild(liste.lastElementChild)
        cardEkle(notlar) 

    }
})

const cardEkle = (secilenler) => {
    document.querySelector("#metin").innerHTML=secilenler.join(" - ")
 }
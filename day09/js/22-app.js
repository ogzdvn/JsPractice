let basliklar=document.querySelector(".basliklar")
//console.log(basliklar)

let urunlerinResmi=document.querySelectorAll(".image")

basliklar.addEventListener("click",(e)=>{
    if(e.target.classList.contains("urun")){
        basliklar.querySelector(".active").classList.remove("active")
        e.target.classList.add("active")


        const aranan=e.target.getAttribute("data-sec")
       // console.log(aranan)

       urunlerinResmi.forEach((item)=>{
        if(aranan=="all" ||item.classList.contains(aranan)){
            item.style.display="block"

        }else{
            item.style.display="none"
        }
       })
    }
   
})
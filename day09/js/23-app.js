const karakterSay = () => {
  let sayac = document.querySelector(".sayac");
  let giris = document.querySelector("#giris");
  let silBtn = document.querySelector("#sil");
  let mesaj = document.querySelector(".msg");

  giris.addEventListener("input", () => {
    mesaj.innerHTML = "";
    sayac.innerHTML = giris.value.length;
    karakterSay()
  });
  silBtn.addEventListener("click", () => {
    sayac.innerHTML = "0";
    karakterSay()

  });

  giris.addEventListener("keyup", (e) => {
    if (e.key == "Delete") {
      silBtn.click();
      karakterSay()
    }
  });

  setTimeout(() => {
    if (giris.value) return;
    mesaj.innerHTML = `<b style=font-size:1.5rem >Devam Et Dostum Haydi Bir seyler Yaz!</b>`;
  }, 3000);
};

karakterSay();

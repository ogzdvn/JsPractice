const inputEl= document.getElementById("inputEl");
const guessBtn = document.getElementById("Guess");
const startBtn = document.getElementById("Start");
const txtResult = document.getElementById("txtResult");


let randomNumber = 0;
const minRandomNumber = 10;
const maxRandomNumber = 100;
const totalShot = 10;

startBtn.addEventListener("click", () =>{
    randomNumber = getRandomNumber(minRandomNumber, maxRandomNumber);
    inputEl.removeAttribute("disabled");
    inputEl.value="";
    inputEl.focus();
    guessBtn.classList.remove("d-none");
    startBtn.classList.add("d-none")
    txtResult.innerText="";
})

const resetGame = () => {
    guessBtn.classList.add("d-none");
    inputEl.setAttribute("disabled", true);
    startBtn.classList.remove("d-none");
}

guessBtn.addEventListener("click", () => {
    const guessNum = +inputEl.value;

    if(!guessNum || isNaN(guessNum) || guessNum<minRandomNumber || guessNum>maxRandomNumber)
    {
        txtResult.innerText = `Lütfen ${minRandomNumber} ile ${maxRandomNumber} arasında bir sayı giriniz!`;
        return;
    }
    if(guessNum === randomNumber)
    {
        txtResult.innerText = `Tebrikler! Doğru sayıyı buldunuz!`;
        resetGame();
    }
    else if (guessNum>randomNumber)
    {
        txtResult.innerText = `Lutfen daha kucuk bir sayi giriniz.`
    }
    else {
        txtResult.innerText =`Lutfen daha buyuk bir sayi giriniz.`
    }
})
const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
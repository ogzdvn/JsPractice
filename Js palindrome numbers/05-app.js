const txtNumber = document.getElementById("txtNumber");
const check = document.getElementById("chck");
const result = document.getElementById("result")


check.addEventListener("click", () => {
    const val = +txtNumber.value;

    const strNum = val.toString();
    if (!val || val < 0 || isNaN(val) || val < 10) 
    {
        result.innerText = `Lütfen geçerli bir değer giriniz.`;
    } 
    else if (strNum === strNum.split('').reverse().join('')) 
    {
        result.innerText = `Girmiş olduğunuz sayı bir palindrom sayıdır.`;
    } 
    else 
    {
        result.innerText = `Girmiş olduğunuz sayı palindrom bir sayı değildir.`;
    }
    
    txtNumber.value = "";
    
})


/* // 4- Dizideki herbir elemanın 2 katının mutlak değerini alıp
 başka bir diziye atın.
 Yeni dizinin elemanları azalan şekilde sıralansın.
let Arr1 = [-5, 6, 3, -5, -7, 4, 12, -58, 72];

const newArr = []

Arr1.forEach((item, index) =>{

    newArr[index] = Math.abs(item*2);
})

console.log(newArr)

 Sıralamalarda sort methodu biraz farkli çalışıyor. Burada bir a ve b değerleri tanımladık
 Bu tanımlama sonrasında a > b' den ise küçükten büyüğe sıralıyor 
 b>a 'dan ise büyükten küçüğe doğru sıralama yapar.
newArr.sort((a,b) => b-a)

console.log(newArr)
 */

// 5- Dizideki elemanlardan uzunluğu belirtilen sayıya eşit olanaları
 //ayrı bir dizide saklayan uygulamayı yapın.
 const isimler = [
    "Ali",
    "Can",
    "Kemal",
    "Ahmet",
    "Oya",
    "Selim",
    "Mine",
    "Elif",
    "Bora",
    "Ayşe",
    "Abuziddin"
  ]

/*  for of ile yapılan kısım
   const filtrele = (uzunluk) => { 

        let newArr = [];

        for(let item of isimler)
        {
            if (item.length == uzunluk)
            {
                newArr.push(item)
            }
        }
        return newArr;
    }
    console.log(filtrele(4)) */

    
    /* filter ile yapımı
    const filtrele = (uzunluk) => { 

     const newArr=isimler.filter((isim) => isim.length == uzunluk)
     return newArr;
     }
     console.log(filtrele(4)) */

//!6- Dizideki sayıların ortalamasını bulun ortalamadan yüksek olanları
// başka bir diziye atarak yazdırın.
/* const notlar1 = [38, 62, 74, 28, 86, 67, 92, 100, 56, 94, 72];

const toplam = notlar1.reduce((acc, curr) => {
    return acc+curr;
})
console.log(toplam)

const ortalama = (toplam / notlar1.length).toFixed(2)
console.log(ortalama)

let OrtUstu = notlar1.filter((not) => not > ortalama)
console.log(OrtUstu) */


//7- Dizideki notların ortalamasını bulun, ortalamadan yuksek olanların
// ortalamasını %20,
// düşük olanların ortalamasını %10 artırarak yeni diziye atalım.
const notlar = [
    { ad: "Ali Can", not: 38 },
    { ad: "Veli Kan", not: 62 },
    { ad: "Oya Tan", not: 74 },
    { ad: "Elif Han", not: 28 },
    { ad: "Mine San", not: 86 },
    { ad: "Mert Er", not: 67 },
    { ad: "Bora Fer", not: 92 },
    { ad: "Ayşe Yılmaz", not: 100,},
    { ad: "İlke Cansız", not: 56,},
    { ad: "Sude Canlı", not: 94 },
    { ad: "Bade Sert", not: 72,},
    ]; 

    let Ortalama = notlar.reduce((x,y) => x+y.not,0)
    Ortalama = (Ortalama / notlar.length).toFixed(2)
    console.log(Ortalama)

    const newGrade = notlar.map((item) => {

        if (item.not>Ortalama)
        {
            item.not=(item.not*1.2).toFixed(2)
        }
        else
        {
            item.not=(item.not*1.1).toFixed(2)
        }
        if (item.not > 100)
        {
            item.not = 100;
        }
        return item;
    })
    console.log(newGrade)
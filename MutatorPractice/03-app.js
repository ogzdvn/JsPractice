const addButton = document.getElementById("add")
const inputEl = document.getElementById("txt")
const listEl = document.getElementById("list")
const sortButton = document.getElementById("btn-1")
const reverseButton = document.getElementById("btn-2")
const removeLastButton = document.getElementById("btn-3")
const removeFirstButton = document.getElementById("btn-4")
const RemoveAllButton = document.getElementById("btn-5")
const mixButton = document.getElementById("btn-6")
const resultEl=document.getElementById("result")


const itemList = [];

inputEl.addEventListener("keyup", (Event) =>{
    if (Event.key === "Enter")
    {
        addButton.click();                                  // Entera basıldığında click özelliği kazandırma
    }
})

addButton.addEventListener("click", () =>{
    const inputText = inputEl.value
    if (inputText === "" || inputText === 0 )
    {
        resultEl.textContent=``
    }
    else
    {
        document.getElementById("txt").value = "";
        itemList.push(inputText);
        updateList();
    }
    
})

function updateList ()
{
    listEl.innerHTML = "";

    itemList.forEach(function(item){

        const li = document.createElement("li");
        li.textContent = item;
        listEl.appendChild(li);
    })
}
console.log(itemList);

sortButton.addEventListener("click", ()=> {
    if (itemList.length > 0)
    {
    itemList.sort();
    updateList ();
    }

    
})

reverseButton.addEventListener("click", () => {
    if (itemList.length > 0)
    {
      itemList.reverse();
    updateList ();  
    }
    
})

removeLastButton.addEventListener("click", () => {
    if (itemList.length > 0)
    {
       itemList.pop();
    updateList(); 
    }
})
removeFirstButton.addEventListener("click", () => {

    if (itemList.length > 0)
    {
        itemList.shift();
    updateList();
    }
})
RemoveAllButton.addEventListener("click", () =>{
    listEl.innerHTML="";
})
mixButton.addEventListener("click", () => {
    if (itemList.length > 1) { 
        for (let i = itemList.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [itemList[i], itemList[j]] = [itemList[j], itemList[i]];
        }
        updateList();
    }
})
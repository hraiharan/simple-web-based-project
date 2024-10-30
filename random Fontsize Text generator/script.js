let wordCloud = ["Hello", "hii", "how", "what", "you", "yourself", "name", "victory", "food", "lovely", "beautiful", "written", "where", "who", "awesome"];
let wordsContainer = document.getElementById("wordsContainer");

let errorMsg = document.getElementById("errorMsg");
let userInput = document.getElementById("userInput");
let addBtn = document.getElementById("addBtn");

let spamEle,val;


function randomSizeFont(item1) {

    spamEle=document.createElement("span");
    
    spamEle.textContent=item1;
    console.log();
    spamEle.style.fontSize=String(Math.ceil(Math.random()*100))+"px";
    console.log("ajdsa")
    
    wordsContainer.appendChild(spamEle);
    
}

for (let i of wordCloud){
    
    randomSizeFont(i)
}

addBtn.onclick = function() {
    val = userInput.value;
    if (val === "") {
        errorMsg.textContent = "Please enter a word";
    } else {
        randomSizeFont(val);
        userInput.value="";
    }
}
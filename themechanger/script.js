let bgContainer=document.getElementById("bgContainer");
let heading=document.getElementById("heading");
let themeUserInput=document.getElementById("themeUserInput");


themeUserInput.addEventListener("keydown",function(event){
    console.log(event.key);
    if(event.key==="Enter"){
    if(event.target.value==="dark"){
        
       bgContainer.style.backgroundImage = "url('https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/change-theme-dark-bg.png')";
        
    }
    else if(event.target.value==="light"){
        bgContainer.style.backgroundImage = "url('https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/change-theme-light-bg.png')";
        
    }
    else{
        alert("enter a valid theme");
    }}
})
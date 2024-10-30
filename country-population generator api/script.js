let resultCountriesEle=document.getElementById("resultCountries");
let searchInputEle=document.getElementById("searchInput");
let spinnerEle=document.getElementById("spinner");
let json;
function createAndAppendSearchResult(Result){
    let {flag, name, population}=Result;
    
let div=document.createElement("div");
div.className=" col-md-6";
resultCountriesEle.appendChild(div);

let divEle=document.createElement("div");
divEle.className="country-card  d-flex flex-row " ;
div.appendChild(divEle);

let img1=document.createElement("img");
img1.className="country-flag";
img1.setAttribute("src",flag);
divEle.appendChild(img1);

let divEle2=document.createElement("div"); 
divEle.appendChild(divEle2);

let countryTag=document.createElement("h1");
countryTag.className="country-name";
countryTag.textContent=name;
divEle2.appendChild(countryTag);



let populationTag=document.createElement("p");
populationTag.textContent=population;
populationTag.className="country-population";
divEle2.appendChild(populationTag);
    
}

spinnerEle.classList.remove("d-none");

let url="https://apis.ccbp.in/countries-data";
let option={
    method:"GET"
};

fetch(url,option) 
.then(function(responce){
    
    return responce.json();
    
})
.then(function(jsonData){
    spinnerEle.classList.add("d-none");
     json=jsonData;
    for (let i=0;i<jsonData.length;i++){
        
        createAndAppendSearchResult(jsonData[i]);
        
    }
})

searchInputEle.addEventListener("keydown",function(ele){
    resultCountriesEle.innerHTML = "";
for (let i=0;i<json.length;i++){
    if(json[i].name.toLowerCase().indexOf(searchInputEle.value) > -1){
        createAndAppendSearchResult(json[i] )}
}})


    
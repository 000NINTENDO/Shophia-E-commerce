// Functionality for Country select buttom
// select country displayig select buttons
let customSelector = document.querySelector(".country-selector");
let customSelector1 = document.querySelector(".country-selector1");
// Span element in country box
let countryName = document.querySelector("#name")
let arrow = document.querySelector(".country-selector i");
// Get default select button
let selector = document.querySelector("#select-countries");
let options = selector.children;
let testElement = document.getElementById("testjs");

// Displying the country names takken from the options tag in the test element
let i = 0;
let text = "";
for( i ; i < options.length ; i++ ) {
    text += options[i].innerHTML + "<br>";
}

// testElement.innerHTML = text;

// Create a next sibling element after country selector block
let dropDownContainer = document.createElement("DIV");
let listOptions ;
dropDownContainer.className = "options-container";
// optionContainer.appendChild(listOptions);
// Inserting a new  element before the children at index 2 of custom selector block
customSelector.insertBefore(dropDownContainer, customSelector.children[2]);
// let selectorFunctions = [];

    
  

for( i = 0 ; i < options.length ; i++ ) {
    // Adding a child element to the created DIV element
    listOptions = document.createElement("DIV");
    let optionName = document.createTextNode(options[i].innerHTML);
    listOptions.appendChild(optionName);
    listOptions.className = "options";
    // Do not set event Attribute by setAttribute method
    // listOptions.setAttribute("onclick", "selector"+[i]+"Funtion()");
    dropDownContainer.appendChild(listOptions);
}
let handleDropDownContainer = () => {
    if(dropDownContainer.style.maxHeight === "0px") {
         dropDownContainer.style.maxHeight = "140px";
         //use -90 deg for rotation
         arrow.style.transform = "rotate(90deg) translateX(0px)";
         arrow.style.animationName = "clickBtn";
    
    } else {
        dropDownContainer.style.maxHeight = "0px";
        arrow.style.animationName = "";
        arrow.style.transform = "rotate(90deg) translateX(0px)";
        
    }
}

// Close selector dropdown by clicking on the page
// document.addEventListener("click", closeDropDownContainer);
let selectorFuntion0 = () => {
    countryName.innerHTML = options[0].innerHTML.toUpperCase();
}
let selectorFuntion1 = () => {
    countryName.innerHTML = options[1].innerHTML.toUpperCase();
}
let selectorFuntion2 = () => {
    countryName.innerHTML = options[2].innerHTML.toUpperCase();
}
let selectorFuntion3 = () => {
    countryName.innerHTML = options[3].innerHTML.toUpperCase();
}

function closeBropDown(event) {
    event.stopPropagation();
    if( !event.target.matches(".country-selector1")) {
    if( dropDownContainer.style.maxHeight  === "140px") {
        dropDownContainer.style.maxHeight = "0px";
        arrow.style.animationName = "";
        arrow.style.transform = "rotate(90deg) translateX(0px)";
    }
}
//     if( !event.target.matches("#name")) {
//     if( dropDownContainer.style.maxHeight  === "140px") {
//         dropDownContainer.style.maxHeight = "0px";
//         arrow.style.animationName = "";
//         arrow.style.transform = "rotate(90deg) translateX(0px)";
//     }
// }
//     if( !event.target.matches(".country-selector i") ) {
//     if( dropDownContainer.style.maxHeight  === "140px") {
//         dropDownContainer.style.maxHeight = "0px";
//         arrow.style.animationName = "";
//         arrow.style.transform = "rotate(90deg) translateX(0px)";
//     }
// }

}
//  Adding an event to an dropdown list of countrys
customSelector1.addEventListener("click", handleDropDownContainer);
// countryName.addEventListener( "click", handleDropDownContainer);
let optionsList = document.querySelectorAll(".options-container .options");
optionsList[0].addEventListener("click", selectorFuntion0);
optionsList[1].addEventListener('click', selectorFuntion1);
optionsList[2].addEventListener('click', selectorFuntion2);
optionsList[3].addEventListener('click', selectorFuntion3);
window.addEventListener("click", closeBropDown);
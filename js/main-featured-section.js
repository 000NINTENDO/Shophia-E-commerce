
let openProductContainer = document.querySelectorAll(".featured-items-container");
let borderContainer = document.querySelectorAll( ".border-container" );
let productContainer = document.querySelectorAll(".hover-container");
let productImages = document.querySelectorAll(".featured-product-image");

let add_line_1 = document.querySelectorAll(".add-line-1-clone-1");
let add_line_2 = document.querySelectorAll(".add-line-2-clone-1");
let line_1_clone = document.querySelectorAll(".clone-1-1");
let line_2_clone = document.querySelectorAll(".clone-2-1");
let addButton = document.querySelectorAll(".button-product-1");


console.log(openProductContainer);
console.log(borderContainer);
console.log(productContainer);
console.log(productImages);

let handleShopNowContainer_0 = () => {

    if( borderContainer[0].style.visibility === "hidden") {
        borderContainer[0].style.visibility = "visible";
    } else {
        borderContainer[0].style.visibility = "hidden";
    }

    if( borderContainer[0].style.transform === "scale(1.2, 1.2)" ) {
        borderContainer[0].style.transform = "scale(1, 1)";

    } else {
        borderContainer[0].style.transform = "scale(1.2, 1.2)";
    }

    add_line_1[0].classList.toggle("add-line-1-1");
    add_line_1[0].classList.toggle("add-line-1-clone-1");
    add_line_2[0].classList.toggle("add-line-2-1");
    add_line_2[0].classList.toggle("add-line-2-clone-1");

    if( productImages[0].style.filter === "brightness(75%)") {
        productImages[0].style.filter = "brightness(100%)";
    } else {
        productImages[0].style.filter = "brightness(75%)";

    }

    line_1_clone[0].classList.toggle("add-line-1-1");
    line_1_clone[0].classList.toggle("clone-1-1");
    line_2_clone[0].classList.toggle("add-line-2-1");
    line_2_clone[0].classList.toggle("clone-2-1");

    if( productContainer[0].style.borderWidth === "25px" ) {
        productContainer[0].style.borderWidth = "0px";
    } else {
        productContainer[0].style.borderWidth = "25px";
    }

    if( addButton[0].style.opacity === "1" ) {
        addButton[0].style.opacity = "0";
    }

    else {
        addButton[0].style.opacity = "1";
    }

    if( productContainer[0].style.visibility === "visible") {
        productContainer[0].style.visibility = "hidden";
    } else {
        productContainer[0].style.visibility = "visible";
    }



}

openProductContainer[0].addEventListener('click', handleShopNowContainer_0);
openProductContainer[0].addEventListener('mouseenter', handleShopNowContainer_0);
openProductContainer[0].addEventListener('mouseleave', handleShopNowContainer_0);

let handleShopNowContainer_1 = () => {

    if( borderContainer[1].style.visibility === "hidden") {
        borderContainer[1].style.visibility = "visible";
    } else {
        borderContainer[1].style.visibility = "hidden";
    }

    if( borderContainer[1].style.transform === "scale(1.2, 1.2)" ) {
        borderContainer[1].style.transform = "scale(1, 1)";

    } else {
        borderContainer[1].style.transform = "scale(1.2, 1.2)";
    }

    add_line_1[1].classList.toggle("add-line-1-1");
    add_line_1[1].classList.toggle("add-line-1-clone-1");
    add_line_2[1].classList.toggle("add-line-2-1");
    add_line_2[1].classList.toggle("add-line-2-clone-1");

    if( productImages[1].style.filter === "brightness(75%)") {
        productImages[1].style.filter = "brightness(100%)";
    } else {
        productImages[1].style.filter = "brightness(75%)";

    }

    line_1_clone[1].classList.toggle("add-line-1-1");
    line_1_clone[1].classList.toggle("clone-1-1");
    line_2_clone[1].classList.toggle("add-line-2-1");
    line_2_clone[1].classList.toggle("clone-2-1");

    if( productContainer[1].style.borderWidth === "25px" ) {
        productContainer[1].style.borderWidth = "0px";
    } else {
        productContainer[1].style.borderWidth = "25px";
    }

    if( addButton[1].style.opacity === "1" ) {
        addButton[1].style.opacity = "0";
    }

    else {
        addButton[1].style.opacity = "1";
    }

    if( productContainer[1].style.visibility === "visible") {
        productContainer[1].style.visibility = "hidden";
    } else {
        productContainer[1].style.visibility = "visible";
    }



}

openProductContainer[1].addEventListener('click', handleShopNowContainer_1);
openProductContainer[1].addEventListener('mouseenter', handleShopNowContainer_1);
openProductContainer[1].addEventListener('mouseleave', handleShopNowContainer_1);

let handleShopNowContainer_2 = () => {

    if( borderContainer[2].style.visibility === "hidden") {
        borderContainer[2].style.visibility = "visible";
    } else {
        borderContainer[2].style.visibility = "hidden";
    }

    if( borderContainer[2].style.transform === "scale(1.2, 1.2)" ) {
        borderContainer[2].style.transform = "scale(1, 1)";

    } else {
        borderContainer[2].style.transform = "scale(1.2, 1.2)";
    }

    add_line_1[2].classList.toggle("add-line-1-1");
    add_line_1[2].classList.toggle("add-line-1-clone-1");
    add_line_2[2].classList.toggle("add-line-2-1");
    add_line_2[2].classList.toggle("add-line-2-clone-1");

    if( productImages[2].style.filter === "brightness(75%)") {
        productImages[2].style.filter = "brightness(100%)";
    } else {
        productImages[2].style.filter = "brightness(75%)";

    }

    line_1_clone[2].classList.toggle("add-line-1-1");
    line_1_clone[2].classList.toggle("clone-1-1");
    line_2_clone[2].classList.toggle("add-line-2-1");
    line_2_clone[2].classList.toggle("clone-2-1");

    if( productContainer[2].style.borderWidth === "25px" ) {
        productContainer[2].style.borderWidth = "0px";
    } else {
        productContainer[2].style.borderWidth = "25px";
    }

    if( addButton[2].style.opacity === "1" ) {
        addButton[2].style.opacity = "0";
    }

    else {
        addButton[2].style.opacity = "1";
    }

    if( productContainer[2].style.visibility === "visible") {
        productContainer[2].style.visibility = "hidden";
    } else {
        productContainer[2].style.visibility = "visible";
    }



}

openProductContainer[2].addEventListener('click', handleShopNowContainer_2);
openProductContainer[2].addEventListener('mouseenter', handleShopNowContainer_2);
openProductContainer[2].addEventListener('mouseleave', handleShopNowContainer_2);

let handleShopNowContainer_3 = () => {

    if( borderContainer[3].style.visibility === "hidden") {
        borderContainer[3].style.visibility = "visible";
    } else {
        borderContainer[3].style.visibility = "hidden";
    }

    if( borderContainer[3].style.transform === "scale(1.2, 1.2)" ) {
        borderContainer[3].style.transform = "scale(1, 1)";

    } else {
        borderContainer[3].style.transform = "scale(1.2, 1.2)";
    }

    add_line_1[3].classList.toggle("add-line-1-1");
    add_line_1[3].classList.toggle("add-line-1-clone-1");
    add_line_2[3].classList.toggle("add-line-2-1");
    add_line_2[3].classList.toggle("add-line-2-clone-1");

    if( productImages[3].style.filter === "brightness(75%)") {
        productImages[3].style.filter = "brightness(100%)";
    } else {
        productImages[3].style.filter = "brightness(75%)";

    }

    line_1_clone[3].classList.toggle("add-line-1-1");
    line_1_clone[3].classList.toggle("clone-1-1");
    line_2_clone[3].classList.toggle("add-line-2-1");
    line_2_clone[3].classList.toggle("clone-2-1");

    if( productContainer[3].style.borderWidth === "25px" ) {
        productContainer[3].style.borderWidth = "0px";
    } else {
        productContainer[3].style.borderWidth = "25px";
    }

    if( addButton[3].style.opacity === "1" ) {
        addButton[3].style.opacity = "0";
    }

    else {
        addButton[3].style.opacity = "1";
    }

    if( productContainer[3].style.visibility === "visible") {
        productContainer[3].style.visibility = "hidden";
    } else {
        productContainer[3].style.visibility = "visible";
    }



}

openProductContainer[3].addEventListener('click', handleShopNowContainer_3);
openProductContainer[3].addEventListener('mouseenter', handleShopNowContainer_3);
openProductContainer[3].addEventListener('mouseleave', handleShopNowContainer_3);

let handleShopNowContainer_4 = () => {

    if( borderContainer[4].style.visibility === "hidden") {
        borderContainer[4].style.visibility = "visible";
    } else {
        borderContainer[4].style.visibility = "hidden";
    }

    if( borderContainer[4].style.transform === "scale(1.2, 1.2)" ) {
        borderContainer[4].style.transform = "scale(1, 1)";

    } else {
        borderContainer[4].style.transform = "scale(1.2, 1.2)";
    }

    add_line_1[4].classList.toggle("add-line-1-1");
    add_line_1[4].classList.toggle("add-line-1-clone-1");
    add_line_2[4].classList.toggle("add-line-2-1");
    add_line_2[4].classList.toggle("add-line-2-clone-1");

    if( productImages[4].style.filter === "brightness(75%)") {
        productImages[4].style.filter = "brightness(100%)";
    } else {
        productImages[4].style.filter = "brightness(75%)";

    }

    line_1_clone[4].classList.toggle("add-line-1-1");
    line_1_clone[4].classList.toggle("clone-1-1");
    line_2_clone[4].classList.toggle("add-line-2-1");
    line_2_clone[4].classList.toggle("clone-2-1");

    if( productContainer[4].style.borderWidth === "25px" ) {
        productContainer[4].style.borderWidth = "0px";
    } else {
        productContainer[4].style.borderWidth = "25px";
    }

    if( addButton[4].style.opacity === "1" ) {
        addButton[4].style.opacity = "0";
    }

    else {
        addButton[4].style.opacity = "1";
    }

    if( productContainer[4].style.visibility === "visible") {
        productContainer[4].style.visibility = "hidden";
    } else {
        productContainer[4].style.visibility = "visible";
    }



}

openProductContainer[4].addEventListener('click', handleShopNowContainer_4);
openProductContainer[4].addEventListener('mouseenter', handleShopNowContainer_4);
openProductContainer[4].addEventListener('mouseleave', handleShopNowContainer_4);


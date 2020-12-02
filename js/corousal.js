// images slide show 
// getting all images
let img_1 = document.querySelector("#corousal-img-1");
let img_2 = document.querySelector("#corousal-img-2");
let img_3 = document.querySelector("#corousal-img-3");
let imgContainer = document.querySelector(".images-container");
let count = 0;
function increaseCount() {
    if(count == 3) {
        count = 0;
        return count;
        console.log(count);
    } else {
        count = count + 1;
        console.log(count);
        return count;
    }
}
if(count == 4 ) {
    slideImg_4 = document.createElement("IMG");
    slideImg_4.setAttribute("src", "./photos/Shopia-slider-image-1.jpg");
    imgContainer.appendChild(slideIg_4);
}

let slideImg_1 = () => {
    img_1.style.transform = "translateX("+ count * -100 +"%)";
}
let slideImg_2 = () => {
    img_2.style.transform = "translateX("+ count * -100 +"%)";
}
let slideImg_3 = () => {
    img_3.style.transform = "translateX("+ count * -100 +"%)";
}

let counter = setInterval(increaseCount, 6000);
let timeImg_1 = setInterval(slideImg_1, 6000);
let timeImg_2 = setInterval(slideImg_2, 6000);
let timeImg_3 = setInterval(slideImg_3, 6000);

// increaseCount();




// images slide show 
// getting all images
let img_1 = document.getElementById("slider_image_1");
let img_2 = document.getElementById("slider_image_2");
let img_3 = document.getElementById("slider_image_3");
let img_4 = document.getElementById("slider_image_4");

// Manipulate Dots container
// let dot_1 = document.querySelector("#dot-1");
// let dot_2 = document.querySelector("#dot-2");
// let dot_3 = document.querySelector("#dot-3");
// let dot_4 = document.querySelector("#dot-4");
// let dot_5 = document.querySelector("#dot-5");
// let containerDot_1 = document.querySelector("#container-dot1");
// let containerDot_2 = document.querySelector("#container-dot2");
// let containerDot_3 = document.querySelector("#container-dot3");
// let containerDot_4 = document.querySelector("#container-dot4");
// let containerDot_5 = document.querySelector("#container-dot5");

let imgContainer = document.querySelector(".images-container");
let slideShowDelay = "all 2s ease-in-out";
let count = 0;

// let slider_img_4 = () => {
//     let slideImg_4 = document.createElement("IMG");
//     slideImg_4.setAttribute("src", "./photos/Shopia-slider-image-1.jpg");
//     imgContainer.appendChild(slideImg_4);
// }
// Read Me if Stuck !
// The transition translateX property of images is multiplay of the counter
// Stop transition at appropriate count value and magic happened
// Loo through the counter > if count = 3 then start from initaial count i.e., count = 0
// Their is 5 functions, 1 for counter and rest for the image elements
let img_slide_show = () => {
    console.log(count);
    // img_1.style.transition = "all 2s ease-in-out"; 
    // img_2.style.transition = "all 2s ease-in-out"; 
    // img_3.style.transition = "all 2s ease-in-out"; 
    // img_4.style.transition = "all 2s ease-in-out"; 
    img_3.style.transform = `translate(-${count * 100}%)`;
    // img_4.style.transform = `translate(-${count * 100}%)`;
    
    if(count === 4) {
        // img_2.style.transform = "traslateX(0%)";
        // img_3.style.transform = "traslateX(0%)";
        return count = 0;
    }
    return count;
}

function increaseCount() {
    count += 1;
    img_slide_show();
    slide_img_1();
    slide_img_2();
    slide_img_3();
    slide_img_4();
} 

const slide_img_1 = () => {
    if(count === 3) {
        img_1.style.transition = "0s";
        img_1.style.transform = "translate(0%)"; 
    } else {
        img_1.style.transition = "all 2s";
    img_1.style.transform = `translate(-${count * 100}%)`;
    }
}
const slide_img_2 = () => {
    if(count === 3) {
        img_2.style.transition = "0s";
        img_2.style.transform = "translate(0%)"; 
    } else {
        img_2.style.transition = "all 2s";
        img_2.style.transform = `translate(-${count * 100}%)`;
    }
}
const slide_img_3 = () => {
    if(count === 0) {
        img_3.style.transition = "0s";
        img_3.style.transform = "translate(0%)"; 
    } else {
        img_3.style.transition = "all 2s";
        img_3.style.transform = `translate(-${count * 100}%)`;
    }
}
const slide_img_4 = () => {
    if(count === 0) {
        img_4.style.transition = "0s";
        img_4.style.transform = "translate(0%)"; 
    } else {
        img_4.style.transition = "all 2s";
        img_4.style.transform = `translate(-${count * 100}%)`;
    }
}
    

// function decreaseCount() {
//     if(count == 3) {
//         count = 0;
//         img_1.style.transition = "0s";
//         img_2.style.transition = "0s";
//         img_3.style.transition = "0s";
//         // img_4.style.transition = "0s";
//         // slider_img_4();
//         console.log(count);
//         return count;
//     } else {
//         count = count - 1;
//         img_1.style.transition = slideShowDelay;
//         img_2.style.transition = slideShowDelay;
//         img_3.style.transition = slideShowDelay;
//         console.log(count);
//         return count;
//     }
// }

let counter = setInterval(increaseCount, 2000);

//     if( count == 0){
//         img_1.style.transition = slideShowDelay;
//     } else {
//         img_1.style.transition = slideShowDelay;
//     }

//     img_1.style.transform = `translateX(${-(count * 100)}%)`;
//     // dot_1.style.transform = ;
//     // img_1.style.transition = "2s ease-in-out";
// }
// let slideImg_2 = () => {
//     img_2.style.transform = "translateX("+ count * -100 +"%)";
//     // dot_2.style.transform = "translateX("+ (count * -43) + "px)";
// }
// let slideImg_3 = () => {
//     img_3.style.transform = "translateX("+ count * -100 +"%)";
//     // dot_3.style.transform = "translateX("+ (count * -43) + "px)";
// }
// let slideImg_4 = () => {
//     let count_1 = 0;
//     // if( count == )
//      if( count == 0) {
//         count_1 += 4;
//         img_4.style.transform = "translateX("+ count_1 * -100 +"%)"; 
//         // dot_4.style.transform = "translateX("+ ((count_1 * -43) + 102) + "px)";
//         img_4.style.transition = "0s";  
//      } else if( count == 1){
//         img_4.style.transform = "translateX("+ count * -100 +"%)"; 
//         // dot_4.style.transform = "translateX("+ ((count * -43) + 102) + "px)";
//         img_4.style.transition = "0s";  
//      } else {
//         img_4.style.transform = "translateX("+ count * -100 +"%)"; 
//         // dot_4.style.transform = "translateX("+ ((count * -43) + 102 )+ "px)";
//         img_4.style.transition = slideShowDelay;  
//      }
// }
// let moveDot_1 = () => {
//     containerDot_1.style.transform = "translateX("+ (count * -43) + "px)";

// }
// let moveDot_2 = () => {
//     containerDot_2.style.transform = "translateX("+ (count * -43) + "px)";
//     dot_2.style.transform = "rotate(45deg) scale(0.7)";
//     dot_2.style.transition = "all 2s ease-in-out";
// }
// let moveDot_3 = () => {
//     containerDot_3.style.transform = "translateX("+ (count * -43) + "px)";
//     dot_3.style.transform = "rotate(45deg) scale(1)";
//     dot_3.style.transition = "all 2s ease-in-out";
// }
// let moveDot_4 = () => {
//     containerDot_4.style.transform = "translateX("+ ((count * -43) + 102 )+ "px)";
// }
// let moveDot_5 = () => {
//     containerDot_5.style.transform = "translateX("+ ((count * -43) + 145 )+ "px)";
// }
// //incrementCount.addEventListener("click", increaseCount);
// incrementCount.addEventListener("click", slideImg_1);
// incrementCount.addEventListener("click", slideImg_2);
// incrementCount.addEventListener("click", slideImg_3);
// incrementCount.addEventListener("click", slideImg_4);
// incrementCount.addEventListener("click", moveDot_1);
// incrementCount.addEventListener("click", moveDot_2);
// incrementCount.addEventListener("click", moveDot_3);
// incrementCount.addEventListener("click", moveDot_4);
// incrementCount.addEventListener("click", moveDot_5);
// decrementCount.addEventListener("click", decreaseCount);
// decrementCount.addEventListener("click", slideImg_1);
// decrementCount.addEventListener("click", slideImg_2);
// decrementCount.addEventListener("click", slideImg_3);
// decrementCount.addEventListener("click", slideImg_4);
// decrementCount.addEventListener("click", moveDot_1);
// decrementCount.addEventListener("click", moveDot_2);
// decrementCount.addEventListener("click", moveDot_3);
// decrementCount.addEventListener("click", moveDot_4);
// decrementCount.addEventListener("click", moveDot_5);



// let timeImg_1 = setInterval(slideImg_1, 5000);
// let timeImg_2 = setInterval(slideImg_2, 5000);
// let timeImg_3 = setInterval(slideImg_3, 5000);
// let timeImg_4 = setInterval(slideImg_4, 5000);

// increaseCount();




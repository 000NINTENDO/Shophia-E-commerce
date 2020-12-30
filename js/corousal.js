// images slide show 
// getting all images
let img_1 = document.getElementById("slider_image_1");
let img_2 = document.getElementById("slider_image_2");
let img_3 = document.getElementById("slider_image_3");
let img_4 = document.getElementById("slider_image_4");
let topNavigationBar = document.querySelector(".header-top-bar");
let navigationBelow = document.querySelector(".navbar-bottom");


let scrolled = 0;
let scrolledOposite = 0;

window.addEventListener('scroll', () => {
    let currentScrolled = document.documentElement.scrollTop;
    if(currentScrolled === 0) {
        scrolled = 0;
    }
    if (currentScrolled > scrolled) {
        scrolled = currentScrolled;
        // console.log("scrolled",scrolled);
        if(scrolled > 180 ) {
            // console.log('Hided');
            topNavigationBar.classList.add("hide_nav_bar");

        }
        // topNavigationBar.classList.add("hide_nav_bar");
    } else if ( currentScrolled < scrolled ) {
        // console.log('scrolled opposite');
        // console.log('scrolled ', scrolled);
        
        if( (scrolled - currentScrolled) >= 180 ) {
            topNavigationBar.classList.remove("hide_nav_bar");
            // console.log("Visible__________");
            // scrolledOpposite = currentScrolled;
            // if( currentScrolled > scrolledOposite ) {
            //     // console.log("Hided__________");
            //     console.log('oposite scrolled', scrolledOpposite );
            // }
            
            
        }

    }
})

        // if(currentScrolled <= scrolledOposite) {
        //     scrolledOposite = currentScrolled;
        //     console.log("scrolled opposite", scrolledOposite);
        //     console.log("current scrolled", currentScrolled);
        // }
      
        // if (currentScrolled == scrolledOposite) {
        //     scrolledOposite = currentScrolled;
        //     console.log("scrolled opposite", scrolledOposite);
        //     console.log("scrolled", scrolled);
        //     if ( scrolled - currentScrolled > 200) {
        //         console.log("class added");
        //     }
        // } 
         
        // } else if( scrolledOpositescolled ) {

        // }

// let scrolled = 0;
// const addScroll = () => {
//     scrolled += 1;
//     hideNavBar(scrolled);
//     console.log(scrolled);
//     // console.log(document.documentElement.scrollTop);
//     return scrolled;
    
// }

const hideNavBar = (scrolledCount) => {
    if(scrolledCount >= 16) {
        topNavigationBar.classList.add("hide_nav_bar");
    } else {
        topNavigationBar.classList.remove("hide_nav_bar");
    }
}



// Manipulate Dots container
let dot_1 = document.querySelector("#dot-1");
let dot_2 = document.querySelector("#dot-2");
let dot_3 = document.querySelector("#dot-3");
// let dot_4 = document.querySelector("#dot-4");
// let dot_5 = document.querySelector("#dot-5");
// let containerDot_1 = document.querySelector("#container-dot1");
// let containerDot_2 = document.querySelector("#container-dot2");
// let containerDot_3 = document.querySelector("#container-dot3");
// let containerDot_4 = document.querySelector("#container-dot4");
// let containerDot_5 = document.querySelector("#container-dot5");

let imgContainer = document.querySelector(".images-container");
let transitionDuration = "all 2s ease-in-out";
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
    // console.log(count);
    if(count === 4) {
        return count = 0;
    }
    return count;
};

function increaseCount() {
    count += 1;
    img_slide_show();
    slide_img_1();
    slide_img_2();
    slide_img_3();
    slide_img_4();
    animateDots();
} 

const previewCurrent = () => {
    slide_img_1();
    slide_img_2();
    slide_img_3();
    slide_img_4();
    animateDots();
    clearInterval(counter);
    counter = setInterval(increaseCount, 5000);
}

const slide_img_1 = () => {
    if(count === 3) {
        img_1.style.transition = "0s";
        img_1.style.transform = "translate(0%)"; 
    } else {
        img_1.style.transition = transitionDuration;
        img_1.style.transform = `translate(-${count * 100}%)`;
    }
}
const slide_img_2 = () => {
    if(count === 3) {
        img_2.style.transition = "0s";
        img_2.style.transform = "translate(0%)"; 
    } else {
        img_2.style.transition = transitionDuration;
        img_2.style.transform = `translate(-${count * 100}%)`;
    }
}
const slide_img_3 = () => {
    if(count === 0) {
        img_3.style.transition = "0s";
        img_3.style.transform = "translate(0%)"; 
    } else {
        img_3.style.transition = transitionDuration;
        img_3.style.transform = `translate(-${count * 100}%)`;
    }
}
const slide_img_4 = () => {
    if(count === 0) {
        img_4.style.transition = "0s";
        img_4.style.transform = "translate(0%)"; 
    } else {
        img_4.style.transition = transitionDuration;
        img_4.style.transform = `translate(-${count * 100}%)`;
    }
}

let counter = setInterval(increaseCount, 5000);

dot_1.addEventListener('click', () => {
    count = 0;
    previewCurrent();
});
dot_2.addEventListener('click', () => {
    count = 1;
    previewCurrent();
});
dot_3.addEventListener('click', () => {
    count = 2;
    previewCurrent();
});

const animateDots = () => {
    if(count === 0) {
        dot_1.classList.add('active_dot');
        dot_3.classList.remove('active_dot');
        dot_2.classList.remove('active_dot');
    } else if (count === 1) {
        dot_1.classList.remove('active_dot');
        dot_2.classList.add('active_dot');
        dot_3.classList.remove('active_dot');
    } else if ( count === 2) {
        dot_1.classList.remove('active_dot');
        dot_2.classList.remove('active_dot');
        dot_3.classList.add('active_dot');
    } else if( count === 3) {
        dot_1.classList.add('active_dot');
        dot_2.classList.remove('active_dot');
        dot_3.classList.remove('active_dot');  
    }
}
animateDots();

// document.onscroll = () => {
//     console.log(window.scrollHeight);
// }

// console.log("body.scrollHeight", document.body.scrollHeight);
// console.log("body.clientHeight", document.body.clientHeight);
// console.log("body.offsetHeight", document.body.offsetHeight);
// console.log("documentElement.scrollHeight", document.documentElement.scrollHeight);
// console.log("documentElement.clientHeight", document.documentElement.clientHeight);
// console.log("documentElement.scrollHeight", document.documentElement.offsetHeight);
// console.log(Math.max(
//     document.body.scrollHeight,
//     document.body.clientHeight,
//     document.body.offsetHeight,
//     document.documentElement.scrollWidth,
//     document.documentElement.clientHeight,
//     document.documentElement.offsetHeight

// ))


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




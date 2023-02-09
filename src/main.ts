let carouselText = document.getElementById("carousel-text")! as HTMLParagraphElement;
let carouselImage = document.getElementById("carousel-image")! as HTMLImageElement;
let dots = document.querySelectorAll(".dot") as NodeListOf<HTMLDivElement>;
let carouselLeftArrow = document.getElementById("carousel-left-arrow")! as HTMLDivElement;
let carouselRightArrow = document.getElementById("carousel-right-arrow")! as HTMLDivElement;
let cartIcon = document.getElementById("cart-icon")! as HTMLDivElement;
let numberOfItems = document.getElementById("number-of-items")! as HTMLDivElement;
let addToCartBtn = document.getElementById("add-to-cart")! as HTMLButtonElement
let utils = document.querySelector(".utils")! as HTMLDivElement;
interface CarouselItem {
    text: string;
    image: string;
}

// make utils stick to top when scrolling

window.addEventListener("scroll", () => {
    if (window.pageYOffset > 0) {
        utils.style.position = "fixed";
        utils.style.top = "0";
        utils.style.width = "100%";
        utils.style.zIndex = "100";
    }
    else {
        utils.style.position = "relative";
        utils.style.top = "0";
        utils.style.width = "100%";
        utils.style.zIndex = "100";

    }
}
);





if (numberOfItems.innerHTML === "") {
    numberOfItems.style.display = "none";
}
else {
    numberOfItems.style.display = "block";
}

let carouselItems: CarouselItem[] = [
    {
        text: "Best furniture <br> collection for <br> your <br> interior",
        image: "./asset/Image-2.png"
    },
    {
        text: "Find your <br> perfect <br> furniture",
        image: "./asset/Image-3.png"
    },
    {
        text: "shop <br> with <br> confidence",
        image: "./asset/Image-4.png"
    }];

setInterval(() => {
    let randomIndex = Math.floor(Math.random() * carouselItems.length);
    carouselText.innerHTML = carouselItems[randomIndex].text;
    carouselImage.src = carouselItems[randomIndex].image;
    dots.forEach(dot => {
        dot.classList.remove("active");
    }
    );
    dots[randomIndex].classList.add("active");
    
}
    , 5000);

carouselLeftArrow.addEventListener("click", () => {
    let activeDot = document.querySelector(".dot.active")! as HTMLDivElement;
    let activeDotIndex = Array.from(dots).indexOf(activeDot);
    let nextDotIndex = activeDotIndex === 0 ? dots.length - 1 : activeDotIndex - 1;
    dots.forEach(dot => {
        dot.classList.remove("active");
    }
    );
    dots[nextDotIndex].classList.add("active");
    carouselText.innerHTML = carouselItems[nextDotIndex].text;
    carouselImage.src = carouselItems[nextDotIndex].image;
}
);


carouselRightArrow.addEventListener("click", () => {
    let activeDot = document.querySelector(".dot.active")! as HTMLDivElement;
    let activeDotIndex = Array.from(dots).indexOf(activeDot);
    let nextDotIndex = activeDotIndex === dots.length - 1 ? 0 : activeDotIndex + 1;
    dots.forEach(dot => {
        dot.classList.remove("active");
    }
    );
    dots[nextDotIndex].classList.add("active");
    carouselText.innerHTML = carouselItems[nextDotIndex].text;
    carouselImage.src = carouselItems[nextDotIndex].image;
}
);

cartIcon.addEventListener("click", () => {
    window.location.href = "./src/components/cart/cart.html";
  

}
);


addToCartBtn.addEventListener("click", () => {
    numberOfItems.style.display = "block";
    let items =numberOfItems.innerHTML === "" ? 1 : parseInt(numberOfItems.innerHTML);
    numberOfItems.innerHTML = (items + 1).toString();
    console.log("added to cart");
}
);

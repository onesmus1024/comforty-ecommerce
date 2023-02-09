
let deleteBtn = document.querySelector("#delete-btn")! as HTMLButtonElement;
let minusBtn = document.querySelector("#minus-btn")! as HTMLButtonElement;
let plusBtn = document.querySelector("#add-btn")! as HTMLButtonElement;
let numberOfItem = document.querySelector("#number-of-items")! as HTMLSpanElement;


plusBtn.addEventListener("click", () => {
    numberOfItem.innerHTML = (parseInt(numberOfItem.innerHTML) + 1).toString();
}
);

minusBtn.addEventListener("click", () => {
    numberOfItem.innerHTML = (parseInt(numberOfItem.innerHTML) - 1).toString();
}
);

deleteBtn.addEventListener("click", () => {
    numberOfItem.innerHTML = "0";
}
);


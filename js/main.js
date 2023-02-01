let input = document.querySelector("input");
let buttons = document.querySelectorAll(".buttons span");
let result = document.querySelector(".result");

buttons.forEach((span) => {
    span.addEventListener("click", (e) => {

        if (e.target.classList.contains("check")) {
            checkItem();
        } else if (e.target.classList.contains("add")) {
            addItem();
        } else if (e.target.classList.contains("delete")) {
            deleteItem();
        } else if (e.target.classList.contains("show")) {
            showItem();
        }
    })

});

//check item
function checkItem() {
    console.log("check");
    if (input.value !== "") {
        //check local storage
        if (localStorage.getItem(input.value)) {
            result.innerHTML = `Found Local Item Called <span>${input.value}</span>`;
        } else {
            result.innerHTML = `No Local Storage Item With The Name <span>${input.value}</span>`;
        }
    } else {
        showMassage();
    }



}
//add item
function addItem() {
    if (input.value !== "") {
        //check local storage
        localStorage.setItem(input.value, "text");
        result.innerHTML = ` Local Item  <span>${input.value} </span>Added`;
        input.value = "";

    } else {
        showMassage();
    }


}
//delete item
function deleteItem() {
    if (input.value !== "") {
        //check local storage
        if (localStorage.getItem(input.value)) {
            localStorage.removeItem(input.value);
            result.innerHTML = ` Local Item <span>${input.value} </span>Deleted`;
            input.value = "";
        } else {
            result.innerHTML = `No Local Storage Item With The Name <span>${input.value}</span>`;
        }
    } else {
        showMassage();
    }


}
//show item
function showItem() {
    if (localStorage.length) {
        result.innerHTML = "";

        for (let [key, value] of Object.entries(localStorage)) {

            result.innerHTML += `<span class="value">${key}</span>`;
        }

    } else {
        result.innerHTML = "Local Storge Is Empty ";
    }


}


//return massage if input is empty
function showMassage() {

    result.innerHTML = "Input is Empty";


}



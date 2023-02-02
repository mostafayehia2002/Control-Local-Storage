let inputKey = document.querySelector(".input-key");
let inputValue = document.querySelector(".input-value");
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
    if (inputKey.value !== "") {
        //check local storage
        if (localStorage.getItem(inputKey.value)) {
            result.innerHTML = `Found Local Item Called <span>${inputKey.value}</span>`;
        } else {
            result.innerHTML = `No Local Storage Item With The Name <span>${inputKey.value}</span>`;
        }
    } else {
        showMassage();
    }



}
//add item
function addItem() {
    if (inputKey.value !== "" && inputValue.value !== "") {
        //check local storage
        localStorage.setItem(inputKey.value, inputValue.value);
        result.innerHTML = ` Local Item  <span>${inputKey.value} </span>Added`;
        inputKey.value = "";
        inputValue.value = "";

    } else {
        showMassage();
    }


}
//delete item
function deleteItem() {
    if (inputKey.value !== "") {
        //check local storage
        if (localStorage.getItem(inputKey.value)) {
            localStorage.removeItem(inputKey.value);
            result.innerHTML = ` Local Item <span>${inputKey.value} </span>Deleted`;
            inputKey.value = "";
            inputValue.value = "";
        } else {
            result.innerHTML = `No Local Storage Item With The Name <span>${inputKey.value}</span>`;
        }
    } else {
        showMassage();
    }


}

//show item
function showItem() {

    if (localStorage.length) {
        result.innerHTML = "";
        //create table
        let table = document.createElement("table");
        //create head and row
        let head = document.createElement("thead");
        let headRow = document.createElement("tr");
        let keyHead = document.createElement("td");
        let valueHead = document.createElement("td");
        //create text 
        let keyHeadText = document.createTextNode("key");
        let valueHeadText = document.createTextNode("value");
        //append text to td
        keyHead.appendChild(keyHeadText);
        valueHead.appendChild(valueHeadText);
        //apppend row of head to head
        head.appendChild(headRow);
        //append td to row
        headRow.appendChild(keyHead);
        headRow.appendChild(valueHead);
        //append head to table
        table.appendChild(head);
        for (let [key, value] of Object.entries(localStorage)) {
            //create row    
            let row = document.createElement("tr");
            //create td
            let tdKey = document.createElement("td");
            let tdValue = document.createElement("td");
            //create text to td
            let keyText = document.createTextNode(key);
            let ValueText = document.createTextNode(value)
            //append text in td
            tdKey.appendChild(keyText);
            tdValue.appendChild(ValueText)
            //append td to row
            row.appendChild(tdKey);
            row.appendChild(tdValue);
            //append row to table
            table.appendChild(row);


        }
        //append table to result
        result.appendChild(table);
    } else {
        result.innerHTML = "Local Storge Is Empty ";
    }


}


//return massage if input is empty

function showMassage() {
    result.innerHTML = "Input is Empty";
}



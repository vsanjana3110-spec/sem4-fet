const CORRECT_PASSWORD = "admin123";
let attempts = 3;

// DO-WHILE LOOP (real usage: at least one execution)
function getInputValue() {
    let value;
    let valid = false;

    do {
        value = document.getElementById("pass").value;

        if (value !== "") {
            valid = true;
        } else {
            alert("Please enter password");
            break;
        }

    } while (!valid);

    return value;
}

// WHILE LOOP (real attempt control)
function checkPassword() {

    let msg = document.getElementById("msg");
    let box = document.querySelector(".box");

    let i = 0;

    while (i < 1) {   // controlled loop

        let value = getInputValue();

        if (value === CORRECT_PASSWORD) {
            msg.className = "success";
            msg.innerText = "ACCESS GRANTED ✔";
            break;
        } 
        else {
            attempts--;

            msg.className = "error";
            msg.innerText = attempts > 0
                ? "Wrong password. Attempts left: " + attempts
                : "SYSTEM LOCKED ❌";

            document.getElementById("pass").value = "";

            if (attempts === 0) {
                document.getElementById("pass").disabled = true;
                document.querySelector("button").disabled = true;
            }
        }

        i++;
    }
}

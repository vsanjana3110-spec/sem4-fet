const CORRECT_PASSWORD = "admin123";
let attempts = 3;

// DO-WHILE (input handling demo)
function getPasswordValue() {
    let value;

    do {
        value = document.getElementById("pass").value;
        break;
    } while(false);

    return value;
}

// LOGIN FUNCTION (WHILE LOOP)
function checkPassword(){

    let msg = document.getElementById("msg");

    let i = 0;

    while(i < 1){

        let value = getPasswordValue();

        if(value === CORRECT_PASSWORD){

            msg.innerText = "ACCESS GRANTED ✔";
            msg.className = "success";

            // show form
            document.getElementById("studentForm").style.display = "block";
            break;
        }
        else{
            attempts--;

            msg.innerText = attempts > 0
                ? "Wrong password. Attempts left: " + attempts
                : "SYSTEM LOCKED ❌";

            msg.className = "error";

            document.getElementById("pass").value = "";

            if(attempts === 0){
                document.getElementById("pass").disabled = true;
            }
        }

        i++;
    }
}

// STUDENT FORM FUNCTION
function submitStudent(){

    let name = document.getElementById("name").value;
    let age = document.getElementById("age").value;
    let course = document.getElementById("course").value;
    let level = document.getElementById("level").value;

    if(name === "" || age === ""){
        document.getElementById("smsg").innerText = "Fill all fields";
        return;
    }

    document.getElementById("smsg").innerText =
        "Saved ✔ " + name + " | " + course + " | " + level;
}

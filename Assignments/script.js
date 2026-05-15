const CORRECT_PASSWORD = "admin123";
let attempts = 3;
function getValue(){
    let val;
    do {
        val = document.getElementById("pass").value;
        break;
    } while(false);

    return val;
}
function checkPassword(){
    let msg = document.getElementById("msg");
    let i = 0;
    while(i < 1){
        let value = getValue();
        if(value === CORRECT_PASSWORD){
            msg.innerText = "ACCESS GRANTED ✔";
            msg.className = "success";
            // SHOW STUDENT DETAILS
            document.getElementById("studentDetails").style.display = "block";
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

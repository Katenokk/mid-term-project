const fullName = document.querySelector("#name");
const email = document.querySelector("#email");
const phone = document.querySelector("#phone");
const message = document.querySelector("#message");

const submitFormBtn = document.querySelector(".submit-form-btn");

const emailAlert = document.querySelector(".email-alert");
const fullNameAlert = document.querySelector(".full-name-alert");
const phoneAlert = document.querySelector(".phone-alert");
const messageAlert = document.querySelector(".message-alert");

submitFormBtn.addEventListener("click", isValidForm);

function isValidForm() {
    const validName = isValidFullName();
    const validEmail = isValidEmail();
    const validPhone = isValidPhone();
    const validMessage = isValidMessage();
    
    
    if(validEmail && validName && validPhone && validMessage) {
        submitForm()
        /*clean the alerts after entering correct value*/ 
        if (validName) {
            fullNameAlert.innerHTML = "";
        }
        if (validEmail) {
            emailAlert.innerHTML = "";
        }
        if (validPhone) {
            phoneAlert.innerHTML = "";
        }
        if (validMessage) {
            messageAlert.innerHTML = "";
        }
    } 
    
}

/*funciones que validan cada campo:*/ 

function isValidFullName() {
    if (/^([a-zA-Z ]){2,30}$/.test(fullName.value)) {
        return true;
    }
    else {
        fullNameAlert.innerHTML = "Please, enter a valid full name";
        fullNameAlert.setAttribute("class", "invalid");
        return false;
    }
}

function isValidEmail () {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value)) {
        return true;
    }
    else {
        emailAlert.innerHTML = "Please, enter a valid email";
        emailAlert.setAttribute("class", "invalid");
        return false;
    }
}

function isValidPhone () {
    const n = phone.value;
    if (isNaN(n) || n.indexOf(" ") !== -1 || n.length < 9) {
        phoneAlert.innerHTML = "Please, enter a valid phone number";
        phoneAlert.setAttribute("class", "invalid");
        return false;  
    }
    else {
        return true;
    }
    
}

function isValidMessage() {
    if(message.value !== "") {
        return true;
    }
    else {
        messageAlert.innerHTML = "Please, write a comment";
        messageAlert.setAttribute("class", "invalid");
        return false;
    }
}





 
async function submitForm() { 
    
        const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
        headers: {
            "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify({
            userId: 1,
            fullName: fullName.value,
            email: email.value,
            phone: phone.value,
            message: message.value
        }),
    });
    const finalRes = await res.json();
    console.log(finalRes);
    console.log(res.status);
    
    
}

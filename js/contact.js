//Formulario "Do you have any questions?" index.html y project.html
const submitBtn = document.querySelector(".btn-subscribe");
const validEmail = document.querySelector(".alert");
const email = document.querySelector(".input");

submitBtn.addEventListener("click", isValid);

function isValid() {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value)) {
        validEmail.innerHTML = "Thank you for subscribing!";
        validEmail.setAttribute("class", "valid");
        submitEmail();
    }
    else {
        validEmail.innerHTML = "Please, enter a valid email!";
        validEmail.setAttribute("class", "invalid");
    }
}

async function submitEmail() {
    
    const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
        headers: {
            "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify({
            userId: 1,
            email: email.value
        }),
    });
    const finalRes = await res.json();
    
    console.log(finalRes);
    console.log(res.status)
}
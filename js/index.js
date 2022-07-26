const projectsSection = document.querySelector(".recent-projects");

//definir funcion que se ejecute al cargar la página

 window.addEventListener('load', () => {
     getRecentProjects()
 })


//con async await
 //create an array with the first 3 objects
 const recentProjects = [];
 async function getRecentProjects() {
     const res = await fetch("https://jsonplaceholder.typicode.com/posts");
     const finalRes = await res.json();
     for(let i = 0; i < 3; i++) {
        const title = finalRes[i].title;
        const description = finalRes[i].body;
        recentProjects.push({title: title, text: description});
        }
    //add image url to array:    
    const response = await fetch("https://jsonplaceholder.typicode.com/photos");
    const finalResponse = await response.json();
        for (let j=0; j<3;j++) {
            
            recentProjects[j].img = finalResponse[j].url;
        }
    //display results in html    
    recentProjects.forEach(project => {
        projectsSection.innerHTML += `<div class="recent-project-item">
         <img class="recent-project-img" src="${project.img}" alt="">
         <div class="project-item-content">
             <h4>${project.title}</h4>
             <p>${project.text}</p>
             <a href="project.html">Learn more</a>                      
         </div>
     </div>`
    })
   }


   //hmtl anterior que funiona!!!:
//    projectsSection.innerHTML += `<div class="recent-project-item">
//         <img class="recent-project-img" src="" alt="">
//         <div class="project-item-content">
//             <h4></h4>
//             <p></p>
//             <a href="project.html">Learn more</a>                      
//         </div>
//     </div>`

//codigo que intente poner nuevo:
//     const imageProject = document.querySelectorAll(".recent-project-img");
//     const titleProject = document.querySelectorAll(".project-item-content h4");
//     const bodyProject = document.querySelectorAll(".project-item-content p");

//     recentProjects.forEach(project => {
//         imageProject.forEach(el => el.setAttribute("src", project.img));
//         titleProject.forEach(el => el.innerHTML = project.title) ;
//         bodyProject.forEach(el => el.innerHTML = project.text); 
//     })
//    }



//con .then
/*
let recentProjects = [];

fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => {
        return response.json();
     })
    .then((data) => {
        for(let i = 0; i < 3; i++) {
            const title = data[i].title;
            const description = data[i].body;
            recentProjects.push({title: title, text: description})
        }
    }).catch((err) => console.log(err));

  //console.log(recentProjects)

  fetch("https://jsonplaceholder.typicode.com/photos")
    .then((response) => {
        return response.json();
        })
        .then((data) => {
            for (let j=0; j<3;j++) {
                recentProjects[j].img = data[j].url;
            }
            recentProjects.forEach(project => {
                projectsSection.innerHTML += `<div class="recent-project-item">
                <img class="recent-project-img" src="${project.img}" alt="">
                <div class="project-item-content">
                    <h4>${project.title}</h4>
                    <p>${project.text}</p>
                    <a href="project.html">Learn more</a>                      
                </div>
            </div>`
                
            })
        })
        .catch((err) => console.log(err));

        console.log(recentProjects.length)
*/
        



/*BORRASR!!
//post del form
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
 
*/
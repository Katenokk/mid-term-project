const projectsSection = document.querySelector(".recent-projects");

//definir funcion que se ejecute al cargar la página
/*
 window.addEventListener('load', () => {
     getRecentProjects()
 })



 //crear array con los datos de cada proyecto
 //let recentProjects = [];
 async function getRecentProjects() {
     const res = await fetch("https://jsonplaceholder.typicode.com/posts");
     const finalRes = await res.json();
     finalRes.forEach(
       (el) =>
         (recentProject.innerHTML = `<h4>${el.} </h4>`)
     );
   }
*/

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

  console.log(recentProjects)

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

//project.html fetch del project

const project = document.querySelector(".project")

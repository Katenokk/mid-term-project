//project.html fetch del project

const project = document.querySelector(".project");
const otherProjects = document.querySelector(".other-projects-container");

//definir funcion que se ejecute al cargar la página

window.addEventListener('load', () => {
    getRecentProject()
    getOtherProjects()
})

async function getRecentProject() {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts/1");
    const finalRes = await res.json();
    const title = finalRes.title;
    const description = finalRes.body;
    const img = await fetch("https://jsonplaceholder.typicode.com/photos");
    const finalImg = await img.json();
    const url = finalImg[0].url;
    console.log(project)
    project.innerHTML = `
    <h2>${title}</h2>
    <img class="project-img" src="${url}" alt="">
    <p>${description}</p>`;
}
 
//display 3 random projects


  const projectsArray = [];
async function getOtherProjects() {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const finalRes = await res.json();
    for(let i = 0; i < finalRes.length; i++) {
       const title = finalRes[i].title;
       const description = finalRes[i].body;
       projectsArray.push({title: title, text: description});
       }
   //add image url to array:     
   const response = await fetch("https://jsonplaceholder.typicode.com/photos");
   const finalResponse = await response.json();
       for (let j=0; j<finalRes.length;j++) {
           
           projectsArray[j].img = finalResponse[j].url;
       } 
 
    //crear un nuevo array desordenado:
    const randomProjects = [...projectsArray].sort(() => 0.5 - Math.random());
    const random3projects = randomProjects.slice(0, 3);   
   //display results in html    
   random3projects.forEach(project => {
       otherProjects.innerHTML += `<div class="recent-project-item">
       <img class="recent-project-img" src="${project.img}" alt="">
       <div class="project-item-content">
           <h4>${project.title}</h4>
           <p>${project.text}</p>
           <a href="project.html">Learn more</a>                      
       </div>
   </div>`
       
   })
  } 

  
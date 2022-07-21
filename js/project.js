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
 
//display 3 different projects

//create an array with the first 3 objects
const projectsArray = [];
async function getOtherProjects() {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const finalRes = await res.json();
    for(let i = 0; i < 3; i++) {
       const title = finalRes[i].title;
       const description = finalRes[i].body;
       projectsArray.push({title: title, text: description});
       }
   //add image url to array:     
   const response = await fetch("https://jsonplaceholder.typicode.com/photos");
   const finalResponse = await response.json();
       for (let j=0; j<3;j++) {
           //doesn't add the new key-value pair :(
           projectsArray[j].img = finalResponse[j].url;
       } 
   //display results in html    
   projectsArray.forEach(project => {
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
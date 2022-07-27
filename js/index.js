const projectsSection = document.querySelector(".recent-projects");

//definir funcion que se ejecute al cargar la página

 window.addEventListener('load', () => {
     getRecentProjects()
 })



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
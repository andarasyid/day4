let dataProject = []

function addProject(event) {
    event.preventDefault()

    let showProjectName = document.getElementById("input-projectname").value;
    let showStartDate = document.getElementById("input-startdate").value;
    let showDateEnd = document.getElementById("input-enddate").value;
    let showDescription = document.getElementById("input-description").value;
    let showNode = document.getElementById("node").value;
    let showTypescript = document.getElementById("typescript").value;
    let showReact = document.getElementById("react").value;
    let showNext = document.getElementById("next").value;
    let showImage = document.getElementById('input-image').value;
    
    console.log(showProjectName)
    console.log(showStartDate) 
    console.log(showDateEnd) 
    console.log(showDescription) 
    console.log(showNode)
    console.log(showTypescript)
    console.log(showReact)
    console.log(showNext)
    console.log(showImage)
     
    //untuk menampilkan URL gambar
    //image = URL.createObjectURL(image)

    let project = {
        
        showProjectName,
        showStartDate,
        showDateEnd,
        showDescription,
        showNode,
        showTypescript,
        showReact,
        showNext,
        showImage,
        postAt: "13 Oktober 2022",
        author: "David Beckham"
    }
    
    dataProject.push(project)
    console.log(dataProject)

    renderBlog()
} 

function renderBlog() {
    document.getElementById("Description").innerHTML = ``
    for (let index = 0; index < dataProject.length; index++){
       console.log(dataProject[index])

       document.getElementById("Description").innerHTML += `
      
       <div class="project-list-item">
           <div class="project-img">
               <img src="${dataProject[index].image}">
           </div>
           <div class="project-content">
               <div class="btn-group">
                   <button class="btn-edit">Edit Post</button>
                   <button class="btn-post">Post Blog</button>
               </div>
               <h1>
                   <a href="project-detail.html" target="_blank">
                       ${dataProject[index].ProjectName}
                   </a>
               </h1>
               <div class="detail-project-content">
                   12 juli 2040

               </div>
               <p>
                   ${dataProject[index].Description}
               </p>

           </div>
       </div>
   </div>
   `
    }
}





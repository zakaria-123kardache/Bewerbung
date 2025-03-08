// fetch experience

fetch('experience.json')
.then(res => res.json())
.then(data => {
     const experienceContainer  = document.getElementById("experience");
     data.forEach(job => {
        const jobDiv = document.createElement("div");
        jobDiv.classList.add("job", "mb-6", "pb-6", "border-b", "border-solid", "border-b-[#d3d3d3]", "sm:flex", "sm:justify-between", "sm:gap-8", "w-[100%]");

        jobDiv.innerHTML = `
        <div class="job-title-container md:flex-col flex-row flex justify-between text-lg mb-5 sm:w-[25%]">
          <div>
            <div class="job-company font-bold leading-[1.2]">${job.employer}</div>
            <div class="job-title">${job.job_title}</div>
            <div>${job.date}</div>
          </div>
        </div>
        <ul class="list-disc sm:w-[75%]">
          ${job.description.map(task => `<li>${task}</li>`).join('')}
        </ul>
      `;
      experienceContainer.appendChild(jobDiv);
     });
})
.catch(error => console.error("Error fetching data expriernce:", error));

// fetch Education

fetch('education.json')
  .then(res => res.json())
  .then(data => {
    const educationContainer = document.getElementById("education");
    data.forEach(education => {
      const educationDiv = document.createElement("div");
      educationDiv.classList.add("border-b", "border-solid", "mb-6", "pb-6");

      educationDiv.innerHTML = `
        <div class="job-title-container md:flex-col flex-row flex justify-between text-lg mb-3">
          <div>
            <div class="job-company font-bold leading-[1.2]">${education.school}</div>
            <div class="job-title">${education.job_title}</div>
          </div>
          <div>
            ${education.date}
          </div>
        </div>
        <p>${education.description}</p>
      `;

      educationContainer.appendChild(educationDiv);
    });
  })
  .catch(error => console.error("Error fetching data:", error));

//   fetch Projects

fetch('projects.json')
  .then(res => res.json())
  .then(data => {
    const projectsContainer = document.getElementById("projects");
    
    data.forEach(project => {
      const projectDiv = document.createElement("div");
      projectDiv.classList.add("job", "mb-6", "pb-6", "border-b-[#d3d3d3]", "border-b", "border-solid", "sm:flex", "sm:justify-between", "sm:gap-8", "w-[100%]");

      projectDiv.innerHTML = `
        <div class="job-title-container md:flex-col flex-row flex justify-between text-lg mb-5 sm:w-[25%]">
          <div>
            <div class="job-company font-bold leading-[1.2]">${project.name}</div>
          </div>
        </div> 

        <ul class="list-disc sm:w-[75%]">
          <li>${project.resume}</li>
          <li>Source Code: <a href="${project.source_code}" class="no-underline text-main dark:text-slate-50 hover:underline" target="_blank">View Project</a></li>
          <li>Required Skills: ${project.required_skills.join(', ')}</li>
        </ul>
      `;

      projectsContainer.appendChild(projectDiv);
    });
  })
  .catch(error => console.error("Error fetching data:", error));


//   fetch interests

fetch('interests.json')
  .then(res => res.json())
  .then(data => {
    const interestsContainer = document.getElementById("interests");

    interestsContainer.innerHTML = data.map(interest => `
      <img width="60" height="60" src="${interest.src}" alt="${interest.alt}" class="md:mr-auto md:mb-auto mr-8 mb-4 hobby-icon"/>
    `).join('');
  })
  .catch(error => console.error("Error fetching interests:", error));


//   fetch skills

fetch('skills.json')
  .then(res => res.json())
  .then(data => {
    const skillsContainer = document.getElementById("skills");
    const columnSize = 4; 
    let skillsHTML = "";

    for (let i = 0; i < data.length; i += columnSize) {
      const column = data.slice(i, i + columnSize); 
      skillsHTML += `
        <ul class="list-disc ml-5">
          ${column.map(skill => `<li>${skill}</li>`).join('')}
        </ul>
      `;
    }

    skillsContainer.innerHTML = skillsHTML;
  })
  .catch(error => console.error("Error fetching skills:", error));


//   fetching artikles

fetch('articles.json')
  .then(res => res.json())
  .then(data => {
    const articlesContainer = document.getElementById("articles");

    data.forEach(article => {
      const articleDiv = document.createElement("div");
      articleDiv.classList.add("job", "mb-6", "pb-6", "border-b", "border-solid", "border-b-[#d3d3d3]", "sm:flex", "sm:justify-between", "sm:gap-8", "w-[100%]");

      articleDiv.innerHTML = `
        <div class="job-title-container md:flex-col flex-row flex justify-between text-lg mb-5 sm:w-[25%]">
          <div>
            <div class="job-company font-bold leading-[1.2]">${article.title}</div>
            <div class="job-title">${article.author}</div>
            <div>${article.date}</div>
          </div>
        </div>
        <ul class="list-disc sm:w-[75%]">
          <li>${article.description}</li>
          <li>Read article: <a href="${article.link}" class="text-main dark:text-slate-50 hover:underline" target="_blank">Click here</a></li>
        </ul>
      `;
      
      articlesContainer.appendChild(articleDiv);
    });
  })
  .catch(error => console.error("Error fetching articles:", error));

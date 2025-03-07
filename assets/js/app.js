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
  // Dynamic Portofolio Detail
  document.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");
  
  const project = projects[id];
  
  // If project is valid
  if (project) {
    updateMetaTags(project);
    renderProjectDetail(project);
  } else {
    showNotFound();
  }

  // ========== SEO & Social Preview ========== //
  function updateMetaTags(project) {
    document.title = project.title;

    updateMeta("description", project.description);
    updateMeta("og:title", project.title);
    updateMeta("og:description", project.description);
    updateMeta("og:image", baseUrl + project.ogImage);
    updateMeta("og:url", project.url);

    updateMeta("twitter:title", project.title);
    updateMeta("twitter:description", project.description);
    updateMeta("twitter:image", baseUrl + project.ogImage);
  }

  // Helper to insert or update meta tags
  function updateMeta(nameOrProperty, content) {
    const tag = document.querySelector(`meta[name="${nameOrProperty}"], meta[property="${nameOrProperty}"]`);
    if (tag) {
      tag.setAttribute("content", content);
    } else {
      const meta = document.createElement("meta");
      if (nameOrProperty.startsWith("og:") || nameOrProperty.startsWith("twitter:")) {
        meta.setAttribute("property", nameOrProperty);
      } else {
        meta.setAttribute("name", nameOrProperty);
      }
      meta.setAttribute("content", content);
      document.head.appendChild(meta);
    }
  }

  // ========== Not Found UI ========== //
  function showNotFound() {

    document.title = "Project Not Found – Pian Firmansyah";
    updateMeta("description", "Sorry, the project you're looking for could not be found.");

    const notFoundEl = document.getElementById("project-not-found");
    const container = document.getElementById("project-container");

    // Hide the main project content
    container.style.display = "none";
    notFoundEl.style.display = "flex";

    // List fallback projects to show (max 3 others)
    const fallbackProjects = Object.entries(projects).slice(0, 3);

    let suggestions = fallbackProjects.map(([key, item]) => {
        return `
        <div class="col-md-4 mb-4">
            <div class="card h-100 border-0 shadow-sm">
            <img src="${item.coverImage}" class="card-img-top" alt="${item.title}">
            <div class="card-body" style="text-align: left !important">
                <h5 class="card-title">${item.title}</h5>
                <p class="card-text mb-2">${item.category}</p>
                <a href="portfolio-detail.html?id=${key}" class="btn btn-sm btn-outline-primary">View Project</a>
            </div>
            </div>
        </div>
        `;
    }).join("");

    notFoundEl.innerHTML = `
        <div class="box-notfound mb-5">
            <h3>Oops! Portofolio Not Found</h3>
            <p class="mb-4 text-center">It looks like the portofolio you're trying to view doesn't exist or has been moved.</p>
            <a href="portofolio.html" class="btn btn_grad grad-dark hover-effect">Back to Portofolio</a>
        </div>
        <h5 class="mb-3">Here are a few other projects you might like:</h5>
        <div class="row justify-content-center">
            ${suggestions}
        </div>
    `;
    return;
  }

 // ========== Render Project Content (UI) ========== //
  function renderProjectDetail(project) {
    document.getElementById("project-name").textContent = project.name;
    document.getElementById("project-category").textContent = project.category;
    document.getElementById("project-cover").src = project.coverImage;
    document.getElementById("project-cover").alt = project.coverAlt; 
    document.getElementById("project-year").textContent = project.year;
    document.getElementById("project-duration").textContent = project.duration;
    document.getElementById("project-client").textContent = project.client;
    document.getElementById("project-overview").textContent = project.overview;
    document.getElementById("project-problem").textContent = project.problem;
    document.getElementById("project-role-title").textContent = project.roleTitle;

    // Approach list
    const approachList = document.getElementById("project-approach-list");
    project.approachList.forEach(item => {
      const li = document.createElement("li");
      li.innerHTML = `<p>${item}</p>`;
      approachList.appendChild(li);
    });

    // Key decisions
    const decisionList = document.getElementById("project-decision-list");
    project.decisionList.forEach(item => {
      const li = document.createElement("li");
      li.innerHTML = `<p>${item}</p>`;
      decisionList.appendChild(li);
    });

    // Role list
    const roleList = document.getElementById("project-role-list");
    project.roleList.forEach(item => {
      const li = document.createElement("li");
      li.innerHTML = `<p>${item}</p>`;
      roleList.appendChild(li);
    });

    // Features
    const featureList = document.getElementById("project-feature-list");
    project.features.forEach(feature => {
      const div = document.createElement("div");
      div.className = "text-center";
      div.innerHTML = `
        <h5><img src="${feature.src}"> ${feature.title}</h5>
      `;
      featureList.appendChild(div);
    });

    // Carousel (optional)
    // Caption Link
    const captionBox = document.getElementById("carousel-caption-box");
    if (project.captionText && project.captionLink) {
      captionBox.innerHTML = `
        <a href="${project.captionLink}" target="_blank" class="btn btn_grad grad-dark mt-3 px-4 hover-effect">
        ${project.captionText}
        </a>
    `;
    } else {
      captionBox.style.display = "none"; // or leave it empty
    }
    // Slide
    if (project.carouselImages && project.carouselImages.length > 0) {
      const container = document.getElementById("project-carousel-container");
      const carouselInner = container.querySelector(".carousel-inner");
      project.carouselImages.forEach((image, index) => {
        const div = document.createElement("div");
        div.className = "carousel-item" + (index === 0 ? " active" : "");
        div.innerHTML = `<img src="${image.src}" alt="${image.alt}" class="d-block w-100">`;
        carouselInner.appendChild(div);
    });
      container.style.display = "block";
    } else {
      document.getElementById("project-carousel-container").style.display = "none";
    }
  }
});
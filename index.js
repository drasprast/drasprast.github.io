fetch("works.json")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);

    const galleryDiv = document.getElementById("gallery");

    data.forEach((item) => {
      galleryDiv.innerHTML += `<article class="article">
      <div class="image-portfolio">
        <img src="${item.cover}" alt="${item.title}">
      </div>
      <div class="content-portfolio">
        <div class="detail-content">
          <div class="detail-1">
            <h4>${item.title}</h5>
          </div>
          <div class="detail-2">
          
              <ul class="tech">
                ${item.comp.map((tech) => `<li>${tech}</li>`).join("")}
              </ul>
            
            <p>${item.description}</p>        
          </div>
        </div>
        <aside>
          <a href="${item.github}" target="_blank">Consulter le code</a>
        </aside>
      </div>
    </article>`;
    });
  })
  .catch((error) => {
    console.error("Erreur lors de la récupération du fichier JSON :", error);
  });

function smoothScroll(target) {
  document.querySelector(target).scrollIntoView({
    behavior: "smooth",
  });
}

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const target = this.getAttribute("href");
    smoothScroll(target);
  });
});

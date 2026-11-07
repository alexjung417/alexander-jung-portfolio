
document.addEventListener("DOMContentLoaded", () => {
  const c = SITE_CONFIG;
  const el = id => document.getElementById(id);

  document.title = `${c.name} | Data Analytics Portfolio`;

  el("about-text").textContent = c.about;
  el("footer-name").textContent =
    `© ${new Date().getFullYear()} ${c.name}`;

  // Skills
  el("skills-list").innerHTML = c.skills
    .map(x => `<span>${esc(x)}</span>`)
    .join("");

  // GitHub projects
  el("project-grid").innerHTML = c.projects
    .map(p => `
      <article class="project">
        <div class="project-no">
          ${esc(p.number)} / ${esc(p.category)}
        </div>
        <h3>${esc(p.title)}</h3>
        <p>${esc(p.description)}</p>
        <div class="tags">
          ${p.tools.map(t => `<span>${esc(t)}</span>`).join("")}
        </div>
        <a class="link" href="${esc(p.link)}"
           target="_blank" rel="noreferrer">
          ${esc(p.linkLabel)} ↗
        </a>
      </article>
    `)
    .join("");

  
  // Tableau Dashboard PDF Previews
  el("dashboard-list").innerHTML = c.dashboards
    .map((d, i) => `
      <article class="dashboard">

        <!-- Dashboard Header -->
        <div class="dash-head">
          <div>
            <small>DASHBOARD 0${i + 1}</small>

            <h3>${esc(d.title)}</h3>

            <p>${esc(d.description)}</p>
          </div>
        </div>


<!-- PDF Preview -->
<div class="frame pdf-frame">

  <iframe
    src="${esc(d.pdfUrl)}#toolbar=1&navpanes=0&view=FitH"
    title="${esc(d.title)}"
    loading="lazy"
    allowfullscreen>
  </iframe>

</div>


        <!-- Dashboard Actions -->
        <div class="dashboard-actions">

          <a
            class="button"
            href="${esc(d.pdfUrl)}"
            target="_blank"
            rel="noreferrer">
            View Full PDF ↗
          </a>

          <a
            class="link"
            href="${esc(d.publicUrl)}"
            target="_blank"
            rel="noreferrer">
            Interactive Tableau ↗
          </a>

        </div>

      </article>
    `)
    .join("");


  // Mobile navigation
  const button = el("menu-toggle");
  const nav = el("nav-links");

  button.addEventListener("click", () => {
    const open = nav.classList.toggle("open");
    button.setAttribute("aria-expanded", String(open));
  });

  nav.querySelectorAll("a").forEach(a =>
    a.addEventListener("click", () => {
      nav.classList.remove("open");
      button.setAttribute("aria-expanded", "false");
    })
  );
});

function esc(v) {
  return String(v).replace(/[&<>"']/g, c => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
  }[c]));
}

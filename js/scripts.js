const typing = document.getElementById("typing");
const typingTexts = [
  "تطوير مواقع ووردبريس متقدمة.",
  "تصميم متاجر إلكترونية احترافية.",
  "تحسين السرعة وتجربة المستخدم.",
  "برمجة حلول خاصة للشركات."
];
let typeIndex = 0, charIndex = 0, deleting = false;
function typeLoop() {
  typing.textContent = typingTexts[typeIndex].slice(0, charIndex);
  if (!deleting && charIndex < typingTexts[typeIndex].length) {
    charIndex++;
    setTimeout(typeLoop, 53);
  } else if (deleting && charIndex > 0) {
    charIndex--;
    setTimeout(typeLoop, 36);
  } else {
    deleting = !deleting;
    if (!deleting) {
      typeIndex = (typeIndex + 1) % typingTexts.length;
    }
    setTimeout(typeLoop, 800);
  }
}
typeLoop();
function animateValue(id, start, end, duration) {
  let current = start;
  const range = end - start;
  const increment = end > start ? 1 : -1;
  const stepTime = Math.abs(Math.floor(duration / range));
  const obj = document.getElementById(id);
  function step() {
    current += increment;
    obj.textContent = current;
    if ((increment > 0 && current < end) || (increment < 0 && current > end)) {
      requestAnimationFrame(step);
    } else {
      obj.textContent = end;
    }
  }
  obj.textContent = start;
  requestAnimationFrame(step);
}
window.addEventListener("DOMContentLoaded", ()=> {
  animateValue("projectCount", 0, 500, 2200);
  animateValue("clientCount", 0, 150, 1800);
  animateValue("exp", 0, 2, 1500);
});
const projectsData = [
  {title:"مشروع 1", link:"https://shalplatform.com"},
  {title:"مشروع 2", link:"https://sportive-sa.com"},
  {title:"مشروع 3", link:"https://dashcamaster.com"},
  {title:"مشروع 4", link:"https://kidsgardensriyadh.com/"},
  {title:"مشروع 5", link:"https://rsjsa.com"},
  {title:"مشروع 6", link:"https://mirolicksa.com"},
  {title:"مشروع 7", link:"https://gymvibee.com"},
  {title:"مشروع 8", link:"https://imperialtextile.online"},
  {title:"مشروع 9", link:"https://omco099.github.io/Templet1"},
  {title:"مشروع 10", link:"https://omco099.github.io/Templet2"},
  {title:"مشروع 11", link:"https://turtlecaresa.com"},
  {title:"مشروع 12", link:"https://blackdiamond22.com"}
];
function createProjects() {
  const grid = document.getElementById("projectsGrid");
  projectsData.forEach(project => {
    const card = document.createElement("div");
    card.className = "project-card";
    card.innerHTML = `
      <div class="project-title">${project.title}</div>
      <a href="${project.link}" class="project-link" target="_blank" rel="noopener" aria-label="زيارة موقع ${project.title}">زيارة الموقع</a>
    `;
    grid.appendChild(card);
  });
}
createProjects();

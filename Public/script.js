// Parallax background
const parallaxEl = document.querySelector("[data-parallax]");

function handleParallax() {
  if (!parallaxEl) return;
  const scrollY = window.scrollY || window.pageYOffset;
  const offset = scrollY * 0.2; // adjust speed here
  parallaxEl.style.transform = `translate3d(0, ${offset * -1}px, 0)`;
}

window.addEventListener("scroll", handleParallax);

// Smooth scroll for anchor links
document.addEventListener("click", (event) => {
  const target = event.target;
  if (target.tagName === "A" && target.getAttribute("href")?.startsWith("#")) {
    const id = target.getAttribute("href").slice(1);
    const el = document.getElementById(id);
    if (el) {
      event.preventDefault();
      window.scrollTo({
        top: el.offsetTop - 80,
        behavior: "smooth",
      });
    }
  }
});

// Theme toggle (dark / light)
const themeToggle = document.getElementById("themeToggle");

function setTheme(theme) {
  if (theme === "light") {
    document.body.classList.add("light");
  } else {
    document.body.classList.remove("light");
  }
  localStorage.setItem("theme", theme);
}

if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    const isLight = document.body.classList.contains("light");
    setTheme(isLight ? "dark" : "light");
  });
}

// Load saved theme
const savedTheme = localStorage.getItem("theme");
if (savedTheme === "light") {
  setTheme("light");
}

// Dynamic year in footer
const yearEl = document.getElementById("year");
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

// Project card click handler
document.addEventListener("click", (event) => {
  const projectCard = event.target.closest(".project-card");
  if (projectCard) {
    const projectId = projectCard.getAttribute("data-project-id");
    if (projectId) {
      window.location.href = `project.html?id=${projectId}`;
    }
  }
});


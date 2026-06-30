// ===== THEME TOGGLE =====
const themeBtn = document.getElementById("themeToggle");

themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("light");

  if (document.body.classList.contains("light")) {
    localStorage.setItem("theme", "light");
    themeBtn.textContent = "☀️";
  } else {
    localStorage.setItem("theme", "dark");
    themeBtn.textContent = "🌙";
  }
});

// load theme
if (localStorage.getItem("theme") === "light") {
  document.body.classList.add("light");
  themeBtn.textContent = "☀️";
}

// ===== FILTER =====
const filterBtns = document.querySelectorAll(".filter__btn");
const cards = document.querySelectorAll(".card");

filterBtns.forEach(btn => {
  btn.addEventListener("click", () => {

    filterBtns.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");

    const type = btn.dataset.filter;

    cards.forEach(card => {
      if (type === "all") {
        card.style.display = "block";
      } else {
        card.style.display =
          card.dataset.type === type ? "block" : "none";
      }
    });
  });
});

// ===== MODAL =====
const modal = document.getElementById("modal");
const closeBtns = [
  document.getElementById("closeModal"),
  document.getElementById("closeModal2")
];

cards.forEach(card => {
  card.querySelector(".card__btn").addEventListener("click", () => {
    modal.style.display = "flex";
    document.body.style.overflow = "hidden";
  });
});

closeBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    modal.style.display = "none";
    document.body.style.overflow = "auto";
  });
});

modal.addEventListener("click", (e) => {
  if (e.target.classList.contains("modal-backdrop__overlay")) {
    modal.style.display = "none";
    document.body.style.overflow = "auto";
  }
});

// ===== SKILL ANIMATION =====
const fills = document.querySelectorAll(".skill-bar__fill");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const el = entry.target;
      el.style.width = el.dataset.skill + "%";
    }
  });
});

fills.forEach(fill => observer.observe(fill));

// ===== SMOOTH SCROLL =====
document.querySelectorAll("a[href^='#']").forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();

    const target = document.querySelector(link.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});
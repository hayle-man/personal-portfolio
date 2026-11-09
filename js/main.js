/* ==========================================================
   Personal Portfolio - main.js
   Features:
   1. Dynamic greeting
   2. Dark / light theme switch (saved in localStorage)
   3. Responsive mobile menu
   4. Active nav link on scroll
   5. Project filtering
   6. Project details modal
   7. Contact form validation
   8. Animated skill bars and counters
   ========================================================== */

document.addEventListener("DOMContentLoaded", () => {

  /* ---------- 1. Dynamic greeting ---------- */
  const greeting = document.getElementById("greeting");
  const hour = new Date().getHours();
  let text = "Good evening";
  if (hour < 12) text = "Good morning";
  else if (hour < 18) text = "Good afternoon";
  greeting.textContent = text + ", welcome to my portfolio!";

  document.getElementById("year").textContent = new Date().getFullYear();

  /* ---------- 2. Theme toggle ---------- */
  const root = document.documentElement;
  const themeBtn = document.getElementById("themeToggle");

  function applyTheme(theme) {
    root.setAttribute("data-theme", theme);
    themeBtn.textContent = theme === "dark" ? "☀️" : "🌙";
  }

  let savedTheme = "light";
  try { savedTheme = localStorage.getItem("theme") || "light"; } catch (e) { /* storage blocked */ }
  applyTheme(savedTheme);

  themeBtn.addEventListener("click", () => {
    const next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
    applyTheme(next);
    try { localStorage.setItem("theme", next); } catch (e) { /* ignore */ }
  });

  /* ---------- 3. Mobile menu ---------- */
  const menuBtn = document.getElementById("menuToggle");
  const nav = document.getElementById("navMenu");

  menuBtn.addEventListener("click", () => {
    const open = nav.classList.toggle("open");
    menuBtn.setAttribute("aria-expanded", String(open));
  });

  nav.querySelectorAll("a").forEach(link =>
    link.addEventListener("click", () => {
      nav.classList.remove("open");
      menuBtn.setAttribute("aria-expanded", "false");
    })
  );

  /* ---------- 4. Highlight active nav link ---------- */
  const sections = document.querySelectorAll("main section[id]");
  const navLinks = document.querySelectorAll(".nav-link");

  const navObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navLinks.forEach(l => l.classList.toggle("active", l.getAttribute("href") === "#" + entry.target.id));
      }
    });
  }, { rootMargin: "-40% 0px -55% 0px" });
  sections.forEach(s => navObserver.observe(s));

  /* ---------- 5. Project filtering ---------- */
  const filterBtns = document.querySelectorAll(".filter-btn");
  const cards = document.querySelectorAll("#projectCards .card");

  filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      filterBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      const filter = btn.dataset.filter;
      cards.forEach(card => {
        const show = filter === "all" || card.dataset.category === filter;
        card.classList.toggle("hide", !show);
      });
    });
  });

  /* ---------- 6. Modal ---------- */
  const modal = document.getElementById("modal");
  const closeBtn = document.getElementById("modalClose");
  let lastFocused = null;

  function openModal(btn) {
    lastFocused = btn;
    document.getElementById("modalTitle").textContent = btn.dataset.title;
    document.getElementById("modalDesc").textContent = btn.dataset.desc;
    document.getElementById("modalTech").textContent = btn.dataset.tech;
    const link = document.getElementById("modalLink");
    if (btn.dataset.link) { link.href = btn.dataset.link; link.hidden = false; }
    else { link.hidden = true; }
    modal.hidden = false;
    closeBtn.focus();
  }

  function closeModal() {
    modal.hidden = true;
    if (lastFocused) lastFocused.focus();
  }

  document.querySelectorAll(".open-modal").forEach(btn =>
    btn.addEventListener("click", () => openModal(btn))
  );
  closeBtn.addEventListener("click", closeModal);
  modal.addEventListener("click", e => { if (e.target === modal) closeModal(); });
  document.addEventListener("keydown", e => { if (e.key === "Escape" && !modal.hidden) closeModal(); });

  /* ---------- 7. Contact form validation ---------- */
  const form = document.getElementById("contactForm");
  const messageBox = document.getElementById("message");
  const counter = document.getElementById("charCount");

  messageBox.addEventListener("input", () => { counter.textContent = messageBox.value.length; });

  const rules = {
    name: v => v.trim().length < 3 ? "Please enter your full name (at least 3 characters)." :
               !/^[A-Za-zሀ-፿\s.'-]+$/.test(v.trim()) ? "Name may contain only letters and spaces." : "",
    email: v => !v.trim() ? "Email is required." :
                !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.trim()) ? "Enter a valid email like name@example.com." : "",
    phone: v => v.trim() && !/^[0-9+\s-]{7,15}$/.test(v.trim()) ? "Phone must be 7-15 digits (you may use + - and spaces)." : "",
    subject: v => !v ? "Please select a subject." : "",
    message: v => v.trim().length < 10 ? "Message must be at least 10 characters." : ""
  };

  function validateField(id) {
    const input = document.getElementById(id);
    const error = document.getElementById(id + "Error");
    const msg = rules[id](input.value);
    error.textContent = msg;
    input.classList.toggle("invalid", Boolean(msg));
    input.classList.toggle("valid", !msg && input.value.trim() !== "");
    return !msg;
  }

  Object.keys(rules).forEach(id => {
    const input = document.getElementById(id);
    input.addEventListener("blur", () => validateField(id));
    input.addEventListener("input", () => { if (input.classList.contains("invalid")) validateField(id); });
  });

  form.addEventListener("submit", e => {
    e.preventDefault();
    const success = document.getElementById("formSuccess");
    success.textContent = "";

    const allValid = Object.keys(rules).map(validateField).every(Boolean);
    if (!allValid) {
      const firstBad = form.querySelector(".invalid");
      if (firstBad) firstBad.focus();
      return;
    }

    // No backend in this project: show a confirmation and reset the form.
    const name = document.getElementById("name").value.trim();
    success.textContent = "Thank you, " + name + "! Your message was validated successfully.";
    form.reset();
    counter.textContent = "0";
    form.querySelectorAll(".valid").forEach(el => el.classList.remove("valid"));
  });

  /* ---------- 8. Animated skill bars & counters ---------- */
  const skillsSection = document.getElementById("skills");
  const bars = document.querySelectorAll(".bar-fill");

  const barObserver = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        bars.forEach(bar => { bar.style.width = bar.dataset.level + "%"; });
        obs.disconnect();
      }
    });
  }, { threshold: 0.25 });
  barObserver.observe(skillsSection);

  const counters = document.querySelectorAll(".stat-num");
  const counterObserver = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      const target = Number(el.dataset.target);
      let current = 0;
      const timer = setInterval(() => {
        current++;
        el.textContent = current;
        if (current >= target) clearInterval(timer);
      }, 250);
      obs.unobserve(el);
    });
  }, { threshold: 0.6 });
  counters.forEach(c => counterObserver.observe(c));
});

// ─── EmailJS ───
(function () {
    emailjs.init("ljvafDc51_oOyjf91");
})();

// ─── Theme Toggle ───
const html = document.documentElement;
const toggleBtn = document.getElementById("themeToggle");

// Load saved preference (default: light)
const saved = localStorage.getItem("theme") || "light";
html.setAttribute("data-theme", saved);

toggleBtn.addEventListener("click", () => {
    const current = html.getAttribute("data-theme");
    const next = current === "light" ? "dark" : "light";
    html.setAttribute("data-theme", next);
    localStorage.setItem("theme", next);
});

// ─── Mobile Nav Toggle ───
const hamburgerBtn = document.getElementById("hamburgerBtn");
const navLinksMenu = document.getElementById("navLinks");
const navOverlay = document.getElementById("navOverlay");

function closeMobileNav() {
    navLinksMenu.classList.remove("active");
    hamburgerBtn.classList.remove("active");
    hamburgerBtn.setAttribute("aria-expanded", "false");
    navOverlay.classList.remove("active");
    document.body.classList.remove("nav-open");
}

function toggleMobileNav() {
    const isActive = navLinksMenu.classList.toggle("active");
    hamburgerBtn.classList.toggle("active", isActive);
    hamburgerBtn.setAttribute("aria-expanded", String(isActive));
    navOverlay.classList.toggle("active", isActive);
    document.body.classList.toggle("nav-open", isActive);
}

hamburgerBtn.addEventListener("click", toggleMobileNav);
navOverlay.addEventListener("click", closeMobileNav);
navLinksMenu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", closeMobileNav);
});

// ─── Contact Form ───
document
    .getElementById("contact-form")
    .addEventListener("submit", function (e) {
        e.preventDefault();
        const form = this;
        const btn = form.querySelector(".form-submit");
        if (
            !form.name.value.trim() ||
            !form.email.value.trim() ||
            !form.message.value.trim()
        ) {
            alert("Please fill all required fields.");
            return;
        }
        btn.textContent = "Sending…";
        btn.disabled = true;
        emailjs.sendForm("service_71yica1", "template_3w0sswd", form).then(
            () => {
                alert("Message sent successfully!");
                form.reset();
                btn.textContent = "Send Message";
                btn.disabled = false;
            },
            (err) => {
                alert("Failed to send. Please try again.");
                console.error(err);
                btn.textContent = "Send Message";
                btn.disabled = false;
            },
        );
    });

// ─── Copyright ───
const start = 2025,
    now = new Date().getFullYear();
document.getElementById("copyright").textContent =
    now === start
        ? `©${start} Rivaldo Nainggolan. All rights reserved.`
        : `©${start}–${now} Rivaldo Nainggolan. All rights reserved.`;

// ─── Image Modal ───
const modal = document.getElementById("imgModal");
const modalImg = document.getElementById("modalImg");
document.querySelectorAll(".project-media img").forEach((img) => {
    img.addEventListener("click", () => {
        modal.classList.add("active");
        modalImg.src = img.src;
    });
});
modal.addEventListener("click", () => modal.classList.remove("active"));
document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
        modal.classList.remove("active");
        closeMobileNav();
    }
});

// ─── Scroll Reveal ───
const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((el) => {
            if (el.isIntersecting) {
                el.target.classList.add("visible");
                observer.unobserve(el.target);
            }
        });
    },
    { threshold: 0.12 },
);
document
    .querySelectorAll(".reveal")
    .forEach((el) => observer.observe(el));

// ─── Active Nav Link ───
const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav-links a");
const io = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                navLinks.forEach((a) => a.classList.remove("active"));
                const active = document.querySelector(
                    `.nav-links a[href="#${entry.target.id}"]`,
                );
                if (active) active.classList.add("active");
            }
        });
    },
    { threshold: 0.35 },
);
sections.forEach((s) => io.observe(s));

window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach((section) => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.clientHeight;

        if (scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach((link) => {
        link.classList.remove("active");

        if (link.getAttribute("href") === `#${current}`) {
            link.classList.add("active");
        }
    });
});
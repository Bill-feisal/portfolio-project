// ===============================
// Active Navbar Link
// ===============================
const navLinks = document.querySelectorAll(".navbar nav a");
const currentPage = window.location.pathname.split("/").pop();

navLinks.forEach(link => {
  if (link.getAttribute("href") === currentPage) {
    link.style.color = "#ffa500";
    link.style.fontWeight = "bold";
  }
});

// ===============================
// Smooth Scroll to Contact Section
// ===============================
document.querySelectorAll('a[href="#contact"]').forEach(btn => {
  btn.addEventListener("click", e => {
    e.preventDefault();
    const contactSection = document.querySelector(".contact-form");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  });
});


// ===============================
// Contact Form Validation
// ===============================
const form = document.querySelector(".contact-form");

if (form) {
  form.addEventListener("submit", e => {
    e.preventDefault();

    const name = form.querySelector('input[name="name"]').value.trim();
    const email = form.querySelector('input[name="email"]').value.trim();
    const message = form.querySelector('textarea[name="message"]').value.trim();

    if (name === "" || email === "" || message === "") {
      alert("⚠️ Please fill in all fields.");
      return;
    }

    alert("✅ Message sent successfully! Thank you, " + name + ".");
    form.reset();
  });
}


// ===============================
// Auto Update Footer Year
// ===============================
const footerText = document.querySelector(".footer p");
if (footerText) {
  const year = new Date().getFullYear();
  footerText.innerHTML = `&copy; ${year} Bile Feisal. All rights reserved.`;
}

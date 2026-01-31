document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");

  if (!form) return;

  form.addEventListener("submit", e => {
    e.preventDefault();

    const name = document.getElementById("contactName").value.trim();
    const email = document.getElementById("contactEmail").value.trim();
    const phone = document.getElementById("contactPhone").value.trim();
    const message = document.getElementById("contactMessage").value.trim();

    const to = "barebasicsss@gmail.com"; // 👈 TU CORREO
    const subject = "Mensaje desde Bare Basics";

    let body = `Nombre: ${name}\n`;
    body += `Correo: ${email}\n`;
    if (phone) body += `Teléfono: ${phone}\n`;
    body += `\nMensaje:\n${message}`;

    const mailtoURL = `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoURL;
  });
});

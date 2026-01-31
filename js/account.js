// ==========================
// ELEMENTOS
// ==========================
const openAccount = document.getElementById("openAccount");
const closeAccount = document.getElementById("closeAccount");
const accountModal = document.getElementById("accountModal");
const accountOverlay = document.getElementById("accountOverlay");

const loginForm = document.getElementById("loginForm");
const registerForm = document.getElementById("registerForm");

const showRegister = document.getElementById("showRegister");
const showLogin = document.getElementById("showLogin");

const loginError = document.getElementById("loginError");
const registerError = document.getElementById("registerError");

// ==========================
// MODAL
// ==========================
openAccount.addEventListener("click", () => {
  accountModal.classList.add("active");
  accountOverlay.classList.add("active");
  document.body.classList.add("modal-open");

  loginForm.classList.remove("hidden");
  registerForm.classList.add("hidden");
  clearErrors();
});

closeAccount.addEventListener("click", closeModal);
accountOverlay.addEventListener("click", closeModal);

function closeModal() {
  accountModal.classList.remove("active");
  accountOverlay.classList.remove("active");
  document.body.classList.remove("modal-open");
  clearErrors();
}

// ==========================
// TOGGLE LOGIN / REGISTER
// ==========================
showRegister.addEventListener("click", () => {
  loginForm.classList.add("hidden");
  registerForm.classList.remove("hidden");
  clearErrors();
});

showLogin.addEventListener("click", () => {
  registerForm.classList.add("hidden");
  loginForm.classList.remove("hidden");
  clearErrors();
});

// ==========================
// UTILIDADES
// ==========================
function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function showFormError(element, message) {
  element.textContent = message;
  element.classList.add("show");

  clearTimeout(element.hideTimeout);
  element.hideTimeout = setTimeout(() => {
    element.classList.remove("show");
    element.textContent = "";
  }, 2500);
}

function clearErrors() {
  [loginError, registerError].forEach(el => {
    el.textContent = "";
    el.classList.remove("show");
  });
}

// ==========================
// LOGIN VALIDATION
// ==========================
loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  clearErrors();

  const email = loginForm.querySelector('input[type="email"]').value.trim();
  const password = loginForm.querySelector('input[type="password"]').value.trim();

  if (!email) {
    showFormError(loginError, "Ingresa tu correo electrónico");
    return;
  }

  if (!isValidEmail(email)) {
    showFormError(loginError, "Correo electrónico no válido");
    return;
  }

  if (!password) {
    showFormError(loginError, "Ingresa tu contraseña");
    return;
  }

  // OK
  loginForm.submit();
});

// ==========================
// REGISTER VALIDATION
// ==========================
registerForm.addEventListener("submit", (e) => {
  e.preventDefault();
  clearErrors();

  const email = registerForm.querySelector('input[type="email"]').value.trim();
  const password = registerForm.querySelectorAll('input[type="password"]')[0].value;
  const confirm = registerForm.querySelectorAll('input[type="password"]')[1].value;

  if (!email) {
    showFormError(registerError, "Ingresa tu correo electrónico");
    return;
  }

  if (!isValidEmail(email)) {
    showFormError(registerError, "Correo electrónico no válido");
    return;
  }

  if (password.length < 6) {
    showFormError(registerError, "Mínimo 6 caracteres");
    return;
  }

  if (password !== confirm) {
    showFormError(registerError, "Las contraseñas no coinciden");
    return;
  }

  // OK
  registerForm.submit();
});

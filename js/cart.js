document.addEventListener("DOMContentLoaded", () => {

  const MAX_QTY_PER_SIZE = 6;

  const miniCart = document.getElementById("miniCart");
  const cartOverlay = document.getElementById("cartOverlay");
  const closeCartBtn = document.getElementById("closeCart");
  const cartItemsContainer = document.getElementById("cartItems");
  const cartSubtotalEl = document.getElementById("cartSubtotal");
  const openCartBtn = document.getElementById("openCart");
  const cartLimitMessage = document.getElementById("cartLimitMessage");
  const checkoutBtn = document.getElementById("checkoutBtn");

  /* =========================
     DISCOUNT CONFIG
  ========================= */
  const discountCodes = ["BARESHOP10, BARE10TOLEDO"];
  let discountApplied = false;

  /* =========================
     OPEN / CLOSE MINI CART
  ========================= */
  function openMiniCart() {
    if (!miniCart || !cartOverlay) return;
    miniCart.classList.add("active");
    cartOverlay.classList.add("active");
  }

  function closeMiniCart() {
    if (!miniCart || !cartOverlay) return;
    miniCart.classList.remove("active");
    cartOverlay.classList.remove("active");
  }

  if (openCartBtn) {
    openCartBtn.addEventListener("click", () => {
      renderMiniCart();
      openMiniCart();
    });
  }

  if (closeCartBtn) closeCartBtn.addEventListener("click", closeMiniCart);
  if (cartOverlay) cartOverlay.addEventListener("click", closeMiniCart);

  /* =========================
     CART LIMIT MESSAGE
  ========================= */
  let cartLimitTimeout = null;

  function showCartLimitMessage() {
    if (!cartLimitMessage) return;

    clearTimeout(cartLimitTimeout);
    cartLimitMessage.classList.add("show");

    cartLimitTimeout = setTimeout(() => {
      cartLimitMessage.classList.remove("show");
    }, 2000);
  }

  /* =========================
     RENDER MINI CART
  ========================= */
  function renderMiniCart() {
    if (!cartItemsContainer || !cartSubtotalEl) return;

    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    cartItemsContainer.innerHTML = "";

    let subtotal = 0;

    cart.forEach((item, index) => {
      const totalItem = item.price * item.quantity;
      subtotal += totalItem;

      cartItemsContainer.innerHTML += `
        <div class="cart-item">
          <img src="${item.image}" class="cart-item-img">

          <div class="cart-item-middle">
            <p class="cart-item-name">${item.name}</p>
            <p class="cart-item-price">$${item.price}</p>
            <p class="cart-item-size">Talla: ${item.size}</p>
            <p class="cart-item-color">Color: ${item.color}</p>
          </div>

          <div class="cart-item-right">
            <div class="cart-qty">
              <button data-action="minus" data-index="${index}">−</button>
              <span>${item.quantity}</span>
              <button data-action="plus" data-index="${index}">+</button>
            </div>

            <button class="remove-btn" data-index="${index}">ELIMINAR</button>
          </div>
        </div>
      `;
    });

    cartSubtotalEl.textContent = `$${subtotal.toFixed(2)}`;

    resetDiscount();

    /* ===== PAGAR ===== */
    if (checkoutBtn) {
      checkoutBtn.replaceWith(checkoutBtn.cloneNode(true));
      const newCheckoutBtn = document.getElementById("checkoutBtn");

newCheckoutBtn.addEventListener("click", () => {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];

if (cart.length === 0) {
  const emptyMsg = document.getElementById("emptyCartMessage");
  if (emptyMsg) {
    emptyMsg.classList.add("show");
    setTimeout(() => {
      emptyMsg.classList.remove("show");
    }, 2000);
  }
  return;
}

  let subtotal = 0;
  let mensaje = "Hola! Quiero hacer un pedido en Bare Basics:\n\n";

  cart.forEach(item => {
    const totalItem = item.price * item.quantity;
    subtotal += totalItem;

    mensaje += `• ${item.name}\n`;
    mensaje += `  Color: ${item.color}\n`;
    mensaje += `  Talla: ${item.size}\n`;
    mensaje += `  Cantidad: ${item.quantity}\n`;
    mensaje += `  Precio: $${totalItem.toFixed(2)}\n\n`;
  });

  let finalTotal = subtotal;

  mensaje += `Subtotal: $${subtotal.toFixed(2)}\n`;

  if (discountApplied) {
    finalTotal = subtotal * 0.9;
    mensaje += "Descuento aplicado: -10%\n";
  }

  mensaje += `Total: $${finalTotal.toFixed(2)} (envío no incluido)\n\n`;
  mensaje += "Gracias por tu pedido";

  const mensajeUrl = encodeURIComponent(mensaje);
  const numero = "593969498195";

  window.open(
    `https://wa.me/${numero}?text=${mensajeUrl}`,
    "_blank"
  );

  closeMiniCart();
});


    }
  }

  /* =========================
     CART ACTIONS
  ========================= */
  if (cartItemsContainer) {
    cartItemsContainer.addEventListener("click", e => {
      const cart = JSON.parse(localStorage.getItem("cart")) || [];
      const index = e.target.dataset.index;
      if (index === undefined) return;

      if (e.target.dataset.action === "plus") {
        if (cart[index].quantity >= MAX_QTY_PER_SIZE) {
          showCartLimitMessage();
          return;
        }
        cart[index].quantity++;
      }

      if (e.target.dataset.action === "minus") {
        cart[index].quantity--;
        if (cart[index].quantity <= 0) {
          cart.splice(index, 1);
        }
      }

      if (e.target.classList.contains("remove-btn")) {
        cart.splice(index, 1);
      }

      localStorage.setItem("cart", JSON.stringify(cart));
      renderMiniCart();
    });
  }

  /* =========================
     DISCOUNT LOGIC
  ========================= */
  function getCurrentSubtotal() {
    return parseFloat(cartSubtotalEl.textContent.replace("$", ""));
  }

  document.getElementById("applyDiscount")?.addEventListener("click", () => {
    if (discountApplied) return;

    const code = document
      .getElementById("discountCode")
      .value
      .trim()
      .toUpperCase();

    const message = document.getElementById("discountMessage");
    const discountedEl = document.getElementById("cartSubtotalDiscounted");

    if (!discountCodes.includes(code)) {
      message.textContent = "Código inválido";
      message.style.color = "red";
      return;
    }

    const subtotal = getCurrentSubtotal();
    const discountedTotal = subtotal * 0.9;

    cartSubtotalEl.classList.add("discounted");
    discountedEl.textContent = `$${discountedTotal.toFixed(2)}`;
    discountedEl.classList.remove("hidden");

    message.textContent = "Código aplicado (-10%)";
    message.style.color = "green";

    discountApplied = true;
  });

  function resetDiscount() {
    discountApplied = false;

    const discountedEl = document.getElementById("cartSubtotalDiscounted");
    const message = document.getElementById("discountMessage");

    cartSubtotalEl.classList.remove("discounted");
    discountedEl?.classList.add("hidden");
    if (message) message.textContent = "";
  }

  /* =========================
     GLOBAL EVENT
  ========================= */
  document.addEventListener("cart:open", () => {
    renderMiniCart();
    openMiniCart();
  });

  /* =========================
     INIT
  ========================= */
  renderMiniCart();
  window.openMiniCart = openMiniCart;

});

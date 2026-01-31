document.addEventListener("DOMContentLoaded", () => {
  const MAX_QTY_PER_SIZE = 6;

  /* =========================
     GET PRODUCT
  ========================= */
  const params = new URLSearchParams(window.location.search);
  const productKey = params.get("id");

  if (!productKey || !PRODUCTS[productKey]) {
    console.error("Producto no encontrado:", productKey);
    return;
  }

  const product = PRODUCTS[productKey];

  /* =========================
     IMAGES SETUP
  ========================= */
  const sliderImages = product.images?.slider || [];
  const scrollImages = product.images?.scroll || [];

  if (sliderImages.length === 0 && scrollImages.length > 0) {
    sliderImages.push(scrollImages[0]);
  }

  const mainProductImage =
    sliderImages[0] ||
    scrollImages[0] ||
    "";

  /* =========================
     DOM ELEMENTS
  ========================= */
  const imagesContainer = document.querySelector(".product-images");
  const titleEl = document.querySelector(".product-info h1");
  const priceEl = document.querySelector(".price");
  const colorEl = document.querySelector(".color-label");
  const descriptionEl = document.getElementById("productDescription");
  const sizeSelector = document.getElementById("sizeSelector");
  const addToCartBtn = document.getElementById("addToCartBtn");
  const cartWarning = document.getElementById("cartWarning");
  const seeMoreBtn = document.getElementById("seeMoreBtn");

  let selectedSize = null;
  let currentImageIndex = 0;

  /* =========================
     FILL PRODUCT DATA
  ========================= */
  titleEl.textContent = product.name;
  if (product.isSale && product.salePrice) {
  priceEl.innerHTML = `
    <span class="original-price">$${product.price}</span>
    <span class="sale-price">$${product.salePrice}</span>
  `;
} else {
  priceEl.textContent = `$${product.price}`;
}
  colorEl.textContent = product.color || "";

  if (descriptionEl && product.description) {
    descriptionEl.innerHTML = product.description.trim();
  }

  /* =========================
     PRODUCT IMAGES
  ========================= */
  imagesContainer.innerHTML = "";

  const mainWrapper = document.createElement("div");
  mainWrapper.className = "main-image-wrapper";

  const mainImg = document.createElement("img");
  mainImg.src = mainProductImage;
  mainImg.alt = product.name;

  const prevBtn = document.createElement("button");
  prevBtn.className = "image-arrow left";
  prevBtn.textContent = "‹";

  const nextBtn = document.createElement("button");
  nextBtn.className = "image-arrow right";
  nextBtn.textContent = "›";

  mainWrapper.appendChild(prevBtn);
  mainWrapper.appendChild(mainImg);
  mainWrapper.appendChild(nextBtn);
  imagesContainer.appendChild(mainWrapper);

function updateMainImage() {
  if (sliderImages.length === 0) return;
  mainImg.src = sliderImages[currentImageIndex];
}

  prevBtn.addEventListener("click", () => {
    currentImageIndex =
      (currentImageIndex - 1 + sliderImages.length) % sliderImages.length;
    updateMainImage();
  });

  nextBtn.addEventListener("click", () => {
    currentImageIndex =
      (currentImageIndex + 1) % sliderImages.length;
    updateMainImage();
  });

  scrollImages.forEach(src => {
    const img = document.createElement("img");
    img.src = src;
    img.alt = product.name;
    img.className = "secondary-image";
    imagesContainer.appendChild(img);
  });

  /* =========================
     SIZE SELECTION
  ========================= */
  const sizes = product.sizes || ["XS", "S", "M", "L"];
  selectedSize = null;
  sizeSelector.innerHTML = "";

  addToCartBtn.classList.add("disabled");
  addToCartBtn.setAttribute("disabled", true);
  addToCartBtn.textContent = "SELECCIONA LA TALLA";

  sizes.forEach(size => {
    const btn = document.createElement("button");
    btn.textContent = size;
    btn.className = "size-btn";

    btn.addEventListener("click", () => {
      document
        .querySelectorAll(".size-btn")
        .forEach(b => b.classList.remove("active"));

      btn.classList.add("active");
      selectedSize = size;

      addToCartBtn.classList.remove("disabled");
      addToCartBtn.removeAttribute("disabled");
      addToCartBtn.textContent = "AÑADIR AL CARRITO";
    });

    sizeSelector.appendChild(btn);
  });

  /* =========================
     CART WARNING
  ========================= */
  function showCartWarning() {
    if (!cartWarning) return;
    cartWarning.classList.add("show");
    setTimeout(() => cartWarning.classList.remove("show"), 2500);
  }

  /* =========================
     ADD TO CART
  ========================= */
const finalPrice =
  product.isSale && product.salePrice
    ? product.salePrice
    : product.price;

addToCartBtn.addEventListener("click", () => {
  if (!selectedSize) return;

  const cart = JSON.parse(localStorage.getItem("cart")) || [];

  const existingItem = cart.find(
    item => item.id === product.id && item.size === selectedSize
  );

  if (existingItem) {
    if (existingItem.quantity >= MAX_QTY_PER_SIZE) {
      showCartWarning();
      return;
    }
    existingItem.quantity++;
  } else {
    cart.push({
      id: product.id,
      name: product.name,
      price: finalPrice, // ✅ precio correcto
      color: product.color,
      originalPrice: product.price, // opcional (para mostrar tachado luego)
      isSale: product.isSale || false,
      image: mainProductImage,
      size: selectedSize,
      quantity: 1
    });
  }

  localStorage.setItem("cart", JSON.stringify(cart));
  document.dispatchEvent(new Event("cart:open"));
});

  /* =========================
     SEE MORE
  ========================= */
  if (seeMoreBtn && product.collection) {
    seeMoreBtn.addEventListener("click", () => {
      window.location.href = `gallery-item.html?collection=${product.collection}`;
    });
  }

  /* =========================
     ACCORDION
  ========================= */
  document.querySelectorAll(".accordion-header").forEach(header => {
    header.addEventListener("click", () => {
      const item = header.parentElement;
      const isOpen = item.classList.contains("active");

      document
        .querySelectorAll(".accordion-item")
        .forEach(i => i.classList.remove("active"));

      if (!isOpen) item.classList.add("active");
    });
  });

  /* =========================
     RECOMMENDED PRODUCTS
  ========================= */
  const recommendedRow = document.querySelector(".recommended-row");

  if (recommendedRow && Array.isArray(product.recommended)) {
    recommendedRow.innerHTML = "";

    product.recommended.forEach(key => {
      const prod = PRODUCTS[key];
      if (!prod) return;

      const img =
        prod.images?.slider?.[0] ||
        prod.images?.scroll?.[0] ||
        "";

      const card = document.createElement("a")
      card.href = `product.html?id=${key}`;
      card.className = "recommended-item";

      card.innerHTML = `
        <img src="${img}" alt="${prod.name}">
        <p class="recommended-name">${prod.name}</p>
        <p class="recommended-price">$${prod.price}</p>
      `;

      recommendedRow.appendChild(card);
    });
  }


});

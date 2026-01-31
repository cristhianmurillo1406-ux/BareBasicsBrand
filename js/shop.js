document.addEventListener("DOMContentLoaded", () => {
  const grid = document.querySelector(".products-grid");
  if (!grid) return;

  const params = new URLSearchParams(window.location.search);
  const filter = params.get("filter");

  if (!filter) return;

  const cards = document.querySelectorAll(".product-card");

  cards.forEach(card => {
    const url = new URL(card.href);
    const productKey = url.searchParams.get("id");
    const product = PRODUCTS[productKey];

    if (!product) return;

    let show = true;

    if (filter === "new") {
      show = product.isNew === true;
    }

    if (filter === "sale") {
      show = product.isSale === true;
    }

    card.style.display = show ? "block" : "none";
  });
});

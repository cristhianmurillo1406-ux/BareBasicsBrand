document.addEventListener("DOMContentLoaded", () => {
  const galleries = {

    winter25: {
      title: "WINTER SEASON ’25",
      date: "ENERO 30, 2025",
      images: [
        "img/gallery/Winter_Season/1.png",
        "img/gallery/Winter_Season/2.png",
        "img/gallery/Winter_Season/3.png",
        "img/gallery/Winter_Season/4.jpg",
        "img/gallery/Winter_Season/5.png",
        "img/gallery/Winter_Season/6.jpg",
        "img/gallery/Winter_Season/7.png",
        "img/gallery/Winter_Season/8.jpg",
        "img/gallery/Winter_Season/9.png",
        "img/gallery/Winter_Season/10.png",
        "img/gallery/Winter_Season/11.png",
        "img/gallery/Winter_Season/12.png"
      ]
    },

    streetart: {
      title: "STREET ART",
      date: "ABRIL 11, 2025",
      images: [
        "img/gallery/Street_Art/1.jpg",
        "img/gallery/Street_Art/2.jpg",
        "img/gallery/Street_Art/3.jpg",
        "img/gallery/Street_Art/4.jpg",
        "img/gallery/Street_Art/5.jpg",
        "img/gallery/Street_Art/6.jpg",
        "img/gallery/Street_Art/7.jpg",
        "img/gallery/Street_Art/8.jpg",
        "img/gallery/Street_Art/9.jpg",
        "img/gallery/Street_Art/10.jpg",
        "img/gallery/Street_Art/11.jpg",
        "img/gallery/Street_Art/12.jpg"
      ]
    }
  };

  const params = new URLSearchParams(window.location.search);

  const galleryId =
    params.get("collection") || params.get("id");

  const gallery = galleries[galleryId];

  if (!gallery) {
    console.error("Gallery not found:", galleryId);
    return;
  }

  document.getElementById("galleryTitle").textContent = gallery.title;
  document.getElementById("galleryDate").textContent = gallery.date;

  const grid = document.getElementById("galleryGrid");
  grid.innerHTML = "";

  gallery.images.forEach(src => {
    const img = document.createElement("img");
    img.src = src;
    img.alt = gallery.title;
    grid.appendChild(img);
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const galleries = {

    winter25: {
      title: "WINTER SEASON ’25",
      date: "ENERO 30, 2025",
      images: [
        "img/gallery/Winter_Season/1.jpg",
        "img/gallery/Winter_Season/2.PNG",
        "img/gallery/Winter_Season/3.PNG",
        "img/gallery/Winter_Season/4.JPG",
        "img/gallery/Winter_Season/5.PNG",
        "img/gallery/Winter_Season/6.JPG",
        "img/gallery/Winter_Season/7.PNG",
        "img/gallery/Winter_Season/8.JPG",
        "img/gallery/Winter_Season/9.PNG",
        "img/gallery/Winter_Season/10.PNG",
        "img/gallery/Winter_Season/11.PNG",
        "img/gallery/Winter_Season/12.PNG"
      ]
    },

    streetart: {
      title: "STREET ART",
      date: "ABRIL 11, 2025",
      images: [
        "img/gallery/Street_Art/1.JPG",
        "img/gallery/Street_Art/2.JPG",
        "img/gallery/Street_Art/3.JPG",
        "img/gallery/Street_Art/4.JPG",
        "img/gallery/Street_Art/5.JPG",
        "img/gallery/Street_Art/6.JPG",
        "img/gallery/Street_Art/7.JPG",
        "img/gallery/Street_Art/8.JPG",
        "img/gallery/Street_Art/9.JPG",
        "img/gallery/Street_Art/10.JPG",
        "img/gallery/Street_Art/11.JPG",
        "img/gallery/Street_Art/12.JPG"
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

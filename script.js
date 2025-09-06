const gallery = document.getElementById("gallery");

// Immediately load all 17 images
for (let i = 1; i <= 17; i++) {
  const img = document.createElement("img");
  img.src = `img${i}.png`;
  img.alt = `Menu ${i}`;
  gallery.appendChild(img);
}

const gallery = document.getElementById("gallery");

// Instantly load all 17 menu images
for (let i = 1; i <= 17; i++) {
  const img = document.createElement("img");
  img.src = `img${i}.png`;
  img.alt = `Menu ${i}`;
  gallery.appendChild(img);
}

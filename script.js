const gallery = document.getElementById("gallery");

// Load all 17 images immediately
for (let i = 1; i <= 17; i++) {
  const img = document.createElement("img");
  img.src = `img${i}.png`;
  img.alt = `Menu ${i}`;
  gallery.appendChild(img);
}

// Scroll sound effect
const popSound = new Audio("https://assets.mixkit.co/active_storage/sfx/2181/2181-preview.mp3");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    popSound.currentTime = 0;
    popSound.play();
  }
});

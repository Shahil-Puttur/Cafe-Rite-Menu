const gallery = document.getElementById("gallery");

// load 17 images
for (let i = 1; i <= 17; i++) {
  const img = document.createElement("img");
  img.src = `img${i}.png`;
  img.alt = `Menu ${i}`;
  gallery.appendChild(img);
}

// sound effect
const popSound = new Audio("https://assets.mixkit.co/active_storage/sfx/2181/2181-preview.mp3");

// scroll animation observer
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
      popSound.currentTime = 0;
      popSound.play();
    }
  });
}, {threshold: 0.3});

// observe all images
document.querySelectorAll("main img").forEach(img => observer.observe(img));

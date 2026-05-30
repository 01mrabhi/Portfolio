const canvas = document.querySelector("#mesh");
const context = canvas.getContext("2d");
const revealItems = document.querySelectorAll(".reveal");

let width = 0;
let height = 0;
let points = [];
let pointer = { x: 0, y: 0 };

function resizeCanvas() {
  const ratio = Math.min(window.devicePixelRatio || 1, 2);
  width = window.innerWidth;
  height = window.innerHeight;
  canvas.width = Math.floor(width * ratio);
  canvas.height = Math.floor(height * ratio);
  canvas.style.width = `${width}px`;
  canvas.style.height = `${height}px`;
  context.setTransform(ratio, 0, 0, ratio, 0, 0);
  points = Array.from({ length: Math.min(72, Math.floor(width / 18)) }, () => ({
    x: Math.random() * width,
    y: Math.random() * height,
    vx: (Math.random() - 0.5) * 0.28,
    vy: (Math.random() - 0.5) * 0.28,
  }));
}

function drawMesh() {
  context.clearRect(0, 0, width, height);
  points.forEach((point) => {
    point.x += point.vx;
    point.y += point.vy;

    if (point.x < -20) point.x = width + 20;
    if (point.x > width + 20) point.x = -20;
    if (point.y < -20) point.y = height + 20;
    if (point.y > height + 20) point.y = -20;

    const pointerDistance = Math.hypot(point.x - pointer.x, point.y - pointer.y);
    if (pointerDistance < 150) {
      point.x += (point.x - pointer.x) * 0.002;
      point.y += (point.y - pointer.y) * 0.002;
    }
  });

  for (let i = 0; i < points.length; i += 1) {
    for (let j = i + 1; j < points.length; j += 1) {
      const a = points[i];
      const b = points[j];
      const distance = Math.hypot(a.x - b.x, a.y - b.y);
      if (distance < 150) {
        const opacity = 1 - distance / 150;
        context.strokeStyle = `rgba(64, 215, 255, ${opacity * 0.18})`;
        context.lineWidth = 1;
        context.beginPath();
        context.moveTo(a.x, a.y);
        context.lineTo(b.x, b.y);
        context.stroke();
      }
    }
  }

  points.forEach((point) => {
    context.fillStyle = "rgba(99, 230, 164, 0.35)";
    context.beginPath();
    context.arc(point.x, point.y, 1.7, 0, Math.PI * 2);
    context.fill();
  });

  requestAnimationFrame(drawMesh);
}

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.16 }
);

revealItems.forEach((item) => observer.observe(item));

window.addEventListener("resize", resizeCanvas);
window.addEventListener("pointermove", (event) => {
  pointer = { x: event.clientX, y: event.clientY };
});

resizeCanvas();
drawMesh();

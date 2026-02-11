const STORAGE_KEYS = {
  theme: "uri-ise-theme",
  textSize: "uri-ise-text-size"
};

const themeSelect = document.querySelector("[data-theme-select]");
const textToggle = document.querySelector("[data-text-toggle]");
const textRange = document.querySelector("[data-text-range]");
const textPanel = document.querySelector("[data-text-panel]");
const root = document.documentElement;

const sizeMap = {
  1: "xs",
  2: "sm",
  3: "md",
  4: "lg",
  5: "xl"
};

const applyTheme = (value) => {
  const storedTheme = value || localStorage.getItem(STORAGE_KEYS.theme) || "system";
  const systemDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const theme = storedTheme === "system" ? (systemDark ? "dark" : "light") : storedTheme;

  root.setAttribute("data-theme", theme);
  if (themeSelect) {
    themeSelect.value = storedTheme;
  }
};

const applyTextSize = (value) => {
  const storedSize = value || localStorage.getItem(STORAGE_KEYS.textSize) || "3";
  const mappedSize = sizeMap[storedSize] || "md";
  root.setAttribute("data-text-size", mappedSize);
  if (textRange) {
    textRange.value = storedSize;
  }
};

if (themeSelect) {
  themeSelect.addEventListener("change", (event) => {
    const value = event.target.value;
    localStorage.setItem(STORAGE_KEYS.theme, value);
    applyTheme(value);
  });
}

if (textToggle && textPanel) {
  textToggle.addEventListener("click", () => {
    const isOpen = textPanel.getAttribute("data-open") === "true";
    textPanel.setAttribute("data-open", isOpen ? "false" : "true");
    textToggle.setAttribute("aria-expanded", isOpen ? "false" : "true");
  });
}

if (textRange) {
  textRange.addEventListener("input", (event) => {
    const value = event.target.value;
    localStorage.setItem(STORAGE_KEYS.textSize, value);
    applyTextSize(value);
  });
}

window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", () => {
  const storedTheme = localStorage.getItem(STORAGE_KEYS.theme) || "system";
  if (storedTheme === "system") {
    applyTheme("system");
  }
});

applyTheme();
applyTextSize();

const canvas = document.querySelector("[data-network-canvas]");
if (canvas) {
  const ctx = canvas.getContext("2d");
  const nodes = [];
  const edges = [];
  const particles = [];
  const maxParticles = 45;
  const hover = { x: 0, y: 0, active: false };

  const resizeCanvas = () => {
    const { width, height } = canvas.getBoundingClientRect();
    canvas.width = Math.floor(width * window.devicePixelRatio);
    canvas.height = Math.floor(height * window.devicePixelRatio);
    ctx.setTransform(window.devicePixelRatio, 0, 0, window.devicePixelRatio, 0, 0);
  };

  const createNodes = () => {
    nodes.length = 0;
    edges.length = 0;
    const width = canvas.clientWidth;
    const height = canvas.clientHeight;
    const count = width < 700 ? 7 : 11;

    for (let i = 0; i < count; i += 1) {
      nodes.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: 10 + Math.random() * 10,
        type: Math.random() > 0.6 ? "hex" : "square"
      });
    }

    for (let i = 0; i < nodes.length; i += 1) {
      const target = nodes[(i + 1 + Math.floor(Math.random() * 3)) % nodes.length];
      const secondary = nodes[(i + 3 + Math.floor(Math.random() * 3)) % nodes.length];
      edges.push({ from: nodes[i], to: target });
      edges.push({ from: nodes[i], to: secondary });
    }
  };

  const spawnParticle = () => {
    const edge = edges[Math.floor(Math.random() * edges.length)];
    particles.push({
      edge,
      t: 0,
      speed: 0.0025 + Math.random() * 0.0045
    });
  };

  const drawNode = (node) => {
    const isHover = Math.hypot(node.x - hover.x, node.y - hover.y) < 35 && hover.active;
    const size = isHover ? node.size * 1.25 : node.size;
    ctx.save();
    ctx.translate(node.x, node.y);
    ctx.strokeStyle = "rgba(117, 178, 221, 0.9)";
    ctx.fillStyle = isHover ? "rgba(179, 156, 77, 0.8)" : "rgba(117, 178, 221, 0.35)";
    ctx.lineWidth = 1.5;

    if (node.type === "hex") {
      ctx.beginPath();
      for (let i = 0; i < 6; i += 1) {
        const angle = (Math.PI / 3) * i;
        const px = Math.cos(angle) * size;
        const py = Math.sin(angle) * size;
        if (i === 0) ctx.moveTo(px, py);
        else ctx.lineTo(px, py);
      }
      ctx.closePath();
      ctx.fill();
      ctx.stroke();
    } else {
      ctx.beginPath();
      ctx.rect(-size, -size, size * 2, size * 2);
      ctx.fill();
      ctx.stroke();
    }
    ctx.restore();
  };

  const drawEdge = (edge) => {
    ctx.strokeStyle = "rgba(117, 178, 221, 0.3)";
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(edge.from.x, edge.from.y);
    ctx.lineTo(edge.to.x, edge.to.y);
    ctx.stroke();
  };

  const drawParticle = (particle) => {
    const { from, to } = particle.edge;
    const x = from.x + (to.x - from.x) * particle.t;
    const y = from.y + (to.y - from.y) * particle.t;
    ctx.beginPath();
    ctx.fillStyle = "rgba(179, 156, 77, 0.9)";
    ctx.arc(x, y, 2.6, 0, Math.PI * 2);
    ctx.fill();
  };

  const update = () => {
    ctx.clearRect(0, 0, canvas.clientWidth, canvas.clientHeight);

    edges.forEach(drawEdge);
    nodes.forEach(drawNode);

    for (let i = particles.length - 1; i >= 0; i -= 1) {
      const particle = particles[i];
      particle.t += particle.speed;
      if (particle.t >= 1) {
        particles.splice(i, 1);
      } else {
        drawParticle(particle);
      }
    }

    if (particles.length < maxParticles && Math.random() > 0.7) {
      spawnParticle();
    }

    requestAnimationFrame(update);
  };

  const handlePointer = (event) => {
    const rect = canvas.getBoundingClientRect();
    hover.x = event.clientX - rect.left;
    hover.y = event.clientY - rect.top;
    hover.active = true;
  };

  const clearPointer = () => {
    hover.active = false;
  };

  window.addEventListener("resize", () => {
    resizeCanvas();
    createNodes();
  });

  canvas.addEventListener("mousemove", handlePointer);
  canvas.addEventListener("mouseleave", clearPointer);

  resizeCanvas();
  createNodes();
  for (let i = 0; i < maxParticles / 2; i += 1) {
    spawnParticle();
  }
  update();
}

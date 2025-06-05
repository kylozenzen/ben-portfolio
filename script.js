

// Juice Box Counter
function addJuice() {
    let count = parseInt(localStorage.getItem('juiceCount')) || 0;
    count++;
    localStorage.setItem('juiceCount', count);
    document.getElementById('juice-count').textContent = count;
}
window.onload = function () {
    let count = parseInt(localStorage.getItem('juiceCount')) || 0;
    if (document.getElementById('juice-count')) {
        document.getElementById('juice-count').textContent = count;
    }

    // Bedtime Easter Egg
    const hour = new Date().getHours();
    if (hour >= 22 || hour < 5) {
        const msg = document.createElement("div");
        msg.textContent = "Ben is probably asleep 💤";
        msg.style.cssText = "position:fixed;bottom:50px;right:10px;background:#0008;color:#fff;padding:5px 10px;border-radius:10px;font-size:14px;";
        document.body.appendChild(msg);
    }

    // Lazy YouTube Embed
    const yt = document.getElementById("lazy-youtube");
    if (yt) {
        const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                yt.innerHTML = `<iframe width="300" height="170" src="https://www.youtube.com/embed/videoseries?list=PLFgquLnL59alCl_2TQvOiD5Vgm1hCaGSI" frameborder="0" allowfullscreen></iframe>`;
                observer.disconnect();
            }
        });
        observer.observe(yt);
    }
};


// Secret Notepad Trigger
document.addEventListener("DOMContentLoaded", () => {
    const trigger = document.getElementById("b-trigger");
    if (trigger) {
        trigger.addEventListener("click", () => {
            const pad = document.getElementById("notepad");
            if (pad) pad.style.display = "block";
        });
    }
});


// N-trigger to open secret vault
document.addEventListener("DOMContentLoaded", () => {
    const nTrigger = document.getElementById("n-trigger");
    if (nTrigger) {
        nTrigger.addEventListener("click", () => {
            window.location.href = "easter-eggs.html";
        });
    }
});

document.addEventListener("DOMContentLoaded", () => {
  const counter = document.getElementById("juice-box-counter");
  if (counter) {
    counter.addEventListener("dblclick", () => {
      window.location.href = "easter-eggs.html";
    });
  }
});

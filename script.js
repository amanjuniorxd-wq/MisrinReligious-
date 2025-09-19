// Load content.json and render
async function loadContent() {
  const container = document.getElementById("content");
  try {
    const res = await fetch("content.json");
    const data = await res.json();
    container.innerHTML = "";
    data.forEach(theme => {
      const block = document.createElement("div");
      block.className = "theme-block";
      if (theme.theme) {
        block.innerHTML = `
          <h2>=== THEME: ${theme.theme} ===</h2>
          <blockquote><b>Qur’an:</b> ${theme.quran}</blockquote>
          <blockquote><b>Bible:</b> ${theme.bible}</blockquote>
          <blockquote><b>Bhagavad Gita:</b> ${theme.gita}</blockquote>
          <div class="tao">
            ${theme.tao.map(line => `<div>${line}</div>`).join("")}
          </div>
          <p>${theme.commentary}</p>
          <ul>
            ${theme.differences.map(d => `<li>${d}</li>`).join("")}
          </ul>
          <p><i>Keywords:</i> ${theme.keywords.join(", ")}</p>
        `;
      } else if (theme.closing) {
        block.innerHTML = `<h2>Closing Lines</h2><p>${theme.closing}</p>`;
      }
      container.appendChild(block);
    });
  } catch (err) {
    container.innerHTML = "<p>Failed to load content.</p>";
    console.error(err);
  }
}

loadContent();

function colorHomepageTitle() {
  const title = document.querySelector(
    'body[data-slug="index"] h1.article-title',
  )

  if (!title) return

  // Avoid applying the change twice
  if (title.querySelector(".title-accent")) return

  const text = title.textContent ?? ""

  if (!text.endsWith("!")) return

  title.textContent = ""

  const regular = document.createTextNode(text.slice(0, -1))
  const accent = document.createElement("span")

  accent.className = "title-accent"
  accent.textContent = "!"

  title.append(regular, accent)
}

document.addEventListener("DOMContentLoaded", colorHomepageTitle)
document.addEventListener("nav", colorHomepageTitle)

<div align="center">

# 🏰 DSA Story-Land

**Learn Data Structures & Algorithms through immersive storytelling.**

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![No Build Step](https://img.shields.io/badge/build-none%20required-brightgreen?style=flat)](#-getting-started)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow?style=flat)](LICENSE)

[**Live Demo →**](https://your-username.github.io/dsa-storyland) &nbsp;·&nbsp; [Report a Bug](../../issues/new) &nbsp;·&nbsp; [Request a Chapter](../../issues/new)

</div>

---

## 📖 What is this?

DSA Story-Land turns dry textbook content into a journey. Every data structure gets a **world**, a **personality**, and an **analogy** you can actually remember — then backs it up with interactive hover demos, a self-test quiz, and real interview problems.

No frameworks. No build tools. Just HTML, CSS, and a sprinkle of vanilla JS.

---

## ✨ Features

| Feature | Details |
|---|---|
| 📖 **Story-driven chapters** | Each DSA topic is a narrative, not a bullet list |
| 🎮 **Pure-CSS hover demos** | Visualize O(1) vs O(n) operations in real time |
| ❓ **30+ quiz questions** | Instant-reveal answers, one per concept |
| 🏆 **Interview corner** | Google, Meta & Amazon problems with toggle solutions |
| 📱 **Fully responsive** | Mobile, tablet, and desktop |
| ♿ **Accessible** | Semantic HTML5, ARIA labels, `prefers-reduced-motion` |

---

## 📚 Chapters

| # | Chapter | Core Concepts | Complexity |
|---|---|---|---|
| 01 | Arrays — *The Hostel of Fixed Rooms* | Contiguous memory, static allocation | Access `O(1)` · Insert `O(n)` |
| 02 | Linked Lists — *The Train with Connectable Cars* | Dynamic allocation, pointers | Access `O(n)` · Insert `O(1)` |
| 03 | Queues — *The Amusement Park Line* | FIFO, enqueue, dequeue | Both ends `O(1)` |
| 04 | Searching — *The Library Hunt* | Linear vs Binary search | `O(n)` vs `O(log n)` |
| 05 | Sorting — *Arranging the Blueprints* | Bubble Sort vs Merge Sort | `O(n²)` vs `O(n log n)` |
| 🏆 | Interview Corner | Kadane's · Reverse LL · Two Sum | — |

---

## 🚀 Getting Started

No install. No build step. Clone and open.

```bash
git clone https://github.com/your-username/dsa-storyland.git
cd dsa-storyland
```

Then either:

```bash
# Option A — just open in browser
open index.html

# Option B — local dev server with live reload
npx serve .

# Option C — Python server
python3 -m http.server 8080
```

Visit `http://localhost:8080` and you're in.

---

## 🗂 Project Structure

```
dsa-storyland/
├── index.html          # All markup — semantic, accessible, no frameworks
├── css/
│   └── style.css       # Design tokens, layout, components, hover demo logic
├── js/
│   └── main.js         # Scroll-aware nav, keyboard support for demos
└── README.md
```

The CSS hover demo logic is the interesting part — it uses the `~` general sibling selector so that hovering a `<button>` directly triggers visual changes on the `.demo-stage` next to it, with zero JavaScript.

---

## 🎨 Design Tokens

All colors, fonts, and spacing live in `:root` inside `css/style.css`. Easy to theme.

```css
--clr-primary:   #7c6af7;  /* violet  — accents, active states     */
--clr-secondary: #e8b86d;  /* amber   — keywords, highlights        */
--clr-success:   #57d9a3;  /* teal    — O(1) / fast operation color */
--clr-danger:    #ef6e6e;  /* red     — O(n) / slow operation color */

--font-display:  'Space Grotesk';   /* headings      */
--font-body:     'Inter';           /* body text     */
--font-mono:     'JetBrains Mono';  /* code & labels */
```

---

## 🤝 Contributing

Contributions are welcome! Here's how to add a new chapter:

1. Fork the repo and create a branch: `git checkout -b chapter/stacks`
2. Copy an existing `<section class="dsa-chapter">` block in `index.html` as your template
3. Add a nav link in the `<header>` pointing to your new section id
4. Write the story, learnings, demo, and quiz following the same structure
5. Add any new demo hover rules to the `/* Hover effects */` section in `style.css`
6. Open a PR — describe what the chapter teaches and link to a reference

---

## 📄 License

[MIT](LICENSE) — free to use, fork, and build on.

---

<div align="center">
  <sub>Built with 🧠 and ✨ · If this helped you, leave a ⭐</sub>
</div>

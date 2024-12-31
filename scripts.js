// Sidebar & Markdown Content Logic
const languages = [
  {
    name: "JavaScript",
    icon: "https://cdn.jsdelivr.net/npm/@iconify-icons/logos/javascript.svg",
    file: "javascript.md",
  },
  {
    name: "TypeScript",
    icon: "https://cdn.jsdelivr.net/npm/@iconify-icons/logos/typescript-icon.svg",
    file: "typescript.md",
  },
  {
    name: "HTML",
    icon: "https://cdn.jsdelivr.net/npm/@iconify-icons/logos/html-5.svg",
    file: "html.md",
  },
];

// Initialize Sidebar with List of Languages
const sidebarList = document.getElementById("sidebar-list");
languages.forEach(({ name, icon, file }) => {
  const li = document.createElement("li");
  li.classList.add("sidebar-item");
  li.innerHTML = `<img src="${icon}" alt="${name}" class="w-8 h-8" /><span>${name}</span>`;
  li.addEventListener("click", () => loadMarkdown(file, li));
  sidebarList.appendChild(li);
});

// Load Markdown into Main Content Area
const contentDiv = document.getElementById("content");
async function loadMarkdown(file, listItem) {
  const response = await fetch(`markdown/${file}`);
  if (response.ok) {
    const markdown = await response.text();
    contentDiv.innerHTML = marked.parse(markdown, {
      highlight: function (code, lang) {
        return hljs.highlightAuto(code, [lang]).value;
      },
    });
    hljs.highlightAll(); // Apply syntax highlighting to code blocks
    addCopyButtons();
    document
      .querySelectorAll(".sidebar-item")
      .forEach((item) => item.classList.remove("active"));
    listItem.classList.add("active");
  } else {
    contentDiv.innerHTML = `<p class="text-red-600">Error: File not found.</p>`;
  }
}

// Add "Copy" button to Code Blocks
function addCopyButtons() {
  document.querySelectorAll("pre").forEach((block) => {
    const button = document.createElement("button");
    button.classList.add("copy-button");
    button.textContent = "Copy";
    button.addEventListener("click", () => {
      navigator.clipboard.writeText(block.textContent);
      button.textContent = "Copied!";
      setTimeout(() => (button.textContent = "Copy"), 2000);
    });
    block.appendChild(button);
  });
}

// Sidebar Toggle Logic (Mobile View)
const sidebar = document.getElementById("sidebar");
const sidebarToggle = document.getElementById("sidebar-toggle");
const sidebarClose = document.getElementById("sidebar-close");

sidebarToggle.addEventListener("click", () => {
  sidebar.classList.add("open");
});

sidebarClose.addEventListener("click", () => {
  sidebar.classList.remove("open");
});

// Theme Toggle Logic
const themeToggle = document.getElementById("theme-toggle");
themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});

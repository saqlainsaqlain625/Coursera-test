# Module 5 Solution – HTML, CSS, and JavaScript for Web Developers

This is the **final assignment** (Module 5) for the Coursera course  
**"HTML, CSS, and JavaScript for Web Developers"** offered by Johns Hopkins University.

---

## 📋 Objective

Modify the Restaurant web app such that when the **"Specials"** tile on the home page is clicked,  
it randomly loads one of the restaurant's menu categories instead of always loading the same "SP" category.

---

## 🧩 What I Did

- Implemented JavaScript logic to:
  - Fetch all available categories dynamically from Firebase.
  - Select a **random category** using `Math.random()`.
  - Replace `{{randomCategoryShortName}}` in the HTML snippet with that category.
- Ensured proper rendering of menu categories and menu items.
- Verified functionality for responsive design and proper page linking.

---

## 🚀 Live Preview

🔗 **Live Demo:**  
[Click Here to View Live App](https://saqlainsaqlain625.github.io/Coursera-test/module5-solution/index.html)

*(If the link doesn’t open, please check GitHub Pages settings under “Settings → Pages” and ensure the branch is set to `main`.)*

---

## 📂 Project Structure
```bash
module5-solution/
│
├── css/
│ └── styles.css
│
├── js/
│ ├── script.js
│ └── ajax-utils.js
│
├── snippets/
│ ├── home-snippet.html
│ ├── menu-items-title.html
│ ├── menu-item.html
│ ├── categories-title-snippet.html
│ └── category-snippet.html
│
├── images/
│ └── ajax-loader.gif
│
├── index.html
└── README.md
```

---

## 🧠 Key Learnings

- How to manipulate DOM elements dynamically using JavaScript.
- Fetching and using JSON data from a remote server.
- Using modular snippets to build dynamic pages.
- Understanding asynchronous behavior and callback functions.

---

## 👨‍💻 Author

**Saqlain Mushtaq**  
GitHub: [@saqlainsaqlain625](https://github.com/saqlainsaqlain625)

---

✅ *Successfully completed the Coursera Course: HTML, CSS, and JavaScript for Web Developers*



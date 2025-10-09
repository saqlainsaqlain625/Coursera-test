# Module 4 Coding Assignment

**Course:** [HTML, CSS, and Javascript for Web Developers – Johns Hopkins University (Coursera)](https://www.coursera.org/learn/html-css-javascript-for-web-developers)

---

## 🧠 Objective
Loop through an array of names and print either **“Hello Name”** or **“Good Bye Name”** to the browser console:
- If the name starts with **‘J’** or **‘j’**, print **Good Bye Name**
- Otherwise, print **Hello Name**

---

## 🗂️ Project Structure
```bash
module4-solution/
│
├── index.html
├── SpeakHello.js
├── SpeakGoodBye.js
└── script.js
```

---

## 💡 Logic Explanation

- The code defines two objects:
  - `helloSpeaker` → says “Hello”
  - `byeSpeaker` → says “Good Bye”
- Each object exposes a `.speak()` method.
- The main `script.js` loops over all names and checks the **first letter**.
- If the letter is `'j'` or `'J'`, it calls `byeSpeaker.speak(name)`.
- Otherwise, it calls `helloSpeaker.speak(name)`.

---

## 🖥️ Console Output

When opened in a browser, the **console** prints:


---

## 🚀 Live Preview
🔗 **Live Demo:** [https://saqlainsaqlain625.github.io/module4-solution/](https://saqlainsaqlain625.github.io/module4-solution/)

---

## 🧑‍💻 Developed by
**Saqlain Mushtaq**

---

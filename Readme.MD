# 🚦 Traffic Light Simulator

An interactive, state-driven web application built with Vanilla JavaScript, HTML5, and CSS3 that simulates real-world traffic signal behavior. Users can toggle between Red, Yellow, and Green signals to observe real-time visual light transitions, dynamic traffic rule explanations, and synchronized instructional video feeds.

---

## ✨ Features

- **Interactive Signal Controls:** Toggle between Red, Green, and Yellow lights using dedicated controls.
- **Dynamic State Management:** Visual light indicators dynamically highlight and glow using CSS class switching.
- **Synchronized Video Playback:** Automatically updates the instructional media feed based on the active light signal.
- **Traffic Rule Descriptions:** Displays relevant safety guidelines and instructions corresponding to each signal state.
- **Responsive Layout:** Designed using CSS Flexbox and media queries for smooth rendering across mobile and desktop devices.

---

## 🛠️ Tech Stack

- **HTML5:** Semantic structure for signal displays, media containers, and interactive controls.
- **CSS3:** Custom keyframe transitions, dynamic glows (`box-shadow`, `currentColor`), and mobile-first responsive layout.
- **JavaScript (ES6):** Pure DOM manipulation, event listeners, dynamic attribute updates, and state toggling.

---

## 🚀 Getting Started

To run this project locally on your machine:

1. **Clone the Repository:**
   ```bash
   git clone [https://github.com/your-username/traffic-light-simulator.git](https://github.com/your-username/traffic-light-simulator.git)
Navigate to the Project Folder:

2. Bash
cd traffic-light-simulator
Open in Browser:

- Double-click index.html to open it in your default web browser, or use VS Code's Live Server extension.

📂 Project Structure
Plaintext
traffic-light-simulator/
├── assets/
│   ├── Intro.mp4
│   ├── red.mp4
│   ├── yellow.mp4
│   └── green.mp4
├── index.html
├── style.css
├── app.js
└── README.md

💡 Key Takeaways & Concepts Covered
- DOM Manipulation & State Management: Writing modular JS functions (activateLight(), updateSignal()) to handle UI state cleanups and active class toggling (classList.add / classList.remove).

- Dynamic Media Control: Changing video sources (video.src) on demand without requiring page reloads.

- Advanced CSS Styling: Utilizing currentColor alongside box-shadow to generate realistic illumination and glowing visual effects.

- Responsive UI Design: Implementing modern CSS utility rules (min(), dynamic sizing) and @media queries.

📝 Author
- Sanjay
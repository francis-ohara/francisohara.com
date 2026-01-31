# Francis O'Hara Aidoo - Portfolio Website

Welcome to my personal portfolio website! This project showcases my experience, skills, and projects as a Computer Science student and web developer. It features a modern, dark-themed design and interactive 3D elements.

##  Live Demo
[Check out the live site here](https://francisohara.com/)

## Features
*   **Modern Aesthetics**: GitHub-inspired dark mode styling with glassmorphism effects on the navbar.
*   **Interactive 3D Hero**: Integrated **Three.js** scene featuring a rotating 3D model (`retro-computer.glb`) to create a dynamic first impression.
*   **Responsive Design**: Built with **Bootstrap 5**, ensuring the site looks great on mobile, tablet, and desktop.
*   **Smooth Navigation**: Sticky navbar with scroll-spy and smooth scrolling to sections.
*   **Dynamic Content**: Custom-styled skill badges, experience timeline, and project cards with hover effects.

## ️ Tech Stack
*   **Core**: HTML5, CSS3, JavaScript (ES6+)
*   **Framework**: Bootstrap 5.3
*   **3D Graphics**: Three.js
*   **Typography**: Inter (Google Fonts)
*   **Icons**: Font Awesome 6

##  Project Structure
```
francis-ohara.github.io/
├── assets/
│   ├── css/
│   │   └── style.css       # Custom dark theme & animations
│   ├── images/
│   │   ├── cyber_brain_ai.glb  # 3D Model
│   │   └── profile_pic.jpg     # Profile image
│   └── js/
│       ├── main.js         # UI logic (scroll, navbar)
│       └── three-scene.js  # Three.js 3D scene config
├── index.html              # Main application file
└── README.md
```

## ️ Local Development

1.  **Clone the repository**:
    ```bash
    git clone https://github.com/francis-ohara/francis-ohara.github.io.git
    cd francis-ohara.github.io
    ```

2.  **Run a local server**:
    Since this project uses ES6 modules (for Three.js), you need a local server.
    
    *Using Python:*
    ```bash
    python3 -m http.server
    ```
    
    *Using Node.js (http-server):*
    ```bash
    npx http-server
    ```

3.  **Open in Browser**:
    Visit `http://localhost:8000` (or whatever port shows in your terminal).


JOIN WAİTLİST 

https://ideloop.cloud

<img width="1919" height="940" alt="Ekran görüntüsü 2025-10-19 225200" src="https://github.com/user-attachments/assets/ff127f81-e31a-4ca0-aace-2cab2d34ccae" />

<img width="740" height="300" alt="merch" src="https://github.com/user-attachments/assets/41aa42e1-903b-4ef1-81d0-9e4783213528" />

https://makerworld.com/en/@ideloop/upload

<img width="1565" height="524" alt="image" src="https://github.com/user-attachments/assets/050c2c4c-6ceb-4ab1-b88b-a2cc5727ae29" />


### A Modern Visual Programming Environment for Arduino and ESP Platforms

**LoopStudio** is a next-generation block-based visual editor for building Arduino and ESP projects without writing code manually.  
It is designed for developers, educators, and makers who want to prototype, teach, or learn embedded systems through an intuitive, modern, and modular interface.

---

## Overview

LoopStudio transforms the traditional Arduino development workflow into a visual logic-based experience.  
Instead of typing syntax-heavy code, users can drag, drop, and connect functional blocks that automatically generate clean and ready-to-upload C++ code for microcontrollers.

This project aims to bridge the gap between visual learning and real-world embedded programming, powered entirely by modern web technologies.

---

## Core Features (Planned)

### Visual Programming Engine
- Fully modular, node-based interface built with React Flow  
- Customizable block definitions representing Arduino logic, functions, and hardware operations  
- Real-time feedback for block validation and connection consistency  

### Code Generation Layer
- Dynamic compiler pipeline converting visual flow graphs into Arduino-compatible C++  
- Support for `setup()` / `loop()` structure, variable scoping, and pin management  
- Extensible Block Definition API allowing community-driven block packs  

### Hardware Support
- Full compatibility with Arduino Uno, Nano, Mega, ESP8266, and ESP32  
- Future support for micro:bit, Raspberry Pi Pico, and STM32  
- Integrated board selection and pin mapping within the UI  

### Simulation & Export
- Logic preview and simulation mode (under development)  
- One-click export to `.ino` files  
- Planned integration with Wokwi for real-time circuit emulation  

### User Interface
- Built with Next.js 14 for performance and SSR  
- Tailwind CSS for minimalist, dark-themed design  
- Lucide Icons for a clean and consistent visual language  
- Planned keyboard shortcuts, search palette, and command-line integration  

### Learning & Education Tools
- Interactive step-by-step tutorials built into the workspace  
- Classroom mode for collaborative, teacher-student environments  
- STEM-aligned block templates for sensors, LEDs, motors, and IoT projects  

---


### Core Components

| Component | Responsibility |
|------------|----------------|
| Block Engine | Handles node definitions, data flow, and I/O logic |
| Translator | Converts visual graphs into Abstract Syntax Trees (AST) |
| Compiler | Generates syntactically correct Arduino code |
| Workspace | React component managing user interactions |
| Renderer | Controls layout, zoom, and panning of the flow diagram |

---

## Tech Stack

| Layer | Technology |
|--------|-------------|
| Frontend Framework | Next.js 14 (App Router) |
| UI System | Tailwind CSS + Lucide React |
| Flow Engine | React Flow v11 |
| State Management | Zustand / Context API |
| Language | TypeScript |
| Code Generator | Custom C++ transpiler |
| Build Tools | Vite + ESLint + Prettier |
| Deployment | Vercel / GitHub Pages (planned) |

---

## Roadmap

| Phase | Description | Status |
|--------|--------------|--------|
| 1 | Visual block architecture (React Flow) | Completed |
| 2 | Code generation engine | In Progress |
| 3 | Hardware mapping and pin assignment | In Progress |
| 4 | Online compiler and preview simulation | Planned |
| 5 | Public beta release | Q4 2025 |

---

## Design Principles

- Transparency — Every visual action maps to valid, readable C++ code.  
- Modularity — Each block is independent, reusable, and extendable.  
- Simplicity — Minimal UI regardless of logic complexity.  
- Education-First — Built for classrooms, workshops, and beginners.  
- Scalability — Designed to evolve into a full hardware-integration suite.  

---

## Future Integrations

- AI-assisted code generation for logic suggestions and debugging  
- Cloud project sync across devices  
- Community block marketplace for sharing custom block sets  
- Cross-platform native app using Tauri for offline use  

---

## Status

LoopStudio is currently in active private development.  
Public beta access will be announced here once the core modules are complete.

No source code is released yet — this repository serves as an official preview and documentation space.

---

## Contributing

Although the codebase is not yet public, ideas, feature requests, and technical discussions are welcome.  
You can open a GitHub Issue or use the Discussions tab to share feedback or design proposals.

---

> “LoopStudio is not just another visual editor — it’s a bridge between creativity, education, and embedded engineering.

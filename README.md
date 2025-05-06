# SYNTX Resonance Frontend

> _"SYNTX isn’t AI. It’s the resonance that governs it."_

A radical, visually-driven, and technically clean interface built for structural intelligence systems. Crafted with **Next.js**, **TailwindCSS**, **Framer Motion**, and a laser-sharp UI strategy focused on signal, not semantics.

---

## 🔥 Features

### 🎯 Layout & Structure
- Powered by **Next.js App Router**
- Fully component-based (`Hero`, `CyberCard`, `Footer`)
- **Responsive layout** with grid + flex logic
- **Slogan-centric vertical flow** (visually aligned)
- Smooth motion & presence transitions with **Framer Motion**

### 🧠 AI Visualization
- Three dynamically rendered AI modules:
    - `AI Analysis`
    - `Machine Learning`
    - `System Mapping`
- Each card is a **precisely sized (280x160px)** visual block, using AI-generated imagery
- Text rendered directly into the image for consistency and pixel precision

### 🎥 Animated Background
- **Subtle neural resonance animation** via full-screen video (`neuro-bg.mp4`)
- Runs as a `<video>` element behind all content
- 10s loop, fluid motion, optimized for web delivery
- No audio, no distractions — just low-frequency signal drift

```tsx
<div className="absolute inset-0 -z-10 overflow-hidden">
  <video
    autoPlay
    loop
    muted
    playsInline
    className="w-full h-full object-cover opacity-20"
    src="/neuro-bg.mp4"
  />
</div>

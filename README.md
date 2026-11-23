# First Puff 💨🦛🐸🐷🐧

> **Casual physics, top-down river arcade game.**  
> Based on *Fart Together* by GamesMrkt. Single-player, offline-first, mobile/portrait-optimized with MERN stack cloud architecture.

---

## 📖 1. Overview

* **Name**: First Puff
* **Genre**: Casual physics, top-down, arcade
* **Platform**: Mobile & Web (portrait mode optimized for 360×800)
* **Mode**: Single player, fully offline-playable (with optional cloud account & sync)
* **Content**: 10 progressive casual levels
* **Tone**: Funny, cute, colourful, family-friendly
* **Goal**: Steer a wooden raft to the finish flag using only gas power!

### One-line pitch
Four silly animal friends share one raft, and the only way to move is to let one rip at the right moment!

---

## 🐾 2. The Crew

| Crew Member | Raft Position | Pushes Raft Toward | Direction |
| :--- | :--- | :--- | :--- |
| 🦛 **Hippo** | Back | **Forward** | Straight ahead |
| 🐧 **Penguin** | Front | **Backward / Brake** | Slow down & reverse |
| 🐸 **Frog** | Left Side | **Right** | Steer starboard |
| 🐷 **Pig** | Right Side | **Left** | Steer port |

* Tapping a button fires that crew member's gas puff opposite to their seated position.
* Level 1 starts with only Hippo unlocked. Each new crew member is introduced progressively.

---

## 🎮 3. Controls & Physics

* **Tap**: A short, nimble puff for micro-adjustments.
* **Hold**: Charges the gas meter up to 100% for a powerful push on release.
* **Combo Push**: Press two crew buttons simultaneously (e.g. Hippo + Frog pushes forward-right).
* **Cooldown**: ~0.6s refill period shown by a circular progress indicator on each button.
* **Raft Dynamics**:
  * Water surface friction naturally decelerates the raft.
  * Elastic bounce off riverbanks and obstacles with soft screen-shake.
  * Audio synthesis and pitch shifts for each mascot puff.

---

## ⭐ 4. Stars & Scoring System

Every level features a target finish time and bump threshold:

| Rating | Condition |
| :---: | :--- |
| ⭐ | Reach the finish flag |
| ⭐⭐ | Finish within the target time |
| ⭐⭐⭐ | Finish within target time with **2 bumps or fewer** |

---

## 🗺️ 5. All 10 Levels

1. **Level 1: First Puff** — Straight river, teaches forward tapping (Hippo only).
2. **Level 2: Wide River** — Teaches rightward steering (Hippo + Frog).
3. **Level 3: Gentle Curve** — Soft bend to the left (Hippo + Frog + Pig).
4. **Level 4: Charge It** — Long straight stretch teaching hold-to-charge mechanics.
5. **Level 5: Little Rocks** — Static river rocks introducing collision penalties.
6. **Level 6: Zig Zag** — S-shaped winding river curve.
7. **Level 7: Slow Logs** — Dynamic logs drifting horizontally across the current.
8. **Level 8: Brake Time** — Calm lagoon introducing the Penguin brake.
9. **Level 9: Narrow Gate** — Precise gate navigation between stone pillars.
10. **Level 10: Big Finish** — The ultimate course combining rocks, logs, gates, and celebratory confetti!

---

## 🏗️ 6. Tech Stack & Architecture

### Frontend (React + Vite + Tailwind CSS)
* **HTML5 Canvas & 60fps Game Loop**: Ultra-smooth rendering on `requestAnimationFrame`.
* **Mobile-First Layout**: Responsive portrait frame with safe-area spacing.
* **Web Audio API**: Real-time synthesizer generating cartoon puff, pop, and splash sound effects.
* **Offline-First Storage**: Zero account required. All stars, times, and settings persist in `localStorage`.
* **Framer Motion & React Hot Toast**: Polished transitions and feedback.

### Backend (Node.js + Express + MongoDB)
* **Career-Bridge Architecture**: Clean MVC folder structure.
* **Authentication**: JWT token verification, bcrypt password encryption, role-based middleware (`player`, `admin`).
* **Cloud Sync**: Allows players to optionally link an account to synchronize scores across devices and view leaderboards.
* **Password Recovery**: Secure crypto-token reset links with Nodemailer support.

---

## 🚀 7. Running Locally

### Prerequisites
* Node.js (v18+ recommended)
* MongoDB (optional for offline play; required for backend API)

### 1. Clone the repository
```bash
git clone https://github.com/Limbani99/First-Puff-game.git
cd First-Puff-game
```

### 2. Run Frontend
```bash
cd frontend
npm install
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser (switch to mobile view in DevTools for the best experience).

### 3. Run Backend (Optional)
```bash
cd backend
npm install
cp .env.example .env
npm start
```
Server runs at `http://localhost:5000`.

---

## 📜 License
MIT License. Inspired by *Fart Together* by GamesMrkt.

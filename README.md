# React Code Practice

A small collection of tiny React example projects to learn and practice core React concepts. This repository contains two focused apps with simple, well-documented code so you can quickly run, inspect, and modify them:

- `counterApp` — a beginner-friendly counter demo that shows component state, props, and styling.
- `state-lifting-principle-todo` — a small Todo app demonstrating state lifting, component composition, and simple CRUD operations in React.

This README is written to help anyone (beginners to intermediate learners) understand what the projects do, how to run them locally, and where to look in the source for the important ideas.

## Table of Contents

- Project overview
- What you'll learn
- Apps and features
- Prerequisites
- Quick start (run each app)
- Project structure
- How to explore the code (guided pointers)
- Contributing
- License

## What this repo is for

This repository is a study / practice collection: each folder is a minimal React app focused on teaching a single concept or a small group of related concepts. The code is intentionally small and readable so you can trace data flow, component interactions, and minimal styling without being overwhelmed.

## What you'll learn

- How component state works (`useState`) and how to update it.
- Lifting state up to a common parent to share data between siblings.
- Basic component composition and props usage.
- Simple app layout and organizing small React projects.

## Apps and Features

1. counterApp
   - Purpose: Demonstrates component-local state and event handling.
   - Key features:
     - Increment / decrement a counter.
     - Reset to default value.
     - Simple styling (CSS module at `src/App.css`).
   - Where to look:
     - Entry: `counterApp/src/index.js`
     - Main UI: `counterApp/src/App.js`

2. state-lifting-principle-todo
   - Purpose: Demonstrates lifting state up so multiple components share and update the same data.
   - Key features:
     - Add, display, and remove todo items.
     - A small separation of concerns: `NewTodo` (input), `Todo` (single item), `TodoS` (list wrapper), and `Home` (page-level composition).
   - Where to look:
     - Entry: `state-lifting-principle-todo/src/index.js`
     - Components: `state-lifting-principle-todo/src/components/` — `Home.js`, `NewTodo.js`, `Todo.js`, `TodoS.js`

## Prerequisites

- Node.js (LTS recommended). You can check with:

```bash
node --version
npm --version
```

## Quick start — run an app locally

Open a terminal and run these commands for the app you want to try.

1. Run the Counter app

```bash
cd counterApp
npm install
npm start
```

Then open http://localhost:3000 in your browser (Create React App standard port).

2. Run the Todo (state lifting) app

```bash
cd state-lifting-principle-todo
npm install
npm start
```

If both apps use the same port (3000) and you want to run them simultaneously, start one on the default port and start the other on a different port, for example:

```bash
PORT=3001 npm start
```

On Windows PowerShell you can run:

```powershell
$env:PORT=3001; npm start
```

## Project structure (top-level)

- `counterApp/` — small counter demo (React app)
  - `public/` — static HTML and manifest
  - `src/` — source JavaScript and CSS

- `state-lifting-principle-todo/` — small todo app demonstrating state lifting
  - `public/`
  - `src/`
    - `components/` — `Home.js`, `NewTodo.js`, `Todo.js`, `TodoS.js`

## How to explore the code (guided pointers)

- Start at the app's `src/index.js` to see how React is bootstrapped and which top-level component mounts.
- Open the top component (`App.js` or `Home.js`) to observe the main state and how it's passed down as props.
- For the todo app, identify where the todo array is stored and which component contains the functions that mutate it — that demonstrates the "lifting state up" pattern.
- Try making a tiny change (e.g., add a console.log in an event handler) and see how changes reflect in the browser with hot reload.

## Common tasks

- Add a new dependency

```bash
cd <appFolder>
npm install <package>
```

- Build for production

```bash
cd <appFolder>
npm run build
```

## Contributing

This repo is intentionally small and educational. If you want to improve explanations, add inline comments to components, or suggest new tiny example apps, please open an issue or submit a pull request. Keep changes focused and explain the learning goal in the PR description.

## License

This repository does not include a formal license file. If you plan to reuse or redistribute code, please add a LICENSE or ask the maintainer for permission.

---
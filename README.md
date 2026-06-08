# Saytica Eval Console

Saytica Eval Console is a small Next.js dashboard for viewing model evaluation results and managing task progress.

## How It Works

The app starts on the home page. From there, the screen is split into two main options:

- Left side: Leaderboard
- Right side: Task Board

Clicking either option opens the related page.

## Leaderboard

The Leaderboard page shows model evaluation data in a reusable table.

It displays:

- Model name
- Provider
- Accuracy
- Latency
- Cost
- Evaluation date

The table supports searching and sorting, so users can quickly compare models.

The Leaderboard page uses the DaisyUI `cyberpunk` theme.

## Task Board

The Task Board page shows task data for clients and annotators.

It has two tables:

- Client table
- Annotator table

Each table uses the same reusable table component.

The Client table can be filtered by client ID using the dropdown.

The Annotator table can be filtered by annotator using the dropdown.

Annotators can update task status from:

- Pending
- In Progress
- Done

When the annotator changes a task status, the client table sees the update immediately because both tables use the same task state.

The Task Board page uses the DaisyUI `garden` theme.


## Run The App

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Then open:

```txt
http://localhost:3000
```

## Build

Run a production build:

```bash
npm run build
```

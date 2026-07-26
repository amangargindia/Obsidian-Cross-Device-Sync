[[Singular-Goal progression]]
[[Singular Goal Progression app done - Final pondering]]

# Prompt

I want to make a Singular Goal Progressinon time tracker. 
The idea of singular goal progression is that I work on one thing, get it done, then move on to other things.

This is is for a PWA fully offline and cross device synced that we are building.

The main idea is that there are projects that I can create and then decide how am I gonna measure the progress using custom fields (say for the accent learning I decided that I will track it using pages of the course book read) - then everyday I enter the data in.
It further has a to-do list for each projects, and a time tracker for each to-do entered. You can choose the custom categories that the said task falls under (say, studying - making notes etc)
You can start a stopwatch or start a pomodoro with custom time and breaks - it should play melody when it is done without any miss.
There should be an option to add any missing entry that I forgot to record, and edit existing one.
The timer should be robust - recording start time as well; and not reset or stop when the tab is out of focus.

The Category that I track time for is shown as that in stats in project stats, and I can choose for it to show task based time data as well. The time spent should also be shown in tasks - as to how much time did I spend on said task. 
When you go into project stats you can see the aforementioned category and task based time-spend on that specific project only.
When you go into general stats, you can see the time spent across all the projects.
Both the stats should have daily, weekly, monthly, yearly, and all time tabs with comparisons from past days/weekly/monthly/yearly/all time and its average aswell.

The storage should be robust, and prefarrebly, it should be saved on device in real folders that I can see in file manager independent of the site. Please let me know if we can explore such things.

It should be super reliable. 


# Process

A fully offline-capable, local-first PWA for tracking one goal at a time, with a robust time tracker, Pomodoro/stopwatch, custom progress fields, and rich statistics.

---

## User Review Required

> [!IMPORTANT]
> **Cross-Device Sync — You Need to Choose a Strategy**
>
> There is no single "magic" way to sync between devices without some coordination point. Here are the practical options, ranked by effort vs. capability:
>
> | Option | How it works | Cross-device sync | Real files visible in Explorer | Effort |
> |--------|-------------|-------------------|-------------------------------|--------|
> | **A — IndexedDB + Manual JSON Export/Import** | All data stored locally in IndexedDB. You can export a `.json` snapshot file at any time and import it on another device. | Manual (copy file) | Export only | ⭐ Lowest |
> | **B — File System Access API + Auto-save to real folder (Recommended)** | On first run, you pick a folder (e.g., OneDrive, Google Drive, Dropbox). The app saves a `singular-goal-data.json` file there. On any device, point the app at that same synced folder. Changes are saved live. | ✅ Via your existing cloud drive | ✅ Yes — live JSON in any folder | ⭐⭐ Medium |
> | **C — Dexie.js (IndexedDB) + optional peer-to-peer WebRTC sync** | Robust local DB with real-time P2P sync when both devices are open. No server needed, but both devices must be online simultaneously. | ✅ P2P only when both online | ❌ No | ⭐⭐⭐ High |
> | **D — Firebase / Supabase backend** | Free-tier cloud DB. Fully automatic, real-time sync across all devices. | ✅ Seamless, real-time | ❌ No (cloud, not local files) | ⭐⭐ Medium |
>
> **My recommendation is Option B**: Save to a real folder you choose (like a OneDrive/Google Drive folder). This gives you: real files you can see, automatic cloud sync through your existing drive, full offline capability, zero server costs, and a human-readable JSON backup. It works in Chrome/Edge on desktop and Android.

> [!WARNING]
> **Timer Background Behavior**
>
> Browsers throttle JavaScript timers when the tab is backgrounded. The plan below handles this robustly:
> - The timer records the **absolute start timestamp** (not just elapsed time)
> - On every tick, elapsed time is computed as `Date.now() - startTimestamp`, which is immune to throttling
> - On tab restore, the timer instantly catches up to the correct time
> - The app also uses a **Page Visibility API** listener to detect tab restores and reconcile any drift
> - For Pomodoro completion: when the tab is in focus, the Web Audio API plays a melody directly. If the tab has been hidden, a **browser notification** (which the Service Worker handles) fires the alert — so you never miss it regardless of tab state.

---

## Open Questions

> [!IMPORTANT]
> **Please review and answer these before I start building:**
>
> 1. **Storage strategy**: Which option (A, B, C, or D) do you want? I recommend **Option B** (real folder via cloud drive). 
> 2. **Framework**: This is a complex app. I recommend building it as a **Vite + vanilla JS** PWA (no heavy framework) for maximum performance and offline reliability. Alternatively, I can use **React + Vite** for easier component management. Your preference?
> 3. **Color theme**: Dark mode with what accent color? (e.g. deep violet, teal, amber, indigo+gold?)
> 4. **Progress field types**: What types of custom fields should be supported? I'm planning: `number` (e.g. pages), `percentage`, `checkbox`, `duration` (e.g. practice minutes), and `rating` (1–5 stars). Are there others you need?
> 5. **Pomodoro melody**: Should I use a synthesized chime/bell (Web Audio API, no file needed), or would you like to pick from preset melodies?

---

## Proposed Architecture

### Tech Stack
- **Framework**: Vite + Vanilla JS (zero runtime overhead, fast, installable PWA)
- **Storage**: `Dexie.js` wrapping IndexedDB (fast, reliable, queryable) + **File System Access API** for optional real-folder export/sync
- **Routing**: Simple hash-based SPA router (no library needed)
- **Charts/Stats**: `Chart.js` (lightweight, offline-capable)
- **Audio**: Web Audio API (synthesized melodies, no audio files needed)
- **Service Worker**: Workbox-generated, full offline cache + background notification support
- **Timer**: Timestamp-anchored (start time stored in IndexedDB, elapsed = `now - start`)

---

## Data Model

```
Project {
  id, name, description, color, icon,
  customFields: [{ id, name, type, unit }],  // e.g. {name:"Pages Read", type:"number", unit:"pages"}
  categories: [{ id, name, color }],          // e.g. "Studying", "Note-taking"
  createdAt, isArchived
}

ProgressEntry {
  id, projectId, date,
  fieldValues: { [fieldId]: value },
  notes,
  createdAt, updatedAt
}

Task {
  id, projectId, title, description,
  categoryId, isCompleted,
  totalTimeMs,         // computed from sessions
  createdAt, completedAt
}

TimeSession {
  id, taskId, projectId, categoryId,
  startTime,          // absolute ISO timestamp — THE source of truth
  endTime,            // set when stopped
  durationMs,         // computed = endTime - startTime
  type: 'stopwatch'|'pomodoro',
  isRunning: boolean,
  notes
}

TimerState {          // single live record — what's currently running
  sessionId, startTime, type,
  pomodoroConfig: { workMs, shortBreakMs, longBreakMs, cyclesBeforeLong }
}
```

---

## Proposed Changes

### Component Breakdown

---

#### App Shell & Routing
- **[NEW]** `index.html` — PWA shell, manifest link, viewport, theme-color
- **[NEW]** `manifest.json` — PWA manifest (name, icons, display, start_url)
- **[NEW]** `src/router.js` — Hash-based SPA router

---

#### Core Storage Layer
- **[NEW]** `src/db/database.js` — Dexie.js schema, migrations, all CRUD operations
- **[NEW]** `src/db/fileSync.js` — File System Access API: pick folder, auto-save JSON, load from file
- **[NEW]** `src/db/exportImport.js` — Manual JSON export/import fallback

---

#### Timer Engine (most critical)
- **[NEW]** `src/timer/timerEngine.js` — Timestamp-anchored timer, Page Visibility API reconciliation, Pomodoro state machine
- **[NEW]** `src/timer/audioEngine.js` — Web Audio API synthesizer, 3 preset melodies (chime, bell, ding), plays on focus; triggers notification when backgrounded
- **[NEW]** `src/timer/pomodoroManager.js` — Work/break cycle logic, auto-advance, cycle count

---

#### Service Worker
- **[NEW]** `sw.js` — Workbox offline cache + push notification handler for timer completion

---

#### Pages / Views
- **[NEW]** `src/pages/Dashboard.js` — Active project, running timer, quick-add task, today's progress snapshot
- **[NEW]** `src/pages/Projects.js` — Project list, create/edit/archive project
- **[NEW]** `src/pages/ProjectDetail.js` — Project overview: progress chart, tasks, time log
- **[NEW]** `src/pages/ProgressEntry.js` — Daily entry form (custom fields), add past entries, edit existing
- **[NEW]** `src/pages/Tasks.js` — Task list for a project, add/edit/complete tasks, time shown per task
- **[NEW]** `src/pages/Timer.js` — Main timer page: stopwatch + pomodoro, category selector, task selector, live display
- **[NEW]** `src/pages/ProjectStats.js` — Stats for one project: category time, task time, progress over time
- **[NEW]** `src/pages/GlobalStats.js` — Stats across all projects: same breakdowns aggregated

---

#### Components
- **[NEW]** `src/components/TimerDisplay.js` — Large live timer with ring/progress visual
- **[NEW]** `src/components/PomodoroConfig.js` — Work/break time inputs, cycle config
- **[NEW]** `src/components/StatsChart.js` — Reusable Chart.js wrapper (bar, line, donut)
- **[NEW]** `src/components/DateRangeTabs.js` — Daily/Weekly/Monthly/Yearly/All-Time tabs with comparison display
- **[NEW]** `src/components/ProgressFieldEditor.js` — Add/edit custom fields on a project
- **[NEW]** `src/components/CategoryManager.js` — Add/edit/delete categories per project
- **[NEW]** `src/components/TaskCard.js` — Task with time spent, category badge, complete button
- **[NEW]** `src/components/Modal.js` — Generic modal for forms/confirmations
- **[NEW]** `src/components/Navbar.js` — Bottom nav (mobile) + side nav (desktop)

---

#### Styles
- **[NEW]** `src/styles/tokens.css` — Design tokens (colors, spacing, typography, shadows)
- **[NEW]** `src/styles/global.css` — Base resets, typography, scrollbars
- **[NEW]** `src/styles/components.css` — Reusable component styles

---

## Key Features Detail

### Timer Robustness
1. On `startTimer()`: save `{ sessionId, startTime: Date.now() }` to IndexedDB immediately
2. Display tick: `setInterval(() => display(Date.now() - startTime), 100)` — 100ms precision
3. On `document.addEventListener('visibilitychange')`: if becoming visible, recalculate elapsed from stored `startTime` (catches any tab throttling)
4. On Pomodoro completion: if tab is visible → play Web Audio melody; if hidden → `self.registration.showNotification()` via SW

### Stats Comparisons
Each time range shows:
- **Current period** value
- **Previous period** value with `+X% / -X%` delta
- **Average** across all recorded periods of that type
- Sparkline/mini chart of recent history

### File Sync (Option B)
1. First run: prompt user to pick a sync folder (`showDirectoryPicker`)
2. On every data change: write `singular-goal-data.json` to that folder (debounced 2s)
3. On app start: read from that file and merge with local IndexedDB (last-write-wins per record by `updatedAt`)
4. User can re-pick folder anytime from settings

---

## Verification Plan

### Automated
- `npm run build` must succeed with zero errors
- `npm run preview` must serve the app correctly

### Manual Verification
- Install as PWA (Chrome → "Install app")
- Start a timer, switch tabs, come back — timer must be accurate
- Start a Pomodoro, background the tab, wait for completion — notification must fire
- Create project with custom fields, enter daily data, edit past entry
- Check stats page shows correct time totals per category/task
- Verify data persists after full browser close/reopen
- Test file sync by saving to a folder and re-loading


05-07-2026
12:13

# Improvements needed
- [x] It should ask which Habit/Task I am working for before starting the timer. It should not start without having any assosiated task/habit attached. ✅ 2026-07-05
- [x] When Logging progress, after a habit has been chosen, it should only show the fields related to that habit - like only the pages read should show up for Read book habit as it has been set. Rn it shows other fields aswell which are not related anywhich way to the progress logging of said habit and hence will be a waste data. ✅ 2026-07-05
- [x] Total progress including for 30th and 5th is 36 percent, but the habit section only seems to show the progress of today. We can divide it: Progress done today, and total progress ✅ 2026-07-05
- [x] Allow to see logs of the progress from the habit itself - currently you have to go to Breakdown and then Progress ✅ 2026-07-05
- [x] The Progress view in Breakdown tab shows the progress for the day, it should also show the Habit that action is assosiated to - remember, habits and progress are inseparable parts of each other. ✅ 2026-07-05
- [x] Clicking the History button in Timer should send me to Session section of Breakdown tab ✅ 2026-07-05
- [x] Main principle is to only have one active project, so make it impossible to have two active projects.
- [ ] Make the active project more prominent since it does not needs to save space for others to appear. 
- [x] The edit button in listings in sessions section of breakdown tab does not works- clicking edit does nothing. ✅ 2026-07-05
- [x] I did chose a habit before starting the timer but when the timer started, it removed the selection and kept it as non selected anything.` ✅ 2026-07-05
- [x] The Pomadoro should show countdown - and not count up ✅ 2026-07-05
- [x] The progress section should show chart for each progress metric to show the progress done throughout the days. I can disable the chart for some progresses in thier edit settings if they do not need it. ✅ 2026-07-05
- [x] Say if i have a task "hi" assosiated to the habit "Read anki". When I start the timer, the timer should show that I am working for the hi task and Read anki should show up in its habit section - fetching that from the task which has the data already as to which habit it is under. ✅ 2026-07-05
- [x] Remove the project selector from the timer screen since we will only let there be one active project, so the active project should be the only project availabel to track the time of. ✅ 2026-07-05
	- [x] In the habits section in main tab (tasks) make it show total time spent on this specific habit till now and today ✅ 2026-07-05
- [x] The time graph does not updates whatsoever in Time section in breakdown tab ✅ 2026-07-05
- [x] Just like I can add notes while adding the entry manually, allow me to add note while ending a timer or pomodoro so I can record what exactly was achieved ✅ 2026-07-05
- [x] It is july 5th today, it is showing july 4th. Please fix it, and have it use IST. Make sure all systems work that are interconnected to this. ✅ 2026-07-05
	- [ ] The completed tasks should be sorted by newest first; and they should be listed by date - to see the tasks compelted in a specific day. Also make them a bit more visible, rn they just becoem almost invisible when done
- [x] This task had a habit attached to it. But when I started the timer having selected this task, the habit did not get filled in the habit field. ✅ 2026-07-05
- [x] In charts like as time etc, it should show comparison to previous day and day before that and average - when day is selected, previous week and week before  and the average that when week is selsected, and so on for month ✅ 2026-07-05
- [ ] The habits should also show total time spent on it and time spent today
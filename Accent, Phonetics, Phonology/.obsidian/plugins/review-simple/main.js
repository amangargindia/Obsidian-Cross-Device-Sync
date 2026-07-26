"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/main.ts
var main_exports = {};
__export(main_exports, {
  default: () => ReviewPlugin
});
module.exports = __toCommonJS(main_exports);
var import_obsidian4 = require("obsidian");

// src/settings.ts
var import_obsidian = require("obsidian");

// src/interval.ts
function parsePositiveDayCount(value) {
  if (typeof value === "number") {
    return Number.isSafeInteger(value) && value > 0 ? value : null;
  }
  if (typeof value !== "string") return null;
  const trimmed = value.trim();
  if (!/^\d+$/.test(trimmed)) return null;
  const n = Number(trimmed);
  return Number.isSafeInteger(n) && n > 0 ? n : null;
}

// src/folderRules.ts
function normalizeFolderPath(path) {
  return path.trim().replace(/\\/g, "/").replace(/\/+/g, "/").replace(/^\/+|\/+$/g, "");
}
function migrateFolderPath(folderPath, oldFolderPath, newFolderPath) {
  if (folderPath === oldFolderPath) return newFolderPath;
  const oldPrefix = oldFolderPath + "/";
  if (folderPath.startsWith(oldPrefix)) {
    return newFolderPath + "/" + folderPath.slice(oldPrefix.length);
  }
  return folderPath;
}
function dedupeFolderList(paths) {
  const seen = /* @__PURE__ */ new Set();
  const deduped = [];
  let changed = false;
  for (const path of paths) {
    const normalized = normalizeFolderPath(path);
    if (!normalized || seen.has(normalized)) {
      changed = true;
      continue;
    }
    if (normalized !== path) changed = true;
    seen.add(normalized);
    deduped.push(normalized);
  }
  return { paths: deduped, changed };
}
function dedupeFolderIntervals(rules) {
  const seen = /* @__PURE__ */ new Set();
  const deduped = [];
  let changed = false;
  for (const rule of rules) {
    const folder = normalizeFolderPath(rule.folder);
    if (!folder || seen.has(folder)) {
      changed = true;
      continue;
    }
    if (folder !== rule.folder) changed = true;
    seen.add(folder);
    deduped.push(folder === rule.folder ? rule : { ...rule, folder });
  }
  return { rules: deduped, changed };
}
function normalizeFolderReviewRules(settings) {
  const excludedFolders = dedupeFolderList(settings.excludedFolders);
  const includedFolders = dedupeFolderList(settings.includedFolders);
  const folderIntervals = dedupeFolderIntervals(settings.folderIntervals);
  const changed = excludedFolders.changed || includedFolders.changed || folderIntervals.changed;
  if (!changed) return false;
  settings.excludedFolders = excludedFolders.paths;
  settings.includedFolders = includedFolders.paths;
  settings.folderIntervals = folderIntervals.rules;
  return true;
}
function migrateRenamedFolderReviewRules(settings, oldPath, newPath) {
  const oldFolderPath = normalizeFolderPath(oldPath);
  const newFolderPath = normalizeFolderPath(newPath);
  if (!oldFolderPath || !newFolderPath || oldFolderPath === newFolderPath) {
    return false;
  }
  let changed = false;
  const migrate = (folderPath) => {
    const migrated = migrateFolderPath(
      normalizeFolderPath(folderPath),
      oldFolderPath,
      newFolderPath
    );
    if (migrated !== folderPath) changed = true;
    return migrated;
  };
  const excludedFolders = settings.excludedFolders.map(migrate);
  const includedFolders = settings.includedFolders.map(migrate);
  const folderIntervals = settings.folderIntervals.map((rule) => {
    const folder = migrate(rule.folder);
    return folder === rule.folder ? rule : { ...rule, folder };
  });
  if (!changed) return false;
  settings.excludedFolders = excludedFolders;
  settings.includedFolders = includedFolders;
  settings.folderIntervals = folderIntervals;
  normalizeFolderReviewRules(settings);
  return true;
}

// src/frontmatterKey.ts
function isValidFrontmatterKey(value) {
  const trimmed = value.trim();
  if (!/^[A-Za-z0-9_-]+$/.test(trimmed)) return false;
  return !["__proto__", "constructor", "prototype"].includes(trimmed);
}

// src/settings.ts
var DEFAULT_SETTINGS = {
  globalIntervalDays: 45,
  folderFilterMode: "excluded",
  excludedFolders: [],
  includedFolders: [],
  folderIntervals: [],
  showReviewStatus: true,
  showDueCounter: true,
  showRibbonIcon: false,
  frontmatterIntervalKey: "review_interval",
  frontmatterReviewedKey: "reviewed"
};
function isRecord(value) {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}
function asPositiveDayCount(value, fallback) {
  var _a;
  return (_a = parsePositiveDayCount(value)) != null ? _a : fallback;
}
function asBoolean(value, fallback) {
  return typeof value === "boolean" ? value : fallback;
}
function asNonEmptyString(value, fallback) {
  if (typeof value !== "string") return fallback;
  const trimmed = value.trim();
  return trimmed ? trimmed : fallback;
}
function asFrontmatterKey(value, fallback) {
  if (typeof value !== "string") return fallback;
  const trimmed = value.trim();
  return isValidFrontmatterKey(trimmed) ? trimmed : fallback;
}
function asFolderFilterMode(value) {
  return value === "included" || value === "excluded" ? value : DEFAULT_SETTINGS.folderFilterMode;
}
function asPathList(value) {
  if (!Array.isArray(value)) return [];
  return value.filter((item) => typeof item === "string").map((item) => item.trim()).filter(Boolean).map((item) => (0, import_obsidian.normalizePath)(item));
}
function asFolderIntervals(value) {
  if (!Array.isArray(value)) return [];
  return value.flatMap((item) => {
    if (!isRecord(item)) return [];
    const folder = asNonEmptyString(item.folder, "");
    const days = parsePositiveDayCount(item.days);
    if (!folder || days === null) return [];
    return [{ folder: (0, import_obsidian.normalizePath)(folder), days }];
  });
}
function loadReviewSettings(data) {
  const raw = isRecord(data) ? data : {};
  const settings = {
    globalIntervalDays: asPositiveDayCount(
      raw.globalIntervalDays,
      DEFAULT_SETTINGS.globalIntervalDays
    ),
    folderFilterMode: asFolderFilterMode(raw.folderFilterMode),
    excludedFolders: asPathList(raw.excludedFolders),
    includedFolders: asPathList(raw.includedFolders),
    folderIntervals: asFolderIntervals(raw.folderIntervals),
    showReviewStatus: asBoolean(
      raw.showReviewStatus,
      DEFAULT_SETTINGS.showReviewStatus
    ),
    showDueCounter: asBoolean(
      raw.showDueCounter,
      DEFAULT_SETTINGS.showDueCounter
    ),
    showRibbonIcon: asBoolean(
      raw.showRibbonIcon,
      DEFAULT_SETTINGS.showRibbonIcon
    ),
    frontmatterIntervalKey: asFrontmatterKey(
      raw.frontmatterIntervalKey,
      DEFAULT_SETTINGS.frontmatterIntervalKey
    ),
    frontmatterReviewedKey: asFrontmatterKey(
      raw.frontmatterReviewedKey,
      DEFAULT_SETTINGS.frontmatterReviewedKey
    )
  };
  normalizeFolderReviewRules(settings);
  return settings;
}
var ReviewSettingTab = class extends import_obsidian.PluginSettingTab {
  constructor(app, plugin) {
    super(app, plugin);
    this.refreshTimeout = null;
    this.saveTimeout = null;
    this.plugin = plugin;
  }
  refreshReviewState() {
    if (this.refreshTimeout !== null) {
      window.clearTimeout(this.refreshTimeout);
      this.refreshTimeout = null;
    }
    this.plugin.refreshReviewState();
  }
  scheduleReviewStateRefresh() {
    if (this.refreshTimeout !== null) {
      window.clearTimeout(this.refreshTimeout);
    }
    this.refreshTimeout = window.setTimeout(() => {
      this.refreshTimeout = null;
      this.plugin.refreshReviewState();
    }, 500);
  }
  async saveSettingsNow() {
    try {
      await this.plugin.saveSettings();
    } catch (e) {
      console.error("Failed to save review settings:", e);
    }
  }
  scheduleSettingsSave() {
    if (this.saveTimeout !== null) {
      window.clearTimeout(this.saveTimeout);
    }
    this.saveTimeout = window.setTimeout(() => {
      this.saveTimeout = null;
      void this.saveSettingsNow();
    }, 500);
  }
  dispose() {
    if (this.refreshTimeout !== null) {
      window.clearTimeout(this.refreshTimeout);
      this.refreshTimeout = null;
    }
    if (this.saveTimeout !== null) {
      window.clearTimeout(this.saveTimeout);
      this.saveTimeout = null;
      void this.saveSettingsNow();
    }
  }
  refresh() {
    this.render();
  }
  display() {
    this.render();
  }
  render() {
    const { containerEl } = this;
    containerEl.empty();
    new import_obsidian.Setting(containerEl).setName("Global review interval").setDesc(
      "Default number of days for reviewed notes without a per-note or folder interval."
    ).addText(
      (text) => text.setPlaceholder("45").setValue(String(this.plugin.settings.globalIntervalDays)).onChange(async (value) => {
        const n = parsePositiveDayCount(value);
        if (n !== null) {
          this.plugin.settings.globalIntervalDays = n;
          await this.plugin.saveSettings();
          this.refreshReviewState();
        }
      })
    );
    new import_obsidian.Setting(containerEl).setName("Excluded / included folders").setDesc(
      createFragment((el) => {
        el.appendText("OFF \u2014 listed folders are excluded by default.");
        el.createEl("br");
        el.appendText(
          "ON \u2014 only listed folders are reviewed by default. Per-note intervals can still include individual notes."
        );
      })
    ).addToggle(
      (toggle) => toggle.setValue(this.plugin.settings.folderFilterMode === "included").onChange(async (value) => {
        this.plugin.settings.folderFilterMode = value ? "included" : "excluded";
        await this.plugin.saveSettings();
        this.refreshReviewState();
        this.refresh();
      })
    );
    const isIncluded = this.plugin.settings.folderFilterMode === "included";
    new import_obsidian.Setting(containerEl).setName(isIncluded ? "Global included folders" : "Global excluded folders").setDesc("One path per line, relative to vault root. Per-note intervals override this list.").addTextArea((text) => {
      const currentList = isIncluded ? this.plugin.settings.includedFolders : this.plugin.settings.excludedFolders;
      text.setPlaceholder(
        isIncluded ? "Notes\nJournal" : "Templates\nAttachments\nArchive"
      ).setValue(currentList.join("\n")).onChange((value) => {
        const parsed = value.split("\n").map((s) => s.trim()).filter(Boolean).map((s) => (0, import_obsidian.normalizePath)(s));
        if (isIncluded) {
          this.plugin.settings.includedFolders = parsed;
        } else {
          this.plugin.settings.excludedFolders = parsed;
        }
        normalizeFolderReviewRules(this.plugin.settings);
        this.scheduleSettingsSave();
        this.scheduleReviewStateRefresh();
      });
      text.inputEl.rows = 5;
      text.inputEl.addClass("review-settings-textarea");
    });
    new import_obsidian.Setting(containerEl).setName("Folder-specific intervals").setDesc(
      'Custom review intervals per folder. Format: "folder/path,days" \u2014 one rule per line. Uses longest matching path when rules overlap. Example: Daily Notes,90'
    ).addTextArea((text) => {
      text.setPlaceholder("Notes,90\nprojects/portfolio,30").setValue(
        this.plugin.settings.folderIntervals.map((r) => `${r.folder},${r.days}`).join("\n")
      ).onChange((value) => {
        this.plugin.settings.folderIntervals = value.split("\n").map((line) => line.trim()).filter(Boolean).flatMap((line) => {
          const idx = line.lastIndexOf(",");
          if (idx < 1) return [];
          const folder = line.slice(0, idx).trim();
          const days = parsePositiveDayCount(line.slice(idx + 1));
          if (!folder || days === null) return [];
          return [{ folder: (0, import_obsidian.normalizePath)(folder), days }];
        });
        normalizeFolderReviewRules(this.plugin.settings);
        this.scheduleSettingsSave();
        this.scheduleReviewStateRefresh();
      });
      text.inputEl.rows = 5;
      text.inputEl.addClass("review-settings-textarea");
    });
    new import_obsidian.Setting(containerEl).setName("UI").setHeading();
    new import_obsidian.Setting(containerEl).setName("Review status in status bar").setDesc(
      "Shows per-file review indicator (last review date / due / not reviewed) for the active note."
    ).addToggle(
      (toggle) => toggle.setValue(this.plugin.settings.showReviewStatus).onChange(async (value) => {
        this.plugin.settings.showReviewStatus = value;
        await this.plugin.saveSettings();
        this.refreshReviewState();
      })
    );
    new import_obsidian.Setting(containerEl).setName("Due counter in status bar").setDesc(
      "Shows total count of notes due for review across vault, next to the current-note indicator."
    ).addToggle(
      (toggle) => toggle.setValue(this.plugin.settings.showDueCounter).onChange(async (value) => {
        this.plugin.settings.showDueCounter = value;
        await this.plugin.saveSettings();
        this.refreshReviewState();
      })
    );
    new import_obsidian.Setting(containerEl).setName("Ribbon icon").setDesc("Adds a left ribbon button that opens a random note due for review.").addToggle(
      (toggle) => toggle.setValue(this.plugin.settings.showRibbonIcon).onChange(async (value) => {
        this.plugin.settings.showRibbonIcon = value;
        await this.plugin.saveSettings();
        this.plugin.updateRibbonIcon();
      })
    );
    new import_obsidian.Setting(containerEl).setName("Advanced").setHeading();
    new import_obsidian.Setting(containerEl).setName("Frontmatter interval key").setDesc(
      'Frontmatter field for per-note interval override. Set to a number (days) to include the note, or "never" to exclude it.'
    ).addText(
      (text) => text.setValue(this.plugin.settings.frontmatterIntervalKey).onChange(async (value) => {
        const v = value.trim();
        if (isValidFrontmatterKey(v)) {
          this.plugin.settings.frontmatterIntervalKey = v;
          await this.plugin.saveSettings();
          this.refreshReviewState();
        }
      })
    );
    new import_obsidian.Setting(containerEl).setName("Frontmatter reviewed key").setDesc("Frontmatter field where the last review date is stored.").addText(
      (text) => text.setValue(this.plugin.settings.frontmatterReviewedKey).onChange(async (value) => {
        const v = value.trim();
        if (isValidFrontmatterKey(v)) {
          this.plugin.settings.frontmatterReviewedKey = v;
          await this.plugin.saveSettings();
          this.refreshReviewState();
        }
      })
    );
  }
};

// src/statusbar.ts
var import_obsidian3 = require("obsidian");

// src/review.ts
var DAY_MS = 24 * 60 * 60 * 1e3;
var NEVER_REVIEWED_RANDOM_SCORE = 1.5;
function pad2(value) {
  return String(value).padStart(2, "0");
}
function formatReviewDay(year, month, day) {
  return `${year}-${pad2(month)}-${pad2(day)}`;
}
function reviewDayFromParts(year, month, day) {
  const date = new Date(Date.UTC(year, month - 1, day));
  if (date.getUTCFullYear() !== year || date.getUTCMonth() !== month - 1 || date.getUTCDate() !== day) {
    return null;
  }
  return formatReviewDay(year, month, day);
}
function reviewDayFromDate(date) {
  if (isNaN(date.getTime())) return null;
  return formatReviewDay(
    date.getUTCFullYear(),
    date.getUTCMonth() + 1,
    date.getUTCDate()
  );
}
function localDayKey(date) {
  return formatReviewDay(date.getFullYear(), date.getMonth() + 1, date.getDate());
}
function parseDateOnly(value) {
  const match = /^(\d{4})-(\d{2})-(\d{2})$/.exec(value);
  if (!match) return void 0;
  const year = Number(match[1]);
  const month = Number(match[2]);
  const day = Number(match[3]);
  return reviewDayFromParts(year, month, day);
}
function parseLeadingReviewDay(value) {
  const match = /^(\d{4}-\d{2}-\d{2})(?:[T\s].*)?$/.exec(value.trim());
  if (!match) return void 0;
  return parseDateOnly(match[1]);
}
function parseReviewDay(value) {
  if (!value) return null;
  if (typeof value === "string") {
    const parsed = parseLeadingReviewDay(value);
    return parsed === void 0 ? null : parsed;
  }
  if (value instanceof Date) return reviewDayFromDate(value);
  if (typeof value === "number" && Number.isFinite(value)) {
    return reviewDayFromDate(new Date(value));
  }
  return null;
}
function getFrontmatter(file, app) {
  var _a, _b;
  return (_b = (_a = app.metadataCache.getFileCache(file)) == null ? void 0 : _a.frontmatter) != null ? _b : {};
}
function getRandomIndex(length, random) {
  const value = random();
  if (value <= 0) return 0;
  if (value >= 1) return length - 1;
  return Math.floor(value * length);
}
function getOverdueRatioScore(lastReviewedDay, intervalDays, now = /* @__PURE__ */ new Date()) {
  if (!lastReviewedDay) return NEVER_REVIEWED_RANDOM_SCORE;
  return getCalendarDaysSince(lastReviewedDay, now) / intervalDays;
}
function getCalendarDaysSince(lastReviewedDay, now = /* @__PURE__ */ new Date()) {
  const parsed = parseDateOnly(lastReviewedDay);
  if (!parsed) return 0;
  const [year, month, day] = parsed.split("-").map(Number);
  const reviewedDay = Date.UTC(year, month - 1, day);
  const nowDay = Date.UTC(now.getFullYear(), now.getMonth(), now.getDate());
  return Math.max(0, Math.floor((nowDay - reviewedDay) / DAY_MS));
}
function pickTournamentWinner(items, getScore, random = Math.random) {
  if (items.length === 0) return null;
  if (items.length === 1) return items[0];
  const firstIndex = getRandomIndex(items.length, random);
  let secondIndex = getRandomIndex(items.length - 1, random);
  if (secondIndex >= firstIndex) secondIndex += 1;
  const first = items[firstIndex];
  const second = items[secondIndex];
  return getScore(second) > getScore(first) ? second : first;
}
function isExcluded(file, settings) {
  const list = settings.folderFilterMode === "included" ? settings.includedFolders : settings.excludedFolders;
  const inList = list.some((folder) => file.path.startsWith(folder + "/"));
  return settings.folderFilterMode === "included" ? !inList : inList;
}
function getLocalInterval(file, app, settings) {
  const fm = getFrontmatter(file, app);
  const val = fm[settings.frontmatterIntervalKey];
  if (typeof val === "string" && val.trim().toLowerCase() === "never") {
    return "never";
  }
  return parsePositiveDayCount(val);
}
function getFolderInterval(file, settings) {
  let best = null;
  for (const rule of settings.folderIntervals) {
    if (file.path.startsWith(rule.folder + "/")) {
      if (!best || rule.folder.length > best.folder.length) {
        best = rule;
      }
    }
  }
  return best ? best.days : null;
}
function getEffectiveInterval(file, app, settings) {
  const local = getLocalInterval(file, app, settings);
  if (local === "never") return null;
  if (typeof local === "number") return local;
  if (isExcluded(file, settings)) return null;
  const folderInterval = getFolderInterval(file, settings);
  if (folderInterval !== null) return folderInterval;
  return settings.globalIntervalDays;
}
function getLastReviewedDay(file, app, settings, overrides) {
  const override = overrides == null ? void 0 : overrides.getReviewedDayOverride(file);
  if (override) return override;
  const fm = getFrontmatter(file, app);
  return parseReviewDay(fm[settings.frontmatterReviewedKey]);
}
function isDue(file, app, settings, now = /* @__PURE__ */ new Date(), overrides) {
  const interval = getEffectiveInterval(file, app, settings);
  if (interval === null) return false;
  const lastReviewedDay = getLastReviewedDay(file, app, settings, overrides);
  if (!lastReviewedDay) return true;
  return getCalendarDaysSince(lastReviewedDay, now) >= interval;
}
function getReviewableFiles(app, settings) {
  return app.vault.getMarkdownFiles().filter((f) => {
    const local = getLocalInterval(f, app, settings);
    if (local === "never") return false;
    if (typeof local === "number") return true;
    if (isExcluded(f, settings)) return false;
    return true;
  });
}
function getDueFiles(app, settings, now = /* @__PURE__ */ new Date(), overrides) {
  return getReviewableFiles(app, settings).filter(
    (f) => isDue(f, app, settings, now, overrides)
  );
}
function pickRandomDue(app, settings, random = Math.random, overrides) {
  const now = /* @__PURE__ */ new Date();
  const due = getDueFiles(app, settings, now, overrides);
  return pickTournamentWinner(
    due,
    (file) => {
      const interval = getEffectiveInterval(file, app, settings);
      if (interval === null) return Number.NEGATIVE_INFINITY;
      return getOverdueRatioScore(
        getLastReviewedDay(file, app, settings, overrides),
        interval,
        now
      );
    },
    random
  );
}
var DueCounterCache = class {
  constructor(app, getSettings, overrides) {
    this.entriesByPath = /* @__PURE__ */ new Map();
    this.dirtyFilesByPath = /* @__PURE__ */ new Map();
    this.dueCount = null;
    this.countedDay = null;
    this.app = app;
    this.getSettings = getSettings;
    this.overrides = overrides;
  }
  invalidateAll() {
    this.entriesByPath.clear();
    this.dirtyFilesByPath.clear();
    this.dueCount = null;
    this.countedDay = null;
  }
  invalidateFile(file) {
    if (file.extension !== "md" || this.dueCount === null) return;
    const previous = this.entriesByPath.get(file.path);
    if (previous == null ? void 0 : previous.due) {
      this.dueCount -= 1;
    }
    this.entriesByPath.delete(file.path);
    this.dirtyFilesByPath.set(file.path, file);
  }
  removeFile(pathOrFile) {
    if (this.dueCount === null) return;
    const path = typeof pathOrFile === "string" ? pathOrFile : pathOrFile.path;
    const previous = this.entriesByPath.get(path);
    if (previous == null ? void 0 : previous.due) {
      this.dueCount -= 1;
    }
    this.entriesByPath.delete(path);
    this.dirtyFilesByPath.delete(path);
  }
  renameFile(file, oldPath) {
    this.removeFile(oldPath);
    this.invalidateFile(file);
  }
  markReviewed(file) {
    if (file.extension !== "md" || this.dueCount === null) return;
    const previous = this.entriesByPath.get(file.path);
    if (previous == null ? void 0 : previous.due) {
      this.dueCount -= 1;
    }
    this.entriesByPath.set(file.path, { file, due: false });
    this.dirtyFilesByPath.delete(file.path);
  }
  countDue(now = /* @__PURE__ */ new Date()) {
    if (this.dueCount !== null && this.countedDay !== localDayKey(now)) {
      this.invalidateAll();
    }
    if (this.dueCount === null) {
      return this.rebuild(now);
    }
    this.processDirtyFiles(now);
    return this.dueCount;
  }
  rebuild(now) {
    this.entriesByPath.clear();
    this.dirtyFilesByPath.clear();
    this.dueCount = 0;
    this.countedDay = localDayKey(now);
    for (const file of this.app.vault.getMarkdownFiles()) {
      const due = isDue(file, this.app, this.getSettings(), now, this.overrides);
      this.entriesByPath.set(file.path, { file, due });
      if (due) {
        this.dueCount += 1;
      }
    }
    return this.dueCount;
  }
  processDirtyFiles(now) {
    if (this.dirtyFilesByPath.size === 0 || this.dueCount === null) return;
    for (const [path, file] of this.dirtyFilesByPath) {
      const due = isDue(file, this.app, this.getSettings(), now, this.overrides);
      this.entriesByPath.set(path, { file, due });
      if (due) {
        this.dueCount += 1;
      }
    }
    this.dirtyFilesByPath.clear();
  }
};

// src/modal.ts
var import_obsidian2 = require("obsidian");
var ConfirmReviewModal = class extends import_obsidian2.Modal {
  constructor(app, file, onConfirm) {
    super(app);
    this.confirming = false;
    this.file = file;
    this.onConfirm = onConfirm;
  }
  async confirm(confirmBtn, cancelBtn) {
    if (this.confirming) return;
    this.confirming = true;
    confirmBtn.disabled = true;
    cancelBtn.disabled = true;
    try {
      await this.onConfirm();
      this.close();
    } catch (e) {
      console.error("Failed to confirm reviewed note:", e);
      this.confirming = false;
      confirmBtn.disabled = false;
      cancelBtn.disabled = false;
    }
  }
  onOpen() {
    const { contentEl, modalEl } = this;
    modalEl.addClass("review-simple-modal");
    contentEl.createEl("h2", { text: "Mark as reviewed?" });
    contentEl.createEl("p", {
      text: `Mark "${this.file.basename}" as reviewed today?`
    });
    const buttonDiv = contentEl.createDiv({ cls: "modal-button-container" });
    const confirmBtn = buttonDiv.createEl("button", {
      text: "Mark as reviewed",
      cls: "mod-cta"
    });
    const cancelBtn = buttonDiv.createEl("button", { text: "Cancel" });
    confirmBtn.addEventListener("click", () => {
      void this.confirm(confirmBtn, cancelBtn);
    });
    cancelBtn.addEventListener("click", () => this.close());
  }
  onClose() {
    this.contentEl.empty();
  }
};

// src/statusbar.ts
var ReviewStatusBar = class {
  constructor(statusBarEl, app, getSettings, markReviewed, overrides) {
    this.currentFile = null;
    this.el = statusBarEl;
    this.app = app;
    this.getSettings = getSettings;
    this.markReviewed = markReviewed;
    this.overrides = overrides;
    this.el.addClass("review-status-bar");
    this.el.addEventListener("click", () => this.onClick());
  }
  update(file) {
    this.currentFile = file;
    const settings = this.getSettings();
    if (!settings.showReviewStatus) {
      this.el.addClass("review-hidden");
      return;
    }
    if (!file || file.extension !== "md") {
      this.el.addClass("review-hidden");
      return;
    }
    const interval = getEffectiveInterval(file, this.app, settings);
    if (interval === null) {
      this.el.addClass("review-hidden");
      return;
    }
    this.el.removeClass("review-hidden");
    const lastReviewedDay = getLastReviewedDay(
      file,
      this.app,
      settings,
      this.overrides
    );
    if (!lastReviewedDay) {
      this.el.setText("\u26A0 Not reviewed");
    } else if (isDue(file, this.app, settings, /* @__PURE__ */ new Date(), this.overrides)) {
      this.el.setText(`\u26A0 due \xB7 ${lastReviewedDay}`);
    } else {
      this.el.setText(`\u2713 ${lastReviewedDay}`);
    }
  }
  onClick() {
    const file = this.currentFile;
    if (!file || file.extension !== "md") return;
    const settings = this.getSettings();
    const interval = getEffectiveInterval(file, this.app, settings);
    if (interval === null) return;
    new ConfirmReviewModal(this.app, file, () => this.markReviewed(file)).open();
  }
};
var DueCounterStatusBar = class {
  constructor(statusBarEl, app, getSettings, onClick, overrides) {
    this.el = statusBarEl;
    this.getSettings = getSettings;
    this.cache = new DueCounterCache(app, getSettings, overrides);
    this.el.addClass("review-due-counter");
    this.el.setAttribute("data-tooltip-position", "top");
    const iconEl = this.el.createSpan({ cls: "review-due-counter-icon" });
    (0, import_obsidian3.setIcon)(iconEl, "clipboard-clock");
    this.countEl = this.el.createSpan({ cls: "review-due-counter-text" });
    this.el.addEventListener("click", onClick);
  }
  update() {
    const settings = this.getSettings();
    if (!settings.showDueCounter) {
      this.el.addClass("review-hidden");
      return;
    }
    const n = this.cache.countDue();
    this.countEl.setText(String(n));
    this.el.setAttribute(
      "aria-label",
      `${n} notes due for review across vault. Click to open random one.`
    );
    this.el.toggleClass("review-hidden", n === 0);
  }
  invalidateAll() {
    this.cache.invalidateAll();
  }
  invalidateFile(file) {
    this.cache.invalidateFile(file);
  }
  removeFile(pathOrFile) {
    this.cache.removeFile(pathOrFile);
  }
  renameFile(file, oldPath) {
    this.cache.renameFile(file, oldPath);
  }
  markReviewed(file) {
    this.cache.markReviewed(file);
  }
};

// src/frontmatter.ts
function isRecord2(value) {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}
function setStringFrontmatter(frontmatter, key, value) {
  if (!isRecord2(frontmatter)) return;
  frontmatter[key] = value;
}

// src/dates.ts
function pad22(value) {
  return String(value).padStart(2, "0");
}
function formatLocalDate(date) {
  const year = date.getFullYear();
  const month = pad22(date.getMonth() + 1);
  const day = pad22(date.getDate());
  return `${year}-${month}-${day}`;
}

// src/main.ts
var ReviewPlugin = class extends import_obsidian4.Plugin {
  constructor() {
    super(...arguments);
    this.statusBar = null;
    this.dueCounter = null;
    this.ribbonIconEl = null;
    this.settingTab = null;
    this.dueCounterRefreshTimeout = null;
    this.localDayRefreshTimeout = null;
    this.currentLocalDay = formatLocalDate(/* @__PURE__ */ new Date());
    this.reviewedDayOverrides = /* @__PURE__ */ new Map();
    this.reviewedDayOverrideSource = {
      getReviewedDayOverride: (file) => {
        var _a;
        return (_a = this.reviewedDayOverrides.get(file.path)) != null ? _a : null;
      }
    };
  }
  async openRandomDue() {
    var _a;
    const file = pickRandomDue(
      this.app,
      this.settings,
      Math.random,
      this.reviewedDayOverrideSource
    );
    if (!file) {
      new import_obsidian4.Notice("No notes due for review");
      return;
    }
    try {
      await this.app.workspace.getLeaf(false).openFile(file);
    } catch (e) {
      console.error("Failed to open random due note:", e);
      new import_obsidian4.Notice("Failed to open random note for review");
      (_a = this.dueCounter) == null ? void 0 : _a.invalidateFile(file);
      this.scheduleDueCounterRefresh();
    }
  }
  updateAll() {
    var _a;
    (_a = this.statusBar) == null ? void 0 : _a.update(this.app.workspace.getActiveFile());
    this.refreshDueCounter();
  }
  refreshReviewState() {
    var _a;
    (_a = this.dueCounter) == null ? void 0 : _a.invalidateAll();
    this.updateAll();
  }
  refreshDueCounter() {
    var _a;
    if (this.dueCounterRefreshTimeout !== null) {
      window.clearTimeout(this.dueCounterRefreshTimeout);
      this.dueCounterRefreshTimeout = null;
    }
    (_a = this.dueCounter) == null ? void 0 : _a.update();
  }
  scheduleDueCounterRefresh() {
    if (this.dueCounterRefreshTimeout !== null) {
      window.clearTimeout(this.dueCounterRefreshTimeout);
      this.dueCounterRefreshTimeout = null;
    }
    if (!this.settings.showDueCounter) {
      return;
    }
    this.dueCounterRefreshTimeout = window.setTimeout(() => {
      var _a;
      this.dueCounterRefreshTimeout = null;
      (_a = this.dueCounter) == null ? void 0 : _a.update();
    }, 500);
  }
  scheduleLocalDayRefresh() {
    if (this.localDayRefreshTimeout !== null) {
      window.clearTimeout(this.localDayRefreshTimeout);
      this.localDayRefreshTimeout = null;
    }
    const now = /* @__PURE__ */ new Date();
    const nextLocalDay = new Date(
      now.getFullYear(),
      now.getMonth(),
      now.getDate() + 1,
      0,
      0,
      1
    );
    const delay = Math.max(1e3, nextLocalDay.getTime() - now.getTime());
    this.localDayRefreshTimeout = window.setTimeout(() => {
      this.localDayRefreshTimeout = null;
      this.currentLocalDay = formatLocalDate(/* @__PURE__ */ new Date());
      this.refreshReviewState();
      this.scheduleLocalDayRefresh();
    }, delay);
  }
  refreshIfLocalDayChanged() {
    const today = formatLocalDate(/* @__PURE__ */ new Date());
    if (today === this.currentLocalDay) return;
    this.currentLocalDay = today;
    this.refreshReviewState();
    this.scheduleLocalDayRefresh();
  }
  async handleVaultRename(file, oldPath) {
    var _a, _b, _c;
    if (file instanceof import_obsidian4.TFile) {
      (_a = this.dueCounter) == null ? void 0 : _a.renameFile(file, oldPath);
      this.scheduleDueCounterRefresh();
      return;
    }
    (_b = this.dueCounter) == null ? void 0 : _b.invalidateAll();
    if (!(file instanceof import_obsidian4.TFolder)) {
      this.scheduleDueCounterRefresh();
      return;
    }
    const changed = migrateRenamedFolderReviewRules(
      this.settings,
      oldPath,
      file.path
    );
    if (changed) {
      await this.saveSettings();
      this.updateAll();
      (_c = this.settingTab) == null ? void 0 : _c.refresh();
      return;
    }
    this.scheduleDueCounterRefresh();
  }
  updateRibbonIcon() {
    if (this.settings.showRibbonIcon && !this.ribbonIconEl) {
      this.ribbonIconEl = this.addRibbonIcon(
        "clipboard-clock",
        "Open random note for review",
        () => {
          void this.openRandomDue();
        }
      );
    } else if (!this.settings.showRibbonIcon && this.ribbonIconEl) {
      this.ribbonIconEl.remove();
      this.ribbonIconEl = null;
    }
  }
  async markReviewed(file) {
    var _a;
    const today = formatLocalDate(/* @__PURE__ */ new Date());
    try {
      await this.app.fileManager.processFrontMatter(file, (fm) => {
        setStringFrontmatter(fm, this.settings.frontmatterReviewedKey, today);
      });
      this.reviewedDayOverrides.set(file.path, today);
      new import_obsidian4.Notice("Marked as reviewed");
      (_a = this.dueCounter) == null ? void 0 : _a.markReviewed(file);
      this.updateAll();
    } catch (e) {
      console.error("Failed to mark as reviewed:", e);
      new import_obsidian4.Notice("Failed to mark note as reviewed");
    }
  }
  addFileMenuItems(menu, file) {
    if (!(file instanceof import_obsidian4.TFolder)) return;
    if (this.settings.folderFilterMode !== "excluded") return;
    const folderPath = (0, import_obsidian4.normalizePath)(file.path);
    if (!folderPath || this.settings.excludedFolders.includes(folderPath)) {
      return;
    }
    menu.addItem((item) => {
      item.setTitle("Exclude folder from review").setIcon("folder-x").onClick(() => {
        void this.excludeFolderFromReview(folderPath);
      });
    });
  }
  async excludeFolderFromReview(folderPath) {
    if (this.settings.folderFilterMode !== "excluded") return;
    if (this.settings.excludedFolders.includes(folderPath)) return;
    this.settings.excludedFolders = [...this.settings.excludedFolders, folderPath];
    await this.saveSettings();
    this.refreshReviewState();
    new import_obsidian4.Notice("Folder excluded from review");
  }
  async onload() {
    await this.loadSettings();
    this.settingTab = new ReviewSettingTab(this.app, this);
    this.addSettingTab(this.settingTab);
    this.register(() => {
      var _a;
      return (_a = this.settingTab) == null ? void 0 : _a.dispose();
    });
    this.updateRibbonIcon();
    const statusBarEl = this.addStatusBarItem();
    this.register(() => statusBarEl.remove());
    this.statusBar = new ReviewStatusBar(
      statusBarEl,
      this.app,
      () => this.settings,
      (file) => this.markReviewed(file),
      this.reviewedDayOverrideSource
    );
    const counterEl = this.addStatusBarItem();
    this.register(() => counterEl.remove());
    this.dueCounter = new DueCounterStatusBar(
      counterEl,
      this.app,
      () => this.settings,
      () => {
        void this.openRandomDue();
      },
      this.reviewedDayOverrideSource
    );
    this.addCommand({
      id: "open-random",
      name: "Open random note for review",
      callback: () => {
        void this.openRandomDue();
      }
    });
    this.addCommand({
      id: "mark-current",
      name: "Mark current note as reviewed",
      checkCallback: (checking) => {
        const file = this.app.workspace.getActiveFile();
        if (!file || file.extension !== "md") return false;
        if (getEffectiveInterval(file, this.app, this.settings) === null) {
          return false;
        }
        if (!checking) {
          void this.markReviewed(file);
        }
        return true;
      }
    });
    this.registerEvent(
      this.app.workspace.on("active-leaf-change", () => {
        var _a;
        (_a = this.statusBar) == null ? void 0 : _a.update(this.app.workspace.getActiveFile());
      })
    );
    this.registerEvent(
      this.app.workspace.on("file-open", (file) => {
        var _a;
        (_a = this.statusBar) == null ? void 0 : _a.update(file);
      })
    );
    this.registerEvent(
      this.app.workspace.on("file-menu", (menu, file) => {
        this.addFileMenuItems(menu, file);
      })
    );
    this.registerEvent(
      this.app.metadataCache.on("changed", (file) => {
        var _a, _b;
        const expectedReviewedDay = this.reviewedDayOverrides.get(file.path);
        if (expectedReviewedDay && getLastReviewedDay(file, this.app, this.settings) === expectedReviewedDay) {
          this.reviewedDayOverrides.delete(file.path);
        }
        const active = this.app.workspace.getActiveFile();
        if (active && file.path === active.path) {
          (_a = this.statusBar) == null ? void 0 : _a.update(file);
        }
        (_b = this.dueCounter) == null ? void 0 : _b.invalidateFile(file);
        this.scheduleDueCounterRefresh();
      })
    );
    this.registerEvent(
      this.app.vault.on("create", (file) => {
        var _a;
        if (file instanceof import_obsidian4.TFile) {
          (_a = this.dueCounter) == null ? void 0 : _a.invalidateFile(file);
          this.scheduleDueCounterRefresh();
        }
      })
    );
    this.registerEvent(
      this.app.vault.on("delete", (file) => {
        var _a, _b;
        if (file instanceof import_obsidian4.TFile) {
          this.reviewedDayOverrides.delete(file.path);
          (_a = this.dueCounter) == null ? void 0 : _a.removeFile(file);
        } else {
          (_b = this.dueCounter) == null ? void 0 : _b.invalidateAll();
        }
        this.scheduleDueCounterRefresh();
      })
    );
    this.registerEvent(
      this.app.vault.on("rename", (file, oldPath) => {
        const reviewedDayOverride = this.reviewedDayOverrides.get(oldPath);
        if (reviewedDayOverride && file instanceof import_obsidian4.TFile) {
          this.reviewedDayOverrides.delete(oldPath);
          this.reviewedDayOverrides.set(file.path, reviewedDayOverride);
        }
        void this.handleVaultRename(file, oldPath);
      })
    );
    this.register(() => {
      if (this.dueCounterRefreshTimeout !== null) {
        window.clearTimeout(this.dueCounterRefreshTimeout);
        this.dueCounterRefreshTimeout = null;
      }
      if (this.localDayRefreshTimeout !== null) {
        window.clearTimeout(this.localDayRefreshTimeout);
        this.localDayRefreshTimeout = null;
      }
    });
    this.registerDomEvent(
      activeWindow,
      "focus",
      () => this.refreshIfLocalDayChanged()
    );
    this.scheduleLocalDayRefresh();
    this.app.workspace.onLayoutReady(() => this.updateAll());
  }
  async loadSettings() {
    this.settings = loadReviewSettings(await this.loadData());
  }
  async saveSettings() {
    await this.saveData(this.settings);
  }
  async onExternalSettingsChange() {
    var _a;
    await this.loadSettings();
    this.updateRibbonIcon();
    this.refreshReviewState();
    (_a = this.settingTab) == null ? void 0 : _a.refresh();
  }
};

/* nosourcemap */
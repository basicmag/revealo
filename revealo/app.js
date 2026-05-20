const builtInPuzzles = [
  {
    id: "moon-cat-001",
    size: 12,
    title: "Moon Cat",
    description: "月夜に浮かぶ小さなシルエット",
    theme: "月夜",
    difficulty: "Normal",
    createdAt: "2026-05-10",
    solution: [
      [0,0,0,0,1,1,1,0,0,0,0,0],
      [0,0,0,1,1,1,1,1,0,0,0,0],
      [0,0,1,1,2,2,2,1,1,0,0,0],
      [0,1,1,2,2,2,2,2,1,1,0,0],
      [0,1,1,2,2,2,2,2,1,1,0,0],
      [0,0,1,1,2,2,2,1,1,0,0,0],
      [0,0,0,1,1,2,1,1,0,0,0,0],
      [0,0,0,0,1,1,1,0,0,0,0,0],
      [0,0,0,0,0,1,0,0,2,0,0,0],
      [0,0,0,0,0,0,0,2,2,2,0,0],
      [0,0,0,0,0,0,0,0,2,0,0,0],
      [0,0,0,0,0,0,0,0,0,0,0,0],
    ],
    givens: [[3,4], [3,5], [4,5], [8,8], [9,8]]
  },
  {
    id: "fuji-moon-001",
    size: 8,
    title: "Fuji Moon",
    description: "月と富士山の小さな和風シルエット",
    theme: "和風",
    difficulty: "Easy",
    createdAt: "2026-05-10",
    solution: [
      [0,0,0,0,0,2,2,0],
      [0,0,0,0,0,2,2,0],
      [0,0,0,1,1,0,0,0],
      [0,0,1,1,1,1,0,0],
      [0,1,1,2,2,1,1,0],
      [1,1,2,2,2,2,1,1],
      [1,2,2,2,2,2,2,1],
      [0,0,0,0,0,0,0,0],
    ],
    givens: [[0,5], [5,3], [5,4], [6,2], [6,5]]
  },
  {
    id: "night-lighthouse-001",
    size: 12,
    title: "Night Lighthouse",
    description: "夜の海に立つ灯台",
    theme: "夜景",
    difficulty: "Normal",
    createdAt: "2026-05-10",
    solution: [
      [0,0,0,0,0,2,2,0,0,0,0,0],
      [0,0,0,0,1,2,2,1,0,0,0,0],
      [0,0,0,0,0,1,1,0,0,0,0,0],
      [0,0,0,0,1,2,2,1,0,0,0,0],
      [0,0,0,0,1,2,2,1,0,0,0,0],
      [0,0,0,1,1,2,2,1,1,0,0,0],
      [0,0,0,0,1,2,2,1,0,0,0,0],
      [0,0,0,0,1,2,2,1,0,0,0,0],
      [0,0,0,1,2,2,2,2,1,0,0,0],
      [0,0,1,1,2,2,2,2,1,1,0,0],
      [0,1,1,0,0,0,0,0,0,1,1,0],
      [1,1,2,2,2,1,1,2,2,2,1,1],
    ],
    givens: [[0,5], [0,6], [4,5], [8,5], [11,3], [11,8]]
  },
  {
    id: "cliff-lighthouse-001",
    size: 20,
    title: "Cliff Lighthouse",
    description: "三日月と崖の灯台",
    theme: "夜景",
    difficulty: "Hard",
    createdAt: "2026-05-11",
    solution: [
      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0],
      [0,0,0,0,2,1,0,0,0,0,0,0,0,1,1,0,0,0,0,0],
      [0,0,0,0,1,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0],
      [0,0,0,0,2,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,2,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,2,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      [0,0,0,2,2,2,2,0,0,0,0,0,0,0,0,0,0,0,0,0],
      [0,1,2,2,2,2,2,2,0,0,0,0,0,0,0,0,0,0,0,0],
      [2,2,2,2,2,2,2,2,0,0,0,0,0,0,0,0,0,0,0,0],
      [2,2,2,2,2,2,2,2,1,0,0,0,0,0,0,0,0,0,0,0],
      [2,2,2,2,2,2,2,2,2,0,0,1,0,0,0,1,0,0,1,0],
      [2,2,2,2,2,2,2,2,2,2,1,1,1,1,1,1,1,1,1,1],
      [2,2,2,2,2,2,2,2,2,2,2,1,1,1,1,1,1,1,1,1],
      [2,2,2,2,2,2,2,2,2,2,2,1,1,1,1,1,1,1,1,1],
      [2,2,2,2,2,2,2,2,2,2,2,2,1,1,1,1,1,1,1,1],
      [2,2,2,2,2,2,2,2,2,2,2,2,1,1,1,1,1,1,1,1],
    ],
    givens: [[2,13], [5,4], [7,4], [10,3], [12,0], [14,8], [15,9], [18,11]]
  },
  {
    id: "moon-koi-001",
    size: 20,
    title: "Moon Koi",
    description: "月明かりを泳ぐ鯉",
    theme: "和風",
    difficulty: "Hard",
    createdAt: "2026-05-11",
    solution: [
      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,1,2,0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,2,2,1,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0,0,2,2,2,1,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0,1,1,2,2,1,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,1,2,2,1,1,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,2,2,2,1,1,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,2,2,1,1,1,1,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,1,2,2,1,1,1,1,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,1,2,1,1,1,0,0,0,0,0,0,0],
      [0,0,0,0,1,1,0,1,2,2,2,1,0,0,0,0,0,0,0,0],
      [0,0,0,0,1,1,1,2,2,2,1,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    ],
    givens: [[1,9], [3,9], [7,11], [9,10], [10,9], [12,9], [14,8], [15,7], [17,5]]
  }
];
const puzzles = window.COLORING_LOGIC_PUZZLES ?? builtInPuzzles;

const storagePrefix = "coloring-logic-pwa-progress:";
const sequenceKey = "coloring-logic-pwa-current";
const toolDefaultsKey = "revealo-tool-defaults";
const tutorialKey = "revealo-tutorial";
const tutorialVersion = 1;
const dailyStoragePrefix = "revealo-daily-progress:";
const progressSchemaVersion = 3;
const resetUnsignedProgressPuzzleIds = new Set(["p055", "p056"]);
const appLocale = (navigator.language || navigator.userLanguage || "en").toLowerCase().startsWith("ja") ? "ja" : "en";
document.documentElement.lang = appLocale;
const adConfig = window.REVEALO_ADS ?? {};
const UI_TEXT = {
  ja: {
    appTitle: "リビーロ",
    appSubtitle: "絵あてロジック",
    selectPuzzle: "パズルを選択",
    dailyChallenge: "今日のチャレンジ",
    dailyChallengeDesc: date => `${date} の日替わりパズル`,
    dailyCleared: "今日のチャレンジクリア済み",
    completed: "クリア済み",
    progress: percent => `進捗 ${percent}%`,
    notPlayed: "未プレイ",
    category: value => `カテゴリ: ${value}`,
    miss: "ミス",
    guessed: "何の絵？",
    unrecorded: "未記録",
    recordedGuess: percent => `${percent}%で記録しました。答えはクリア後に表示されます。`,
    shareCopied: "共有文をコピーしました。",
    shareUnavailable: "この環境では共有シートを起動できません。HTTPS環境、またはホーム画面に追加したPWAで試してください。",
    noHint: "ヒントなし",
    hintCount: count => `ヒント${count}回`,
    missCount: count => `ミス${count}回`,
    streak: "連続1日",
    guessedAt: reveal => `何の絵？ ${reveal}で正解`,
    correctSoFar: "今のところ正解です。",
    wrongCount: count => `${count}個のミスがあります。`,
    nextPuzzle: "次のパズルへ",
    allClear: "全問クリア",
    back: "一覧へ戻る",
    check: "チェック",
    hint: "ヒント",
    guessButton: "何の絵？",
    guessDialogTitle: "何の絵？",
    guessPrompt: "このパズルの正体はどれだと思いますか？",
    correctGuess: percent => `正解です。${percent}%で記録しました。`,
    wrongGuess: "不正解です。もう少し開示してから再挑戦してください。",
    alreadyGuessed: "すでに正体を記録済みです。",
    undo: "元に戻る",
    shareResult: "結果を共有する",
    copyResult: "結果をコピー",
    close: "閉じる",
    clearTitle: "クリアしました",
    helpTitle: "リビーロの遊び方",
    help1: "行と列のヒントを見て、マスを空白・塗り色で埋めます。",
    help2: "ヒントは、同じ色が何マス連続するかを表します。空白は表示されません。",
    help3: "画像付きパズルでは、未入力セルの一部に下絵が表示され、正解セルを塗るたびに新しい下絵セルが開示されます。",
    tutorialReplay: "チュートリアルを見る",
    tutorialKicker: "Tutorial",
    tutorialTitle: "リビーロへようこそ",
    tutorialSkip: "スキップ",
    tutorialPrev: "戻る",
    tutorialNext: "次へ",
    tutorialDone: "ゲームを始める",
    tutorialSteps: [
      ["ヒントを読む", "行と列の数字は、同じ色が連続するマス数です。色チップの数字と位置を見て盤面を推理します。"],
      ["色を選んで塗る", "下の丸いパレットから色や消しゴムを選び、マスをタップまたはドラッグして塗ります。"],
      ["困ったら確認", "チェックで今のミスを確認し、ヒントで正解セルを1つ開けます。元に戻るで直前の操作を戻せます。"],
      ["何の絵？に挑戦", "途中で絵が分かったら「何の絵？」から答えを選びます。早く当てるほど記録になります。"],
      ["クリア後", "クリアすると答えと元画像が表示され、結果を共有できます。"]
    ]
  },
  en: {
    appTitle: "Revealo",
    appSubtitle: "Picture Reveal Logic",
    selectPuzzle: "Select a Puzzle",
    dailyChallenge: "Daily Challenge",
    dailyChallengeDesc: date => `Daily puzzle for ${date}`,
    dailyCleared: "Daily Challenge Completed",
    completed: "Completed",
    progress: percent => `Progress ${percent}%`,
    notPlayed: "Not played",
    category: value => `Category: ${value}`,
    miss: "Miss",
    guessed: "Guess",
    unrecorded: "Not recorded",
    recordedGuess: percent => `Recorded at ${percent}%. The answer appears after you clear the puzzle.`,
    shareCopied: "Share text copied.",
    shareUnavailable: "Sharing is not available in this environment. Try HTTPS or the installed PWA.",
    noHint: "No Hint",
    hintCount: count => `${count} Hint${count === 1 ? "" : "s"}`,
    missCount: count => `${count} Miss${count === 1 ? "" : "es"}`,
    streak: "1-day Streak",
    guessedAt: reveal => `Guessed at ${reveal} Reveal`,
    correctSoFar: "Correct so far.",
    wrongCount: count => `${count} mistake${count === 1 ? "" : "s"} found.`,
    nextPuzzle: "Next Puzzle",
    allClear: "All Clear",
    back: "Puzzle List",
    check: "Check",
    hint: "Hint",
    guessButton: "What Picture?",
    guessDialogTitle: "What Picture?",
    guessPrompt: "What do you think this puzzle is?",
    correctGuess: percent => `Correct. Recorded at ${percent}%.`,
    wrongGuess: "Not correct. Reveal a bit more and try again.",
    alreadyGuessed: "The answer has already been recorded.",
    undo: "Undo",
    shareResult: "Share Result",
    copyResult: "Copy Result",
    close: "Close",
    clearTitle: "Puzzle Complete",
    helpTitle: "How to Play",
    help1: "Use the row and column clues to fill each cell with blank or the correct color.",
    help2: "Each clue shows how many consecutive cells of the same color appear. Blank cells are not shown.",
    help3: "Image puzzles reveal some guide cells at the start, then reveal another guide cell whenever you fill a correct cell.",
    tutorialReplay: "Tutorial",
    tutorialKicker: "Tutorial",
    tutorialTitle: "Welcome to Revealo",
    tutorialSkip: "Skip",
    tutorialPrev: "Back",
    tutorialNext: "Next",
    tutorialDone: "Start Playing",
    tutorialSteps: [
      ["Read the clues", "Row and column clues show runs of the same color. Use the number and chip position to reason through the board."],
      ["Pick a color", "Choose a color or eraser from the round palette, then tap or drag across cells to fill them."],
      ["Use tools", "Check finds current mistakes, Hint reveals one correct cell, and Undo reverses your last move."],
      ["Guess the picture", "When you know what the image is, choose an answer from What Picture? Earlier guesses become part of your result."],
      ["After clearing", "When the puzzle is complete, the answer and original image are revealed and you can share your result."]
    ]
  }
};
const ui = UI_TEXT[appLocale];
let tutorialStepIndex = 0;
let pendingStartupPuzzleId = null;
let currentPlayMode = "normal";
let currentDailyDate = null;
let adsenseScriptRequested = false;

let puzzle = null;
let selected = 0;
let board = [];
let history = [];
let miss = 0;
let started = Date.now();
let elapsedBeforeStart = 0;
let completed = false;
let completedAt = null;
let guessedRevealRate = null;
let guessedAnswerId = null;
let guessAttempts = 0;
let hintsUsed = 0;
let imageRevealCells = new Set();
let dragPaint = null;
let toolImage = null;
let lastGeneratedMap = null;
let lastGeneratedMode = "classic";
let lastGeneratedPalette = null;
let lastSourceImageUrl = null;
let lastLineArtImageUrl = null;
const subjectIdeas = [
  "月夜の猫",
  "富士山と三日月",
  "灯台と波",
  "泳ぐ鯉",
  "桜の枝と小鳥",
  "竹林と満月",
  "雪だるまと星",
  "椿の花",
  "静かな森の小屋",
  "和傘と雨粒",
  "帆船と夕月",
  "眠る狐のシルエット"
];
const promptPalettes = {
  mono: "#FFFFFF, #9CA3AF, #111827",
  color: "#FFFFFF, #111827, #DC2626, #1D4ED8, #FACC15"
};
const colorPalettePresets = {
  classic: {
    name: "Classic",
    keywords: [],
    colors: [
      { color: "#FFFFFF", text: "#111827" },
      { color: "#111827", text: "#FFFFFF" },
      { color: "#DC2626", text: "#FFFFFF" },
      { color: "#1D4ED8", text: "#FFFFFF" },
      { color: "#FACC15", text: "#111827" }
    ]
  },
  forest: {
    name: "Forest",
    keywords: ["森", "木", "竹", "葉", "狐", "小屋", "山"],
    colors: [
      { color: "#FFFFFF", text: "#111827" },
      { color: "#1F2937", text: "#FFFFFF" },
      { color: "#166534", text: "#FFFFFF" },
      { color: "#65A30D", text: "#111827" },
      { color: "#FBBF24", text: "#111827" }
    ]
  },
  ocean: {
    name: "Ocean",
    keywords: ["海", "波", "魚", "鯉", "灯台", "船", "帆船"],
    colors: [
      { color: "#FFFFFF", text: "#111827" },
      { color: "#0F172A", text: "#FFFFFF" },
      { color: "#0369A1", text: "#FFFFFF" },
      { color: "#06B6D4", text: "#111827" },
      { color: "#F97316", text: "#111827" }
    ]
  },
  sakura: {
    name: "Sakura",
    keywords: ["桜", "花", "鳥", "椿", "春"],
    colors: [
      { color: "#FFFFFF", text: "#111827" },
      { color: "#1F2937", text: "#FFFFFF" },
      { color: "#DB2777", text: "#FFFFFF" },
      { color: "#F9A8D4", text: "#111827" },
      { color: "#84CC16", text: "#111827" }
    ]
  },
  sunset: {
    name: "Sunset",
    keywords: ["夕", "月", "夜", "星", "灯", "雨"],
    colors: [
      { color: "#FFFFFF", text: "#111827" },
      { color: "#111827", text: "#FFFFFF" },
      { color: "#B91C1C", text: "#FFFFFF" },
      { color: "#F97316", text: "#111827" },
      { color: "#FACC15", text: "#111827" }
    ]
  },
  autumn: {
    name: "Autumn",
    keywords: ["秋", "紅葉", "きのこ", "栗", "森", "落ち葉"],
    colors: [
      { color: "#FFFFFF", text: "#111827" },
      { color: "#1F2937", text: "#FFFFFF" },
      { color: "#B45309", text: "#FFFFFF" },
      { color: "#DC2626", text: "#FFFFFF" },
      { color: "#F59E0B", text: "#111827" }
    ]
  },
  winter: {
    name: "Winter",
    keywords: ["冬", "雪", "氷", "雪だるま", "星", "夜"],
    colors: [
      { color: "#FFFFFF", text: "#111827" },
      { color: "#111827", text: "#FFFFFF" },
      { color: "#2563EB", text: "#FFFFFF" },
      { color: "#93C5FD", text: "#111827" },
      { color: "#A7F3D0", text: "#111827" }
    ]
  },
  desert: {
    name: "Desert",
    keywords: ["砂漠", "太陽", "ラクダ", "サボテン", "遺跡", "山"],
    colors: [
      { color: "#FFFFFF", text: "#111827" },
      { color: "#292524", text: "#FFFFFF" },
      { color: "#B45309", text: "#FFFFFF" },
      { color: "#F59E0B", text: "#111827" },
      { color: "#65A30D", text: "#111827" }
    ]
  },
  candy: {
    name: "Candy",
    keywords: ["お菓子", "キャンディ", "ケーキ", "風船", "遊園地", "かわいい"],
    colors: [
      { color: "#FFFFFF", text: "#111827" },
      { color: "#3B0764", text: "#FFFFFF" },
      { color: "#EC4899", text: "#FFFFFF" },
      { color: "#A78BFA", text: "#111827" },
      { color: "#22D3EE", text: "#111827" }
    ]
  },
  retro: {
    name: "Retro",
    keywords: ["レトロ", "ロボット", "街", "時計", "カメラ", "乗り物"],
    colors: [
      { color: "#FFFFFF", text: "#111827" },
      { color: "#1F2937", text: "#FFFFFF" },
      { color: "#7C2D12", text: "#FFFFFF" },
      { color: "#0F766E", text: "#FFFFFF" },
      { color: "#FACC15", text: "#111827" }
    ]
  }
};
const clueMaskLevels = {
  easy: { hideColorRate: 0, hideNumberRate: 0, givenRate: 0.35, minGivens: 4 },
  normal: { hideColorRate: 0.2, hideNumberRate: 0.02, givenRate: 0.15, minGivens: 2 },
  hard: { hideColorRate: 0.45, hideNumberRate: 0.08, givenRate: 0.05, minGivens: 1 },
  expert: { hideColorRate: 0.65, hideNumberRate: 0.15, givenRate: 0, minGivens: 0 }
};

function svg(level) {
  if (level === 0) return `<svg viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="2" fill="none" stroke="currentColor" stroke-width="1.4" stroke-dasharray="3 2" opacity=".35"/></svg>`;
  if (level === 1) return `<svg viewBox="0 0 24 24"><rect x="1" y="1" width="22" height="22" rx="2.2" fill="var(--gray-fill)"/></svg>`;
  if (level === 2) return `<svg viewBox="0 0 24 24"><rect x="1" y="1" width="22" height="22" rx="2.2" fill="var(--black-fill)"/></svg>`;
}

function isColorPuzzle(targetPuzzle = puzzle) {
  return targetPuzzle?.mode === "color";
}

function colorToken(color, count = "", textColor = null) {
  return `<span class="color-token" style="background:${color};color:${textColor ?? textColorForBg(color)}">${count}</span>`;
}

function textColorForBg(hex) {
  const { r, g, b } = hexToRgb(hex);
  const luminance = 0.2126 * r + 0.7152 * g + 0.0722 * b;
  return luminance < 140 ? "#ffffff" : "#111827";
}

function colorForLevel(level, targetPuzzle = puzzle) {
  return targetPuzzle?.palette?.find(color => color.id === level)?.color ?? "#ffffff";
}

function textColorForLevel(level, targetPuzzle = puzzle) {
  const color = targetPuzzle?.palette?.find(item => item.id === level);
  return color?.text ?? textColorForBg(color?.color ?? "#ffffff");
}

function cellValueToken(value) {
  if (isColorPuzzle()) return colorToken(colorForLevel(value), "", textColorForLevel(value));
  return svg(value);
}

function normalizeLevel(value) {
  if (value === null || value === undefined || value === 0) return null;
  return value <= 2 ? 1 : 2;
}

function normalizeBoard(savedBoard, size) {
  if (!Array.isArray(savedBoard)) return null;

  return Array.from({ length: size }, (_, r) =>
    Array.from({ length: size }, (_, c) => normalizeLevel(savedBoard[r]?.[c]))
  );
}

function boardFromProgress(saved, targetPuzzle) {
  if (!saved?.board) return null;
  if (saved.schemaVersion >= 2) return saved.board;
  return normalizeBoard(saved.board, targetPuzzle.size);
}

function progressFor(targetPuzzle, targetBoard) {
  let filled = 0;
  let total = 0;
  for (let r = 0; r < targetPuzzle.size; r++) {
    for (let c = 0; c < targetPuzzle.size; c++) {
      if (targetPuzzle.solution[r][c] !== 0) {
        total++;
        if (targetBoard?.[r]?.[c] === targetPuzzle.solution[r][c]) filled++;
      }
    }
  }
  return total ? Math.round((filled / total) * 100) : 0;
}

function puzzleNumber(targetPuzzle = puzzle) {
  const raw = String(targetPuzzle?.id ?? "").replace(/\D/g, "");
  return raw ? Number(raw) : Math.max(1, currentPuzzleIndex() + 1);
}

function puzzlePublicTitle(targetPuzzle = puzzle) {
  return `Revealo #${String(puzzleNumber(targetPuzzle)).padStart(3, "0")}`;
}

function puzzlesById() {
  return [...puzzles].sort((a, b) =>
    String(a.id).localeCompare(String(b.id), undefined, { numeric: true, sensitivity: "base" })
  );
}

function firstUnclearedPuzzleId() {
  const sorted = puzzlesById();
  return sorted.find(item => !loadCompatibleProgress(item)?.completed)?.id ?? sorted[0]?.id;
}

function puzzleLocaleData(targetPuzzle = puzzle, locale = appLocale) {
  const localized = targetPuzzle?.localized ?? {};
  return localized[locale] ?? localized.en ?? {
    title: targetPuzzle?.title ?? "",
    description: targetPuzzle?.description ?? "",
    category: targetPuzzle?.category || targetPuzzle?.theme || targetPuzzle?.difficulty || "Puzzle"
  };
}

function puzzleAnswerTitle(targetPuzzle = puzzle) {
  return puzzleLocaleData(targetPuzzle).title || targetPuzzle?.title || puzzlePublicTitle(targetPuzzle);
}

function puzzleAnswerDescription(targetPuzzle = puzzle) {
  return puzzleLocaleData(targetPuzzle).description || targetPuzzle?.description || "";
}

function categoryText(targetPuzzle = puzzle) {
  return ui.category(puzzleLocaleData(targetPuzzle).category || targetPuzzle?.category || targetPuzzle?.theme || targetPuzzle?.difficulty || "Puzzle");
}

function coordKey(r, c) {
  return `${r},${c}`;
}

function initialRevealKeys(targetPuzzle) {
  return (targetPuzzle?.initialReveals ?? []).map(([r, c]) => coordKey(r, c));
}

function hasImageHint(r, c) {
  return imageRevealCells.has(coordKey(r, c));
}

function emptyBoard(size) {
  return Array.from({ length: size }, () => Array(size).fill(null));
}

function localDateKey(date = new Date()) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function dailyPuzzleForDate(dateKey = localDateKey()) {
  const sorted = puzzlesById();
  if (!sorted.length) return null;
  const index = Math.floor(seededRatio(`revealo-daily:${dateKey}`) * sorted.length) % sorted.length;
  return sorted[index];
}

function storageKey(puzzleId, mode = currentPlayMode, dateKey = currentDailyDate) {
  if (mode === "daily" && dateKey) return `${dailyStoragePrefix}${dateKey}:${puzzleId}`;
  return storagePrefix + puzzleId;
}

function loadProgress(puzzleId, mode = currentPlayMode, dateKey = currentDailyDate) {
  try {
    const raw = localStorage.getItem(storageKey(puzzleId, mode, dateKey));
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}

function puzzleSolutionSignature(targetPuzzle) {
  const text = [
    targetPuzzle?.id ?? "",
    targetPuzzle?.size ?? "",
    targetPuzzle?.mode ?? "",
    (targetPuzzle?.solution ?? []).map(row => row.join(",")).join(";"),
    (targetPuzzle?.palette ?? []).map(item => `${item.id}:${item.color}`).join(",")
  ].join("|");
  let hash = 2166136261;
  for (let i = 0; i < text.length; i++) {
    hash ^= text.charCodeAt(i);
    hash = Math.imul(hash, 16777619) >>> 0;
  }
  return hash.toString(16).padStart(8, "0");
}

function isCompatibleProgress(saved, targetPuzzle) {
  if (!saved) return false;
  if (saved.solutionSignature) return saved.solutionSignature === puzzleSolutionSignature(targetPuzzle);
  return !resetUnsignedProgressPuzzleIds.has(targetPuzzle?.id);
}

function loadCompatibleProgress(targetPuzzle, mode = "normal", dateKey = null) {
  const saved = loadProgress(targetPuzzle.id, mode, dateKey);
  if (!saved) return null;
  if (isCompatibleProgress(saved, targetPuzzle)) return saved;
  localStorage.removeItem(storageKey(targetPuzzle.id, mode, dateKey));
  return null;
}

function currentElapsedSeconds() {
  if (completed) return elapsedBeforeStart;
  return elapsedBeforeStart + Math.floor((Date.now() - started) / 1000);
}

function saveProgress() {
  if (!puzzle) return;
  localStorage.setItem(storageKey(puzzle.id), JSON.stringify({
    schemaVersion: progressSchemaVersion,
    puzzleId: puzzle.id,
    solutionSignature: puzzleSolutionSignature(puzzle),
    playMode: currentPlayMode,
    dailyDate: currentDailyDate,
    board,
    miss,
    hintsUsed,
    guessedRevealRate,
    guessedAnswerId,
    guessAttempts,
    selected,
    imageReveals: [...imageRevealCells],
    elapsedSeconds: currentElapsedSeconds(),
    completed,
    completedAt,
    updatedAt: new Date().toISOString()
  }));
}

function renderPuzzleSelect() {
  const select = document.getElementById("puzzleSelect");
  select.innerHTML = `<h2>${ui.selectPuzzle}</h2>`;

  const dateKey = localDateKey();
  const dailyPuzzle = dailyPuzzleForDate(dateKey);
  if (dailyPuzzle) {
    const dailySaved = loadCompatibleProgress(dailyPuzzle, "daily", dateKey);
    const dailyPercent = progressFor(dailyPuzzle, boardFromProgress(dailySaved, dailyPuzzle));
    const dailyButton = document.createElement("button");
    dailyButton.className = "daily-card";
    dailyButton.innerHTML = `
      <span class="daily-card-kicker">${ui.dailyChallenge}</span>
      <span class="daily-card-title">${puzzlePublicTitle(dailyPuzzle)}</span>
      <span class="daily-card-desc">${dailySaved?.completed ? ui.dailyCleared : ui.dailyChallengeDesc(dateKey)}</span>
      <span class="daily-card-status">${dailySaved?.completed ? ui.completed : dailyPercent > 0 ? ui.progress(dailyPercent) : ui.notPlayed}</span>
    `;
    dailyButton.onclick = () => startPuzzle(dailyPuzzle.id, { mode: "daily", dateKey });
    select.appendChild(dailyButton);
  }

  const list = document.createElement("div");
  list.className = "puzzle-list";

  puzzles.forEach(item => {
    const saved = loadCompatibleProgress(item, "normal", null);
    const percent = progressFor(item, boardFromProgress(saved, item));
    const status = saved?.completed ? ui.completed : percent > 0 ? ui.progress(percent) : ui.notPlayed;
    const button = document.createElement("button");
    button.className = "puzzle-item";
    button.innerHTML = `
      <span class="puzzle-item-title">${puzzlePublicTitle(item)}</span>
      <span class="puzzle-item-desc">${categoryText(item)}</span>
      <span class="puzzle-item-meta">${item.difficulty} / ${item.size}x${item.size} / ${item.theme}</span>
      <span class="puzzle-item-status">${status}</span>
    `;
    button.onclick = () => startPuzzle(item.id, { mode: "normal" });
    list.appendChild(button);
  });

  select.appendChild(list);
  renderAdSlot("adListBottom", "puzzleListBottom");
}

function startPuzzle(puzzleId, options = {}) {
  if (puzzle) saveProgress();

  currentPlayMode = options.mode ?? "normal";
  currentDailyDate = currentPlayMode === "daily" ? (options.dateKey ?? localDateKey()) : null;
  puzzle = puzzles.find(item => item.id === puzzleId);
  if (!puzzle) return;
  localStorage.setItem(sequenceKey, puzzle.id);
  const saved = loadCompatibleProgress(puzzle, currentPlayMode, currentDailyDate);
  selected = saved?.selected ?? 0;
  board = boardFromProgress(saved, puzzle) ?? emptyBoard(puzzle.size);
  history = [];
  miss = saved?.miss ?? 0;
  hintsUsed = saved?.hintsUsed ?? 0;
  guessedRevealRate = saved?.guessedRevealRate ?? null;
  guessedAnswerId = saved?.guessedAnswerId ?? null;
  guessAttempts = saved?.guessAttempts ?? 0;
  imageRevealCells = new Set(saved?.imageReveals ?? initialRevealKeys(puzzle));
  elapsedBeforeStart = saved?.elapsedSeconds ?? 0;
  started = Date.now();
  completed = Boolean(saved?.completed);
  completedAt = saved?.completedAt ?? null;

  document.documentElement.style.setProperty("--size", puzzle.size);
  document.documentElement.dataset.boardSize = String(puzzle.size);
  updatePuzzleLayoutMetrics();
  document.getElementById("puzzleTitle").textContent = completed ? puzzleAnswerTitle(puzzle) : puzzlePublicTitle(puzzle);
  document.getElementById("puzzleDesc").textContent = completed ? puzzleAnswerDescription(puzzle) : categoryText(puzzle);
  const modeLabel = currentPlayMode === "daily" ? `${ui.dailyChallenge} / ` : "";
  document.getElementById("puzzleMeta").textContent = `${modeLabel}${puzzle.createdAt} / ${puzzle.difficulty} / ${puzzle.size}x${puzzle.size}`;
  document.getElementById("puzzleSelect").classList.add("hidden");
  document.getElementById("adListBottom").hidden = true;
  document.getElementById("imageTool").classList.add("hidden");
  document.getElementById("gameView").classList.remove("hidden");

  renderPalette();
  renderClues();
  update();
}

function showPuzzleSelect() {
  saveProgress();
  puzzle = null;
  currentPlayMode = "normal";
  currentDailyDate = null;
  delete document.documentElement.dataset.boardSize;
  document.getElementById("gameView").classList.add("hidden");
  document.getElementById("puzzleSelect").classList.remove("hidden");
  document.getElementById("imageTool").classList.add("hidden");
  renderPuzzleSelect();
}

function adsEnabled() {
  return Boolean(adConfig.enabled && adConfig.publisherId);
}

function adSlotConfig(name) {
  return adConfig.slots?.[name] ?? null;
}

function loadAdsenseScript() {
  if (!adsEnabled() || adsenseScriptRequested) return;
  adsenseScriptRequested = true;
  const script = document.createElement("script");
  script.async = true;
  script.crossOrigin = "anonymous";
  script.src = `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${encodeURIComponent(adConfig.publisherId)}`;
  document.head.appendChild(script);
}

function renderAdSlot(elementId, slotName) {
  const container = document.getElementById(elementId);
  const slot = adSlotConfig(slotName);
  if (!container) return;
  container.innerHTML = "";
  if (!adsEnabled() || !slot?.slotId) {
    container.hidden = true;
    return;
  }

  container.hidden = false;
  const ad = document.createElement("ins");
  ad.className = "adsbygoogle";
  ad.style.display = "block";
  ad.dataset.adClient = adConfig.publisherId;
  ad.dataset.adSlot = slot.slotId;
  ad.dataset.adFormat = slot.format || "auto";
  ad.dataset.fullWidthResponsive = slot.fullWidthResponsive ?? "true";
  container.appendChild(ad);
  loadAdsenseScript();
  window.adsbygoogle = window.adsbygoogle || [];
  try {
    window.adsbygoogle.push({});
  } catch {
    container.hidden = true;
  }
}

function isGiven(r, c) {
  return puzzle.givens.some(([gr, gc]) => gr === r && gc === c);
}

function lineClues(line) {
  const result = [];
  let current = 0;
  let count = 0;

  const pushClue = () => {
    result.push({ level: current, count });
    count = 0;
  };

  for (const value of line) {
    if (value === 0) {
      if (count > 0) pushClue();
      current = 0;
      count = 0;
    } else if (value === current) {
      count++;
    } else {
      if (count > 0) pushClue();
      current = value;
      count = 1;
    }
  }
  if (count > 0) pushClue();
  return result.length ? result : [{ empty: true }];
}

function updatePuzzleLayoutMetrics() {
  if (!puzzle) return;
  const visualWidth = window.visualViewport?.width ?? window.innerWidth ?? 780;
  const visualHeight = window.visualViewport?.height ?? window.innerHeight ?? 720;
  const rowClues = puzzle.solution.map(row => lineClues(row));
  const colClues = Array.from({ length: puzzle.size }, (_, c) =>
    lineClues(puzzle.solution.map(row => row[c]))
  );
  const maxRowClues = Math.max(1, ...rowClues.map(clues => clues[0]?.empty ? 1 : clues.length));
  const maxColClues = Math.max(1, ...colClues.map(clues => clues[0]?.empty ? 1 : clues.length));
  const maxDigits = Math.max(1, ...rowClues.concat(colClues).flat().map(clue =>
    clue.empty ? 1 : String(clue.count).length
  ));
  const maxRowDigits = Math.max(1, ...rowClues.flat().map(clue =>
    clue.empty ? 1 : String(clue.count).length
  ));
  const narrow = window.matchMedia("(max-width: 700px)").matches;
  const veryNarrow = window.matchMedia("(max-width: 480px)").matches;
  const shortLandscape = window.matchMedia("(orientation: landscape) and (max-height: 520px)").matches;
  const baseFont = shortLandscape ? 9 : veryNarrow ? (puzzle.size >= 20 ? 10 : 11) : narrow ? 11 : 12;
  const baseRowChipW = shortLandscape ? 10 : veryNarrow ? 10 : narrow ? 10 : 11;
  const baseRowChipH = shortLandscape ? 16 : veryNarrow ? (puzzle.size >= 20 ? 18 : 19) : narrow ? 20 : (puzzle.size >= 20 ? 21 : 23);
  const baseColChipW = shortLandscape ? 17 : veryNarrow ? (puzzle.size >= 20 ? 18 : 19) : narrow ? 21 : (puzzle.size >= 20 ? 22 : 24);
  const baseColChipH = shortLandscape ? 8 : veryNarrow ? 14 : narrow ? 15 : 16;
  const gap = 1;
  const rowPadding = shortLandscape || veryNarrow ? 6 : 8;
  const colPadding = shortLandscape || veryNarrow ? 6 : 8;
  const viewportWidth = Math.min(visualWidth || 780, 780);
  const viewportHeight = visualHeight || 720;
  const layoutGutter = shortLandscape ? 76 : veryNarrow ? 18 : narrow ? 54 : 48;
  const minCell = shortLandscape ? 9 : veryNarrow ? 12 : narrow ? 15 : 18;
  const maxRowWidth = Math.max(44, viewportWidth - layoutGutter - minCell * puzzle.size);
  const maxColHeight = shortLandscape ? 106 : narrow ? 120 : 150;
  const fitRowChip = Math.floor((maxRowWidth - rowPadding - Math.max(0, maxRowClues - 1) * gap) / maxRowClues);
  const fitColChipH = Math.floor((maxColHeight - colPadding - Math.max(0, maxColClues - 1) * gap) / maxColClues);
  const rowChipW = Math.max(9, Math.min(baseRowChipW, fitRowChip || baseRowChipW));
  const rowChipH = baseRowChipH;
  const colChipW = baseColChipW;
  const colChipH = Math.max(shortLandscape ? 10 : 13, Math.min(baseColChipH, fitColChipH || baseColChipH));
  const fontSize = Math.max(shortLandscape ? 8 : 9, Math.min(baseFont, Math.min(rowChipH, colChipH + 5) - 3));
  const rowSquareChip = rowChipH;
  const rowClueContentWidth = Math.max(1, ...rowClues.map(clues => {
    if (clues[0]?.empty) return rowChipW;
    return clues.reduce((sum, clue, index) => {
      const chipWidth = String(clue.count).length >= 2 ? rowSquareChip : rowChipW;
      return sum + chipWidth + (index > 0 ? gap : 0);
    }, 0);
  }));
  const rowClueWidth = rowClueContentWidth + rowPadding;
  const colClueHeight = maxColClues * colChipH + Math.max(0, maxColClues - 1) * gap + colPadding;
  const pwaMode = document.body.classList.contains("pwa-app");
  if (pwaMode || shortLandscape || veryNarrow) {
    const paletteRail = shortLandscape ? 122 : 0;
    const horizontalGutter = shortLandscape ? 20 : 14;
    const verticalGutter = shortLandscape ? 0 : pwaMode ? 112 : 10;
    const bottomControls = shortLandscape ? 0 : pwaMode ? 42 : 52;
    const availableWidth = Math.max(100, visualWidth - rowClueWidth - paletteRail - horizontalGutter);
    const availableHeight = Math.max(100, viewportHeight - colClueHeight - bottomControls - verticalGutter);
    const minFitCell = shortLandscape ? 8 : 7;
    const maxFitCell = puzzle.size <= 8 ? 36 : puzzle.size <= 12 ? 30 : puzzle.size <= 15 ? 24 : 22;
    const fitCell = Math.max(minFitCell, Math.min(maxFitCell, Math.floor(Math.min(availableWidth, availableHeight) / puzzle.size)));
    document.documentElement.style.setProperty("--cell", `${fitCell}px`);
  } else {
    document.documentElement.style.removeProperty("--cell");
  }
  document.documentElement.style.setProperty("--rowClue", `${rowClueWidth}px`);
  document.documentElement.style.setProperty("--colClue", `${colClueHeight}px`);
  document.documentElement.style.setProperty("--clueChipW", `${Math.max(rowChipW, colChipW)}px`);
  document.documentElement.style.setProperty("--clueChipH", `${Math.max(rowChipH, colChipH)}px`);
  document.documentElement.style.setProperty("--rowChipW", `${rowChipW}px`);
  document.documentElement.style.setProperty("--rowChipH", `${rowChipH}px`);
  document.documentElement.style.setProperty("--colChipW", `${colChipW}px`);
  document.documentElement.style.setProperty("--colChipH", `${colChipH}px`);
  document.documentElement.style.setProperty("--clueFont", `${fontSize}px`);
}

function clueToken(clue, context = {}) {
  if (clue.empty) return `<span class="clue-token">-</span>`;
  const mask = clueMaskFor(context);
  const count = mask.hideNumber ? "?" : clue.count;
  const countClass = String(count).length >= 2 ? " two-digit" : "";

  if (isColorPuzzle()) {
    const color = mask.hideColor ? "#ffffff" : colorForLevel(clue.level);
    const textColor = mask.hideColor ? "#111827" : textColorForLevel(clue.level);
    const className = mask.hideColor ? `color-token hidden-color-token${countClass}` : `color-token${countClass}`;
    return `<span class="clue-token"><span class="${className}" style="background:${color};color:${textColor}">${count}</span></span>`;
  }

  const monoColors = {
    1: { color: "#9CA3AF", text: "#111827" },
    2: { color: "#111827", text: "#FFFFFF" }
  };
  const color = mask.hideColor ? "#ffffff" : monoColors[clue.level]?.color ?? "#ffffff";
  const textColor = mask.hideColor ? "#111827" : monoColors[clue.level]?.text ?? "#111827";
  const className = mask.hideColor ? `color-token hidden-color-token${countClass}` : `color-token${countClass}`;
  return `<span class="clue-token"><span class="${className}" style="background:${color};color:${textColor}">${count}</span></span>`;
}

function hiddenMonoToken() {
  return `<span class="mono-hidden-token"></span>`;
}

function clueMaskFor({ axis = "row", index = 0, clueIndex = 0, level = 0 } = {}) {
  const settings = clueMaskSettings();
  const rollColor = seededRatio(`${puzzle.id}:${axis}:${index}:${clueIndex}:${level}:color`);
  const rollNumber = seededRatio(`${puzzle.id}:${axis}:${index}:${clueIndex}:${level}:number`);
  const hideColor = rollColor < settings.hideColorRate;
  const hideNumber = !hideColor && rollNumber < settings.hideNumberRate;
  return { hideColor, hideNumber };
}

function clueMaskSettings() {
  if (puzzle?.clueMask) return { ...clueMaskLevels.normal, ...puzzle.clueMask };
  const key = String(puzzle?.difficulty ?? "").toLowerCase();
  if (key.includes("expert")) return clueMaskLevels.expert;
  if (key.includes("hard")) return clueMaskLevels.hard;
  if (key.includes("normal") || key.includes("generated")) return clueMaskLevels.normal;
  return clueMaskLevels.easy;
}

function seededRatio(text) {
  let hash = 2166136261;
  for (let i = 0; i < text.length; i++) {
    hash ^= text.charCodeAt(i);
    hash = Math.imul(hash, 16777619);
  }
  return (hash >>> 0) / 4294967296;
}

function renderPalette() {
  const el = document.getElementById("palette");
  el.innerHTML = "";

  const colors = isColorPuzzle()
    ? puzzle.palette.map(item => ({
        level: item.id,
        label: item.id === 0 ? "消す" : item.color,
        icon: item.id === 0 ? `<span class="palette-eraser">×</span>` : colorToken(item.color, "", item.text)
      }))
    : [
        { level: 0, label: "消す", icon: `<span class="palette-eraser">×</span>` },
        { level: 1, label: "グレー", icon: colorToken("#9CA3AF") },
        { level: 2, label: "黒", icon: colorToken("#111827") }
      ];

  colors.forEach(({ level, label, icon }) => {
    const btn = document.createElement("button");
    btn.className = level === selected ? "active" : "";
    btn.type = "button";
    btn.setAttribute("aria-label", label);
    btn.title = label;
    btn.innerHTML = `${icon ?? svg(level)}<span class="palette-label">${label}</span>`;
    btn.onclick = () => {
      selected = level;
      renderPalette();
    };
    el.appendChild(btn);
  });
}

function renderClues() {
  const rows = document.getElementById("rowClues");
  const cols = document.getElementById("colClues");
  rows.innerHTML = "";
  cols.innerHTML = "";

  for (let r = 0; r < puzzle.size; r++) {
    const div = document.createElement("div");
    div.className = "row-clue";
    div.innerHTML = lineClues(puzzle.solution[r])
      .map((clue, clueIndex) => clueToken(clue, { axis: "row", index: r, clueIndex, level: clue.level }))
      .join("");
    rows.appendChild(div);
  }

  for (let c = 0; c < puzzle.size; c++) {
    const col = puzzle.solution.map(row => row[c]);
    const div = document.createElement("div");
    div.className = "col-clue";
    div.innerHTML = lineClues(col)
      .map((clue, clueIndex) => clueToken(clue, { axis: "col", index: c, clueIndex, level: clue.level }))
      .join("");
    cols.appendChild(div);
  }
}

function renderGrid() {
  const grid = document.getElementById("grid");
  grid.innerHTML = "";
  const usesImageReveal = hasImageReveal(puzzle);

  for (let r = 0; r < puzzle.size; r++) {
    for (let c = 0; c < puzzle.size; c++) {
      const cell = document.createElement("button");
      cell.className = "cell";
      cell.dataset.row = r;
      cell.dataset.col = c;
      const given = isGiven(r, c);
      if (given) {
        board[r][c] = puzzle.solution[r][c];
        cell.classList.add("prefilled");
        cell.dataset.given = "1";
      }
      const value = board[r][c];
      if (usesImageReveal) {
        applyImageRevealCell(cell, r, c, value);
      } else if (value !== null && value !== 0) {
        cell.innerHTML = cellValueToken(value);
      }

      cell.onpointerdown = event => startCellDrag(event, r, c, cell, given);
      cell.onpointerenter = event => dragOverCell(event, r, c, cell, given);
      grid.appendChild(cell);
    }
  }
}

function startCellDrag(event, r, c, cell, given) {
  if (given || completed || event.button > 0) return;
  event.preventDefault();
  const before = JSON.stringify(board);
  dragPaint = {
    value: selected === 0 ? null : selected,
    before,
    changed: false,
    visited: new Set(),
    pointerId: event.pointerId
  };
  paintCell(r, c, cell, given);
}

function dragOverCell(event, r, c, cell, given) {
  if (!dragPaint || dragPaint.pointerId !== event.pointerId || given || completed || !event.buttons) return;
  event.preventDefault();
  paintCell(r, c, cell, given);
}

function dragMoveCell(event) {
  if (!dragPaint || dragPaint.pointerId !== event.pointerId) return;
  if (event.pointerType === "mouse" && !event.buttons) {
    finishCellDrag();
    return;
  }
  event.preventDefault();
  const target = document.elementFromPoint(event.clientX, event.clientY)?.closest(".cell");
  if (!target || !document.getElementById("grid").contains(target)) return;

  const r = Number(target.dataset.row);
  const c = Number(target.dataset.col);
  if (!Number.isInteger(r) || !Number.isInteger(c)) return;
  paintCell(r, c, target, target.dataset.given === "1");
}

function finishCellDrag() {
  if (!dragPaint) return;
  const { before, changed } = dragPaint;
  dragPaint = null;
  if (changed) {
    history.push(before);
    revealNextImageHint();
    renderGrid();
    updateProgress();
    saveProgress();
    checkCompletion();
  }
}

function paintCell(r, c, cell, given) {
  if (!dragPaint || given) return;
  const key = `${r},${c}`;
  if (dragPaint.visited.has(key)) return;
  dragPaint.visited.add(key);

  if (board[r][c] === dragPaint.value) return;
  board[r][c] = dragPaint.value;
  dragPaint.changed = true;
  renderCell(cell, r, c, board[r][c]);
}

function renderCell(cell, r, c, value) {
  cell.classList.remove("image-reveal", "revealed", "wrong-fill");
  cell.innerHTML = "";
  cell.removeAttribute("style");

  if (hasImageReveal(puzzle)) {
    applyImageRevealCell(cell, r, c, value);
  } else if (value !== null && value !== 0) {
    cell.innerHTML = cellValueToken(value);
  }
}

function hasImageReveal(targetPuzzle) {
  return Boolean(targetPuzzle?.sourceImage && targetPuzzle?.lineArtImage);
}

function applyImageRevealCell(cell, r, c, value) {
  cell.classList.add("image-reveal");

  if (completed) {
    cell.classList.add("revealed");
    setCellImageSlice(cell, puzzle.sourceImage, r, c);
    return;
  }

  if (hasImageHint(r, c)) {
    setCellImageSlice(cell, puzzle.lineArtImage, r, c);
  }

  if (value !== null && value !== 0) {
    if (value === puzzle.solution[r][c]) {
      cell.classList.add("revealed");
      setCellImageSlice(cell, puzzle.sourceImage, r, c);
    } else {
      cell.classList.add("wrong-fill");
      cell.innerHTML = cellValueToken(value);
    }
  }
}

function revealNextImageHint() {
  if (!hasImageReveal(puzzle)) return false;
  for (let r = 0; r < puzzle.size; r++) {
    for (let c = 0; c < puzzle.size; c++) {
      if (puzzle.solution[r][c] === 0) continue;
      if (board[r][c] === puzzle.solution[r][c]) continue;
      const key = coordKey(r, c);
      if (!imageRevealCells.has(key)) {
        imageRevealCells.add(key);
        return true;
      }
    }
  }
  return false;
}

function setCellImageSlice(cell, imageUrl, r, c) {
  const denom = Math.max(1, puzzle.size - 1);
  cell.style.backgroundImage = `url("${imageUrl}")`;
  cell.style.backgroundSize = `${puzzle.size * 100}% ${puzzle.size * 100}%`;
  cell.style.backgroundPosition = `${(c / denom) * 100}% ${(r / denom) * 100}%`;
}

function updateProgress() {
  document.getElementById("progress").textContent = progressFor(puzzle, board) + "%";
  document.getElementById("missCount").textContent = miss;
}

function isSolved() {
  for (let r = 0; r < puzzle.size; r++) {
    for (let c = 0; c < puzzle.size; c++) {
      const expected = puzzle.solution[r][c];
      const actual = board[r][c] ?? 0;
      if (actual !== expected) return false;
    }
  }
  return true;
}

function checkCompletion() {
  if (completed || !isSolved()) return;
  elapsedBeforeStart = currentElapsedSeconds();
  started = Date.now();
  completed = true;
  completedAt = new Date().toISOString();
  saveProgress();
  showClearDialog();
  setTimeout(revealCompletedImage, 30);
}

function showClearDialog() {
  const dialog = document.getElementById("clearDialog");
  const summary = document.getElementById("clearSummary");
  const nextButton = document.getElementById("nextPuzzleBtn");
  const next = nextPuzzle();
  document.getElementById("puzzleTitle").textContent = puzzleAnswerTitle(puzzle);
  document.getElementById("puzzleDesc").textContent = puzzleAnswerDescription(puzzle);
  summary.textContent = `${puzzleAnswerTitle(puzzle)} / ${currentElapsedSecondsText()} / ${ui.miss} ${miss} / ${ui.guessed} ${guessPercentText()}`;
  if (next) {
    nextButton.disabled = false;
    nextButton.textContent = ui.nextPuzzle;
  } else {
    nextButton.disabled = true;
    nextButton.textContent = ui.allClear;
  }

  renderAdSlot("adClearBottom", "clearDialogBottom");
  if (!dialog.open) dialog.showModal();
}

function guessPercentText() {
  return guessedRevealRate == null ? ui.unrecorded : `${Math.round(guessedRevealRate * 100)}%`;
}

function openGuessDialog() {
  if (!puzzle || completed) return;
  if (guessedRevealRate != null) {
    alert(ui.alreadyGuessed);
    return;
  }
  const dialog = document.getElementById("guessDialog");
  const choices = document.getElementById("guessChoices");
  choices.innerHTML = "";
  buildGuessChoices().forEach(choice => {
    const button = document.createElement("button");
    button.type = "button";
    button.textContent = choice.title;
    button.onclick = () => answerGuess(choice);
    choices.appendChild(button);
  });
  if (!dialog.open) dialog.showModal();
}

function buildGuessChoices() {
  const storedChoices = puzzle.guessChoices?.[appLocale] ?? puzzle.guessChoices?.en;
  if (Array.isArray(storedChoices) && storedChoices.length) return storedChoices;
  const currentTitle = puzzleAnswerTitle(puzzle);
  const distractors = puzzles
    .filter(item => item.id !== puzzle.id && puzzleAnswerTitle(item) && puzzleAnswerTitle(item) !== currentTitle)
    .map(item => ({ id: item.id, title: puzzleAnswerTitle(item), correct: false }));
  distractors.sort((a, b) => seededRatio(`${puzzle.id}:${a.id}:choice`) - seededRatio(`${puzzle.id}:${b.id}:choice`));
  const choices = [{ id: puzzle.id, title: currentTitle, correct: true }, ...distractors.slice(0, 3)];
  choices.sort((a, b) => seededRatio(`${puzzle.id}:${a.id}:order`) - seededRatio(`${puzzle.id}:${b.id}:order`));
  return choices;
}

function answerGuess(choice) {
  document.getElementById("guessDialog").close();
  guessAttempts++;
  guessedAnswerId = choice?.id ?? null;
  if (!choice?.correct) {
    saveProgress();
    alert(ui.wrongGuess);
    return;
  }
  guessedRevealRate = progressFor(puzzle, board) / 100;
  saveProgress();
  alert(ui.correctGuess(Math.round(guessedRevealRate * 100)));
}

function shareText(locale = appLocale) {
  const number = String(puzzleNumber()).padStart(3, "0");
  const reveal = guessPercentText();
  const noHint = hintsUsed === 0;
  const url = shareUrl();
  if (locale === "en") {
    return [
      `#Revealo #${number}`,
      `Guessed at ${reveal} Reveal`,
      `${noHint ? ui.noHint : ui.hintCount(hintsUsed)} | ${ui.missCount(miss)} | ${ui.streak}`,
      "",
      url
    ].join("\n");
  }
  return [
    `#Revealo #${number}`,
    ui.guessedAt(reveal),
    `${noHint ? ui.noHint : ui.hintCount(hintsUsed)} | ${ui.missCount(miss)} | ${ui.streak}`,
    "",
    url
  ].join("\n");
}

async function shareResult() {
  if (!puzzle) return;
  const text = shareText(appLocale);
  const data = { title: "Revealo", text };
  if (!navigator.share || (navigator.canShare && !navigator.canShare(data))) {
    alert(ui.shareUnavailable);
    return;
  }
  try {
    await navigator.share(data);
  } catch (error) {
    if (error?.name !== "AbortError") alert(ui.shareUnavailable);
  }
}

function shareUrl() {
  const base = location.pathname.endsWith("/") ? location.href : new URL("./", location.href).href;
  return new URL(`puzzles/${encodeURIComponent(puzzle.id)}/`, base).href;
}

async function copyResult() {
  if (!puzzle) return;
  const text = shareText(appLocale);
  try {
    await navigator.clipboard.writeText(text);
    alert(ui.shareCopied);
  } catch {
    const output = document.createElement("textarea");
    output.value = text;
    document.body.appendChild(output);
    output.select();
    document.execCommand("copy");
    output.remove();
    alert(ui.shareCopied);
  }
}

function tutorialState() {
  try {
    return JSON.parse(localStorage.getItem(tutorialKey) || "{}");
  } catch {
    return {};
  }
}

function isTutorialCompleted() {
  return tutorialState().version >= tutorialVersion;
}

function saveTutorialCompleted(skipped = false) {
  localStorage.setItem(tutorialKey, JSON.stringify({
    version: tutorialVersion,
    completedAt: new Date().toISOString(),
    skipped
  }));
}

function renderTutorialStep() {
  const steps = ui.tutorialSteps;
  const [title, body] = steps[tutorialStepIndex];
  const setText = (id, text) => {
    const el = document.getElementById(id);
    if (el) el.textContent = text;
  };
  setText("tutorialKicker", ui.tutorialKicker);
  setText("tutorialTitle", ui.tutorialTitle);
  setText("tutorialStepIcon", String(tutorialStepIndex + 1));
  setText("tutorialStepTitle", title);
  setText("tutorialStepBody", body);
  setText("tutorialSkipBtn", ui.tutorialSkip);
  setText("tutorialPrevBtn", ui.tutorialPrev);
  setText("tutorialNextBtn", tutorialStepIndex === steps.length - 1 ? ui.tutorialDone : ui.tutorialNext);
  const prev = document.getElementById("tutorialPrevBtn");
  if (prev) prev.disabled = tutorialStepIndex === 0;
  const dots = document.getElementById("tutorialDots");
  if (dots) {
    dots.innerHTML = steps.map((_, index) =>
      `<span class="tutorial-dot${index === tutorialStepIndex ? " active" : ""}"></span>`
    ).join("");
  }
}

function openTutorialDialog() {
  tutorialStepIndex = 0;
  renderTutorialStep();
  document.getElementById("tutorialDialog")?.showModal();
}

function finishTutorial(skipped = false) {
  saveTutorialCompleted(skipped);
  document.getElementById("tutorialDialog")?.close();
  const puzzleId = pendingStartupPuzzleId;
  pendingStartupPuzzleId = null;
  if (puzzleId && !puzzle) startPuzzle(puzzleId);
}

function startInitialPuzzleWithTutorial() {
  pendingStartupPuzzleId = initialPuzzleId();
  if (!pendingStartupPuzzleId) return;
  if (isTutorialCompleted()) {
    const puzzleId = pendingStartupPuzzleId;
    pendingStartupPuzzleId = null;
    startPuzzle(puzzleId);
    return;
  }
  openTutorialDialog();
}

function applyLocaleText() {
  document.title = ui.appTitle;
  const headerTitle = document.querySelector(".header h1");
  const headerSubtitle = document.querySelector(".header p");
  if (headerTitle) headerTitle.textContent = ui.appTitle;
  if (headerSubtitle) headerSubtitle.textContent = ui.appSubtitle;
  const setText = (id, text) => {
    const el = document.getElementById(id);
    if (el) el.textContent = text;
  };
  setText("backBtn", ui.back);
  setText("checkBtn", ui.check);
  setText("hintBtn", ui.hint);
  setText("guessBtn", ui.guessButton);
  setText("undoBtn", ui.undo);
  setText("shareResultBtn", ui.shareResult);
  setText("copyResultBtn", ui.copyResult);
  setText("clearBackBtn", ui.back);
  setText("closeClear", ui.close);
  setText("closeHelp", ui.close);
  setText("openTutorialBtn", ui.tutorialReplay);
  setText("closeGuess", ui.close);
  setText("guessDialogTitle", ui.guessDialogTitle);
  setText("guessDialogPrompt", ui.guessPrompt);
  setText("nextPuzzleBtn", ui.nextPuzzle);
  const clearTitle = document.querySelector("#clearDialog h3");
  if (clearTitle) clearTitle.textContent = ui.clearTitle;
  const helpTitle = document.querySelector("#helpDialog h3");
  if (helpTitle) helpTitle.textContent = ui.helpTitle;
  const helpParagraphs = document.querySelectorAll("#helpDialog p");
  [ui.help1, ui.help2, ui.help3].forEach((text, index) => {
    if (helpParagraphs[index]) helpParagraphs[index].textContent = text;
  });
  const missStat = document.querySelector(".stats span:first-child");
  if (missStat?.firstChild) missStat.firstChild.textContent = `${ui.miss} `;
}

function currentPuzzleIndex() {
  return puzzles.findIndex(item => item.id === puzzle?.id);
}

function nextPuzzle() {
  const index = currentPuzzleIndex();
  if (index < 0 || index >= puzzles.length - 1) return null;
  return puzzles[index + 1];
}

function startNextPuzzle() {
  const next = nextPuzzle();
  if (!next) return;
  document.getElementById("clearDialog").close();
  startPuzzle(next.id);
}

function initialPuzzleId() {
  const params = new URLSearchParams(window.location.search);
  const requested = params.get("p");
  if (requested && puzzles.some(item => item.id === requested)) return requested;
  return firstUnclearedPuzzleId();
}

function revealCompletedImage() {
  if (!puzzle || !completed || !hasImageReveal(puzzle)) return;
  requestAnimationFrame(renderGrid);
}

function currentElapsedSecondsText() {
  const seconds = currentElapsedSeconds();
  const min = Math.floor(seconds / 60).toString().padStart(2, "0");
  const sec = (seconds % 60).toString().padStart(2, "0");
  return `${min}:${sec}`;
}

function update() {
  renderGrid();
  updateProgress();
  saveProgress();
  checkCompletion();
}

function hint() {
  if (!puzzle || completed) return;
  for (let r = 0; r < puzzle.size; r++) {
    for (let c = 0; c < puzzle.size; c++) {
      if (!isGiven(r,c) && puzzle.solution[r][c] !== 0 && board[r][c] !== puzzle.solution[r][c]) {
        history.push(JSON.stringify(board));
        board[r][c] = puzzle.solution[r][c];
        hintsUsed += 1;
        update();
        return;
      }
    }
  }
}

function check() {
  if (!puzzle) return;
  if (isSolved()) {
    checkCompletion();
    return;
  }

  let wrong = 0;
  for (let r = 0; r < puzzle.size; r++) {
    for (let c = 0; c < puzzle.size; c++) {
      const expected = puzzle.solution[r][c];
      const actual = board[r][c] ?? 0;
      if (actual !== 0 && actual !== expected) wrong++;
    }
  }
  miss += wrong;
  updateProgress();
  saveProgress();
  alert(wrong === 0 ? ui.correctSoFar : ui.wrongCount(wrong));
}

function undo() {
  if (!puzzle || completed) return;
  const prev = history.pop();
  if (prev) {
    board = JSON.parse(prev);
    update();
  }
}

function formatSolutionMap(map) {
  return `solution: [\n${map.map(row => `  [${row.join(",")}],`).join("\n")}\n]`;
}

function formatColorSolutionMap(map, palette) {
  const paletteText = palette
    .map(color => `  { id: ${color.id}, color: "${color.color}", text: "${color.text}" },`)
    .join("\n");
  return `mode: "color",\npalette: [\n${paletteText}\n],\nsolution: [\n${map.map(row => `  [${row.join(",")}],`).join("\n")}\n]`;
}

function drawMapPreview(map, mode = "classic", palette = null) {
  const canvas = document.getElementById("mapPreview");
  const ctx = canvas.getContext("2d");
  const size = map.length;
  const cell = canvas.width / size;
  const fills = ["#ffffff", "#9ca3af", "#111827"];

  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (let r = 0; r < size; r++) {
    for (let c = 0; c < size; c++) {
      if (mode === "color") {
        ctx.fillStyle = palette.find(color => color.id === map[r][c])?.color ?? "#ffffff";
        ctx.fillRect(c * cell, r * cell, cell, cell);
      } else {
        ctx.fillStyle = fills[map[r][c]];
        ctx.fillRect(c * cell, r * cell, cell, cell);
      }
      ctx.strokeStyle = "rgba(17,24,39,.18)";
      ctx.strokeRect(c * cell, r * cell, cell, cell);
    }
  }
}

function imageToSolutionMap(image, size, whiteThreshold) {
  const scale = 10;
  const sampleSize = size * scale;
  const source = document.createElement("canvas");
  const sourceCtx = source.getContext("2d", { willReadFrequently: true });
  const crop = Math.min(image.naturalWidth, image.naturalHeight);
  const sx = Math.floor((image.naturalWidth - crop) / 2);
  const sy = Math.floor((image.naturalHeight - crop) / 2);

  source.width = sampleSize;
  source.height = sampleSize;
  sourceCtx.fillStyle = "#fff";
  sourceCtx.fillRect(0, 0, sampleSize, sampleSize);
  sourceCtx.drawImage(image, sx, sy, crop, crop, 0, 0, sampleSize, sampleSize);

  const data = sourceCtx.getImageData(0, 0, sampleSize, sampleSize).data;
  const map = [];

  for (let r = 0; r < size; r++) {
    const row = [];
    for (let c = 0; c < size; c++) {
      const samples = [];
      for (let y = 0; y < scale; y++) {
        for (let x = 0; x < scale; x++) {
          const sampleX = c * scale + x;
          const sampleY = r * scale + y;
          const index = (sampleY * sampleSize + sampleX) * 4;
          const alpha = data[index + 3] / 255;
          const red = data[index] * alpha + 255 * (1 - alpha);
          const green = data[index + 1] * alpha + 255 * (1 - alpha);
          const blue = data[index + 2] * alpha + 255 * (1 - alpha);
          const luminance = 0.2126 * red + 0.7152 * green + 0.0722 * blue;
          samples.push(100 - (luminance / 255) * 100);
        }
      }
      row.push(classicLevelFromSamples(samples, whiteThreshold));
    }
    map.push(row);
  }

  return map;
}

function imageToColorSolutionMap(image, size, palette, repairMap = null) {
  const scale = 10;
  const sampleSize = size * scale;
  const source = document.createElement("canvas");
  const sourceCtx = source.getContext("2d", { willReadFrequently: true });
  const crop = Math.min(image.naturalWidth, image.naturalHeight);
  const sx = Math.floor((image.naturalWidth - crop) / 2);
  const sy = Math.floor((image.naturalHeight - crop) / 2);

  source.width = sampleSize;
  source.height = sampleSize;
  sourceCtx.fillStyle = "#fff";
  sourceCtx.fillRect(0, 0, sampleSize, sampleSize);
  sourceCtx.drawImage(image, sx, sy, crop, crop, 0, 0, sampleSize, sampleSize);

  const data = sourceCtx.getImageData(0, 0, sampleSize, sampleSize).data;
  const map = [];

  for (let r = 0; r < size; r++) {
    const row = [];
    for (let c = 0; c < size; c++) {
      const totals = new Map(palette.map(color => [color.id, 0]));
      for (let y = 0; y < scale; y++) {
        for (let x = 0; x < scale; x++) {
          const sampleX = c * scale + x;
          const sampleY = r * scale + y;
          const index = (sampleY * sampleSize + sampleX) * 4;
          const alpha = data[index + 3] / 255;
          const rgb = {
            r: data[index] * alpha + 255 * (1 - alpha),
            g: data[index + 1] * alpha + 255 * (1 - alpha),
            b: data[index + 2] * alpha + 255 * (1 - alpha)
          };
          const nearest = nearestPaletteColor(rgb, palette);
          totals.set(nearest.id, totals.get(nearest.id) + 1);
        }
      }
      const ranked = [...totals.entries()].sort((a, b) => b[1] - a[1]);
      let colorId = ranked[0][0];
      if (colorId === 0 && repairMap?.[r]?.[c] !== 0) {
        colorId = ranked.find(([id]) => id !== 0)?.[0] ?? colorId;
      }
      row.push(colorId);
    }
    map.push(row);
  }

  return map;
}

function parsePromptPalette() {
  const colors = document.getElementById("promptPalette").value.match(/#[0-9a-fA-F]{6}/g) ?? [];
  const fallback = promptPalettes.color.match(/#[0-9a-fA-F]{6}/g);
  const preset = currentPalettePreset();
  return (colors.length ? colors : fallback).map((color, index) => {
    const normalized = color.toUpperCase();
    const presetColor = preset.colors.find(item => item.color.toUpperCase() === normalized) ?? preset.colors[index];
    return { id: index, color: normalized, text: presetColor?.text ?? textColorForBg(normalized), ...hexToRgb(normalized) };
  });
}

function currentPalettePreset() {
  const key = document.getElementById("palettePreset")?.value ?? "classic";
  if (key !== "auto") return colorPalettePresets[key] ?? colorPalettePresets.classic;
  return autoPalettePreset();
}

function autoPalettePreset() {
  const subject = document.getElementById("promptSubject")?.value ?? "";
  const mood = document.getElementById("promptMood")?.value ?? "";
  const text = `${subject} ${mood}`;
  return Object.values(colorPalettePresets).find(preset =>
    preset.keywords?.some(keyword => text.includes(keyword))
  ) ?? colorPalettePresets.classic;
}

function paletteToPromptText(preset = currentPalettePreset()) {
  return preset.colors.map(item => item.color).join(", ");
}

function hexToRgb(hex) {
  const normalized = hex.replace("#", "");
  return {
    r: parseInt(normalized.slice(0, 2), 16),
    g: parseInt(normalized.slice(2, 4), 16),
    b: parseInt(normalized.slice(4, 6), 16)
  };
}

function nearestPaletteColor(rgb, palette) {
  return palette
    .map(color => ({
      ...color,
      distance: (rgb.r - color.r) ** 2 + (rgb.g - color.g) ** 2 + (rgb.b - color.b) ** 2
    }))
    .sort((a, b) => a.distance - b.distance)[0];
}

function classicLevelFromSamples(samples, whiteThreshold) {
  const sorted = [...samples].sort((a, b) => a - b);
  const averageDarkness = average(samples);
  const peakDarkness = sorted[Math.floor(sorted.length * 0.86)];
  const grayThreshold = whiteThreshold + (100 - whiteThreshold) * 0.28;
  const blackThreshold = whiteThreshold + (100 - whiteThreshold) * 0.58;
  const blackCoverage = samples.filter(value => value >= blackThreshold).length / samples.length;

  if (peakDarkness < whiteThreshold && averageDarkness < whiteThreshold) return 0;
  if (peakDarkness >= blackThreshold || blackCoverage >= 0.08) return 2;
  if (averageDarkness >= grayThreshold || peakDarkness >= grayThreshold) return 1;
  return 0;
}

function createCroppedImageUrl(image, outputSize = 720) {
  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");
  const crop = Math.min(image.naturalWidth, image.naturalHeight);
  const sx = Math.floor((image.naturalWidth - crop) / 2);
  const sy = Math.floor((image.naturalHeight - crop) / 2);

  canvas.width = outputSize;
  canvas.height = outputSize;
  ctx.fillStyle = "#fff";
  ctx.fillRect(0, 0, outputSize, outputSize);
  ctx.drawImage(image, sx, sy, crop, crop, 0, 0, outputSize, outputSize);
  return canvas.toDataURL("image/png");
}

function createLineArtImageUrl(image, outputSize = 720, options = {}) {
  const edgeThreshold = options.edgeThreshold ?? 26;
  const lineOpacity = options.lineOpacity ?? 115;
  const lineWidth = options.lineWidth ?? 1;
  const source = document.createElement("canvas");
  const sourceCtx = source.getContext("2d", { willReadFrequently: true });
  const crop = Math.min(image.naturalWidth, image.naturalHeight);
  const sx = Math.floor((image.naturalWidth - crop) / 2);
  const sy = Math.floor((image.naturalHeight - crop) / 2);

  source.width = outputSize;
  source.height = outputSize;
  sourceCtx.fillStyle = "#fff";
  sourceCtx.fillRect(0, 0, outputSize, outputSize);
  sourceCtx.drawImage(image, sx, sy, crop, crop, 0, 0, outputSize, outputSize);

  const sourceData = sourceCtx.getImageData(0, 0, outputSize, outputSize);
  const lineData = sourceCtx.createImageData(outputSize, outputSize);
  const gray = new Float32Array(outputSize * outputSize);
  const edges = new Uint8Array(outputSize * outputSize);

  for (let i = 0; i < sourceData.data.length; i += 4) {
    const index = i / 4;
    gray[index] = 0.2126 * sourceData.data[i] + 0.7152 * sourceData.data[i + 1] + 0.0722 * sourceData.data[i + 2];
  }

  for (let y = 0; y < outputSize; y++) {
    for (let x = 0; x < outputSize; x++) {
      const index = y * outputSize + x;
      const right = gray[y * outputSize + Math.min(outputSize - 1, x + 1)];
      const down = gray[Math.min(outputSize - 1, y + 1) * outputSize + x];
      const edge = Math.abs(gray[index] - right) + Math.abs(gray[index] - down);
      edges[index] = edge > edgeThreshold ? 1 : 0;
    }
  }

  const radius = Math.max(0, lineWidth - 1);
  for (let y = 0; y < outputSize; y++) {
    for (let x = 0; x < outputSize; x++) {
      let strong = false;
      for (let oy = -radius; oy <= radius && !strong; oy++) {
        for (let ox = -radius; ox <= radius; ox++) {
          const nx = x + ox;
          const ny = y + oy;
          if (nx < 0 || ny < 0 || nx >= outputSize || ny >= outputSize) continue;
          if (edges[ny * outputSize + nx]) {
            strong = true;
            break;
          }
        }
      }

      const index = y * outputSize + x;
      const out = index * 4;
      const value = strong ? 165 : 255;
      lineData.data[out] = value;
      lineData.data[out + 1] = value;
      lineData.data[out + 2] = value;
      lineData.data[out + 3] = strong ? lineOpacity : 255;
    }
  }

  const line = document.createElement("canvas");
  const lineCtx = line.getContext("2d");
  line.width = outputSize;
  line.height = outputSize;
  lineCtx.fillStyle = "#fff";
  lineCtx.fillRect(0, 0, outputSize, outputSize);
  lineCtx.putImageData(lineData, 0, 0);
  return line.toDataURL("image/png");
}

function average(values) {
  return values.reduce((sum, value) => sum + value, 0) / values.length;
}

function toolSettingIds() {
  return ["mapSize", "clueLevel", "palettePreset", "whiteThreshold", "edgeThreshold", "lineOpacity", "lineWidth"];
}

function readToolSettings() {
  return Object.fromEntries(toolSettingIds().map(id => [id, document.getElementById(id).value]));
}

function applyToolSettings(settings) {
  for (const [id, value] of Object.entries(settings)) {
    const el = document.getElementById(id);
    if (el) el.value = value;
  }
  updateToolSettingLabels();
}

function updateToolSettingLabels() {
  for (const id of ["whiteThreshold", "edgeThreshold", "lineOpacity", "lineWidth"]) {
    document.getElementById(`${id}Value`).textContent = document.getElementById(id).value;
  }
}

function loadToolDefaults() {
  try {
    const raw = localStorage.getItem(toolDefaultsKey);
    if (raw) applyToolSettings(JSON.parse(raw));
  } catch {
    updateToolSettingLabels();
  }
  updateToolSettingLabels();
}

function saveToolDefaults() {
  localStorage.setItem(toolDefaultsKey, JSON.stringify(readToolSettings()));
  alert("現在の設定をデフォルトとして保存しました。");
}

function pickSubjectIdea() {
  const current = document.getElementById("promptSubject")?.value.trim();
  const candidates = subjectIdeas.filter(subject => subject !== current);
  return candidates[Math.floor(Math.random() * candidates.length)] ?? subjectIdeas[0];
}

function autoFillSubject() {
  document.getElementById("promptSubject").value = pickSubjectIdea();
  if (document.getElementById("promptColorMode").value === "color") {
    document.getElementById("promptPalette").value = paletteToPromptText();
  }
  generateImagePrompt();
}

function applyPromptColorMode() {
  const mode = document.getElementById("promptColorMode").value;
  document.getElementById("promptPalette").value = mode === "color" ? paletteToPromptText() : promptPalettes.mono;
  generateImagePrompt();
}

function applyPalettePreset() {
  if (document.getElementById("promptColorMode").value === "color") {
    document.getElementById("promptPalette").value = paletteToPromptText();
  }
  generateImagePrompt();
  generateSolutionMap();
}

function generateImagePrompt() {
  const subjectInput = document.getElementById("promptSubject");
  if (!subjectInput.value.trim()) subjectInput.value = pickSubjectIdea();
  const subject = subjectInput.value.trim();
  const mood = document.getElementById("promptMood").value.trim() || "calm, simple, relaxing";
  const colorMode = document.getElementById("promptColorMode").value;
  if (colorMode === "color") document.getElementById("promptPalette").value = paletteToPromptText();
  const palette = document.getElementById("promptPalette").value.trim() || "#FFFFFF, #9CA3AF, #111827";
  const paletteName = colorMode === "color" ? currentPalettePreset().name : "Monochrome";
  const size = Number(document.getElementById("mapSize").value);
  const complexity = size <= 12
    ? "extremely simple, only one large subject, readable at very low resolution"
    : size <= 25
      ? "simple composition with two or three large shapes, readable at low resolution"
      : "clean composition with bold shapes, still readable when reduced to a puzzle grid";
  const colorNote = colorMode === "color"
    ? "This is the color edition. Keep the artwork colorful but restricted to the listed palette only."
    : "This is the monochrome edition. Use only white, medium gray, and black from the listed palette.";

  const prompt = `Create a square reference image for Coloring Logic, a logic coloring puzzle.
Subject: ${subject}.
Mood and theme: ${mood}.
Target puzzle size: ${size}x${size}. ${complexity}.
Use only these exact flat colors: ${palette}.
Palette style: ${paletteName}.
${colorNote}
The image should work as a square-cell logic coloring puzzle.
Use large bold shapes, clear silhouettes, strong separation between foreground and background, and clean line-art-friendly edges.
No gradients, no shadows, no texture, no tiny details, no realistic lighting, no complex background, no text, no watermark, no border.
The image must remain recognizable after being quantized to the specified limited palette and converted into a small grid puzzle.`;

  document.getElementById("imagePromptOutput").value = prompt;
}

async function copyImagePrompt() {
  const output = document.getElementById("imagePromptOutput");
  if (!output.value) generateImagePrompt();
  try {
    await navigator.clipboard.writeText(output.value);
  } catch {
    output.select();
    document.execCommand("copy");
  }
}

function generateSolutionMap(showAlert = false) {
  updateToolSettingLabels();
  if (!toolImage) {
    if (showAlert) alert("画像を選択してください。");
    return;
  }

  const size = Number(document.getElementById("mapSize").value);
  const whiteThreshold = Number(document.getElementById("whiteThreshold").value);
  const edgeThreshold = Number(document.getElementById("edgeThreshold").value);
  const lineOpacity = Number(document.getElementById("lineOpacity").value);
  const lineWidth = Number(document.getElementById("lineWidth").value);
  const clueLevel = document.getElementById("clueLevel").value;
  const clueMask = clueMaskLevels[clueLevel] ?? clueMaskLevels.normal;
  const colorMode = document.getElementById("promptColorMode").value;
  const colorPalette = parsePromptPalette();
  const outputMode = colorMode === "color" ? "color" : "classic";
  const monoRepairMap = outputMode === "color" ? imageToSolutionMap(toolImage, size, whiteThreshold) : null;
  const map = outputMode === "color"
    ? imageToColorSolutionMap(toolImage, size, colorPalette, monoRepairMap)
    : imageToSolutionMap(toolImage, size, whiteThreshold);
  lastGeneratedMap = map;
  lastGeneratedMode = outputMode;
  lastGeneratedPalette = outputMode === "color" ? colorPalette.map(({ id, color, text }) => ({ id, color, text })) : null;
  lastSourceImageUrl = outputMode === "classic" || outputMode === "color" ? createCroppedImageUrl(toolImage) : null;
  lastLineArtImageUrl = outputMode === "classic" || outputMode === "color"
    ? createLineArtImageUrl(toolImage, 720, { edgeThreshold, lineOpacity, lineWidth })
    : null;
  document.getElementById("solutionOutput").value = outputMode === "color"
    ? formatColorSolutionMap(map, colorPalette)
    : formatSolutionMap(map);
  drawMapPreview(map, outputMode, colorPalette);
  drawLinePreview(lastLineArtImageUrl);
}

function drawLinePreview(imageUrl) {
  const canvas = document.getElementById("linePreview");
  const ctx = canvas.getContext("2d");
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "#fff";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  if (!imageUrl) return;

  const image = new Image();
  image.onload = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
  };
  image.src = imageUrl;
}

function addGeneratedImagePuzzle() {
  const isSupportedMode = lastGeneratedMode === "classic" || lastGeneratedMode === "color";
  if (!lastGeneratedMap || !isSupportedMode || !lastSourceImageUrl || !lastLineArtImageUrl) {
    alert("白黒またはカラーで画像からsolutionを生成してください。");
    return;
  }

  const isColor = lastGeneratedMode === "color";
  const clueLevel = document.getElementById("clueLevel").value;
  const clueMask = clueMaskLevels[clueLevel] ?? clueMaskLevels.normal;
  const stamp = Date.now();
  const generatedPuzzle = {
    id: `image-reveal-${stamp}`,
    mode: isColor ? "color" : "classic",
    size: lastGeneratedMap.length,
    title: isColor ? "Color Image Reveal" : "Image Reveal",
    description: "薄い線画から元画像を発掘するパズル",
    theme: "画像",
    difficulty: "Generated",
    createdAt: new Date().toISOString().slice(0, 10),
    clueMask,
    sourceImage: lastSourceImageUrl,
    lineArtImage: lastLineArtImageUrl,
    ...(isColor ? { palette: lastGeneratedPalette } : {}),
    solution: lastGeneratedMap,
    givens: pickGeneratedGivens(lastGeneratedMap, clueMask)
  };

  puzzles.push(generatedPuzzle);
  renderPuzzleSelect();
  startPuzzle(generatedPuzzle.id);
}

function pickGeneratedGivens(map, clueMask = clueMaskLevels.normal) {
  const candidates = [];
  for (let r = 0; r < map.length; r++) {
    for (let c = 0; c < map.length; c++) {
      if (map[r][c] !== 0) candidates.push([r, c]);
    }
  }

  if (!candidates.length) return [];

  const count = Math.min(Math.max(clueMask.minGivens ?? 0, Math.round(map.length * (clueMask.givenRate ?? 0))), candidates.length);
  if (count <= 0) return [];
  const step = Math.max(1, Math.floor(candidates.length / count));
  const givens = [];
  for (let i = 0; i < candidates.length && givens.length < count; i += step) {
    givens.push(candidates[i]);
  }
  return givens;
}

function loadToolImage(file) {
  if (!file) return;

  const image = new Image();
  image.onload = () => {
    toolImage = image;
    generateSolutionMap();
  };
  image.onerror = () => {
    toolImage = null;
    alert("画像を読み込めませんでした。");
  };
  image.src = URL.createObjectURL(file);
}

setInterval(() => {
  if (!puzzle) return;
  const sec = currentElapsedSeconds();
  const m = String(Math.floor(sec / 60)).padStart(2, "0");
  const s = String(sec % 60).padStart(2, "0");
  document.getElementById("timer").textContent = `${m}:${s}`;
}, 1000);

document.getElementById("hintBtn").onclick = hint;
document.getElementById("checkBtn").onclick = check;
document.getElementById("undoBtn").onclick = undo;
document.getElementById("backBtn").onclick = showPuzzleSelect;
document.getElementById("generatePromptBtn").onclick = generateImagePrompt;
document.getElementById("copyPromptBtn").onclick = copyImagePrompt;
document.getElementById("autoSubjectBtn").onclick = autoFillSubject;
document.getElementById("promptColorMode").onchange = () => {
  applyPromptColorMode();
  generateSolutionMap();
};
document.getElementById("palettePreset").onchange = applyPalettePreset;
document.getElementById("imageInput").onchange = event => loadToolImage(event.target.files[0]);
document.getElementById("mapSize").onchange = () => {
  generateImagePrompt();
  generateSolutionMap();
};
document.getElementById("clueLevel").onchange = generateSolutionMap;
document.getElementById("whiteThreshold").oninput = generateSolutionMap;
document.getElementById("edgeThreshold").oninput = generateSolutionMap;
document.getElementById("lineOpacity").oninput = generateSolutionMap;
document.getElementById("lineWidth").oninput = generateSolutionMap;
document.getElementById("generateMapBtn").onclick = () => generateSolutionMap(true);
document.getElementById("saveToolDefaultsBtn").onclick = saveToolDefaults;
document.getElementById("addImagePuzzleBtn").onclick = addGeneratedImagePuzzle;
document.getElementById("copySolutionBtn").onclick = async () => {
  const output = document.getElementById("solutionOutput");
  if (!output.value) return;
  try {
    await navigator.clipboard.writeText(output.value);
  } catch {
    output.select();
    document.execCommand("copy");
  }
};
document.getElementById("helpBtn").onclick = () => document.getElementById("helpDialog").showModal();
document.getElementById("closeHelp").onclick = () => document.getElementById("helpDialog").close();
document.getElementById("openTutorialBtn").onclick = () => {
  document.getElementById("helpDialog").close();
  openTutorialDialog();
};
document.getElementById("tutorialSkipBtn").onclick = () => finishTutorial(true);
document.getElementById("tutorialPrevBtn").onclick = () => {
  tutorialStepIndex = Math.max(0, tutorialStepIndex - 1);
  renderTutorialStep();
};
document.getElementById("tutorialNextBtn").onclick = () => {
  if (tutorialStepIndex >= ui.tutorialSteps.length - 1) {
    finishTutorial(false);
    return;
  }
  tutorialStepIndex += 1;
  renderTutorialStep();
};
document.getElementById("tutorialDialog").addEventListener("cancel", event => event.preventDefault());
document.getElementById("closeClear").onclick = () => document.getElementById("clearDialog").close();
document.getElementById("closeGuess").onclick = () => document.getElementById("guessDialog").close();
document.getElementById("guessBtn").onclick = openGuessDialog;
document.getElementById("shareResultBtn").onclick = shareResult;
document.getElementById("copyResultBtn").onclick = copyResult;
document.getElementById("nextPuzzleBtn").onclick = startNextPuzzle;
document.getElementById("clearBackBtn").onclick = () => {
  document.getElementById("clearDialog").close();
  showPuzzleSelect();
};
window.addEventListener("pointerup", finishCellDrag);
window.addEventListener("pointercancel", finishCellDrag);
window.addEventListener("pointermove", dragMoveCell, { passive: false });
window.addEventListener("resize", () => {
  if (!puzzle) return;
  updatePuzzleLayoutMetrics();
});
window.visualViewport?.addEventListener("resize", () => {
  if (!puzzle) return;
  updatePuzzleLayoutMetrics();
});
window.addEventListener("orientationchange", () => {
  if (!puzzle) return;
  setTimeout(updatePuzzleLayoutMetrics, 80);
});
window.addEventListener("beforeunload", saveProgress);

applyLocaleText();
loadToolDefaults();
generateImagePrompt();
renderPuzzleSelect();
startInitialPuzzleWithTutorial();

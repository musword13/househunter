# 賞屋獵人 · 湖芯AIT

精品住宅策展平台 — 純靜態 HTML/CSS/JS，零依賴，可直接部署到 Zeabur。

---

## 📁 專案結構

```
huxin-v2/
├── index.html     ← Explore 主頁（建案列表）
├── diary.html     ← 賞屋日誌詳情頁（湖芯AIT）
├── zbpack.json    ← Zeabur 靜態部署設定
└── README.md
```

---

## ✅ 已實作功能

| 功能 | 說明 |
|---|---|
| 📸 Lightbox 相簿 | 點擊任何照片 → 全螢幕瀏覽，左右切換，縮圖列，鍵盤方向鍵 |
| 🗺 地址點擊開 Map | 點擊地址 → Modal 顯示 Google Maps 嵌入圖，並可直接開啟 Google Maps |
| 🏠 格局圖展示 | 平面圖獨立展示區塊，點擊可進入 Lightbox 放大 |
| 🔗 頁面切換 | Explore ↔ Diary 雙頁互連，底部導覽列同步 active 狀態 |
| ❤️ 互動按讚 | 愛心按讚計數動畫 |
| 📌 收藏建案 | Explore 頁每個建案卡片可收藏（書籤圖示） |

---

## 🚀 部署：GitHub → Zeabur

### Step 1：建立 GitHub 儲存庫

1. 前往 [github.com](https://github.com) → 右上角 `+` → `New repository`
2. Repository name 填 `huxin-v2`（或任意名稱）
3. 選 Public 或 Private，**不要**勾選 Add README
4. 點 `Create repository`

### Step 2：上傳檔案

**方法 A：網頁拖曳上傳（最簡單）**
1. 進入空白 repo 頁面，點 `uploading an existing file`
2. 把 `index.html`、`diary.html`、`zbpack.json`、`README.md` 一起拖曳上去
3. Commit message 填 `feat: initial release`，點 `Commit changes`

**方法 B：Git 指令**
```bash
cd huxin-v2
git init
git add .
git commit -m "feat: initial release"
git remote add origin https://github.com/YOUR_USERNAME/huxin-v2.git
git branch -M main
git push -u origin main
```

### Step 3：Zeabur 部署

1. 前往 [zeabur.com](https://zeabur.com) → 用 GitHub 登入
2. `New Project` → `Deploy from GitHub` → 選 `huxin-v2`
3. Zeabur 自動偵測為靜態網站，點 `Deploy`
4. 完成後取得網址，例如：`https://huxin-v2.zeabur.app`

> 每次 `git push` 後，Zeabur 自動重新部署，無需手動操作。

---

## 🔄 更換格局圖片

在 `diary.html` 搜尋 `A1 戶型平面圖`，把對應 `<img src="...">` 的 URL 換成你自己的圖片路徑即可。

建議將圖片放到專案根目錄，例如 `floorplan-a1.jpg`，然後改為：
```html
src="floorplan-a1.jpg"
```

---

## 🛠 本地預覽

```bash
# macOS
open index.html

# Windows
start index.html
```

不需要安裝任何 Node.js 或建置工具。

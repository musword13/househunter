# 湖芯AIT — 賞屋日誌

一個純 HTML / CSS / JS 的單頁靜態網站，可直接部署到 Zeabur 或任何靜態主機。

---

## 📁 專案結構

```
huxin-ait/
├── index.html     ← 主頁面（全部程式碼在這裡）
├── zbpack.json    ← Zeabur 部署設定
└── README.md      ← 本說明文件
```

---

## 🚀 部署流程：GitHub → Zeabur

### Step 1：在 GitHub 建立儲存庫

1. 前往 [github.com](https://github.com) 並登入
2. 右上角點 **「+」→「New repository」**
3. 填入：
   - Repository name：`huxin-ait`（或任意名稱）
   - 選擇 **Public** 或 **Private**
   - **不要**勾選「Add a README file」（我們自己已經有了）
4. 點 **「Create repository」**

---

### Step 2：上傳程式碼到 GitHub

#### 方法 A：網頁直接上傳（最簡單）

1. 進入剛建立的空白 repo 頁面
2. 點 **「uploading an existing file」**（或拖曳上傳按鈕）
3. 把 `index.html`、`zbpack.json`、`README.md` 全部拖曳進去
4. 捲到底部，Commit message 填 `Initial commit`
5. 點 **「Commit changes」** ✅

#### 方法 B：用 Git 指令（進階）

```bash
# 1. 初始化本地 Git
cd huxin-ait
git init
git add .
git commit -m "Initial commit"

# 2. 連結到 GitHub（把 YOUR_USERNAME 換成你的帳號）
git remote add origin https://github.com/YOUR_USERNAME/huxin-ait.git
git branch -M main
git push -u origin main
```

如果是第一次用 Git，先安裝：[git-scm.com/downloads](https://git-scm.com/downloads)

---

### Step 3：在 Zeabur 部署

1. 前往 [zeabur.com](https://zeabur.com) 並登入（可用 GitHub 帳號登入）
2. 點 **「New Project」**
3. 選 **「Deploy from GitHub」**
4. 授權 Zeabur 存取你的 GitHub，選擇 `huxin-ait` repo
5. Zeabur 會自動偵測為靜態網站
6. 點 **「Deploy」**
7. 部署完成後，Zeabur 會給你一個網址，例如：
   `https://huxin-ait.zeabur.app`

---

## 🔄 之後更新內容

每次修改 `index.html` 後，重新上傳到 GitHub（或 `git push`），
Zeabur 會**自動重新部署**，無需手動操作。

---

## 🛠 本地預覽

直接用瀏覽器開啟 `index.html` 即可，不需要任何伺服器。

```bash
open index.html   # macOS
start index.html  # Windows
```

---

## 📌 注意事項

- 圖片使用外部 CDN 連結，若需換成自己的圖片，請將圖片放入專案並修改 `src` 路徑
- 此專案無需 Node.js、npm 或任何建置步驟

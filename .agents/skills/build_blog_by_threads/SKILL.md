---
name: build_blog_by_threads
description: 從 Threads 貼文網址自動爬取遊戲推薦留言，結合 Steam API 獲取官方資料，並自動分類生成高品質的 Blog 雙人/多人遊戲推薦文章。
---

# Build Blog by Threads

這個技能可以將一篇討論「遊戲推薦」的 Threads 貼文，自動轉化為結構化且具有吸引力的 Blog 推薦文章，並具備 Steam 官方商店資料的背書。

## 執行流程 (Workflow)

當收到使用本技能的指令，且附帶一段 Threads 網址時，請嚴格遵循以下步驟：

### 第一步：撈取 Threads 資料 (Data Extraction)
1. 使用 `browser_subagent` 或爬蟲工具瀏覽提供的 Threads 貼文網址。
2. 完整展開底下的留言串。
3. 擷取所有留言中推薦的「遊戲名稱」與「該名網友的推薦短語 (Threads Comment)」。

### 第二步：Steam 官方資料媒合與補齊 (Steam Data Fetching)
1. 將擷取到的遊戲名單，利用腳本（如 Python 呼叫 Steam Store API）或是 `search_web` 工具，逐一到 Steam 上進行搜尋。
2. 獲取每款遊戲的以下官方資料：
   * 真實遊戲名稱 (Title)
   * 官方簡短介紹 (Brief description)
   * 官方封面圖或遊戲影片素材連結 (Related Video / Hero Image)
   * Steam 商店專屬連結 (Steam Link)
   * **官方類型標籤 (Genres / Tags)**：特別注意是否有標示「動作」、「解謎」、「派對」、「恐怖」、「生存」等。

### 第三步：分類與 Blog 主題企劃 (Categorization & Ideation)
1. 依據上一步取得的 Steam 官方類型標籤，確認這是哪種類型的多人遊戲。
2. 將所有遊戲歸納為 3~5 個大群組（例如：派對破壞友誼、燒腦解謎合作、精神時光屋等）。
3. **創意發想**：為每個分類群組撰寫一個極具吸引力與創意的「文章標題 (Title)」以及「文章導讀 (Description)」。保持幽默、有趣且貼近玩家社群的口吻。

### 第四步：自動生成推薦文章與渲染 (Blog Generation)
1. 更新或產生相關的資料結構（例如專案中的 `articles.ts` 或資料庫 json）。
2. 在每個推薦的分類文章中，確保每一款入選的遊戲都包含以下 5 項必備元素，並渲染至 UI：
   1. **Title** (遊戲名稱與編號)
   2. **Brief Description** (結合 Steam 介紹與創意潤飾)
   3. **Threads Comment** (以對話氣泡或引言的方式，呈現社群真實留言推薦)
   4. **Related Video / Image** (嵌入遊戲預覽圖或假播放器)
   5. **Steam Link** (引導到商店的點擊按鈕)

## 技能觸發條件
- 當使用者提供一個包含遊戲討論的 Threads 連結。
- 當使用者明確要求："將這篇 Threads 轉成 Blog 文章"、"整理這些留言成推薦文章" 等關鍵字。

## 預期成果 (Expected Output)
- 一份完整的 JSON 或 TypeScript 資料檔，包含剛抓取完融合好的文章陣列。
- 如專案有對應的前端畫面 (`ArticleDetail.tsx` 等)，將會自動幫忙串接並產生精美排版。

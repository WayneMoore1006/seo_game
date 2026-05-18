import { Article } from '../types';

export const articles: Article[] = [
  {
    "id": "steam-wallet-guide",
    "category": "教學",
    "date": "MAY 8, 2026",
    "title": "Steam 儲值教學懶人包｜超商、信用卡、Steam 錢包儲值方式一次看懂（含退款與跨區注意事項）",
    "description": "想知道 Steam 怎麼儲值最方便？本文整理超商條碼、信用卡直購、Steam 錢包卡三種方式，附退款規則與跨區購買注意事項，讓你不踩雷、順利買到想玩的遊戲。",
    "heroImage": "https://news.codashop.com/tw/wp-content/uploads/sites/19/2024/07/STEAM-Free-to-download-games-2023.jpg",
    "seoTitle": "Steam儲值教學 2026｜超商、信用卡、Steam錢包付款一次看懂 | 四隻鳥遊戲推薦",
    "seoDescription": "整理 Steam 儲值教學，包括超商付款、信用卡付款、Steam 錢包卡、退款規則與跨區購買注意事項，幫助新手順利購買遊戲。",
    heroTags: ["Steam儲值", "Steam錢包", "Steam超商付款", "Steam信用卡付款", "Steam退款教學"],
    "targetKeywords": ["Steam怎麼儲值", "Steam錢包儲值", "Steam超商付款", "Steam信用卡付款", "Steam退款教學"],
    "audience": ["Steam 新手玩家", "想購買遊戲但不確定如何付款的玩家", "想了解退款規則的玩家", "沒有信用卡想用超商付款的玩家"],
    "selectionGuide": [
      "如果你沒有信用卡，推薦 超商條碼付款——現金付款，方便快速",
      "如果你想最快完成購買，推薦 信用卡直購——幾乎即時到帳",
      "如果你想送禮給朋友，推薦 Steam 錢包卡——購買數位序號當禮物",
      "如果你預算有限，推薦先儲值 Steam 錢包——控制預算避免衝動消費"
    ],
    "faqs": [
      {
        "question": "Steam 儲值可以用超商付款嗎？",
        "answer": "可以！Steam 台灣地區支援超商條碼付款（由歐付寶或藍新金流處理），前往 Steam 帳戶設定選擇「超商條碼付款」，取得條碼後到 7-11 ibon 或其他超商繳費即可，通常 15 分鐘內到帳。"
      },
      {
        "question": "Steam 遊戲可以退款嗎？條件是什麼？",
        "answer": "可以申請退款，條件是：購買後 14 天內，且遊玩時間未滿 2 小時。退款金額通常退回 Steam 錢包。部分 DLC 與遊戲內購項目不適用退款規則。"
      },
      {
        "question": "Steam 錢包餘額可以提領嗎？",
        "answer": "不行。Steam 錢包餘額一旦儲值就無法提領為現金，只能用於 Steam 平台消費（購買遊戲、DLC、社群市集等）。"
      },
      {
        "question": "台灣 Steam 是用新台幣計價嗎？",
        "answer": "是的，自 2022 年起台灣 Steam 已全面改為新台幣（NTD）計價，不需要再換算美金，購買更直覺方便。"
      }
    ],
    "relatedArticleIds": ["duo-best-picks", "casual-party", "action-puzzle", "survival-sim", "horror-strategy"],
    "body": `<h2 style="font-size:1.3rem;margin:1.5rem 0 0.5rem;color:#e2e8f0;">為什麼要儲值 Steam 錢包？</h2>
<p style="margin-bottom:1rem;">Steam 錢包（Steam Wallet）是 Valve 的虛擬帳戶餘額，儲值後可直接用來購買遊戲、DLC、遊戲內道具，也可以在社群市集交易道具。比起每次直接刷信用卡，先儲值再消費能更好地控制預算，也避免衝動消費。</p>
<div style="background:#0f1e30;border-left:3px solid #60a5fa;padding:0.875rem 1rem;border-radius:0 6px 6px 0;margin:1rem 0;">
  <p style="color:#60a5fa;font-weight:bold;font-size:0.85rem;margin:0 0 0.4rem;">💡 適用場景</p>
  <p style="color:#cbd5e1;margin:0;font-size:0.95rem;">購買遊戲本體、DLC 擴充內容、社群市集道具交易、訂閱 Steam 服務等，全部都可以用 Steam 錢包付款。</p>
</div>

<h2 style="font-size:1.3rem;margin:2rem 0 0.75rem;color:#e2e8f0;">三種主流儲值方式比較</h2>
<div style="overflow-x:auto;margin-bottom:1.5rem;">
<table style="width:100%;border-collapse:collapse;font-size:0.95rem;">
  <thead>
    <tr style="background:#1a2035;">
      <th style="padding:0.75rem 1rem;text-align:left;color:#a78bfa;border-bottom:2px solid #7c3aed;white-space:nowrap;">儲值方式</th>
      <th style="padding:0.75rem 1rem;text-align:left;color:#a78bfa;border-bottom:2px solid #7c3aed;">優點</th>
      <th style="padding:0.75rem 1rem;text-align:left;color:#a78bfa;border-bottom:2px solid #7c3aed;">缺點 / 限制</th>
      <th style="padding:0.75rem 1rem;text-align:left;color:#a78bfa;border-bottom:2px solid #7c3aed;white-space:nowrap;">適合對象</th>
    </tr>
  </thead>
  <tbody>
    <tr style="border-bottom:1px solid #1e2a3e;">
      <td style="padding:0.75rem 1rem;color:#e2e8f0;font-weight:600;white-space:nowrap;">超商條碼</td>
      <td style="padding:0.75rem 1rem;color:#cbd5e1;">免信用卡、現金付款</td>
      <td style="padding:0.75rem 1rem;color:#cbd5e1;">需出門、每筆上限 $2,000 NTD</td>
      <td style="padding:0.75rem 1rem;color:#cbd5e1;">未成年、無信用卡</td>
    </tr>
    <tr style="border-bottom:1px solid #1e2a3e;background:#131928;">
      <td style="padding:0.75rem 1rem;color:#e2e8f0;font-weight:600;white-space:nowrap;">信用卡 / 金融卡</td>
      <td style="padding:0.75rem 1rem;color:#cbd5e1;">最方便、即時到帳</td>
      <td style="padding:0.75rem 1rem;color:#cbd5e1;">需開通網路交易功能</td>
      <td style="padding:0.75rem 1rem;color:#cbd5e1;">一般玩家首選</td>
    </tr>
    <tr style="border-bottom:1px solid #1e2a3e;">
      <td style="padding:0.75rem 1rem;color:#e2e8f0;font-weight:600;white-space:nowrap;">Steam 錢包卡</td>
      <td style="padding:0.75rem 1rem;color:#cbd5e1;">適合送禮、兌換即時</td>
      <td style="padding:0.75rem 1rem;color:#cbd5e1;">需另行購買實體或數位卡</td>
      <td style="padding:0.75rem 1rem;color:#cbd5e1;">送禮、不想綁定信用卡</td>
    </tr>
  </tbody>
</table>
</div>

<h2 style="font-size:1.3rem;margin:2rem 0 0.75rem;color:#e2e8f0;">超商儲值步驟教學（以 7-11 為例）</h2>
<div style="display:flex;flex-direction:column;gap:0.75rem;margin-bottom:1.5rem;">
  <div style="display:flex;gap:0.875rem;align-items:flex-start;">
    <span style="background:#7c3aed;color:#fff;border-radius:50%;width:1.75rem;height:1.75rem;min-width:1.75rem;display:inline-flex;align-items:center;justify-content:center;font-weight:bold;font-size:0.8rem;margin-top:0.1rem;">1</span>
    <span style="color:#cbd5e1;">登入 Steam，點選右上角帳戶名稱 → <strong style="color:#e2e8f0;">帳戶詳細資料</strong>。</span>
  </div>
  <div style="display:flex;gap:0.875rem;align-items:flex-start;">
    <span style="background:#7c3aed;color:#fff;border-radius:50%;width:1.75rem;height:1.75rem;min-width:1.75rem;display:inline-flex;align-items:center;justify-content:center;font-weight:bold;font-size:0.8rem;margin-top:0.1rem;">2</span>
    <span style="color:#cbd5e1;">點選「<strong style="color:#e2e8f0;">新增資金到您的 Steam 錢包</strong>」。</span>
  </div>
  <div style="display:flex;gap:0.875rem;align-items:flex-start;">
    <span style="background:#7c3aed;color:#fff;border-radius:50%;width:1.75rem;height:1.75rem;min-width:1.75rem;display:inline-flex;align-items:center;justify-content:center;font-weight:bold;font-size:0.8rem;margin-top:0.1rem;">3</span>
    <span style="color:#cbd5e1;">選擇金額，付款方式選擇「<strong style="color:#e2e8f0;">超商條碼付款</strong>」（由歐付寶或藍新金流處理）。</span>
  </div>
  <div style="display:flex;gap:0.875rem;align-items:flex-start;">
    <span style="background:#7c3aed;color:#fff;border-radius:50%;width:1.75rem;height:1.75rem;min-width:1.75rem;display:inline-flex;align-items:center;justify-content:center;font-weight:bold;font-size:0.8rem;margin-top:0.1rem;">4</span>
    <span style="color:#cbd5e1;">取得條碼後，前往 7-11 ibon 機台或櫃台繳費。餘額通常在 <strong style="color:#34d399;">15 分鐘內</strong>到帳。</span>
  </div>
</div>

<h2 style="font-size:1.3rem;margin:2rem 0 0.75rem;color:#e2e8f0;">如何購買遊戲</h2>
<p style="margin-bottom:1rem;">儲值完成後，在遊戲頁面點選「<strong>加入購物車</strong>」→「<strong>繼續結帳</strong>」，付款方式選擇「<strong>Steam 帳戶餘額</strong>」即可。若餘額不足，可在結帳時補差額（搭配信用卡）。</p>
<div style="background:#0d1f14;border-left:3px solid #34d399;padding:0.875rem 1rem;border-radius:0 6px 6px 0;margin:1rem 0;">
  <p style="color:#34d399;font-weight:bold;font-size:0.85rem;margin:0 0 0.4rem;">✅ 小技巧</p>
  <p style="color:#cbd5e1;margin:0;font-size:0.95rem;">把想買的遊戲加入 Steam 願望清單，促銷時 Steam 會主動寄信通知你，搭配錢包餘額一鍵購買最省事。</p>
</div>

<h2 style="font-size:1.3rem;margin:2rem 0 0.75rem;color:#e2e8f0;">退款規則（重要！）</h2>
<p style="margin-bottom:1rem;">Steam 提供有條件的自助退款，以下是核心規則：</p>
<ul style="margin-bottom:1rem;padding-left:0;list-style:none;">
  <li style="margin-bottom:0.75rem;display:flex;align-items:flex-start;gap:0.5rem;"><span style="color:#a78bfa;margin-top:0.2rem;">▸</span><span style="color:#cbd5e1;">購買後 <span style="color:#fbbf24;font-weight:bold;">14 天內</span>，且遊玩時間 <span style="color:#fbbf24;font-weight:bold;">未滿 2 小時</span>，可申請退款。</span></li>
  <li style="margin-bottom:0.75rem;display:flex;align-items:flex-start;gap:0.5rem;"><span style="color:#a78bfa;margin-top:0.2rem;">▸</span><span style="color:#cbd5e1;">退款金額退回 Steam 錢包（信用卡原路退款視情況而定）。</span></li>
  <li style="margin-bottom:0.75rem;display:flex;align-items:flex-start;gap:0.5rem;"><span style="color:#a78bfa;margin-top:0.2rem;">▸</span><span style="color:#cbd5e1;">DLC 與遊戲內購有不同規則，部分項目<strong>不可退款</strong>。</span></li>
</ul>
<div style="background:#1f0f0f;border-left:3px solid #f87171;padding:0.875rem 1rem;border-radius:0 6px 6px 0;margin:1rem 0;">
  <p style="color:#f87171;font-weight:bold;font-size:0.85rem;margin:0 0 0.4rem;">⚠️ 注意</p>
  <p style="color:#fca5a5;margin:0;font-size:0.95rem;">退款次數過多可能被 Steam 限制退款資格，請勿以「試玩」為目的頻繁退款。</p>
</div>

<h2 style="font-size:1.3rem;margin:2rem 0 0.75rem;color:#e2e8f0;">跨區購買注意事項</h2>
<div style="background:#1a1208;border-left:3px solid #fbbf24;padding:0.875rem 1rem;border-radius:0 6px 6px 0;margin-bottom:1rem;">
  <p style="color:#fbbf24;font-weight:bold;font-size:0.85rem;margin:0 0 0.4rem;">⚠️ 高風險行為</p>
  <p style="color:#fde68a;margin:0;font-size:0.95rem;">Valve 條款明令禁止「以規避地區定價為目的」的跨區購買，違規帳號可能遭封禁。</p>
</div>
<ul style="margin-bottom:1rem;padding-left:0;list-style:none;">
  <li style="margin-bottom:0.75rem;display:flex;align-items:flex-start;gap:0.5rem;"><span style="color:#a78bfa;margin-top:0.2rem;">▸</span><span style="color:#cbd5e1;">某些地區版本遊戲有語言或功能限制，購前需確認。</span></li>
  <li style="margin-bottom:0.75rem;display:flex;align-items:flex-start;gap:0.5rem;"><span style="color:#34d399;margin-top:0.2rem;">▸</span><span style="color:#cbd5e1;">因旅遊或出差在不同國家正常購買，通常不構成問題。</span></li>
</ul>

<h2 style="font-size:1.3rem;margin:2rem 0 0.75rem;color:#e2e8f0;">常見問題 FAQ</h2>
<div style="display:flex;flex-direction:column;gap:0.75rem;">
  <div style="background:#131928;border:1px solid #1e2a3e;border-radius:8px;padding:1rem 1.25rem;">
    <p style="color:#a78bfa;font-weight:bold;margin:0 0 0.4rem;font-size:0.95rem;">Q：儲值後多久到帳？</p>
    <p style="color:#cbd5e1;margin:0;font-size:0.95rem;">信用卡幾乎即時；超商條碼約 5–30 分鐘；Steam 錢包卡兌換後立即到帳。</p>
  </div>
  <div style="background:#131928;border:1px solid #1e2a3e;border-radius:8px;padding:1rem 1.25rem;">
    <p style="color:#a78bfa;font-weight:bold;margin:0 0 0.4rem;font-size:0.95rem;">Q：可以幫別人儲值嗎？</p>
    <p style="color:#cbd5e1;margin:0;font-size:0.95rem;">可以購買數位版 Steam 錢包卡序號作為禮物，或使用 Steam 禮物功能直接贈送遊戲。</p>
  </div>
  <div style="background:#131928;border:1px solid #1e2a3e;border-radius:8px;padding:1rem 1.25rem;">
    <p style="color:#a78bfa;font-weight:bold;margin:0 0 0.4rem;font-size:0.95rem;">Q：儲值金額可以退回現金嗎？</p>
    <p style="color:#cbd5e1;margin:0;font-size:0.95rem;"><span style="color:#f87171;font-weight:bold;">不行。</span>Steam 錢包餘額一旦儲值即不可提領，只能用於 Steam 平台消費。</p>
  </div>
  <div style="background:#131928;border:1px solid #1e2a3e;border-radius:8px;padding:1rem 1.25rem;">
    <p style="color:#a78bfa;font-weight:bold;margin:0 0 0.4rem;font-size:0.95rem;">Q：台灣 Steam 是新台幣計價嗎？</p>
    <p style="color:#cbd5e1;margin:0;font-size:0.95rem;">是的，自 2022 年起台灣 Steam 已改為 <span style="color:#34d399;font-weight:bold;">新台幣（NTD）</span>計價，不需再換算美金。</p>
  </div>
  <div style="background:#131928;border:1px solid #1e2a3e;border-radius:8px;padding:1rem 1.25rem;">
    <p style="color:#a78bfa;font-weight:bold;margin:0 0 0.4rem;font-size:0.95rem;">Q：未成年人可以儲值嗎？</p>
    <p style="color:#cbd5e1;margin:0;font-size:0.95rem;">Steam 無強制年齡驗證。超商條碼付款不需信用卡，技術上未成年人可操作，但建議家長監督消費。</p>
  </div>
</div>`
  },
  {
    "id": "duo-best-picks",
    "category": "雙人必玩",
    "date": "MAR 25, 2026",
    "title": "✨ 兩個人的秘密宇宙：今晚，我們只玩雙人必玩神作！",
    "description": "找不到第三個人湊咖？或者只想擁有兩個人的電玩之夜？這 6 款專為「雙人合作」打造的遊戲，無論是考驗智商、挑戰感情極限，還是享受猶如神級電影般的沉浸體驗，絕對能讓你們玩到捨不得睡！",
    "heroImage": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1426210/header_schinese.jpg?t=1763484491",
    "seoTitle": "雙人遊戲推薦 2026｜Steam 雙人合作必玩神作 | 四隻鳥遊戲推薦",
    "seoDescription": "精選 Steam 雙人遊戲推薦，包括雙人成行、Portal 2、A Way Out、We Were Here Together 等，適合情侶、朋友一起玩的合作遊戲。",
    heroTags: ["雙人必玩", "雙人合作遊戲", "Steam合作遊戲推薦", "Steam雙人遊戲", "Steam雙人遊戲推薦", "多人", "連線", "情侶", "推薦", "雙人合作", "合作闖關", "友盡遊戲", "友情破壞", "派對遊戲", "壓倒性好評遊戲"],
    "targetKeywords": ["雙人遊戲推薦", "Steam雙人遊戲推薦", "雙人合作遊戲推薦", "情侶遊戲推薦", "朋友一起玩的遊戲"],
    "audience": ["適合情侶共度電玩之夜", "適合遠距連線的好朋友", "喜歡合作解謎、考驗默契的玩家", "想要體驗電影級劇情合作的玩家"],
    "selectionGuide": [
      "如果你們想感受電影級劇情合作體驗，推薦 雙人成行 (It Takes Two)——每個關卡玩法都不同，保證驚喜連連",
      "如果你想挑戰燒腦雙人解謎，推薦 Portal 2 或 We Were Here Together——考驗默契與溝通",
      "如果你們想輕鬆搞笑互雷，推薦 Untitled Goose Game——兩隻鵝一起搗亂的威力加倍",
      "如果你想要最高挑戰度考驗默契，推薦 Bread & Fred——企鵝爬山超崩潰，成功後超有成就感",
      "如果你們想玩動作越獄劇情，推薦 A Way Out——分割畫面設計讓你隨時看到隊友犯蠢"
    ],
    "faqs": [
      {
        "question": "Steam 有哪些雙人遊戲推薦？",
        "answer": "Steam 上熱門的雙人遊戲包含：雙人成行 (It Takes Two)、Portal 2、A Way Out、We Were Here Together、Bread & Fred、Untitled Goose Game 等，每款都有獨特的合作玩法，適合不同類型的玩家。"
      },
      {
        "question": "有哪些適合情侶玩的 Steam 雙人遊戲？",
        "answer": "適合情侶同樂的 Steam 雙人遊戲推薦：雙人成行（劇情感人、玩法多變）、PHOGS!（可愛療癒、輕鬆上手）、We Were Here Together（透過對講機溝通，增進默契）。"
      },
      {
        "question": "雙人成行需要兩個人都買嗎？",
        "answer": "不需要！雙人成行只需一人購買，即可用「好友通行證」免費邀請一位朋友同玩，非常划算，是 Steam 雙人遊戲中最佛心的設計之一。"
      },
      {
        "question": "Steam 雙人遊戲可以遠距線上合作嗎？",
        "answer": "是的，本篇推薦的所有雙人遊戲均支援線上多人連線，不需要在同一個地方，只要有網路就能一起玩。"
      }
    ],
    "comparisonTable": [
      { "name": "雙人成行", "playerCount": "2人", "genre": "平台冒險", "difficulty": "中等", "audience": "情侶、朋友", "isCoopFocused": true, "whyRecommend": "只需一人購買，劇情感人，玩法每關不同" },
      { "name": "A Way Out", "playerCount": "2人", "genre": "動作冒險", "difficulty": "中等", "audience": "朋友", "isCoopFocused": true, "whyRecommend": "分割畫面設計，越獄劇情刺激，越後面越精彩" },
      { "name": "Portal 2", "playerCount": "2人", "genre": "解謎", "difficulty": "中高", "audience": "喜歡燒腦的玩家", "isCoopFocused": true, "whyRecommend": "經典傳送門解謎，雙人模式考驗空間感與默契" },
      { "name": "We Were Here Together", "playerCount": "2人", "genre": "解謎", "difficulty": "中高", "audience": "情侶、朋友", "isCoopFocused": true, "whyRecommend": "透過對講機溝通解謎，代入感超強" },
      { "name": "Bread & Fred", "playerCount": "2人", "genre": "平台跳躍", "difficulty": "高", "audience": "喜歡挑戰的玩家", "isCoopFocused": true, "whyRecommend": "超難超崩潰，但成功登頂那刻成就感爆棚" },
      { "name": "Untitled Goose Game", "playerCount": "2人", "genre": "搞笑沙盒", "difficulty": "低", "audience": "所有人", "isCoopFocused": false, "whyRecommend": "輕鬆搞笑，兩隻鵝一起搗亂超紓壓" }
    ],
    "relatedArticleIds": ["casual-party", "action-puzzle", "survival-sim", "horror-strategy", "steam-wallet-guide"],
    "games": [
      {
        "id": 1426210,
        "title": "雙人成行 (It Takes Two)",
        "description": "遊玩《雙人成行》，踏上生命中最瘋狂的旅程。這是一趟專為雙人合作遊玩打造，跨越類型的平臺冒險之旅。利用好友通行證邀請好友免費遊玩，共同體驗多種歡樂又顛覆想像的遊戲考驗。",
        "threadsComment": "只要一個人買就好這點很佛心！每個關卡玩法都不一樣，真的會一直驚呼太神了！",
        "imageUrl": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1426210/header.jpg",
        "steamUrl": "https://store.steampowered.com/app/1426210/",
        "playerCount": "雙人",
        "tags": ["雙人合作", "情侶推薦", "劇情冒險", "默契考驗", "新手友善"]
      },
      {
        "id": 1222700,
        "title": "A Way Out",
        "description": "由曾推出獲獎遊戲《Brothers – A Tale of Two Sons》的創作者所帶來最新力作《A Way Out》。這是一款限定雙人合作的冒險遊戲，在遊戲中你們將扮演兩名囚犯，攜手度過一次大膽的越獄行動。",
        "threadsComment": "我覺得劇情很有趣，一個畫面你看得到隊友的畫面看他犯蠢😂😂😂 越後面越精彩！",
        "imageUrl": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1222700/header.jpg",
        "steamUrl": "https://store.steampowered.com/app/1222700/",
        "playerCount": "雙人",
        "tags": ["劇情合作", "雙人限定", "越獄冒險", "朋友同樂", "沉浸體驗"]
      },
      {
        "id": 620,
        "title": "Portal 2",
        "description": "在《傳送門 2》的解謎中，玩家將利用創新的牽引光束、雷射紅點、折射面板、凝膠探索更多光圈科技設施的未知領域。雙人合作模式具備專屬的一組劇情，將考驗兩位玩家的默契配合度。",
        "threadsComment": "Portal 非常經典，雖然畫風比較硬但整體呵勝！解謎成功超有快感的啦！",
        "imageUrl": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/620/header.jpg",
        "steamUrl": "https://store.steampowered.com/app/620/",
        "playerCount": "雙人",
        "tags": ["合作解謎", "燒腦挑戰", "默契考驗", "經典神作", "雙人闖關"]
      },
      {
        "id": 865360,
        "title": "We Were Here Together",
        "description": "出發點是幫助探險地找回求救信號，但在南極荒地的極端情況將挑戰你們是否能同心破解難關。與你的夥伴進入「We Were Here」系列最新的挑戰。你們，準備好接受考驗了嗎？",
        "threadsComment": "這系列非常推！透過無線電溝通超有代入感，有時候聽不懂隊友在講什麼也是一種樂趣😂 (註：極限雙人解謎金賞)",
        "imageUrl": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/865360/header.jpg",
        "steamUrl": "https://store.steampowered.com/app/865360/",
        "playerCount": "雙人",
        "tags": ["雙人解謎", "語音溝通", "默契考驗", "燒腦合作", "遠距連線"]
      },
      {
        "id": 1607680,
        "title": "Bread & Fred",
        "description": "和朋友一起扮演企鵝Bread和Fred，這是一款需要雙人合作才能破關的跳躍類挑戰遊戲。考驗你們的默契與跳躍技巧的時刻到了！這座雪山即將帶給你們前所未有的挫折。",
        "threadsComment": "雙人的企鵝爬山，超難超講究合作！每次快爬到又摔下來真的很崩潰，但成功上去成就感爆棚！",
        "imageUrl": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1607680/header.jpg",
        "steamUrl": "https://store.steampowered.com/app/1607680/",
        "playerCount": "雙人",
        "tags": ["高難度挑戰", "友盡遊戲", "雙人合作", "操作考驗", "友情破壞"]
      },
      {
        "id": 837470,
        "title": "Untitled Goose Game",
        "description": "無題大鵝模擬（Untitled Goose Game）是一款歡樂的沙盒遊戲：玩家扮演一隻討人厭的大鵝。沒錯，現在你可以叫上你的朋友一起，兩人攜手化身這座祥和小鎮上的恐怖破壞狂了。",
        "threadsComment": "輕鬆推Untitled Goose Game，當個惡霸鵝欺負路人有種莫名的紓壓感。",
        "imageUrl": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/837470/header.jpg",
        "steamUrl": "https://store.steampowered.com/app/837470/",
        "playerCount": "雙人",
        "tags": ["輕鬆休閒", "惡作劇玩法", "雙人同樂", "療癒搞笑", "新手友善"]
      }
    ]
  },
  {
    "id": "casual-party",
    "category": "Party & Casual",
    "date": "MAR 25, 2026",
    "title": "🎉 輕鬆派對與休閒合作 (Casual Party & Co-op)",
    "description": "不論是互雷還是神隊友，這些休閒與派對遊戲絕對能為你的聚會帶來滿滿的笑聲（或爭執）。",
    "heroImage": "https://image.api.playstation.com/vulcan/ap/rnd/202009/2915/PjDeOJk0Ka8oaSJjx8SM9Ozf.jpg",
    "seoTitle": "派對遊戲推薦 2026｜Steam 多人休閒合作遊戲清單 | 四隻鳥遊戲推薦",
    "seoDescription": "整理適合朋友聚會的 Steam 派對遊戲推薦，包括 Human Fall Flat、Overcooked! 2、PICO PARK 2、Party Animals 等多人休閒遊戲。",
    heroTags: ["友情破壞", "友盡遊戲", "合作遊戲", "合作闖關", "多人", "派對遊戲", "情侶", "推薦", "連線", "Steam 多人連線", "Steam 多人遊戲推薦", "Steam合作遊戲推薦"],
    "targetKeywords": ["派對遊戲推薦", "Steam派對遊戲推薦", "多人派對遊戲", "朋友聚會遊戲推薦", "4人遊戲推薦"],
    "audience": ["適合朋友聚會同樂", "適合 4 人以上一起玩的團體", "喜歡搞笑互雷氣氛的玩家", "不需要高技術力的休閒玩家"],
    "selectionGuide": [
      "如果你們想輕鬆爆笑又不需要技術，推薦 Human Fall Flat——看朋友摔下去就很好笑",
      "如果你們想考驗溝通與合作，推薦 Overcooked! 2——一起管理廚房，保證吵架又爽快",
      "如果你想要多人同時一起挑戰，推薦 PICO PARK 2——2～8 人齊心通關，最能毀掉友情",
      "如果你們想打架互毆純搞笑，推薦 猛獸派對 (Party Animals)——物理派對超歡樂",
      "如果你想互相放陷阱害朋友，推薦 超級雞馬——自製關卡互坑，笑聲保證不斷"
    ],
    "faqs": [
      {
        "question": "有哪些適合朋友聚會的 Steam 派對遊戲推薦？",
        "answer": "適合朋友聚會的 Steam 派對遊戲推薦：Human Fall Flat（物理搞笑）、Overcooked! 2（廚房大混戰）、PICO PARK 2（多人協力解謎）、猛獸派對（動物格鬥派對）、超級雞馬（互設陷阱）。"
      },
      {
        "question": "哪些 Steam 遊戲適合 4 人以上一起玩？",
        "answer": "本篇大多數遊戲都支援 4 人以上，包含 PICO PARK 2（最多 8 人）、Human Fall Flat（最多 8 人）、猛獸派對、Overcooked! 2、超級雞馬、超級兔子人等。"
      },
      {
        "question": "PICO PARK 2 需要幾個人玩？",
        "answer": "PICO PARK 2 支援 2～8 人遊玩，人數越多越有趣，越多人越容易出現豬隊友的爆笑場面。"
      },
      {
        "question": "派對遊戲需要很強的遊戲技術嗎？",
        "answer": "不需要！本篇推薦的派對遊戲都以輕鬆好玩為主，Human Fall Flat、猛獸派對、超級兔子人等完全不需要遊戲基礎，任何人都能快速上手。"
      }
    ],
    "comparisonTable": [
      { "name": "Human Fall Flat", "playerCount": "1-8人", "genre": "物理平台", "difficulty": "低", "audience": "所有人", "isCoopFocused": true, "whyRecommend": "物理搞笑，看朋友摔下去就很好玩" },
      { "name": "PICO PARK 2", "playerCount": "2-8人", "genre": "合作解謎", "difficulty": "中等", "audience": "團體", "isCoopFocused": true, "whyRecommend": "多人協力解謎，最能考驗友情極限" },
      { "name": "猛獸派對", "playerCount": "2-8人", "genre": "派對格鬥", "difficulty": "低", "audience": "所有人", "isCoopFocused": false, "whyRecommend": "物理動物格鬥，打成一團超紓壓" },
      { "name": "Overcooked! 2", "playerCount": "1-4人", "genre": "合作廚房", "difficulty": "中高", "audience": "朋友、情侶", "isCoopFocused": true, "whyRecommend": "考驗分工溝通，過關成就感滿分" },
      { "name": "超級雞馬", "playerCount": "2-4人", "genre": "創意關卡", "difficulty": "中等", "audience": "喜歡互坑的朋友", "isCoopFocused": false, "whyRecommend": "自製陷阱互相害朋友，笑聲不斷" },
      { "name": "超級兔子人", "playerCount": "2人", "genre": "物理平台", "difficulty": "低", "audience": "朋友", "isCoopFocused": false, "whyRecommend": "物理搞笑，互踹下懸崖的快感無與倫比" }
    ],
    "relatedArticleIds": ["duo-best-picks", "action-puzzle", "survival-sim", "horror-strategy", "steam-wallet-guide"],
    "games": [

      {
        "id": 477160,
        "title": "Human Fall Flat",
        "description": "《Human Fall Flat》是一款輕鬆爆笑的物理平台動作遊戲，遊戲舞台位於飄浮的夢境場景中。支援單人或多人連線合作解謎。非常適合和朋友互相陷害或是合力通關！",
        "threadsComment": "好上手 有時有點小難度 便宜又常更新關卡推推！！ / 很可愛的遊戲，看朋友摔下去就覺得很好笑",
        "imageUrl": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/477160/aa58c48b10d2435e94be407321c80fdd5c0a238f/header_alt_assets_27_tchinese.jpg",
        "steamUrl": "https://store.steampowered.com/app/477160/",
        "playerCount": "4人以上",
        "tags": ["物理解謎", "朋友同樂", "搞笑互動", "多人合作", "新手友善"]
      },
      {
        "id": 2644470,
        "title": "PICO PARK 2",
        "description": "《PICO PARK》系列新作！需要2～8人齊心協力突破萬難。即使看似簡單的關卡，一不小心也會因為豬隊友而重來！",
        "threadsComment": "輕鬆合作的話可以玩PICOPARK，要考驗友情的絕對必玩這款！",
        "imageUrl": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2644470/header.jpg",
        "steamUrl": "https://store.steampowered.com/app/2644470/",
        "playerCount": "4人以上",
        "tags": ["多人合作", "派對首選", "友情破壞", "合作闖關", "溝通考驗"]
      },
      {
        "id": 1260320,
        "title": "猛獸派對 (Party Animals)",
        "description": "這是一款基於物理的多人派對遊戲。選擇你喜歡的小動物角色，盡情痛扁你的好朋友，或者一起挑戰世界各地的玩家！",
        "threadsComment": "猛獸派對還行，剛開始玩不錯，跟朋友打成一團滿好笑的，很適合放鬆一下。",
        "imageUrl": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1260320/header.jpg",
        "steamUrl": "https://store.steampowered.com/app/1260320/",
        "playerCount": "4人以上",
        "tags": ["多人派對", "動物亂鬥", "朋友聚會", "輕鬆搞笑", "友情破壞"]
      },
      {
        "id": 728880,
        "title": "Overcooked! 2",
        "description": "《Overcooked! 2》為你端上全新的混亂烹飪動作！重返洋蔥王國，在各種奇葩的廚房中拯救世界。非常考驗分工與溝通，稍有不慎廚房就會燒起來！",
        "threadsComment": "困難合作OverCooked絕對是經典，雖然常玩到吵架但過關會很有成就感！",
        "imageUrl": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/728880/header.jpg",
        "steamUrl": "https://store.steampowered.com/app/728880/",
        "playerCount": "4人以上",
        "tags": ["分工合作", "派對首選", "友情破壞", "手忙腳亂", "多人同樂"]
      },
      {
        "id": 386940,
        "title": "超級雞馬 (Ultimate Chicken Horse)",
        "description": "一款由玩家自行創作關卡的互動遊戲，藉由放置各種致命陷阱妨礙對手到達終點。但請小心，別栽在自己設下的陷阱前！",
        "threadsComment": "超級雞馬超適合搞朋友，互相放陷阱真的超級歡樂！",
        "imageUrl": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/386940/header.jpg",
        "steamUrl": "https://store.steampowered.com/app/386940/",
        "playerCount": "4人以上",
        "tags": ["互相傷害", "派對遊戲", "友情破壞", "陷阱創作", "多人同樂"]
      },
      {
        "id": 673750,
        "title": "超級兔子人 (Super Bunny Man)",
        "description": "一款充滿混亂的物理合作平台遊戲！你需要與朋友一邊打滾跳躍，一邊將蘿蔔帶回終點。各種奇妙的死法絕對讓你們笑破肚皮。",
        "threadsComment": "搞心態必提兔子人，互相踹下懸崖的時光最開心了😂",
        "imageUrl": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/673750/header.jpg",
        "steamUrl": "https://store.steampowered.com/app/673750/",
        "playerCount": "4人以上",
        "tags": ["搞笑合作", "操作混亂", "友情破壞", "雙人同樂", "派對推薦"]
      },
      {
        "id": 837470,
        "title": "Untitled Goose Game",
        "description": "今天村裡的天氣很晴朗，不過你是一隻很可惡的鵝。現在支援雙人合作，兩隻鵝一起搗亂的威力絕對加倍！",
        "threadsComment": "輕鬆推Untitled Goose Game，當個惡霸鵝欺負路人有種莫名的紓壓感。",
        "imageUrl": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/837470/header.jpg",
        "steamUrl": "https://store.steampowered.com/app/837470/",
        "playerCount": "雙人",
        "tags": ["輕鬆休閒", "惡作劇玩法", "雙人同樂", "療癒搞笑", "新手友善"]
      },
      {
        "id": 850320,
        "title": "PHOGS!",
        "description": "在《PHOGS!》中扮演一對相連的狗狗，踏上充滿謎題的冒險。你們需要合作通過食物、睡眠和娛樂三大滿是障礙的世界。",
        "threadsComment": "可愛狗狗 簡單好上手，跟另一半玩很適合，畫面很療癒！",
        "imageUrl": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/850320/header.jpg",
        "steamUrl": "https://store.steampowered.com/app/850320/",
        "playerCount": "4人以上",
        "tags": ["雙人合作", "輕鬆休閒", "情侶推薦", "療癒搞笑", "新手友善"]
      },
      {
        "id": 1329410,
        "title": "雀魂麻將",
        "description": "隨時隨地，輕鬆麻將！ 精美和風立直麻將遊戲———— 《雀魂麻將》國際中文服Steam版現已正式上線！",
        "threadsComment": "朋友推薦的必玩麻將遊戲，和朋友一起打牌真的很好殺時間又好玩！",
        "imageUrl": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1329410/header_tchinese.jpg?t=1761114558",
        "steamUrl": "https://store.steampowered.com/app/1329410/",
        "playerCount": "4人以上",
        "tags": ["休閒桌遊", "多人連線", "朋友同樂", "策略思考", "免費遊戲"]
      }
    ]
  },
  {
    "id": "action-puzzle",
    "category": "Action & Puzzle",
    "date": "MAR 25, 2026",
    "title": "🧩 動作冒險與解謎闖關 (Action Adventure & Puzzle)",
    "description": "透過絕佳的雙人默契與技術，共同破解難題或擊敗強大的首領。以下是 Steam 上評價最高的雙人合作神作。",
    "heroImage": "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1222700/capsule_616x353.jpg?t=1730912036",
    "seoTitle": "動作解謎遊戲推薦 2026｜Steam 雙人合作解謎清單 | 四隻鳥遊戲推薦",
    "seoDescription": "精選 Steam 動作解謎與合作闖關遊戲，包括 Portal 2、雙人成行、We Were Here Together 等，適合喜歡挑戰默契與腦力的玩家。",
    heroTags: ["雙人解謎", "燒腦遊戲", "互相傷害", "友情破壞", "動作冒險", "默契考驗", "合作闖關", "Steam 雙人連線", "Steam 雙人遊戲推薦", "Steam 解謎"],
    "targetKeywords": ["動作解謎遊戲推薦", "Steam解謎遊戲推薦", "雙人解謎遊戲", "合作解謎遊戲", "Portal 2 類似遊戲"],
    "audience": ["喜歡燒腦解謎的玩家", "適合想考驗默契的情侶或朋友", "喜歡動作闖關挑戰的玩家", "想要多樣化合作體驗的玩家"],
    "selectionGuide": [
      "如果你想玩最經典的合作解謎，推薦 Portal 2——空間感與默契的終極考驗",
      "如果你想要劇情豐富又玩法多元的體驗，推薦 雙人成行——每個關卡都有新驚喜",
      "如果你喜歡用溝通解決謎題，推薦 We Were Here Together——透過對講機合作的獨特體驗",
      "如果你想挑戰爬山極限合作，推薦 Bread & Fred——每次失敗都會讓你崩潰但停不下來",
      "如果你喜歡射擊 Roguelite 風格，推薦 槍火重生——爽快打擊感，支援多人連線"
    ],
    "faqs": [
      {
        "question": "有哪些類似 Portal 2 的 Steam 合作解謎遊戲？",
        "answer": "喜歡 Portal 2 的玩家還可以試試：We Were Here Together（對講機溝通解謎）、Degrees of Separation（冷熱能力解謎）、雙人成行（玩法多變的合作冒險）。"
      },
      {
        "question": "Steam 有哪些雙人解謎遊戲推薦？",
        "answer": "Steam 雙人解謎遊戲推薦：Portal 2（傳送門空間解謎）、We Were Here Together（極限雙人溝通解謎）、Bread & Fred（企鵝合作跳躍）、Degrees of Separation（冷熱元素解謎）。"
      },
      {
        "question": "We Were Here Together 難度高嗎？",
        "answer": "We Were Here Together 的謎題設計頗具挑戰性，需要兩人透過對講機溝通協作，有時聽不懂對方描述也是樂趣所在。建議開麥克風玩，體驗更好。"
      },
      {
        "question": "動作解謎類遊戲適合沒遊戲基礎的新手嗎？",
        "answer": "視遊戲而定。Portal 2 和 We Were Here Together 建議有基本操作基礎；而 Degrees of Separation 和 Holo X Break 相對友善，新手也能快速上手。"
      }
    ],
    "comparisonTable": [
      { "name": "雙人成行", "playerCount": "2人", "genre": "平台冒險", "difficulty": "中等", "audience": "情侶、朋友", "isCoopFocused": true, "whyRecommend": "玩法多變，每關都有新驚喜" },
      { "name": "A Way Out", "playerCount": "2人", "genre": "動作冒險", "difficulty": "中等", "audience": "朋友", "isCoopFocused": true, "whyRecommend": "分割畫面設計，越獄劇情精彩" },
      { "name": "Portal 2", "playerCount": "2人", "genre": "解謎", "difficulty": "中高", "audience": "喜歡燒腦的玩家", "isCoopFocused": true, "whyRecommend": "傳送門解謎經典，考驗空間感" },
      { "name": "We Were Here Together", "playerCount": "2人", "genre": "解謎", "difficulty": "中高", "audience": "情侶、朋友", "isCoopFocused": true, "whyRecommend": "對講機溝通解謎，代入感極強" },
      { "name": "Bread & Fred", "playerCount": "2人", "genre": "平台跳躍", "difficulty": "高", "audience": "喜歡挑戰", "isCoopFocused": true, "whyRecommend": "企鵝爬山，崩潰中帶著成就感" },
      { "name": "槍火重生", "playerCount": "1-4人", "genre": "FPS Roguelite", "difficulty": "中等", "audience": "FPS 玩家", "isCoopFocused": true, "whyRecommend": "射擊感爽快，Roguelite 隨機要素增加耐玩性" }
    ],
    "relatedArticleIds": ["duo-best-picks", "casual-party", "survival-sim", "horror-strategy", "steam-wallet-guide"],
    "games": [

      {
        "id": 1426210,
        "title": "雙人成行 (It Takes Two)",
        "description": "在《雙人成行》中踏上人生中最瘋狂的旅程。這是一場純粹為雙人合作而設計的奇妙冒險，玩法多變且處處充滿驚喜。",
        "threadsComment": "只要一個人買就好這點很佛心！每個關卡玩法都不一樣，真的會一直驚呼太神了！",
        "imageUrl": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1426210/header.jpg",
        "steamUrl": "https://store.steampowered.com/app/1426210/",
        "playerCount": "雙人",
        "tags": ["雙人合作", "情侶推薦", "劇情冒險", "默契考驗", "新手友善"]
      },
      {
        "id": 1222700,
        "title": "A Way Out",
        "description": "這是一款限定雙人合作的冒險遊戲，玩家將扮演兩名性格迥異的囚犯，展開大膽的越獄行動。分割畫面看著隊友犯傻絕對是一大樂趣。",
        "threadsComment": "我覺得劇情很有趣，一個畫面你看得到隊友的畫面看他犯蠢😂😂😂 越後面越精彩！",
        "imageUrl": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1222700/header.jpg",
        "steamUrl": "https://store.steampowered.com/app/1222700/",
        "playerCount": "雙人",
        "tags": ["劇情合作", "雙人限定", "越獄冒險", "朋友同樂", "沉浸體驗"]
      },
      {
        "id": 620,
        "title": "Portal 2",
        "description": "極致經典的傳送門解謎遊戲！除了精彩的單人戰役，雙人合作模式更是考驗你們的空間感與默契，小心不要把朋友傳送到岩漿裡。",
        "threadsComment": "Portal 非常經典，雖然畫風比較硬但整體呵勝！解謎成功超有快感的啦！",
        "imageUrl": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/620/header.jpg",
        "steamUrl": "https://store.steampowered.com/app/620/",
        "playerCount": "雙人",
        "tags": ["合作解謎", "燒腦挑戰", "默契考驗", "經典神作", "雙人闖關"]
      },
      {
        "id": 865360,
        "title": "We Were Here Together",
        "description": "探索冰冷荒原時，不幸再次降臨我們。你們必須分隔兩地，僅能透過對講機溝通來解決各式各樣的謎題，考驗的不只是智商更是表達能力！",
        "threadsComment": "這系列非常推！透過無線電溝通超有代入感，有時候聽不懂隊友在講什麼也是一種樂趣😂",
        "imageUrl": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/865360/header.jpg",
        "steamUrl": "https://store.steampowered.com/app/865360/",
        "playerCount": "4人以上",
        "tags": ["雙人解謎", "語音溝通", "默契考驗", "燒腦合作", "遠距連線"]
      },
      {
        "id": 1607680,
        "title": "Bread & Fred",
        "description": "與好友合作挑戰極限，兩隻被繩子綁在一起的小企鵝需要完美配合才能登上雪山之巔。只要一人失誤，兩人都會滾回山腳下！",
        "threadsComment": "雙人的企鵝爬山，超難超講究合作！每次快爬到又摔下來真的很崩潰，但成功上去成就感爆棚！",
        "imageUrl": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1607680/header.jpg",
        "steamUrl": "https://store.steampowered.com/app/1607680/",
        "playerCount": "4人以上",
        "tags": ["高難度挑戰", "友盡遊戲", "雙人合作", "操作考驗", "友情破壞"]
      },
      {
        "id": 1217060,
        "title": "槍火重生",
        "description": "《槍火重生》是一款融合了第一人稱射擊、Roguelite隨機要素和RPG策略的冒險闖關遊戲。使用隨機掉落的武器闖關，最多支援四人組隊。",
        "threadsComment": "有玩FPS的玩家會滿好上手。個人覺得基本角色就滿好玩的了，打擊感很爽快！",
        "imageUrl": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1217060/dfbc521f0f5580cc6f4ae0efc274f9069957b536/header_tchinese.jpg",
        "steamUrl": "https://store.steampowered.com/app/1217060/",
        "playerCount": "4人以上",
        "tags": ["第一人稱射擊", "多人合作", "Roguelite", "角色扮演", "爽快打擊"]
      },
      {
        "id": 809880,
        "title": "Degrees of Separation",
        "description": "一款 2D 平臺解謎遊戲。燼和霜兩人必須運用他們冷與熱的迴異能力，一起克服重重阻礙。畫面非常唯美且解謎設計精妙。",
        "threadsComment": "雙影奇境真的大推！玩過後胃口會被養大，機制設計得很棒，互動感極佳！",
        "imageUrl": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/809880/header.jpg",
        "steamUrl": "https://store.steampowered.com/app/809880/",
        "playerCount": "4人以上",
        "tags": ["雙人解謎", "平台冒險", "情侶推薦", "唯美畫風", "合作闖關"]
      },
      {
        "id": 2719150,
        "title": "Holo X Break",
        "description": "Fight your way through endless waves of holoX's minions! Gear up with all sorts of equipment and items in this action packed beat-em-up to reach the 5 bosses of hololive's &quot;holoX&quot;, and put a stop to their plans!",
        "threadsComment": "小朋友齊打交類型，玩起來很爽快",
        "imageUrl": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2719150/header.jpg?t=1721708266",
        "steamUrl": "https://store.steampowered.com/app/2719150/",
        "playerCount": "4人以上",
        "tags": ["動作闖關", "多人合作", "粉絲向", "輕鬆休閒", "爽快打擊"]
      }
    ]
  },
  {
    "id": "survival-sim",
    "category": "Survival & Sim",
    "date": "MAR 25, 2026",
    "title": "🌾 生存建造與模擬經營 (Survival, Crafting & Sim)",
    "description": "找個週末把自己關在房間裡，和朋友一起挖礦、種田、打怪，享受屬於你們的精神時光屋！",
    "heroImage": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/413150/header.jpg",
    "seoTitle": "生存建造遊戲推薦 2026｜Steam 多人合作生存遊戲 | 四隻鳥遊戲推薦",
    "seoDescription": "精選 Steam 生存建造與模擬經營遊戲，包括 Terraria、饑荒聯機版、星露谷物語、Raft、Sons Of The Forest 等多人合作遊戲。",
    heroTags: ["生存建造", "角色扮演", "放置遊戲", "模擬經營", "精神時光屋", "合作生存", "獨立遊戲推薦", "Steam 多人連線", "Steam 遊戲推薦", "Steam模擬遊戲", "Steam獨立遊戲"],
    "targetKeywords": ["生存建造遊戲推薦", "Steam生存遊戲推薦", "多人建造遊戲", "多人合作生存遊戲", "類似Raft的遊戲"],
    "audience": ["喜歡挖礦建造的玩家", "適合喜歡長時間沉浸遊戲的朋友", "適合喜歡策略分工合作的玩家", "享受農場模擬經營的休閒玩家"],
    "selectionGuide": [
      "如果你是生存建造新手，推薦 Terraria——2D 沙盒建造入門經典，玩法豐富不膩",
      "如果你想輕鬆種田過生活，推薦 Stardew Valley（星露谷物語）——農場模擬放鬆神作",
      "如果你想挑戰多人生存考驗，推薦 饑荒聯機版——需要分工合作才能存活",
      "如果你喜歡海洋漂流探索，推薦 Raft——在大海上收集資源、擴建木筏",
      "如果你想結合恐怖與建造，推薦 Sons Of The Forest——食人族島嶼生存超刺激"
    ],
    "faqs": [
      {
        "question": "有哪些 Steam 多人合作生存遊戲推薦？",
        "answer": "Steam 多人合作生存遊戲推薦：Terraria（2D 建造探索）、饑荒聯機版（生存合作）、Sons Of The Forest（恐怖生存建造）、Raft（海洋漂流）、Core Keeper（地底挖掘探索）。"
      },
      {
        "question": "Terraria 和 Core Keeper 哪個適合新手？",
        "answer": "Terraria 整體更成熟、內容更豐富，但核心玩法較複雜；Core Keeper 上手門檻較低，地底探索節奏舒適，更適合生存遊戲新手。"
      },
      {
        "question": "星露谷物語可以多人一起玩嗎？",
        "answer": "可以！Stardew Valley（星露谷物語）支援最多 4 人線上合作，一起種田、釣魚、探索礦坑，非常適合想要輕鬆共度時光的朋友。"
      },
      {
        "question": "有哪些類似 Raft 的多人生存遊戲推薦？",
        "answer": "喜歡 Raft 的玩家還可以試試：Green Hell（亞馬遜叢林生存）、Sons Of The Forest（島嶼生存）、ARK: Survival Evolved（恐龍世界開放生存）。"
      }
    ],
    "comparisonTable": [
      { "name": "Terraria", "playerCount": "1-8人", "genre": "2D 沙盒建造", "difficulty": "中等", "audience": "建造探索愛好者", "isCoopFocused": true, "whyRecommend": "內容龐大，與朋友一起探索無盡可能" },
      { "name": "饑荒聯機版", "playerCount": "1-6人", "genre": "生存", "difficulty": "高", "audience": "喜歡挑戰的玩家", "isCoopFocused": true, "whyRecommend": "分工合作生存，搶食物的場面很搞笑" },
      { "name": "Stardew Valley", "playerCount": "1-4人", "genre": "農場模擬", "difficulty": "低", "audience": "休閒玩家", "isCoopFocused": true, "whyRecommend": "輕鬆種田釣魚，週末放鬆首選" },
      { "name": "Sons Of The Forest", "playerCount": "1-8人", "genre": "恐怖生存建造", "difficulty": "中高", "audience": "喜歡刺激的玩家", "isCoopFocused": true, "whyRecommend": "食人族島嶼建堡壘，刺激又好玩" },
      { "name": "Raft", "playerCount": "1-8人", "genre": "海洋漂流生存", "difficulty": "中等", "audience": "探索愛好者", "isCoopFocused": true, "whyRecommend": "在大海上分工建造木筏，體驗獨特" },
      { "name": "Core Keeper", "playerCount": "1-8人", "genre": "地底挖掘沙盒", "difficulty": "低中", "audience": "新手友善", "isCoopFocused": true, "whyRecommend": "Terraria 風格地底探索，上手門檻低" }
    ],
    "relatedArticleIds": ["duo-best-picks", "casual-party", "action-puzzle", "horror-strategy", "steam-wallet-guide"],
    "games": [

      {
        "id": 105600,
        "title": "Terraria",
        "description": "挖掘，戰鬥，探索，建造！在這款充滿動感的 2D 冒險遊戲中，沒有什麼是不可能的。與朋友一起擊敗強大首領，建立宏偉的堡壘吧！",
        "threadsComment": "經典神作農場遊戲，對DORA型玩家友好，雖然有時會連線卡卡但瑕不掩瑜！",
        "imageUrl": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/105600/header.jpg",
        "steamUrl": "https://store.steampowered.com/app/105600/",
        "playerCount": "4人以上",
        "tags": ["生存建造", "探索冒險", "多人合作", "精神時光屋", "高自由度"]
      },
      {
        "id": 322330,
        "title": "饑荒聯機版 (Don't Starve Together)",
        "description": "《饑荒聯機版》是原生態生存遊戲的獨立多人資料片。你們必須合作收集資源、面對荒野的怪物與惡劣的環境，盡可能活得越久越好。",
        "threadsComment": "一群人玩真的很有趣，要互相分工才不會餓死，常常發生搶食物的搞笑場面！",
        "imageUrl": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/322330/51e5f44e4e38ce02a985687df4fdc8feb678219b/header.jpg",
        "steamUrl": "https://store.steampowered.com/app/322330/",
        "playerCount": "4人以上",
        "tags": ["合作生存", "硬派挑戰", "多人連線", "資源管理", "生存冒險"]
      },
      {
        "id": 413150,
        "title": "Stardew Valley",
        "description": "你繼承了星露谷的舊農場。帶著生鏽的工具和幾枚硬幣，你準備開始新的生活。與朋友同經營農場，體驗日出而作的悠閒生活。",
        "threadsComment": "這真的是精神時光屋，要小心假日不知不覺就不見了⚠️ 大家一起種田釣魚超讚。",
        "imageUrl": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/413150/header.jpg",
        "steamUrl": "https://store.steampowered.com/app/413150/",
        "playerCount": "4人以上",
        "tags": ["模擬經營", "農場生活", "多人合作", "療癒休閒", "精神時光屋"]
      },
      {
        "id": 1326470,
        "title": "Sons Of The Forest",
        "description": "你被派到了一座孤島上尋找失蹤富翁，卻發現那是座由食人族佔領的煉獄。你需要鍛造武器、建築棲身之所，並努力生存下去。",
        "threadsComment": "多人恐怖休閒有劇情，陰森之子蓋房子的系統太好玩了，每天都在想要怎麼蓋最堅固的堡壘！",
        "imageUrl": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1326470/header.jpg",
        "steamUrl": "https://store.steampowered.com/app/1326470/",
        "playerCount": "4人以上",
        "tags": ["恐怖生存", "合作探索", "高沉浸感", "建造防禦", "刺激冒險"]
      },
      {
        "id": 2709570,
        "title": "Supermarket Together",
        "description": "多人超市經營遊戲已免費抵達！解鎖福利、補貨上架，或者僱用員工對付扒手。看看你們能不能把一家破小店開成大型超市！",
        "threadsComment": "免費而且很耐玩，最喜歡體驗那種『下班了還要跟朋友線上一起上班』的感覺😂",
        "imageUrl": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2709570/header.jpg",
        "steamUrl": "https://store.steampowered.com/app/2709570/",
        "playerCount": "4人以上",
        "tags": ["模擬經營", "多人合作", "休閒搞笑", "朋友同樂", "免費遊戲"]
      },
      {
        "id": 346110,
        "title": "ARK: Survival Evolved",
        "description": "由虛幻4引擎打造的一款多人線上生存競技網遊，在一個超高自由度的開放世界裡，可以體驗採集、製造、打獵、收穫、建造、研究以及馴服恐龍等超多自由內容，感受酷熱白晝、冰冷夜晚的動態天氣系統以及饑餓口渴等現實中的生存挑戰，還要面對其它生存者的威脅，合作生存還是競技廝殺，由你決定！",
        "threadsComment": "我覺得自由度很高。抓恐龍、蓋房子、種田都可以，音樂響起時要快跑超刺激，不然等著你的就是死亡！",
        "imageUrl": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/346110/header.jpg?t=1765677889",
        "steamUrl": "https://store.steampowered.com/app/346110/",
        "playerCount": "4人以上",
        "tags": ["開放世界", "生存建造", "恐龍馴養", "多人連線", "硬派挑戰"]
      },
      {
        "id": 815370,
        "title": "Green Hell",
        "description": "在未知亞馬遜叢林的極端環境中，投入開放世界的生存模擬遊戲中。使用現實生活中的生存技能打造工具、狩獵、戰鬥、收集資源、搭建臨時避難所或建造堡壘。你可以獨自生存，也可以跟好友組隊一同挑戰叢林。",
        "threadsComment": "如果想要玩到胃痛這是不錯的選擇，真實難度挑戰很大！",
        "imageUrl": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/815370/header.jpg?t=1769519900",
        "steamUrl": "https://store.steampowered.com/app/815370/",
        "playerCount": "4人以上",
        "tags": ["硬派生存", "真實模擬", "叢林冒險", "多人合作", "高難度挑戰"]
      },
      {
        "id": 1621690,
        "title": "Core Keeper",
        "description": "在充滿生物、遺跡、資源的洞穴盡情探查，體驗多達 8 名玩家並進的挖礦沙盒冒險遊戲。挖礦、建造、戰鬥、鍛造、耕種，揭開這古老核心的神祕之處。",
        "threadsComment": "算是泰拉玩完後會蠻喜歡的作品 (地底生存建築)",
        "imageUrl": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1621690/header.jpg?t=1772726173",
        "steamUrl": "https://store.steampowered.com/app/1621690/",
        "playerCount": "4人以上",
        "tags": ["地底探索", "生存建造", "多人合作", "休閒農場", "像素畫風"]
      },
      {
        "id": 2617700,
        "title": "Tinkerlands",
        "description": "深入充滿未知的島嶼，四處探索，動手建造，迎戰敵人！你在有趣的生存冒險遊戲《Tinkerlands》裡，你可以單人遊玩或多人合作，建立聚落、打造生存必備的實用工具，甚至是使用魔法！",
        "threadsComment": "還在demo但也不錯，可以關注一下 (類似泰拉瑞亞風格)",
        "imageUrl": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2617700/52279341a0881491b42579b14bf217be1e179cae/header.jpg?t=1773761046",
        "steamUrl": "https://store.steampowered.com/app/2617700/",
        "playerCount": "4人以上",
        "tags": ["生存冒險", "沙盒建造", "多人合作", "像素畫風", "搶先體驗"]
      },
      {
        "id": 648800,
        "title": "Raft",
        "description": "Raft™ throws you and your friends into an epic oceanic adventure! Alone or together, players battle to survive a perilous voyage across a vast sea! Gather debris, scavenge reefs and build your own floating home, but be wary of the man-eating sharks!",
        "threadsComment": "跟朋友一起漂流，要分工採集資源，不知不覺玩了好幾個小時！",
        "imageUrl": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/648800/header.jpg?t=1727184011",
        "steamUrl": "https://store.steampowered.com/app/648800/",
        "playerCount": "4人以上",
        "tags": ["海上生存", "合作建造", "資源收集", "朋友同樂", "探索冒險"]
      }
    ]
  },
  {
    "id": "horror-strategy",
    "category": "Horror & Strategy",
    "date": "MAR 25, 2026",
    "title": "👻 驚悚恐怖與硬派挑戰 (Horror, Strategy & Hardcore)",
    "description": "心跳加速的恐怖連線體驗與無情的硬派遊戲，測試你們的膽量與策略吧。",
    "heroImage": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1961460/header.jpg",
    "seoTitle": "恐怖策略遊戲推薦 2026｜Steam 多人合作與策略遊戲清單 | 四隻鳥遊戲推薦",
    "seoDescription": "整理 Steam 恐怖、策略與多人合作遊戲推薦，包括 PROJECT: PLAYTIME、Left 4 Dead 2、For The King、Cuphead、CS2 等適合朋友一起玩的遊戲。",
    heroTags: ["驚悚恐怖", "策略硬派", "社交欺騙", "友情破壞", "Steam 多人連線", "Steam 遊戲推薦"],
    "targetKeywords": ["恐怖遊戲推薦", "Steam恐怖遊戲推薦", "多人恐怖遊戲", "合作恐怖遊戲推薦", "Steam策略遊戲推薦"],
    "audience": ["喜歡恐怖刺激體驗的玩家", "喜歡硬派高難度挑戰的玩家", "適合想要嚇朋友聚會的團體", "喜歡策略合作闖關的玩家"],
    "selectionGuide": [
      "如果你想要一起尖叫的恐怖體驗，推薦 PROJECT: PLAYTIME 或 Labyrinthine——邊跑邊叫很好笑",
      "如果你喜歡合作射擊砍殭屍，推薦 Left 4 Dead 2——經典喪屍合作射擊永不退流行",
      "如果你想挑戰高難度 Boss，推薦 Cuphead——畫風可愛但極難，雙人互相干擾更刺激",
      "如果你喜歡策略桌遊風格，推薦 For The King——Roguelike 策略 RPG，決策影響全局",
      "如果你想要競技射擊，推薦 CS2——五人組排體驗世界頂尖競技"
    ],
    "faqs": [
      {
        "question": "哪些 Steam 恐怖遊戲適合朋友一起玩？",
        "answer": "適合多人同樂的 Steam 恐怖遊戲：PROJECT: PLAYTIME（非對稱恐怖）、Labyrinthine（迷宮恐怖合作）、Dark Hours: Prologue（免費恐怖合作）、Left 4 Dead 2（喪屍合作射擊）。"
      },
      {
        "question": "Steam 有哪些免費的多人恐怖遊戲？",
        "answer": "免費的 Steam 多人恐怖遊戲推薦：PROJECT: PLAYTIME（免費非對稱恐怖）、Dark Hours: Prologue（免費恐怖合作序章）、Alien Swarm: Reactive Drop（免費上帝視角合作射擊）。"
      },
      {
        "question": "Cuphead 雙人難度比單人更難嗎？",
        "answer": "雙人模式的 Cuphead 難度並未降低，反而因為兩人動作互相干擾、畫面更混亂，有時比單人更難。但打倒 Boss 那刻的成就感也加倍！"
      },
      {
        "question": "Left 4 Dead 2 現在還有人玩嗎？",
        "answer": "有！Left 4 Dead 2 至今仍有穩定的玩家社群，Steam 工作坊持續有新地圖更新，加上免費玩（偶爾特價接近免費），是 CP 值最高的多人恐怖射擊之一。"
      }
    ],
    "comparisonTable": [
      { "name": "PROJECT: PLAYTIME", "playerCount": "7人", "genre": "非對稱恐怖", "difficulty": "中等", "audience": "喜歡嚇人與被嚇", "isCoopFocused": false, "whyRecommend": "免費，當怪物追朋友超紓壓" },
      { "name": "Left 4 Dead 2", "playerCount": "1-4人", "genre": "合作射擊", "difficulty": "中等", "audience": "FPS 玩家", "isCoopFocused": true, "whyRecommend": "喪屍合作射擊經典，工作坊地圖打不完" },
      { "name": "Cuphead", "playerCount": "1-2人", "genre": "動作射擊", "difficulty": "極高", "audience": "硬派玩家", "isCoopFocused": false, "whyRecommend": "畫風精美但超難，雙人玩更混亂更有趣" },
      { "name": "For The King", "playerCount": "1-3人", "genre": "策略 RPG", "difficulty": "中高", "audience": "喜歡策略的玩家", "isCoopFocused": true, "whyRecommend": "桌遊風 Roguelike，每局都有新體驗" },
      { "name": "CS2", "playerCount": "最多 10人", "genre": "競技射擊", "difficulty": "高", "audience": "FPS 玩家", "isCoopFocused": true, "whyRecommend": "世界頂尖競技體驗，五人組排最爽" },
      { "name": "Labyrinthine", "playerCount": "1-8人", "genre": "恐怖合作", "difficulty": "中等", "audience": "喜歡恐怖氣氛的玩家", "isCoopFocused": true, "whyRecommend": "在迷宮裡亂竄鬼叫超搞笑，氣氛超棒" }
    ],
    "relatedArticleIds": ["duo-best-picks", "casual-party", "action-puzzle", "survival-sim", "steam-wallet-guide"],
    "games": [

      {
        "id": 1961460,
        "title": "PROJECT: PLAYTIME",
        "description": "免費的非對稱多人恐怖遊戲，六名玩家試圖製作一個巨大的玩具並生存下去，而第七名玩家則控制怪物追殺所有人。",
        "threadsComment": "多人的微恐擔當，當怪物抓朋友的時候超紓壓，被追的時候真的會尖叫！",
        "imageUrl": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1961460/header.jpg",
        "steamUrl": "https://store.steampowered.com/app/1961460/",
        "playerCount": "4人以上",
        "tags": ["多人恐怖", "社交合作", "刺激追逐", "朋友同樂", "驚悚氣氛"]
      },
      {
        "id": 1302240,
        "title": "Labyrinthine (怪奇迷宮)",
        "description": "與1-8名玩家合作的恐怖遊戲。你們將在黑暗的迷宮中解開謎題收集物品，並躲避隱藏在陰影中的恐怖怪物。",
        "threadsComment": "一定要多一點人玩，因為蠻難的！大家在迷宮裡亂竄鬼叫的過程真的超好笑👍",
        "imageUrl": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1302240/header.jpg",
        "steamUrl": "https://store.steampowered.com/app/1302240/",
        "playerCount": "4人以上",
        "tags": ["恐怖迷宮", "多人合作", "解謎逃脫", "驚悚氣氛", "朋友同樂"]
      },
      {
        "id": 3064370,
        "title": "Dark Hours: Prologue",
        "description": "這是一部 1-4 人合作求生的免費恐怖遊戲序章。玩家扮演竊賊，卻在行竊時被迫與超自然怪物困在同棟建築物中！",
        "threadsComment": "可以先玩demo再考慮要不要買本傳，氛圍做得很棒，當小偷還遇到鬼有夠倒楣的~",
        "imageUrl": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3064370/header.jpg",
        "steamUrl": "https://store.steampowered.com/app/3064370/",
        "playerCount": "4人以上",
        "tags": ["恐怖生存", "多人合作", "潛行解謎", "驚悚氣氛", "免費遊戲"]
      },
      {
        "id": 774861,
        "title": "Project Winter",
        "description": "8名玩家的生存與社交欺騙遊戲。團隊合作是度過嚴冬的關鍵，但我們之中有背叛者在伺機而動，隨時準備終結你們的性命。",
        "threadsComment": "這款超好玩！可以共贏也可以陷害隊友，互相猜忌的過程超級心機，大推！",
        "imageUrl": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/774861/6f25285a73c7aa9c652ee701f8080dca790c1961/header.jpg",
        "steamUrl": "https://store.steampowered.com/app/774861/",
        "playerCount": "4人以上",
        "tags": ["社交欺騙", "生存合作", "友情破壞", "多人連線", "心機推理"]
      },
      {
        "id": 563560,
        "title": "Alien Swarm: Reactive Drop",
        "description": "一款免費的上帝視角合作射擊遊戲。在面對兇猛的外星蟲群下，你們小隊必須運用各種混合戰術完成任務目標。",
        "threadsComment": "免費就很佛心了，玩法跟視角很特別，不是普通吃雞那種，打蟲子爽快感十足！",
        "imageUrl": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/563560/header.jpg",
        "steamUrl": "https://store.steampowered.com/app/563560/",
        "playerCount": "4人以上",
        "tags": ["上帝視角", "合作射擊", "硬派挑戰", "多人連線", "免費遊戲"]
      },
      {
        "id": 268910,
        "title": "Cuphead",
        "description": "《茶杯頭》是一款經典的手繪風格動作射擊遊戲，強調Boss戰。高質感的復古動畫背後，隱藏著極高的挑戰難度！",
        "threadsComment": "硬派玩家必推CUPHEAD，雙人玩不會變簡單反而會互相干擾，但打贏Boss那刻超感動！",
        "imageUrl": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/268910/header.jpg",
        "steamUrl": "https://store.steampowered.com/app/268910/",
        "playerCount": "4人以上",
        "tags": ["高難度挑戰", "雙人合作", "Boss戰", "硬派動作", "復古美術"]
      },
      {
        "id": 527230,
        "title": "For The King",
        "description": "結合桌遊和 Roguelike 元素的跨領域戰略型 RPG。你們將踏上拯救國王的困難旅程，每一步都需要謹慎考慮與團隊決策。",
        "threadsComment": "簡單好上手但需要大量策略！不過一局的時間滿長，有時候玩到深夜會不小心睡著😂",
        "imageUrl": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/527230/fef80e71ffbd88ad06d35e5f34b770fef05670b4/header_alt_assets_14_tchinese.jpg",
        "steamUrl": "https://store.steampowered.com/app/527230/",
        "playerCount": "4人以上",
        "tags": ["策略冒險", "回合制戰鬥", "多人合作", "桌遊感", "硬派挑戰"]
      },
      {
        "id": 242760,
        "title": "The Forest",
        "description": "As the lone survivor of a passenger jet crash, you find yourself in a mysterious forest battling to stay alive against a society of cannibalistic mutants. Build, explore, survive in this terrifying first person survival horror simulator.",
        "threadsComment": "蓋房子殺野人，非常刺激！",
        "imageUrl": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/242760/header.jpg?t=1699381053",
        "steamUrl": "https://store.steampowered.com/app/242760/",
        "playerCount": "4人以上",
        "tags": ["恐怖生存", "食人族", "合作建造", "探索冒險", "高沉浸感"]
      },
      {
        "id": 730,
        "title": "Counter-Strike 2",
        "description": "二十多年來，在全球數百萬玩家的共同塑造之下，《絕對武力》為大家帶來了世界頂尖的競技體驗。現在 CS 傳奇的新篇章即將展開，那就是《絕對武力 2》。",
        "threadsComment": "既可以五人組排又可以身兼數職，幫大哥拉道具成為最閃耀的道具手！",
        "imageUrl": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/730/header.jpg?t=1749053861",
        "steamUrl": "https://store.steampowered.com/app/730/",
        "playerCount": "4人以上",
        "tags": ["競技射擊", "多人對戰", "策略配合", "免費遊戲", "硬派競技"]
      },
      {
        "id": 550,
        "title": "Left 4 Dead 2",
        "description": "Set in the zombie apocalypse, Left 4 Dead 2 is a co-operative action horror FPS takes you and your friends through the cities, swamps and cemeteries of the Deep South, from Savannah to New Orleans across five expansive campaigns.",
        "threadsComment": "雖然很久了但是好玩，有工作坊地圖打不完。",
        "imageUrl": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/550/header.jpg?t=1772742214",
        "steamUrl": "https://store.steampowered.com/app/550/",
        "playerCount": "4人以上",
        "tags": ["合作射擊", "殭屍生存", "多人連線", "經典神作", "刺激爽快"]
      }
    ]
  }
];

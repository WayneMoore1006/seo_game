import re

with open('src/data/articles.ts', 'r', encoding='utf-8') as f:
    content = f.read()

# 1. Update heroTags for each article
hero_tags_map = {
    '"steam-wallet-guide"': '    heroTags: ["Steam儲值", "Steam錢包", "Steam超商付款", "Steam信用卡付款", "Steam退款教學"],\n    "targetKeywords"',
    '"duo-best-picks"': '    heroTags: ["雙人必玩", "雙人合作遊戲", "Steam合作遊戲推薦", "Steam雙人遊戲", "Steam雙人遊戲推薦", "多人", "連線", "情侶", "推薦", "雙人合作", "合作闖關", "友盡遊戲", "友情破壞", "派對遊戲", "壓倒性好評遊戲"],\n    "targetKeywords"',
    '"casual-party"': '    heroTags: ["友情破壞", "友盡遊戲", "合作遊戲", "合作闖關", "多人", "派對遊戲", "情侶", "推薦", "連線", "Steam 多人連線", "Steam 多人遊戲推薦", "Steam合作遊戲推薦"],\n    "targetKeywords"',
    '"action-puzzle"': '    heroTags: ["雙人解謎", "燒腦遊戲", "互相傷害", "友情破壞", "動作冒險", "默契考驗", "合作闖關", "Steam 雙人連線", "Steam 雙人遊戲推薦", "Steam 解謎"],\n    "targetKeywords"',
    '"survival-sim"': '    heroTags: ["生存建造", "角色扮演", "放置遊戲", "模擬經營", "精神時光屋", "合作生存", "獨立遊戲推薦", "Steam 多人連線", "Steam 遊戲推薦", "Steam模擬遊戲", "Steam獨立遊戲"],\n    "targetKeywords"',
    '"horror-strategy"': '    heroTags: ["驚悚恐怖", "策略硬派", "社交欺騙", "友情破壞", "Steam 多人連線", "Steam 遊戲推薦"],\n    "targetKeywords"'
}

for article_id, tags_str in hero_tags_map.items():
    content = re.sub(
        r'"id": ' + article_id + r',.*?"targetKeywords"',
        lambda m: m.group(0).replace('"targetKeywords"', tags_str.strip()),
        content,
        flags=re.DOTALL
    )

# 2. Update tags for each game
game_tags_map = {
    "雙人成行 (It Takes Two)": '["雙人合作", "情侶推薦", "劇情冒險", "默契考驗", "新手友善"]',
    "A Way Out": '["劇情合作", "雙人限定", "越獄冒險", "朋友同樂", "沉浸體驗"]',
    "Portal 2": '["合作解謎", "燒腦挑戰", "默契考驗", "經典神作", "雙人闖關"]',
    "We Were Here Together": '["雙人解謎", "語音溝通", "默契考驗", "燒腦合作", "遠距連線"]',
    "Bread & Fred": '["高難度挑戰", "友盡遊戲", "雙人合作", "操作考驗", "友情破壞"]',
    "Untitled Goose Game": '["輕鬆休閒", "惡作劇玩法", "雙人同樂", "療癒搞笑", "新手友善"]',
    "PHOGS!": '["雙人合作", "輕鬆休閒", "情侶推薦", "療癒搞笑", "新手友善"]',
    "雀魂麻將": '["休閒桌遊", "多人連線", "朋友同樂", "策略思考", "免費遊戲"]',
    "Human Fall Flat": '["物理解謎", "朋友同樂", "搞笑互動", "多人合作", "新手友善"]',
    "PICO PARK 2": '["多人合作", "派對首選", "友情破壞", "合作闖關", "溝通考驗"]',
    "猛獸派對 (Party Animals)": '["多人派對", "動物亂鬥", "朋友聚會", "輕鬆搞笑", "友情破壞"]',
    "Overcooked! 2": '["分工合作", "派對首選", "友情破壞", "手忙腳亂", "多人同樂"]',
    "超級雞馬 (Ultimate Chicken Horse)": '["互相傷害", "派對遊戲", "友情破壞", "陷阱創作", "多人同樂"]',
    "超級兔子人 (Super Bunny Man)": '["搞笑合作", "操作混亂", "友情破壞", "雙人同樂", "派對推薦"]',
    "槍火重生": '["第一人稱射擊", "多人合作", "Roguelite", "角色扮演", "爽快打擊"]',
    "Degrees of Separation": '["雙人解謎", "平台冒險", "情侶推薦", "唯美畫風", "合作闖關"]',
    "Holo X Break": '["動作闖關", "多人合作", "粉絲向", "輕鬆休閒", "爽快打擊"]',
    "Terraria": '["生存建造", "探索冒險", "多人合作", "精神時光屋", "高自由度"]',
    "饑荒聯機版 (Don't Starve Together)": '["合作生存", "硬派挑戰", "多人連線", "資源管理", "生存冒險"]',
    "Stardew Valley": '["模擬經營", "農場生活", "多人合作", "療癒休閒", "精神時光屋"]',
    "Sons Of The Forest": '["恐怖生存", "合作探索", "高沉浸感", "建造防禦", "刺激冒險"]',
    "Supermarket Together": '["模擬經營", "多人合作", "休閒搞笑", "朋友同樂", "免費遊戲"]',
    "ARK: Survival Evolved": '["開放世界", "生存建造", "恐龍馴養", "多人連線", "硬派挑戰"]',
    "Green Hell": '["硬派生存", "真實模擬", "叢林冒險", "多人合作", "高難度挑戰"]',
    "Core Keeper": '["地底探索", "生存建造", "多人合作", "休閒農場", "像素畫風"]',
    "Tinkerlands": '["生存冒險", "沙盒建造", "多人合作", "像素畫風", "搶先體驗"]',
    "Raft": '["海上生存", "合作建造", "資源收集", "朋友同樂", "探索冒險"]',
    "PROJECT: PLAYTIME": '["多人恐怖", "社交合作", "刺激追逐", "朋友同樂", "驚悚氣氛"]',
    "Labyrinthine (怪奇迷宮)": '["恐怖迷宮", "多人合作", "解謎逃脫", "驚悚氣氛", "朋友同樂"]',
    "Dark Hours: Prologue": '["恐怖生存", "多人合作", "潛行解謎", "驚悚氣氛", "免費遊戲"]',
    "Project Winter": '["社交欺騙", "生存合作", "友情破壞", "多人連線", "心機推理"]',
    "Alien Swarm: Reactive Drop": '["上帝視角", "合作射擊", "硬派挑戰", "多人連線", "免費遊戲"]',
    "Cuphead": '["高難度挑戰", "雙人合作", "Boss戰", "硬派動作", "復古美術"]',
    "For The King": '["策略冒險", "回合制戰鬥", "多人合作", "桌遊感", "硬派挑戰"]',
    "The Forest": '["恐怖生存", "食人族", "合作建造", "探索冒險", "高沉浸感"]',
    "Counter-Strike 2": '["競技射擊", "多人對戰", "策略配合", "免費遊戲", "硬派競技"]',
    "Left 4 Dead 2": '["合作射擊", "殭屍生存", "多人連線", "經典神作", "刺激爽快"]'
}

for title, tags in game_tags_map.items():
    escaped_title = re.escape(title)
    # Find the game block with this title and append tags after playerCount
    pattern = r'("title": "' + escaped_title + r'".*?"playerCount": ".*?)(\s*})'
    replacement = r'\1",\n        "tags": ' + tags + r'\2'
    content = re.sub(pattern, replacement, content, flags=re.DOTALL)

with open('src/data/articles.ts', 'w', encoding='utf-8') as f:
    f.write(content)

print("articles.ts updated")

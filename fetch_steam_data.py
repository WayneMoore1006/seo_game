import urllib.request
import urllib.parse
import json
import time
import os
import sys

sys.stdout.reconfigure(encoding='utf-8')

games = [
    "We Were Here Together",
    "Portal 2",
    "Tvö",
    "PROJECT: PLAYTIME",
    "Dark Hours: Prologue",
    "Sons Of The Forest",
    "Alien Swarm: Reactive Drop",
    "Project Winter",
    "Supermarket Together",
    "Labyrinthine", # 怪奇迷宮 通常指這個
    "Human Fall Flat",
    "槍火重生", # Gunfire Reborn
    "Operation: Tango",
    "Terraria",
    "Phogs!",
    "Shift Happens",
    "For The King",
    "BattleBlock Theater",
    "Don't Starve Together",
    "A Way Out",
    "Bread & Fred",
    "Stardew Valley",
    "Rhythm Doctor",
    "Cuphead",
    "Untitled Goose Game",
    "PICO PARK",
    "Overcooked! 2",
    "Party Animals",
    "Ultimate Chicken Horse",
    "Super Bunny Man",
    "It Takes Two",
    "Degrees of Separation"
]

results = []

def search_steam(term):
    url = f"https://store.steampowered.com/api/storesearch/?term={urllib.parse.quote(term)}&l=tchinese&cc=TW"
    try:
        req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
        with urllib.request.urlopen(req) as response:
            data = json.loads(response.read().decode())
            if data.get('total', 0) > 0:
                return data['items'][0]['id']
    except Exception as e:
        print(f"Error searching {term}: {e}")
    return None

def get_app_details(appid):
    url = f"https://store.steampowered.com/api/appdetails?appids={appid}&l=tchinese"
    try:
        req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
        with urllib.request.urlopen(req) as response:
            data = json.loads(response.read().decode())
            if str(appid) in data and data[str(appid)].get('success'):
                return data[str(appid)]['data']
    except Exception as e:
        print(f"Error getting details for appid {appid}: {e}")
    return None

print("Starting Steam API fetch...")
for game in games:
    print(f"Searching for {game}...")
    appid = search_steam(game)
    if appid:
        details = get_app_details(appid)
        if details:
            genres = [g['description'] for g in details.get('genres', [])]
            results.append({
                "query": game,
                "title": details.get('name'),
                "appid": appid,
                "genres": genres,
                "short_description": details.get('short_description'),
                "header_image": details.get('header_image'),
                "url": f"https://store.steampowered.com/app/{appid}/"
            })
    time.sleep(1) # Be nice to Steam API

output_path = "steam_data.json"
with open(output_path, "w", encoding="utf-8") as f:
    json.dump(results, f, ensure_ascii=False, indent=2)

print(f"Done! Saved {len(results)} games to {output_path}")

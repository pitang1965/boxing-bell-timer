# 概要

* [Lovable.dev](https://lovable.dev/)により生成しました。
* 用いたプロンプトは以下のとおり

```
I want to create a Boxing Interval Timer app. Here's the detailed specification:

Core Features:
1. Timer Configuration
- Rounds: Default 3 (adjustable from 1-12 rounds)
- Round Duration: Default 3 minutes (adjustable from 1-5 minutes)
- Rest Interval: Default 1 minute (adjustable from 30 seconds to 2 minutes)
- Easy adjustment using +/- buttons for each setting

2. Display Elements
- Large, prominent countdown timer
- Current round number
- Status indicator (Training/Rest periods)
- Color scheme: Red theme during training, Blue theme during rest
- Simple, boxing-inspired design with a professional gym atmosphere

3. Audio Features
- Boxing bell sound for round start/end
- Warning sound at 30 seconds remaining
- Motivational boxing workout background music
- Option to toggle BGM on/off

4. Control Interface
- Clear Start/Stop button
- Emergency stop ("Give Up") button
- Intuitive settings panel
- All controls should be easily accessible with boxing gloves on

The app should be straightforward and professional, focusing on the boxing workout experience. The interface should be designed for quick interactions during intense training sessions.

Additional notes:
- The app should have a boxing gym aesthetic
- No dark mode required
- Focus on making numbers highly visible from a distance
- Ensure audio cues are distinct and motivating
```

* 上記の和訳は次のとおり。

```
ボクシング用インターバルタイマーアプリを作成したいと思います。詳細な仕様は以下の通りです：

主要機能：
1. タイマー設定
- ラウンド数：デフォルト3ラウンド（1-12ラウンドまで調整可能）
- ラウンド時間：デフォルト3分（1-5分まで調整可能）
- 休憩時間：デフォルト1分（30秒から2分まで調整可能）
- 各設定は+/-ボタンで簡単に調整可能

2. 表示要素
- 大きく見やすいカウントダウンタイマー
- 現在のラウンド数
- ステータス表示（トレーニング中/休憩中）
- カラースキーム：トレーニング中は赤、休憩中は青をテーマカラーに
- シンプルでボクシングにインスパイアされたデザイン、プロのジム的な雰囲気

3. 音声機能
- ラウンド開始/終了時のボクシングベル音
- 残り30秒の警告音
- モチベーションが上がるボクシングワークアウト用BGM
- BGMのオン/オフ切り替えオプション

4. 操作インターフェース
- 分かりやすいスタート/ストップボタン
- 緊急停止（ギブアップ）ボタン
- 直感的な設定パネル
- すべての操作はボクシンググローブを着用したまま操作可能

このアプリは簡潔かつプロフェッショナルで、ボクシングワークアウト体験に焦点を当てています。インターフェースは激しいトレーニング中でも素早く操作できるように設計されています。

追加注意事項：
- ボクシングジムの雰囲気を持つデザイン
- ダークモードは不要
- 数字は離れた場所からでも視認できるように
- 音声キューは明確でモチベーションが上がるものに
```

# Welcome to your Lovable project

## Project info

**URL**: https://lovable.dev/projects/ef2ba41d-3038-4da8-8d7e-f8790dba2559

## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/ef2ba41d-3038-4da8-8d7e-f8790dba2559) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with .

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## How can I deploy this project?

Simply open [Lovable](https://lovable.dev/projects/ef2ba41d-3038-4da8-8d7e-f8790dba2559) and click on Share -> Publish.

## I want to use a custom domain - is that possible?

We don't support custom domains (yet). If you want to deploy your project under your own domain then we recommend using Netlify. Visit our docs for more details: [Custom domains](https://docs.lovable.dev/tips-tricks/custom-domain/)

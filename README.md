# 📚 Google Best Sellers — Next.js 14 Project

A modern, playful, and clean book explorer inspired by the New York Times Best Seller Explorer — rebuilt using **Google Books API** for richer and more stable data.  
Designed with handwritten-style UI for a friendly, creative feel.

## 🛠 Tech Stack

![Next.js](https://img.shields.io/badge/Next.js-14-black?logo=nextdotjs&logoColor=white)
![React](https://img.shields.io/badge/React-18-61DAFB?logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?logo=typescript&logoColor=white)
![CSS Modules](https://img.shields.io/badge/CSS%20Modules-🔧-blue?color=1572B6)
![Google Books API](https://img.shields.io/badge/Google%20Books%20API-4285F4?logo=google&logoColor=white)
![Vercel](https://img.shields.io/badge/Vercel-hosting-black?logo=vercel&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-20.x-3C873A?logo=node.js&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-blue)

---

## ✨ Features

- 🎨 Handwritten card UI using **Shadows Into Light**
- ✏️ Detail page styled with **Patrick Hand** for readable handwriting
- 🔎 Fetches **40+ popular books** from Google Books API  
- 📘 Individual book detail pages with:
  - Cover image
  - Title, author, description
  - External “Buy now →” link
- ⚡ Built with **Next.js App Router**, **Server Components**
- 📱 Fully responsive layout

---

## 📁 Folder Structure
```
app/
├─ layout.tsx
├─ (home)/
│ ├─ page.tsx
│ └─ page.module.css
├─ books/
│ ├─ [id]/
│ │ ├─ page.tsx
│ │ └─ page.module.css
components/
├─ navigation.tsx
└─ navigation.module.css
styles/
└─ global.css
next.config.js
```

---
## 🚀 Getting Started

### 1️⃣ Install dependencies

```bash
npm install
```
### 2️⃣ Run dev server
```bash
npm run dev
```
### 3️⃣ Open browser
http://localhost:3000

## 🌟 Future Improvements

1. Category tabs (fiction, non-fiction)

2. Real-time search bar

3. Save favorites (localStorage)

4. Infinite scroll for books

5. Optional Dark Mode

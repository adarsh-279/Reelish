# 🍽️ Reelish – Where Food Meets Reels 🎬✨

Reelish is a full-stack MERN application that blends the love for food with the magic of short video reels. Whether you're a user exploring trending dishes or a food partner showcasing your creations, Reelish makes food discovery interactive, engaging, and fun.

---

# 🧰 Tech Stack

- Frontend: React.js (Vite), Tailwind CSS
- Backend: Node.js, Express.js
- Database: MongoDB
- Auth & Security: JWT-based authentication
- Media Handling: Imagekit
- Deployment: Vercel

---

# ✨ Features

- 🍜 Food Reels Feed — Autoplaying, scrollable reels of food items
- 👨‍🍳 Food Partner Profiles — Partners can upload reels & manage their profile
- 👥 User Profiles — Users can explore partner reels and follow food creators
- 🔑 Authentication — Secure register/login for both Users & Food Partners
- 📤 Create Food Reels — Partners can upload videos with descriptions
- 🧭 Dynamic Routing — Separate views for partners and users
- 📱 Responsive UI — Optimized for mobile (only)

---

# 🧠 Problem Solving Journey

- ⚡ Challenge: Managing two different roles (Users vs Partners) with different profile views.
- ✅ Solution: Implemented dynamic routing (/partner/:id for partner self-view, /partner/user/:id for normal user view).

- ⚡ Challenge: Secure login and profile access for food partners.
- ✅ Solution: Integrated JWT + cookies with Express middleware for protected APIs.

---

# 🔮 Future Scope

- ⭐ Better Like/Comment system for reels
- 📌 Bookmarking / saving food reels to user collections
- 🌐 Multi-language support
- 🔔 Notifications for new uploads from followed partners
- 🤖 AI-powered food recommendation system

---

# 🚀 Quick Start

Clone the repo:

```
git clone https://github.com/adarsh-279/Reelish.git
```


Backend setup:

```
cd backend
npm install
npm run dev
```

Frontend setup:

```
cd frontend
npm install
npm run dev
```

Access app:

Backend → http://localhost:8000

Frontend → http://localhost:5173

---

# 🤝 Contributing

Contributions are welcome! 🎉
Open issues, suggest features, or submit pull requests to make Reelish even better.

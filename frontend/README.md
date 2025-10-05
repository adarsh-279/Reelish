# Reelish — Frontend

A minimal React + Vite frontend for the Reelish app (short food reels). This README gives a quick overview to get started and understand the project layout.

---

## Quick start

1. Install dependencies
   ```
   npm install
   ```

3. Run dev server
   ```
   npm run dev
   ```

5. Build for production
   ```
   npm run build
   npm run preview
   ```

---

## Project structure (important files)

- index.html — HTML entry
- vite.config.js — Vite configuration
- src/
  - main.jsx — app bootstrap
  - App.jsx — top-level component
  - index.css — global styles
  - assets/ — images and static assets
  - components/
    - auth/ — UserRegister, UserLogin, PartnerRegister, PartnerLogin
    - profile/ — FoodPartnerProfile, PartnerProfileUser
  - pages/
    - Home.jsx — main feed (video behavior)
    - CreateFood.jsx — upload/create food reel
  - routes/
    - AppRoutes.jsx — client-side routes

  - public/
    - static public assets (logo, etc.)

```

Directory structure:
└── frontend/
    ├── eslint.config.js
    ├── index.html
    ├── package-lock.json
    ├── package.json
    ├── public/
    │   └── logo.png
    ├── src/
    │   ├── App.jsx
    │   ├── assets/
    │   │   ├── bg.png
    │   │   ├── img.png
    │   │   └── logo.png
    │   ├── components/
    │   │   ├── auth/
    │   │   │   ├── PartnerLogin.jsx
    │   │   │   ├── PartnerRegister.jsx
    │   │   │   ├── UserLogin.jsx
    │   │   │   └── UserRegister.jsx
    │   │   └── profile/
    │   │       ├── FoodPartnerProfile.jsx
    │   │       └── PartnerProfileUser.jsx
    │   ├── index.css
    │   ├── main.jsx
    │   ├── pages/
    │   │   ├── CreateFood.jsx
    │   │   └── Home.jsx
    │   └── routes/
    │       └── AppRoutes.jsx
    └── vite.config.js

```

---

## Routing overview

Common routes implemented in AppRoutes.jsx:
- /home → Home
- /createfood → CreateFood
- /user/register → UserRegister
- /user/login → UserLogin
- /foodpartner/register → PartnerRegister
- /foodpartner/login → PartnerLogin
- /partner/:id → FoodPartnerProfile
- /partner/user/:id → PartnerProfileUser

---

## Notes for contributors

- API calls and endpoints are referenced in the source files (components/pages). Adjust endpoints directly in the files where requests are made.
- Video feed behavior and autoplay/pause logic are implemented in Home.jsx.
- Keep assets in src/assets or public for bundling and predictable paths.
- Keep code modular: UI components in /components, pages in /pages, and routing in /routes.

Open these files to quickly understand app flow:
- src/main.jsx
- src/App.jsx
- src/routes/AppRoutes.jsx
- src/pages/Home.jsx

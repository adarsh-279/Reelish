# Reelish — Backend

Minimal Node.js + Express backend for Reelish (food reels). This README provides a quick overview, how to run the server, and where to look in the codebase.

---

## Quick start

1. Install dependencies
    ```
    npm install
    ```

2. Start dev server (nodemon)
    ```
    npm run dev
    ```
   or start production server
   ```
   npm start
   ```

3. Check logs in the terminal. Server entry: server.js

Note: Review package.json for exact scripts.

---

## Project structure

- server.js — app entry / server bootstrap
- package.json
- src/
  - app.js — Express app setup, middleware, routes
  - db/
    - db.js — MongoDB connection
  - routes/
    - auth.routes.js — authentication endpoints
    - food.routes.js — food-related endpoints
  - controllers/
    - auth.controller.js — auth logic (register/login)
    - food.controller.js — food CRUD and feed logic
  - models/
    - user.model.js
    - foodpartner.model.js
    - food.model.js
  - middleware/
    - auth.middleware.js — JWT auth / protected routes
  - services/
    - storage.service.js — file upload / storage helper (e.g., Cloudinary or S3)

```

Directory structure:
└── backend/
    ├── package-lock.json
    ├── package.json
    ├── server.js
    └── src/
        ├── app.js
        ├── controllers/
        │   ├── auth.controller.js
        │   └── food.controller.js
        ├── db/
        │   └── db.js
        ├── middleware/
        │   └── auth.middleware.js
        ├── models/
        │   ├── food.model.js
        │   ├── foodpartner.model.js
        │   └── user.model.js
        ├── routes/
        │   ├── auth.routes.js
        │   └── food.routes.js
        └── services/
            └── storage.service.js

```

---

## Routes overview

- Auth routes (see src/routes/auth.routes.js)
  - user/partner registration and login endpoints
  - token issuance and basic validation

- Food routes (see src/routes/food.routes.js)
  - create/read/update/delete food items and feed endpoints
  - media upload endpoints depending on storage.service implementation

Exact paths and HTTP methods are defined in the route files — open them to confirm.

---

## Key files to inspect first

- src/app.js — middleware, CORS, route mounting
- server.js — server start and error handling
- src/db/db.js — DB connection flow
- src/routes/*.js and src/controllers/*.js — request handling and business logic
- src/middleware/auth.middleware.js — protected routes verify JWT

---

## Notes for contributors

- Keep secrets out of the repo (.env only).  
- Database and storage configuration lives in src/db/db.js and src/services/storage.service.js.  
- Add tests and linting scripts in package.json if needed.  
- For API contract changes, update controllers and route files together.

Open these files to understand flow:
- server.js
- src/app.js
- src/db/db.js
- src/routes/auth.routes.js
- src/routes/food.routes.js
- src/controllers/auth.controller.js
- src/controllers/food.controller.js

- src/routes/food.routes.js
- src/controllers/auth.controller.js
- src/controllers/food.controller.js

# backend-recipe

A Node.js backend for managing recipes, using Express and Prisma with MongoDB.

---

## Getting Started

### 1. Clone the repository

```sh
git clone https://github.com/edompedro/backend-recipe.git
cd backend-recipe
```

### 2. Install dependencies

```sh
npm install
```

### 3. Configure the database

Create a `.env` file in the root of the `backend-recipe` folder.  
Copy the example file and set your MongoDB connection string:

```sh
cp .env.example .env
```

Edit `.env` and set your `DATABASE_URL`:

```
DATABASE_URL="your_mongodb_connection_string_here"
```

### 4. Generate Prisma client

```sh
npx prisma db push
npx prisma generate
```

### 5. Start the backend server

#### Development mode (with auto-reload):

```sh
npm run dev
```

#### Production mode:

```sh
npm start
```

### 6. Run tests

```sh
npx jest
```

---

## Overview of Packages and Third-Party Libraries

| Package                | Purpose & Reasoning                                                                                 |
|------------------------|-----------------------------------------------------------------------------------------------------|
| **express**            | Minimal and flexible Node.js web application framework for building APIs.                           |
| **prisma**             | Modern ORM for Node.js and TypeScript, chosen for type safety, ease of use, and MongoDB support.    |
| **@prisma/client**     | Auto-generated client for database access, tightly integrated with Prisma ORM.                      |
| **dotenv**             | Loads environment variables from `.env` files, simplifying configuration management.                |
| **nodemon**            | Automatically restarts the server on code changes during development for faster iteration.          |
| **cors**               | Enables Cross-Origin Resource Sharing, allowing the frontend to communicate with the backend.        |
| **jest** or **vitest** | Testing frameworks for writing and running backend tests (check `package.json` for which is used).   |
| **supertest**          | HTTP assertions for integration testing of Express APIs.                                            |

**Why these choices?**
- **Express** is a widely adopted, minimal framework that makes API development straightforward.
- **Prisma** provides a modern, type-safe, and easy-to-use ORM experience, with excellent support for MongoDB.
- **dotenv** is the standard for managing environment variables in Node.js projects.
- **Nodemon** improves developer productivity by auto-reloading the server.
- **CORS** is essential for enabling secure cross-origin requests from the frontend.
- **Jest/Vitest** and **Supertest** are industry standards for backend testing, ensuring code reliability.

---

## Project Structure

- `controllers/` — Express route controllers
- `database/` — Prisma schema and database client
- `routes/` — Express route definitions
- `services/` — Business logic and database access
- `src/` — Main entry point
- `tests/` — Test files

---

## Notes

- Ensure your MongoDB instance is running and accessible at the URL specified in `.env`.
- Run `npx prisma generate` after changing your Prisma schema.

---

## License

MIT License
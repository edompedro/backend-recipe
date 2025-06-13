# backend-recipe

A simple backend for managing recipes using Node.js, Express, and Prisma with MongoDB.

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

This project uses MongoDB running in Docker.  
For instructions on setting up MongoDB with Docker, see the [MongoDB + Docker guide](https://www.mongodb.com/docs/manual/tutorial/install-mongodb-community-with-docker/).

Create a `.env` file in the root of the `backend-recipe` folder.  
Copy the contents of `.env.example` and set your MongoDB connection string:

```sh
cp .env.example .env
```

Edit `.env` and set your `DATABASE_URL`:

```
DATABASE_URL="your_mongodb_connection_string_here"
```

### 4. Run database migrations (if needed)

> **Note:** For MongoDB with Prisma, you typically just need to generate the client:

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

> **Note:** Make sure you have test files in the `tests/` directory.

---

## Scripts

- `npm run dev` — Start the server in development mode (with nodemon)
- `npm start` — Start the server in production mode
- `npx jest` — Run backend tests

---

## Project Structure

- `controllers/` — Express route controllers
- `database/` — Prisma schema and database client
- `routes/` — Express route definitions
- `services/` — Business logic and database access
- `src/` — Main entry point
- `tests/` — Test files

---

## License

MIT License

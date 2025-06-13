import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
// import recipeRoutes from '../routes/recipe.routes.js';
import axios from 'axios';

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

const corsOptions = {
  origin: '*', 
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
};

app.use(cors(corsOptions));
app.use(express.json());

// Backend check
app.get('/', (req, res) => {
  res.send('Welcome to the Recipe API');
  console.log('Welcome to the Recipe API');
});

// // Routes prefix
// app.use('/api', recipeRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});


import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import recipeRoutes from '../routes/recipe.routes.js';
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
app.use('/api', recipeRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

// axios.post(`http://localhost:${PORT}/api`, {}).then(response => {
//   console.log('Backend is running:', response.data);
// }).catch(error => {
//   console.error('Error connecting to the backend:', error.message);
// });

// Test route with prisma create
// name, description, ingredients, instructions, imageUrl

// Example axios POST request to test the API (should be run from a client, not the server itself)
// axios.post(`http://localhost:${PORT}/api/`, {
//   name: 'Recipe',
//   description: 'This is a test recipe.',
//   ingredients: ['Ingredient 1', 'Ingredient 2', 'banana'],
//   instructions: 'Mix ingredients and cook for 20 minutes.',
//   imageUrl: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=400&q=80',
// }).then(response => {
//   console.log('Recipe added:', response.data);
// }).catch(error => {
//   console.error('Error adding recipe:', error.message);
// });

// axios.get(`http://localhost:${PORT}/api/${'684b5ea58d9c2286dcb97d16'}`)
//   .then(response => {
//     console.log('Fetched recipe:', response.data);
//   })
//   .catch(error => {
//     console.error('Error fetching recipe:', error.message);
//   });

axios.get(`http://localhost:${PORT}/api`)
  .then(response => {
    console.log('Fetched all recipes:', response.data);
  })
  .catch(error => {
    console.error('Error fetching all recipes:', error.message);
  });

// axios.put(`http://localhost:${PORT}/api/${'684b5ea58d9c2286dcb97d16'}`, {
//   favorite: true,
// })
//   .then(response => {
//     console.log('Recipe updated:', response.data);
//   })
//   .catch(error => {
//     console.error('Error updating recipe:', error.message);
//   });

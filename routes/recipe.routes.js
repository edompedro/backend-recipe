import express from 'express';
import { 
    fetchAllRecipes, 
    fetchRecipeById,
    addRecipe,
    modifyRecipe,
} from '../controllers/recipe.controller.js';


const router = express.Router();

router.get('/', fetchAllRecipes);

router.get('/:id', fetchRecipeById);

router.put('/:id', modifyRecipe);

export default router;

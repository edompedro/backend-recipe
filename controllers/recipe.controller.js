import {
    getAllRecipes,
    createRecipe,
    getRecipeById,
    updateRecipe,
} from "../services/recipe.service.js";

// Add recipe
const addRecipe = async (req, res) => {
    try {
        const recipe = await createRecipe(req.body);
        res.status(201).json(recipe);
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error" });
    }
};

// Get all recipes
const fetchAllRecipes = async (req, res) => {
    try {
        const recipes = await getAllRecipes();
        res.status(200).json(recipes);
    } catch (error) {
        console.error("Error fetching recipes:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

// Get recipe by ID
const fetchRecipeById = async (req, res) => {
    const { id } = req.params;
    try {
        const recipe = await getRecipeById(id);
        if (!recipe) {
            return res.status(404).json({ error: "Recipe not found" });
        }
        res.status(200).json(recipe);
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error" });
    }
};

// Favorite recipe
const modifyRecipe = async (req, res) => {
    const { id } = req.params;
    const { favorite } = req.body;
    try {
        const recipeToUpdate = await getRecipeById(id);
        if (!recipeToUpdate) {
            return res.status(404).json({ error: "Recipe not found" });
        }
        recipeToUpdate.favorite = favorite;
        const updatedRecipe = await updateRecipe(recipeToUpdate);
        res.status(200).json(updatedRecipe);
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error" });
    }
};

export {
    addRecipe,
    fetchAllRecipes,
    fetchRecipeById,
    modifyRecipe,
};

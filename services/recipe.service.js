import prisma from "../database/db.js";

const getAllRecipes = async () => {

  try {
    const recipes = await prisma.recipe.findMany();
    return recipes;

  } catch (error) {
    console.error("Error fetching recipes:", error);
    throw new Error("Internal Server Error");
  }
};

const getRecipeById = async (id) => {

  try {
    const recipe = await prisma.recipe.findUnique({
      where: { id: id },
    });
    if (!recipe) {
      throw new Error("Recipe not found");
    }
    return recipe;

  } catch (error) {
    console.error("Error fetching recipe:", error);
    throw new Error("Internal Server Error");
  }
};

const createRecipe = async (data) => {
  const { name, description, ingredients, instructions, imageUrl, favorite } = data;

  try {
    const newRecipe = await prisma.recipe.create({
      data: {
        name,
        description,
        ingredients,
        instructions,
        imageUrl,
        favorite,
      },
    });
    return newRecipe;

  } catch (error) {
    console.error("Error creating recipe:", error);
    throw new Error("Internal Server Error");
  }
};

const updateRecipe = async (recipe) => {
  try {
    const updatedRecipe = await prisma.recipe.update({
      where: { id: recipe.id },
      data: { favorite: recipe.favorite },
    });
    return updatedRecipe;
    
  } catch (error) {
    console.error("Error updating recipe:", error);
    throw new Error("Internal Server Error");
  }
};

export {
    getAllRecipes,
    getRecipeById,
    createRecipe,
    updateRecipe
}

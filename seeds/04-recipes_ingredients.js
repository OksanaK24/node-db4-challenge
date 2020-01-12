exports.seed = async (knex) => {
    await knex("recipes_ingredients").insert([
      { recipe_id: 1, ingredient_id: 1,  ingredient_quantity: "1", process: "diced"},
      { recipe_id: 1, ingredient_id: 2,  ingredient_quantity: "4", process: "diced"},
      { recipe_id: 1, ingredient_id: 3,  ingredient_quantity: "3", process: "diced"},
      { recipe_id: 1, ingredient_id: 4,  ingredient_quantity: "1/2", process: "diced"},
      { recipe_id: 1, ingredient_id: 5,  ingredient_quantity: "1/4", process: "chopped"},
      { recipe_id: 1, ingredient_id: 6,  ingredient_quantity: "1", process: "juiced"},
      { recipe_id: 1, ingredient_id: 7,  ingredient_quantity: "to taste", process: ""},
      { recipe_id: 1, ingredient_id: 8,  ingredient_quantity: "to taste", process: ""},
      { recipe_id: 1, ingredient_id: 9,  ingredient_quantity: "2", process: ""},
      { recipe_id: 2, ingredient_id: 10,  ingredient_quantity: "1", process: ""},
      { recipe_id: 2, ingredient_id: 11,  ingredient_quantity: "1", process: ""},
      { recipe_id: 2, ingredient_id: 12,  ingredient_quantity: "1", process: "cut on half"},
      { recipe_id: 2, ingredient_id: 13,  ingredient_quantity: "2", process: ""},
      { recipe_id: 2, ingredient_id: 15,  ingredient_quantity: "2", process: ""},
      { recipe_id: 2, ingredient_id: 16,  ingredient_quantity: "1", process: ""},
      { recipe_id: 2, ingredient_id: 1,  ingredient_quantity: "1/8", process: "sliced"},
      { recipe_id: 2, ingredient_id: 2,  ingredient_quantity: "1/4", process: "sliced"},
      { recipe_id: 2, ingredient_id: 14,  ingredient_quantity: "1/8", process: "sliced"},
    ])
  }
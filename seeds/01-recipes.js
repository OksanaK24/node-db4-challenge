exports.seed = async (knex) => {
    await knex("recipes").insert([   
      { name: "Cucumber, Tomato and Avocado Salad" },
      { name: "Ham, Swiss & Vegetable Sandwiches" },
    ])
  }

exports.up = async function(knex) {

  await knex.schema.createTable("recipes", (table) => { 
    table.increments("id")
    table.string("name")
        .notNullable()
  })

  await knex.schema.createTable("ingredients", (table) => {
      table.increments("id")
      table.string("name")
        .notNullable()
      table.string("measure")
  })

  await knex.schema.createTable("step_by_step", (table) => {
    table.increments("id")
    table.string("step_description", [1000])
    table.integer("recipes_id")
      .notNullable()
      .references("id")
      .inTable("recipes")
      .onDelete("CASCADE")
      .onUpdate("CASCADE")
  })

  await knex.schema.createTable("recipes_ingredients", (table) => {
    table.integer("recipe_id")
        .notNullable()
        .references("id")
        .inTable("recipes")
        // .onDelete("CASCADE")
        // .onUpdate("CASCADE")
    table.integer("ingredient_id")
        .notNullable()
        .references("id")   
        .inTable("ingredients")
        // .onDelete("CASCADE")
        // .onUpdate("CASCADE")
    table.string("ingredient_quantity")
    table.string("process")
    table.primary(["recipe_id", "ingredient_id"])
    
  })
};

exports.down = async function(knex) {
    await knex.schema.dropTableIfExists("recipes_ingredients")
    await knex.schema.dropTableIfExists("step_by_step")
    await knex.schema.dropTableIfExists("ingredients")
    await knex.schema.dropTableIfExists("recipes")
};

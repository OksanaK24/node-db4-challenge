exports.seed = async (knex) => {
    await knex("recipes_ingredients").truncate()
    await knex("ingredients").truncate()
    await knex("recipes").truncate()
    await knex("step_by_step").truncate()
  }
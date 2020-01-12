exports.seed = async (knex) => {
    await knex("step_by_step").insert([   
      { step_description: "Slice then dice cucumber", recipes_id: 1 },
      { step_description: "Slice then dice tomatos", recipes_id: 1 },
      { step_description: "Slice avocado and caregully remove stone. Scoop out inside and dice", recipes_id: 1 },
      { step_description: "Peel onion and remove tops. Then slice", recipes_id: 1 },
      { step_description: "Chop cilantro and place in a large salad bowl with previous ingredients", recipes_id: 1 },
      { step_description: "Toss with olive oil, lemon juice, salt and pepper. Serve in a bowl", recipes_id: 1 },
      { step_description: "Enjoy! =)", recipes_id: 1 },
      { step_description: "Combine mustard and mayonnaise; spread over cut side of sandwich round.", recipes_id: 2 },
      { step_description: "Layer 1 slice cheese over the bottom of round; top with vegetables, ham, remaining cheese and lettuce", recipes_id: 2 },
      { step_description: "Close sandwiche.", recipes_id: 2 },
    ])
  }
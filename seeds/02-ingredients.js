exports.seed = async (knex) => {
    await knex("ingredients").insert([   
      { name: "cucumber", measure: "piece" }, //1
      { name: "tomato", measure: "piece" }, //2
      { name: "avocado", measure: "piece" }, //3
      { name: "onion", measure: "piece" }, //4
      { name: "cilantro", measure: "cup" }, //5
      { name: "lemon", measure: "piece" }, //6
      { name: "salt", measure: "" }, //7
      { name: "pepper", measure: "" }, //8
      { name: "olive oit", measure: "tablespoon" }, //9
      { name: "mustard", measure: "tablespoon" }, //10
      { name: "mayonnaise", measure: "tablespoon" }, //11
      { name: "multi-grain sandwich rounds", measure: "piece" }, //12
      { name: "Swiss Cheese", measure: "slice" }, //13
      { name: "bell peppers", measure: "piece" }, //14
      { name: "ham", measure: "slice" }, //15
      { name: "lettuce", measure: "leaves" }, //16
    ])
  }
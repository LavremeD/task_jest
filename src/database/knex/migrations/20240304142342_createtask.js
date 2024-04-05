
exports.up = (knex) => {
    return knex.schema.createTable("task", (table) => { 
        table.increments('id').primary();
        table.string("title").notNullable();
        table.string("description").notNullable();
        table.boolean("isComplete").defaultTo("false");
        table.timestamp("created_at").defaultTo(knex.fn.now());
        table.timestamp("updated_at").defaultTo(knex.fn.now());
        table.integer("user_id").unsigned().index().references("id").inTable("users")
    })
};

exports.down = (knex) => {
    return knex.schema.dropTableIfExists("task")
};

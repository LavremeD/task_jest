
exports.up = (knex) => {
    return knex.schema.createTable("users", (table) => { 
        table.increments('id').primary();
        table.string("name").notNullable();
        table.string("email").notNullable();
        table.string("password").notNullable();
        table.boolean("isAdmin").defaultTo("false")
    })
};
exports.down = (knex) => {
    return knex.schema.dropTableIfExists("users")
  
};

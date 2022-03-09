
exports.up = (knex) => {
    return knex.schema
        .createTable('stuff', (table) => {
            table.increments('id').primary();
            table.string('name').nullable();
            table.timestamp('created_at').defaultTo(knex.fn.now());
        })
}

exports.down = (knex) => {
    return knex.schema
        .dropTableIfExists('stuff')
}

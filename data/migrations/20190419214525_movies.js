
exports.up = function(knex, Promise) {
    return knex.schema.createTable('movies', tbl => {
        tbl.increments();
    
        tbl.string('title', 55).notNullable().unique();
        tbl.string('genre', 55).notNullable();
        tbl.integer('releaseYear', 55);
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('movies');
};

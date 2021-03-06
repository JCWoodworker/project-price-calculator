/**
 * @typedef {import("knex")} Knex
 */

/**
 * @param {Knex} knex
 */
exports.up = async (knex) => {
  return knex.schema.createTable('hardwoods', t => {
    t.bigIncrements('id')
    t.string('name').notNullable()
    t.decimal('price',7,2).notNullable()
    t.string('region')
    t.integer('jankaHardness')
    t.string('imageUrl')
    t.timestamp("createdAt").notNullable().defaultTo(knex.fn.now())
    t.timestamp("updatedAt").notNullable().defaultTo(knex.fn.now())
  })
};

/**
  * @param {Knex} knex
  */
exports.down = async (knex) => {
  return knex.schema.dropTableIfExists('hardwoods')
};
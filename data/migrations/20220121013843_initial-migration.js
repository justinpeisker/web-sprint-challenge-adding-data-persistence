exports.up = async function(knex) {
  await knex.schema
    .createTable('projects', table => {
        table.increments('project_id')
        table.text('project_name')
            .notNullable()
        table.text('project_description')
        table.boolean('project_completed')
            .notNullable()
            .defaultTo(false)
    })

    .createTable('resources', table => {
        table.increments('resource_id')
        table.text('resource_name')
            .notNullable()
            .unique()
        table.text('resource_description')
    })

    .createTable('tasks', table => {
        table.increments('task_id')
        table.text('task_description')
            .notNullable()
        table.text('task_notes')
        table.boolean('task_completed')
            .defaultTo(false)
        table.integer('project_id')
            .notNullable()
            .references('project_id')
            .inTable('projects')
            .onDelete('RESTRICT')
            .onUpdate('RESTRICT')
        table.text('project_name')
            .references('project_id')
            .inTable('projects')
            .onDelete('RESTRICT')
            .onUpdate('RESTRICT')
        table.text('project_description')
            .references('project_id')
            .inTable('projects')
            .onDelete('RESTRICT')
            .onUpdate('RESTRICT')
    })
};

exports.down = async function(knex) {
  await knex.schema
    .dropTableIfExists('tasks')
    .dropTableIfExists('resources')
    .dropTableIfExists('projects')
};

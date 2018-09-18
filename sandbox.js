const jsonSql = require('./lib/index')();

const sql = jsonSql.build({
	type: 'select',
	table: 'users',
	fields: ['name', 'age'],
	condition: {name: 'Max', id: 6}
});

console.log('SQL', sql);
const { buildDeleteQuery } = require('../src');

const { sql, values } = buildDeleteQuery('users', 'id = ?', [101]);

console.log(sql);    // DELETE FROM users WHERE id = ?
console.log(values); // [101]

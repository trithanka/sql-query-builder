const { buildUpdateQuery } = require('../src');

const { sql, values } = buildUpdateQuery('users', {
  name: 'Ravi Kumar',
  age: 26
}, 'id = ?', [101]);

console.log(sql);    // UPDATE users SET name = ?, age = ? WHERE id = ?
console.log(values); // ['Ravi Kumar', 26, 101]

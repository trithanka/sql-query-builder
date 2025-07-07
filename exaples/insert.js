const { buildInsertQuery } = require('../src');

const { sql, values } = buildInsertQuery('users', {
  name: 'Ravi',
  age: 25,
  gender: 'male'
});

console.log(sql);    // INSERT INTO users (name, age, gender) VALUES (?, ?, ?)
console.log(values); // ['Ravi', 25, 'male']

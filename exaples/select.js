const { createSelectBuilder } = require('../src');

const filters = {
  status: 'active',
  role: 'admin',
  fromDate: '2024-01-01',
  toDate: '2024-12-31',
  limit: 10,
  offset: 0
};

const builder = createSelectBuilder('SELECT * FROM users');

const { sql, values } = builder
  .where('status = ?', filters.status)
  .where('role = ?', filters.role)
  .where('created_at >= ?', filters.fromDate)
  .where('created_at <= ?', filters.toDate)
  .orderBy('created_at', 'desc')
  .paginate(filters.limit, filters.offset)
  .build();

console.log(sql);
console.log(values);

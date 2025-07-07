# SQL Query Builder 🧩

A lightweight, function-based, chainable SQL query builder for Node.js projects using MySQL/MariaDB pool connections and raw queries. Perfect for building dynamic filters, pagination, and safe SQL operations — without a full-blown ORM.

---

## 📦 Features

- ✅ Function-based & chainable API
- ✅ Safe parameterized queries (`?` bindings)
- ✅ Works seamlessly with MySQL `pool.execute` / `pool.query`
- ✅ Supports: `SELECT`, `INSERT`, `UPDATE`, `DELETE`
- ✅ Clean dynamic filter generation
- ✅ Pagination & ordering support

---

## 🔧 Installation

```bash
npm install sql-query-builder

🚀 Usage
🔍 SELECT (with filters, order, pagination)

const { createSelectBuilder } = require('sql-query-builder');

const filters = {
  status: 'active',
  role: 'admin',
  fromDate: '2024-01-01',
  toDate: '2024-12-31'
};

const { sql, values } = createSelectBuilder('SELECT * FROM users')
  .where('status = ?', filters.status)
  .where('role = ?', filters.role)
  .where('created_at >= ?', filters.fromDate)
  .where('created_at <= ?', filters.toDate)
  .orderBy('created_at', 'desc')
  .paginate(10, 0)
  .build();

await pool.execute(sql, values);
🆕 INSERT

const { buildInsertQuery } = require('sql-query-builder');

const { sql, values } = buildInsertQuery('users', {
  name: 'Ravi',
  age: 25,
  gender: 'male'
});

// INSERT INTO users (name, age, gender) VALUES (?, ?, ?)
// ['Ravi', 25, 'male']
await pool.execute(sql, values);

✏️ UPDATE

const { buildUpdateQuery } = require('sql-query-builder');

const { sql, values } = buildUpdateQuery(
  'users',
  { name: 'Ravi Kumar', age: 26 },
  'id = ?',
  [101]
);

// UPDATE users SET name = ?, age = ? WHERE id = ?
// ['Ravi Kumar', 26, 101]
await pool.execute(sql, values);
❌ DELETE

const { buildDeleteQuery } = require('sql-query-builder');

const { sql, values } = buildDeleteQuery('users', 'id = ?', [101]);

// DELETE FROM users WHERE id = ?
// [101]
await pool.execute(sql, values);

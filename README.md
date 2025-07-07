# SQL Query Builder 🧩

[![npm version](https://img.shields.io/npm/v/@trithanka/sql-builder)](https://www.npmjs.com/package/@trithanka/sql-builder)
[![npm downloads](https://img.shields.io/npm/dw/@trithanka/sql-builder)](https://www.npmjs.com/package/@trithanka/sql-builder)
[![GitHub license](https://img.shields.io/github/license/Trithanka/sql-builder)](https://github.com/Trithanka/sql-builder/blob/main/LICENSE)
[![Build](https://github.com/Trithanka/sql-builder/actions/workflows/node.js.yml/badge.svg)](https://github.com/Trithanka/sql-builder/actions)

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
npm install @trithanka/sql-builder
```

---

## 🚀 Usage

### 🔍 SELECT (with filters, order, pagination)

```js
const { createSelectBuilder } = require('@trithanka/sql-builder');

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
```

---

### 🆕 INSERT

```js
const { buildInsertQuery } = require('@trithanka/sql-builder');

const { sql, values } = buildInsertQuery('users', {
  name: 'Ravi',
  age: 25,
  gender: 'male'
});

// INSERT INTO users (name, age, gender) VALUES (?, ?, ?)
// ['Ravi', 25, 'male']
await pool.execute(sql, values);
```

---

### ✏️ UPDATE

```js
const { buildUpdateQuery } = require('@trithanka/sql-builder');

const { sql, values } = buildUpdateQuery(
  'users',
  { name: 'Ravi Kumar', age: 26 },
  'id = ?',
  [101]
);

// UPDATE users SET name = ?, age = ? WHERE id = ?
// ['Ravi Kumar', 26, 101]
await pool.execute(sql, values);
```

---

### ❌ DELETE

```js
const { buildDeleteQuery } = require('@trithanka/sql-builder');

const { sql, values } = buildDeleteQuery('users', 'id = ?', [101]);

// DELETE FROM users WHERE id = ?
// [101]
await pool.execute(sql, values);
```

---

## 📁 Folder Structure

```bash
src/
├── selectBuilder.js
├── insertBuilder.js
├── updateBuilder.js
├── deleteBuilder.js
└── index.js
```

---

## 🧠 When Should You Use This?

- When you're using raw SQL (`pool.execute`) and need reusable filters
- When you want full control without the overhead of an ORM like Sequelize
- When building admin panels, dashboards, reports, or public APIs
- When writing secure SQL using parameter binding

---

## 🛡️ Security

- All values are automatically passed as parameters (`?`)
- Prevents SQL injection — works with MySQL `mysql2`, `mysql`, `mariadb` modules

---

## 🧪 Coming Soon

- `.whereIn(field, [...values])`
- `.between(field, from, to)`
- `.groupBy(column)`
- TypeScript support

---

## 📃 License

MIT © Trithanka

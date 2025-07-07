function buildInsertQuery(table, data) {
    // Get the keys and values from the data object and create placeholders
    const keys = Object.keys(data);
    const placeholders = keys.map(() => '?').join(', ');
    // Get the values from the data object
    const values = Object.values(data);
    // Create the SQL query
    const sql = `INSERT INTO ${table} (${keys.join(', ')}) VALUES (${placeholders})`;
    return { sql, values };
  }
  
  module.exports = buildInsertQuery;
  
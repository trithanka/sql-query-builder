function buildUpdateQuery(table, data, whereClause, whereValues = []) {
    const keys = Object.keys(data);
    const setClause = keys.map(key => `${key} = ?`).join(', ');
    const values = [...Object.values(data), ...whereValues];
    const sql = `UPDATE ${table} SET ${setClause} WHERE ${whereClause}`;
    return { sql, values };
  }
  
  module.exports = buildUpdateQuery;
  
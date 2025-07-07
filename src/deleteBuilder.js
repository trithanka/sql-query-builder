function buildDeleteQuery(table, whereClause, whereValues = []) {
    const sql = `DELETE FROM ${table} WHERE ${whereClause}`;
    return { sql, values: whereValues };
  }
  
  module.exports = buildDeleteQuery;
  
function createSelectBuilder(baseSql) {
    let sql = baseSql;
    const whereClauses = [];
    const values = [];
    let orderByClause = '';
    let limitClause = '';
    let offsetClause = '';
  
    const builder = {
      where(condition, value) {
        if (value !== undefined && value !== null && value !== '') {
          whereClauses.push(condition);
          values.push(value);
        }
        return builder;
      },
  
      orderBy(column, direction = 'ASC') {
        if (column) {
          orderByClause = ` ORDER BY ${column} ${direction.toUpperCase()}`;
        }
        return builder;
      },
  
      paginate(limit, offset = 0) {
        if (limit !== undefined) {
          limitClause = ' LIMIT ?';
          offsetClause = ' OFFSET ?';
          values.push(Number(limit), Number(offset));
        }
        return builder;
      },
  
      build() {
        let finalSql = sql;
  
        if (whereClauses.length > 0) {
          finalSql += ' WHERE ' + whereClauses.join(' AND ');
        }
  
        finalSql += orderByClause;
        finalSql += limitClause;
        finalSql += offsetClause;
  
        return { sql: finalSql, values };
      }
    };
  
    return builder;
  }
  
  module.exports = createSelectBuilder;
  
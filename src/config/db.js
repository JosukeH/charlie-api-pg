import pg from 'pg';

const { Pool } = pg;

const pool = new Pool({
  user: 'admin',
  host: 'localhost',
  database: 'api',
  password: 'admin',
  port: 5454,
});

// id SERIAL PRIMARY KEY, email VARCHAR(30), password VARCHAR(30), name VARCHAR(20)
// pool.query('CREATE TABLE tasks(id SERIAL, todo VARCHAR(100) NOT NULL,
// owner SERIAL,created_at TIMESTAMP NOT NULL
// , PRIMARY KEY (id),FOREIGN KEY(owner) REFERENCES users(id) ON DELETE CASCADE)');
export default pool;

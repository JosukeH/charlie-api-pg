import Pool from '../config/db.js';

export const getAllUser = (req, res) => {
  Pool.query('SELECT * FROM users order BY id ASC', (error, results) => {
    if (error) {
      res.json(error);
    }
    res.status(200).json(results.rows);
  });
};

export const getUserById = (req, res) => {
  const id = Number(req.params.id);

  Pool.query('SELECT * FROM users WHERE id = $1', [id], (error, results) => {
    if (error) {
      throw error;
    }
    res.status(200).json(results.rows[0]);
  });
};

export const createUser = (req, res) => {
  const user = req.body;
  const {
    name, email, password,
  } = user;

  Pool.query('INSERT INTO users(name, email, password) VALUES ($1, $2,$3) RETURNING *', [name, email, password], (err, result) => {
    if (err) {
      throw err;
    }
    res.status(201).send(`User added with ID: ${result.rows[0].id}`);
  });
};

export const updateUser = (req, res) => {
  const id = Number(req.params.id);
  const { name, email } = req.body;

  Pool.query(
    'UPDATE users SET name = $1, email = $2 WHERE id = $3',
    [name, email, id],
    (error, results) => {
      if (error) {
        throw error;
      }
      console.log(results.rows);
      res.status(200).send(`User modified with ID: ${id}`);
    },
  );
};

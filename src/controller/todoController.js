import Pool from '../config/db.js';

export const getAllTodo = (req, res) => {
  Pool.query('SELECT * FROM tasks', (error, results) => {
    if (error) {
      res.json(error);
    }
    res.status(200).json(results.rows);
  });
};

export const createTodo = (req, res) => {
  const { todo, owner } = req.body;
  // eslint-disable-next-line no-console
  console.log(todo, owner);
  Pool.query('INSERT INTO tasks(todo, owner, created_at) VALUES($1, $2, $3) RETURNING *', [todo, owner, new Date()], (error, results) => {
    if (error) {
      console.log(error);
      res.json(error);
    }
    res.status(201).json({ message: `Task with id ${results.rows[0].id} created` });
  });
};

export const getTodosByUser = (req, res) => {
  const { id } = req.params;

  Pool.query('SELECT * FROM "users" JOIN "tasks" ON "tasks"."owner" = "users"."id" WHERE "tasks"."owner"= $1', [id], (error, results) => {
    if (error) {
      console.log(error);

      res.json(error);
    }
    res.status(200).json({ data: results.rows });
  });
};

export const deleteTodo = (req, res) => {
  const { id } = req.params;

  Pool.query('DELETE FROM tasks WHERE id = $1', [id], (error, results) => {
    if (error) {
      console.log(error);

      res.json(error);
    }
    res.status(200).json({ data: results.rows });
  });
};

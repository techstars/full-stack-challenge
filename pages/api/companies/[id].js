import db from '../../../database/database';

export default async (req, res) => {
  const {
    body,
    method,
    query: { id },
  } = req;
  // Note: returns a Promise due to Next.js implementation detail
  // Source: https://github.com/zeit/next.js/issues/10439#issuecomment-583214126

  switch (method) {
    case 'GET':
      return new Promise((resolve, reject) => {
        const selectStatement = 'SELECT * FROM companies WHERE id = ?';
        db.get(selectStatement, [id], (err, row) => {
          if (err) {
            res.status(400).json({ "error": err.message });
            resolve();
          } else {
            if (row) {
              res.status(200).json(row);
            } else {
              res.status(404).end();
            }
            resolve();
          }
        });
      });
    case 'PUT':
      return new Promise((resolve, reject) => {
        const bodyData = typeof(body) === 'string' ? JSON.parse(body) : body;
        const updateStatement = db.prepare(`UPDATE companies
          SET name = ?, description = ?, city = ?, state = ?, date_founded = ?
          WHERE id = ?`);
        updateStatement.run(
          [bodyData.name,
          bodyData.description,
          bodyData.city,
          bodyData.state,
          bodyData.dateFounded,
          id],
          (err) => {
          if (err) {
            res.status(400).json({ "error": err.message });
            resolve();
          } else {
            if (updateStatement.changes > 0) {
              res.status(200).end();
            } else {
              res.status(404).end();
            }
            resolve();
          }
        });
      });
    case 'DELETE':
      return new Promise((resolve, reject) => {
        const deleteStatement = db.prepare('DELETE FROM companies WHERE id = ?');
        deleteStatement.run([id], (err) => {
          if (err) {
            res.status(400).json({ "error": err.message });
            resolve();
          } else {
            if (deleteStatement.changes > 0) {
              res.status(204).end();
            } else {
              res.status(404).end();
            }
            resolve();
          }
        });
      });
    default:
      res.setHeader('Allow', ['GET', 'PUT'])
      res.status(405).end(`Method ${method} Not Allowed`)
  }
}
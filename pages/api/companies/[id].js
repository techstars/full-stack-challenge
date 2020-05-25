import db from '../../../database/database';

export default async (req, res) => {
  const {
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
    default:
      res.setHeader('Allow', ['GET'])
      res.status(405).end(`Method ${method} Not Allowed`)
  }
}
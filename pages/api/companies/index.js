import db from '../../../database/database';

// Note: returns a Promise due to Next.js implementation detail
// Source: https://github.com/zeit/next.js/issues/10439#issuecomment-583214126
export default async (req, res) => {
  const { method } = req;

  switch (method) {
    case 'GET':
      return new Promise((resolve, reject) => {
        const selectStatement = 'SELECT * FROM companies';
    
        db.all(selectStatement, [], (err, rows) => {
          if (err) {
            res.status(400).json({ "error": err.message });
            resolve();
          } else {
            res.status(200).json(rows);
            resolve();
          }
        });
      });
    default:
      res.setHeader('Allow', ['GET'])
      res.status(405).end(`Method ${method} Not Allowed`)
  }
}

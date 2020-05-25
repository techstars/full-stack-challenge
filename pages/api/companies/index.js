import db from '../../../database/database';

// Note: returns a Promise due to Next.js implementation detail
// Source: https://github.com/zeit/next.js/issues/10439#issuecomment-583214126
export default async (req, res) => {
  const { method, body } = req;

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
    case 'POST':
      return new Promise((resolve, reject) => {
        const bodyData = JSON.parse(body);
        const insertStatement = db.prepare(`INSERT INTO companies
          (name, description, city, state, date_founded)
          VALUES (?, ?, ?, ?, ?)`);

        if ('name' in bodyData && 'description' in bodyData
          && 'city' in bodyData && 'state' in bodyData
          && 'dateFounded' in bodyData) {
          insertStatement.run(
            [bodyData.name,
            bodyData.description,
            bodyData.city,
            bodyData.state,
            bodyData.dateFounded],
            (error) => {
              if (error) {
                res.status(400).json({ 'error': err.message });
                resolve();
              } else {
                res.status(201);
                res.json({id: insertStatement.lastID});
                resolve();
              }
            });
        } else {
          res.status(400).json({ 'error': 'Invalid POST body' });
          resolve();
        }
      });
    default:
      res.setHeader('Allow', ['GET', 'POST'])
      res.status(405).end(`Method ${method} Not Allowed`)
      resolve();
  }
}

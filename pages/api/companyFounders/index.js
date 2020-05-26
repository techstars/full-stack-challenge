import db from '../../../database/database';

// Note: returns a Promise due to Next.js implementation detail
// Source: https://github.com/zeit/next.js/issues/10439#issuecomment-583214126
export default async (req, res) => {
  const { method, body } = req;

  switch (method) {
    case 'POST':
      return new Promise((resolve, reject) => {
        const bodyData = typeof(body) === 'string' ? JSON.parse(body) : body;
        const insertStatement = db.prepare(`
          INSERT INTO company_founders
            (company_id, name, title)
            VALUES (?, ?, ?)`);

        if ('companyId' in bodyData && 'name' in bodyData && 'title') {
          insertStatement.run(
            [bodyData.companyId,
            bodyData.name,
            bodyData.title],
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
      res.setHeader('Allow', ['POST'])
      res.status(405).end(`Method ${method} Not Allowed`)
      resolve();
  }
}

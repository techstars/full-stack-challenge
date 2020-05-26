import db from '../../../database/database';

export default async (req, res) => {
  const {
    method,
    query: { companyId },
  } = req;
  // Note: returns a Promise due to Next.js implementation detail
  // Source: https://github.com/zeit/next.js/issues/10439#issuecomment-583214126

  switch (method) {
    case 'GET':
      return new Promise((resolve, reject) => {
        const selectStatement = `
          SELECT
            company_founders.company_id,
            company_founders.id,
            company_founders.name,
            company_founders.title
          FROM company_founders
            LEFT JOIN companies ON company_founders.company_id = companies.id
          WHERE companies.id = ?`;
        db.all(selectStatement, [companyId], (err, rows) => {
          if (err) {
            res.status(400).json({ "error": err.message });
            resolve();
          } else {
            if (rows.length > 0) {
              res.status(200).json(rows);
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
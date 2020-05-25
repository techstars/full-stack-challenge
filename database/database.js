import sqlite3  from 'sqlite3';

const databaseFile = "db.sqlite"

const db = new sqlite3.Database(databaseFile, (databaseError) => {
  if (databaseError) {
    console.error(`Could not open database file: ${databaseFile}`);
    console.error(databaseError.message);
    throw databaseError;
  } else {
    console.log('Connected to the database.');

    const companiesCreateStatement = `
      CREATE TABLE companies (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT,
        description TEXT,
        city TEXT,
        state TEXT,
        date_founded TEXT
      )`;
    db.run(
      companiesCreateStatement,
      (companiesCreateError) => {
        if (companiesCreateError) {
          // Table already exists, do nothing
        } else {
          // New table created, add initial data
          console.log('Created `companies` table.');
          console.log('Inserting initial rows...');

          const insertStatement = `INSERT INTO companies
            (name, description, city, state, date_founded)
            VALUES (?, ?, ?, ?, ?)`;
          db.run(insertStatement, ['testName', 'testDescription', 'Denver', 'CO', '2012-09-23'], (companyInsertError) => {
            if (companyInsertError) {
              console.error(`Could not open database file: ${databaseFile}`);
              console.error(companyInsertError.message);
              throw companyInsertError;
            } else {
              const companyFoundersCreateStatement = `
                CREATE TABLE company_founders (
                  id INTEGER PRIMARY KEY AUTOINCREMENT,
                  company_id INTEGER,
                  name TEXT,
                  title TEXT,
                  FOREIGN KEY(company_id) REFERENCES companies(id)
                )`;
              db.run(
                companyFoundersCreateStatement,
                (companyFoundersCreateError) => {
                  if (companyFoundersCreateError) {
                    // Table already exists, do nothing
                  } else {
                    // New table created, add initial data
                    console.log('Created `company_founders` table.');
                    console.log('Inserting initial rows...');

                    const insertStatement = `INSERT INTO company_founders
                      (company_id, name, title)
                      VALUES (?, ?, ?)`;
                    db.run(insertStatement, [1, 'testName', 'testTitle']);
                  }
                }
              );
            }
          });
        }
      }
    );
  }
});

export default db;
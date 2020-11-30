import * as config from 'config';
import { MongoClient, ObjectID } from 'mongodb';



describe('insert', () => {
    let connection;
    let db;

    beforeAll(async () => {
        let connectionString = config.get('connectionString');;
        console.log('connectionString: ', connectionString);

        connection = await MongoClient.connect(connectionString, {
            useNewUrlParser: true, useUnifiedTopology: true
        });
        // config.get('databaseName')
        db = await connection.db(config.get('databaseName'));
    });

    afterAll(async () => {
        await connection.close();
        await db.close();
    });

    it('should insert a company into collection', async () => {
        const company = db.collection('company');

        const id = new ObjectID();
        const mockUser = { _id: id, name: 'John', city: "test city", state: "LA" };
        await company.insertOne(mockUser);

        const insertedData = await company.findOne({ _id: id });
        expect(insertedData).toEqual(mockUser);
    });
});
const MongoClient = require('mongodb').MongoClient;

const url = 'mongodb://127.0.0.1:27017';

async function findOne() {

    const client = await MongoClient.connect(url, { useNewUrlParser: true })
        .catch(err => { console.log(err); });

    if (!client) {
        return;
    }

    try {

        const db = client.db("socialApp");

        let collection = db.collection('users');

        let query = { name: 'skybird' }

        let res = await collection.findOne(query);
console.log(res);

    } catch (err) {

        console.log(err);
    } finally {

        client.close();
    }
}

findOne();
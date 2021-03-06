//const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb');
const assert = require('assert');
const url = 'mongodb://localhost:27017/TodoApp';

MongoClient.connect(url,{ useNewUrlParser: true },(err, client) => {
	

	if(err) {
		return console.log('Unable to connect to MongoDB server.');
	} 
	console.log('Connected to MongoDB server.');
	const db = client.db('TodoApp');

	/*db.collection('Todos').find({completed: true}).toArray().then((docs) => {
		console.log('Todos');
		console.log(JSON.stringify(docs, undefined, 2));
	}, (err) => {
		console-log('Unable to fetch todos.', err);
	});*/

	/*db.collection('Todos').find().count().then((count) => {
		console.log(`Todos count: ${count}`)
	}, (err) => {
		console-log('Unable to fetch todos.', err);
	});*/

	db.collection('Users').find({age: 23}).toArray().then((docs) => {
		console.log(JSON.stringify(docs, undefined, 2));
	}, (err) => {
		console-log('Unable to fetch users.', err);
	});

	//client.close();
});



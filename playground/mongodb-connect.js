//const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb');

const url = 'mongodb://localhost:27017/TodoApp';

MongoClient.connect(url,{ useNewUrlParser: true },(err, client) => {
	

	if(err) {
		return console.log('Unable to connect to MongoDB server.');
	} 
	console.log('Connected to MongoDB server.');
	const db = client.db('TodoApp');

	// db.collection('Todos').insertOne({
	// 	text: 'Something to do',
	// 	completed: false
	// }, (err, result) => {
	// 	if(err) {
	// 		return console.log('Unable to insert to do.');
	// 	}

	// 	console.log(JSON.stringify(result.ops, undefined, 2));
	// });

	// db.collection('Users').insertOne({
	// 	name: 'Anthony',
	// 	age: 23,
	// 	location: 'Merida -VE'
	// }, (err, result) => {

	// 	if(err) {
	// 		return console.log('Unable to insert user.');
	// 	}

	// 	console.log(result.ops[0]._id.getTimestamp());
	// });

	client.close();
});



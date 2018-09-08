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

	// db.collection('Todos').findOneAndUpdate({_id: new ObjectID("5b92f166fe90be0a8fc88d70")}, {
	// 	$set: {
	// 		completed: true
	// 	}
	// }, {
	// 	returnOriginal: false
	// }).then((result)=>{
	// 	console.log(result);
	// });

	db.collection('Users').findOneAndUpdate({_id: 123}, {
		$set: {
			name: 'Anthony'
		},

		$inc: {
			age: 1
		}
	}, { returnOriginal: false}).then((result)=>{
		console.log(result);
	});
	// client.close();
});



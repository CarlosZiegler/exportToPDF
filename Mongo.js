var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost/EmployeeDB';

MongoClient.connect("mongodb+srv://carlos:1405Lucas@firstcluster-jl3a2.mongodb.net/test?retryWrites=true&w=majority", function(err, db) {

    var cursor = db.collection('Employee').find();

    cursor.each(function(err, doc) {

        console.log(doc);

    });
});

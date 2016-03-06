var mongoose = require('mongoose');

module.exports = function(config){
	mongoose.connect(config.db);
	var db = mongoose.connection;
	db.on('error',console.error.bind(console,'connection error...'));
	db.once('open',function callback(){
		console.log('meanTut db opened');
	});

	var userSchema = mongoose.Schema({
		firstName: String,
		lastName: String,
		userName: String
	});

	var User = mongoose.model('User',userSchema);

	User.find({}).exec(function(err,collection){
		if(collection.length === 0){
			User.create({firstName:'Joe',lastName:'Rodriguez',userName:'joeRod'});
			User.create({firstName:'Brandon',lastName:'Major',userName:'bmajor'});
			User.create({firstName:'Marisa',lastName:'Riley',userName:'mRiley'});
		}
	})
}

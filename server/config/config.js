var path = require('path');
var rootPath = path.normalize(__dirname + '/../../');

module.exports = {
	development: {
		db: 'mongodb://localhost/meanTut',
		rootPath: rootPath,
		port: process.env.PORT || 3030
	},
	production: {
		db: 'mongodb://jrod:meantut@ds023388.mlab.com:23388/meantut',
		rootPath: rootPath,
		port: process.env.PORT || 80
	}
}
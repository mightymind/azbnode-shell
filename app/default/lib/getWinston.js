var winston = require('winston');

function getWinston(module) {
	var path = module.filename.split('/').slice(-2).join('/'); //отобразим метку с именем файла, который выводит сообщение

	return new winston.Logger({
		transports : [
			new winston.transports.Console({
				colorize:   true,
				level:	  'debug',
				label:	  path
			})
		]
	});
}

module.exports = getWinston;
/*
обработчик запроса
*/

function _(azbn) {
	
	var log_tag = 'logger/default';
	azbn.echo('Logger loaded', log_tag);
	
	var counter = 0;
	
	this.handler = function(req, res, next) {
		
		counter++
		
		azbn.echo('Req #' + counter + ': ' + req.url);
		
		next();
	}
	
	return this.handler;
}

module.exports = _;
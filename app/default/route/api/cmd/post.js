/*
обработчик запроса
*/

function _(azbn) {
	
	var log_tag = 'api/cmd/post';
	azbn.echo('Handler loaded', log_tag);
	
	this.handler = function(req, res) {
		
		res.send(JSON.stringify(req.body, null, 2));
		
	}
	
	return this.handler;
}

module.exports = _;
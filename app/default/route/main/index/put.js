/*
обработчик запроса
*/

function _(azbn) {
	
	var log_tag = 'main/index/put';
	azbn.echo('Handler loaded', log_tag);
	
	this.handler = function(req, res) {
		res.send(log_tag + ' response');
	}
	
	return this.handler;
}

module.exports = _;
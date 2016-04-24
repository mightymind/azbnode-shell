/*
обработчик запроса
*/

function _(azbn) {
	
	var log_tag = 'main/index/get';
	azbn.echo('Handler loaded', log_tag);
	
	this.handler = function(req, res) {
		res.send(__dirname);
		
		//res.sendFile(__dirname + '/../../../../../' + azbn.mdl('cfg').path.static + '/index.html');
		
	}
	
	return this.handler;
}

module.exports = _;
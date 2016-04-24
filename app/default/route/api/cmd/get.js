/*
обработчик запроса
*/

function _(azbn) {
	
	var log_tag = 'api/cmd/get';
	azbn.echo('Handler loaded', log_tag);
	
	this.handler = function(req, res) {
		
		var resp = '';
		
		resp = resp + '<pre>';
		
		azbn.mdl('cl').runTask({
			line : req.params.cmd,//'dir',
			param : [],
		}, {
			onOut : function(data) {
				resp = resp + '\n' + data.toString();
			},
			onError : function(data) {
				resp = resp + '\n' + data.toString();
			},
			onClose : function(data) {
				resp = resp + '</pre>';
				res.send(req.params.cmd + '\n' + resp);
				azbn.mdl('winston').debug('Resp', resp);
			},
		});
		
	}
	
	return this.handler;
}

module.exports = _;
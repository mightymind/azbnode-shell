/*
обработчик запроса
*/

function _(azbn) {
	
	var log_tag = 'entity/all';
	azbn.echo('Handler loaded', log_tag);
	
	this.handler = function(req, res) {
		
		return azbn.mdl('db').Entity.find(function (err, items) {
			if (!err) {
				return res.send(items);
			} else {
				res.statusCode = 500;
				azbn.mdl('winston').error('Internal error(%d): %s', res.statusCode, err.message);
				return res.send({ error: 'Server error' });
			}
		});
		
	}
	
	return this.handler;
}

module.exports = _;
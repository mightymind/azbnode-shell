/*
обработчик запроса
*/

function _(azbn) {
	
	var log_tag = 'entity/delete';
	azbn.echo('Handler loaded', log_tag);
	
	this.handler = function(req, res) {
		
		return azbn.mdl('db').Entity.findById(req.params.id, function (err, entity) {
			if(!entity) {
				res.statusCode = 404;
				return res.send({ error: 'Not found' });
			}
			return entity.remove(function (err) {
				if (!err) {
					azbn.mdl('winston').info('entity removed');
					return res.send({ status: 'OK' });
				} else {
					res.statusCode = 500;
					azbn.mdl('winston').error('Internal error(%d): %s',res.statusCode,err.message);
					return res.send({ error: 'Server error' });
				}
			});
		});
		
	}
	
	return this.handler;
}

module.exports = _;
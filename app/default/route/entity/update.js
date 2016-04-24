/*
обработчик запроса
*/

function _(azbn) {
	
	var log_tag = 'entity/update';
	azbn.echo('Handler loaded', log_tag);
	
	this.handler = function(req, res) {
		
		return azbn.mdl('db').Entity.findById(req.params.id, function (err, entity) {
			
			if(!entity) {
				res.statusCode = 404;
				return res.send({ error: 'Not found' });
			}
			
			entity.main_info = req.body.main_info;
			
			return entity.save(function (err) {
				if (!err) {
					azbn.mdl('winston').info('entity ' + entity.uid + ' updated');
					return res.send({ status: 'OK', entity : entity });
				} else {
					if(err.name == 'ValidationError') {
						res.statusCode = 400;
						res.send({ error: 'Validation error' });
					} else {
						res.statusCode = 500;
						res.send({ error: 'Server error' });
					}
					azbn.mdl('winston').error('Internal error(%d): %s', res.statusCode, err.message);
				}
			});
		});
		
	}
	
	return this.handler;
}

module.exports = _;
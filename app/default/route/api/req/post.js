/*
обработчик запроса
*/

function _(azbn) {
	
	var log_tag = 'api/req/post';
	azbn.echo('Handler loaded', log_tag);
	
	this.handler = function(req, res) {
		
		var sess = req.session;
		
		sess[azbn.now()] = req.body.url;
		
		//res.send(JSON.stringify(sess, null, 2));
		
		azbn.request(req.body.url, function(error, response, body) {
			if (!error && response.statusCode == 200) {
				//res.send(body);
				res.send(JSON.stringify(sess, null, 2));
			}
		});
	}
	
	return this.handler;
}

module.exports = _;
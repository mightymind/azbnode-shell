/*
Схема данных Монго
*/

function _(azbn, mongoose) {
	
	var log_tag = 'mongoose/schema';
	azbn.echo('Schema loaded', log_tag);
	
	var Schema = mongoose.Schema;
	
	var Entity = new Schema({
		/*
		id : {
			type : Number,
			required: true,
		},
		*/
		created_at : {
			type : Date,
			default : Date.now(),
		},
		uid : {
			type : String,
			//unique: true,
			default : Date.now() + '_' + Math.random().toString(36).split('.')[1],
		},
		parent_uid : {
			type : String,
			default : '',
		},
		type : {
			type : String,
			required : true,
		},
		param: {
			type : mongoose.Schema.Types.Mixed,
			default: {},
		}
	});
	
	/*
	Entity.path('uid').validate(function (v) {
		return parseInt(v) > 0;
	});
	
	Entity.path('title').validate(function(v) {
		return (v.length > 0 && v.length < 1025);
	});
	*/
	
	this.Entity = mongoose.model('Entity', Entity);
	
	return this;
}

module.exports = _;
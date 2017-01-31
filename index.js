const entities = require('./list.js');

module.exports = {
	id:"interceptor",
	extension:function(inputStr){
		(inputStr.match(/&[a-z0-9#]+;/gi)||[]).forEach((match)=>{
			var token = match.substr(1,match.length-2).toLowerCase();
			var replacement = entities[token];
			inputStr = inputStr.split(match).join(replacement);
		});
		return inputStr;
	}
};
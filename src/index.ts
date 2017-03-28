import entities from "./list";
import {preProcessors} from "finnlp";

preProcessors.push(function(input:string):string{
	const matches = input.match(/&[a-z0-9#]+;/gi)||[];
	for (var index = 0; index < matches.length; index++) {
		var match = matches[index];
		var token = match.substr(1,match.length-2).toLowerCase();
		var replacement = entities[token];
		if(replacement) {
			input = input.split(match).join(replacement);
		}
	}
	return input;
});
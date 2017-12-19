exports.run = function(input) {
	var file = input.split("[ \n]");
	var somme = 0;
	for (var i=0; i < file.length; i++) {
		somme += Number(file[i]);
	}
	return somme;
	console.log(somme);
};
